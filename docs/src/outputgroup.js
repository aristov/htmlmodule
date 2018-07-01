import { Section, Body, Div, Head, Html, Pre, Script } from './htmlmodule'
import { MarkupView } from './markupview'
import { DOMSerializer } from './domserializer'
import { OutputWin } from './outputwin'

const serializer = new DOMSerializer

class ErrorMessage extends Pre {}

export class OutputGroup extends Section {
    create(init) {
        super.create(init)
        this.children = [
            this._group = new Div([
                this._outputWin = new OutputWin({
                    onload : event => {
                        this.setup()
                        this.emit('ready', { bubbles : true })
                    }
                }),
                this._markupView = new MarkupView({
                    ontoggle : event => this.refresh()
                })
            ]),
            this._errorMessage = new ErrorMessage({ hidden : true })
        ]
    }

    update() {
        const doc = this._outputWin.node.contentDocument
        if(!doc.documentElement) {
            new Html({ parentNode : doc })
        }
        if(!doc.head) {
            doc.prepend((new Head().node))
        }
        if(!doc.body) {
            doc.body = (new Body()).node
        }
        return doc
    }

    setup() {
        const outputwin = this._outputWin
        const doc = outputwin.node.contentDocument
        const observer = new MutationObserver(() => {
            this._markupView.value = serializer.serializeToString(doc)
        })
        observer.observe(doc, {
            attributes : true,
            childList : true,
            characterData : true,
            subtree : true
        })
        const win = outputwin.node.contentWindow
        win.onmessage = this.onMessage.bind(this)
        win.onhashchange = () => location.hash = win.location.hash
        this._markupView.value = serializer.serializeToString(doc)
        this.refresh()
    }

    onMessage({ data }) {
        if(data.type === 'error') {
            this.error = data.error
        }
        if(data.type === 'save') {
            localStorage.setItem('codeinput.value', this._app.value)
        }
    }

    eval(fn) {
        const script = new Script(`(${ fn })()`)
        this.update()
        script.parentNode = this._outputWin.node.contentDocument.body
        script.remove()
    }

    refresh() {
        const markupView = this._markupView
        const height = markupView.open?
            innerHeight - markupView.height :
            innerHeight
        this._outputWin.style.height = height + 'px'
        markupView.refresh()
    }

    scroll(x, y) {
        this._outputWin.node.contentWindow.scroll(x, y)
    }

    set app(app) {
        this._app = app
    }

    get app() {
        return this._app
    }

    set error(error) {
        this._errorMessage.textContent = error? error.stack : ''
        this._errorMessage.hidden = !error
        this._group.hidden = Boolean(error)
    }
}
