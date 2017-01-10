import { DOMSerializer } from './domserializer'

import {
    HTMLDOMAssembler,
    html, head, body, pre, div,
    section, iframe, details, summary, script
} from './htmlmodule'

import { codebox, markupbox } from './codemirror'
import { es2015support, babel, standalone } from './babel'

import './replapp.css'

const useBabel = !es2015support()

const serializer = new DOMSerializer

const datapath = 'docs/data/'
const srcdoc = '<!DOCTYPE html><html><head><script src="dist/dist.window.htmlmodule.js"></script></head><body></body></html>'

class OutputGroup extends HTMLDOMAssembler {
    constructor({ onready, app }) {
        super()
        const open = localStorage.getItem('makrupview.open') === 'true' || false
        this.app = app
        this.assemble('section', {
            className : 'outputgroup',
            children : [
                this.group = div([
                    this.outputwin =
                        iframe({
                            className : 'outputwin',
                            srcdoc,
                            onload : event => {
                                this.onready()
                                onready(event)
                            }
                        }),
                    this.markupview =
                        details({
                            className : 'markupview',
                            ontoggle : ({ target }) => {
                                this.refresh()
                                localStorage.setItem('makrupview.open', target.open)
                            },
                            open,
                            children : [
                                summary({
                                    id : 'markuptoggle',
                                    className : 'markuptoggle',
                                    children : 'markup'
                                }),
                                this.outputcode =
                                    markupbox({ className : 'outputcode' })
                            ]
                        })
                ]),
                this.errormessage =
                    pre({
                        className : 'errormessage',
                        hidden : true
                    })
            ]
        })
    }
    set error(error) {
        Object.assign(this.errormessage, {
            textContent : error? error.stack : '',
            hidden : !error
        })
        this.group.hidden = Boolean(error)
    }
    get document() {
        const doc = this.outputwin.contentDocument
        if(!doc.documentElement) doc.append(html())
        const root = doc.documentElement
        if(!doc.head) root.prepend(head())
        if(!doc.body) doc.body = body()
        return doc
    }
    onready() {
        const outputwin = this.outputwin
        const doc = outputwin.contentDocument
        const observer = new MutationObserver(() => {
            this.outputcode.value = serializer.serializeToString(doc)
        })
        observer.observe(doc, {
            attributes : true,
            childList : true,
            characterData : true,
            subtree : true
        })
        const win = outputwin.contentWindow
        win.onmessage = this.onmessage.bind(this)
        win.onhashchange = () => location.hash = win.location.hash
        this.outputcode.value = serializer.serializeToString(doc)
        this.refresh()
    }
    onmessage({ data }) {
        if(data.type === 'error') this.error = data.error
        if(data.type === 'save') {
            localStorage.setItem('codeinput.value', this.app.value)
        }
    }
    eval(fn) {
        const node = script(`(${ fn })()`)
        const doc = this.document
        doc.body.append(node)
        node.remove()
    }
    refresh() {
        const outputcode = this.outputcode
        const innerHeight = window.innerHeight
        this.outputwin.height = (this.markupview.open?
            innerHeight - outputcode.height :
                innerHeight) + 'px'
        outputcode.refresh()
    }
    scroll(x, y) {
        this.outputwin.contentWindow.scroll(x, y)
    }
}

export class REPLApp extends HTMLDOMAssembler {
    constructor() {
        super()
        this.assemble('article', {
            className : 'replapp',
            children : [
                section([
                    this.codeinput =
                        codebox({
                            id : 'codeinput',
                            className : 'codeinput',
                            value : ''
                        }),
                ]),
                this.outputgroup =
                    new OutputGroup({
                        onready : () => this.onready(),
                        app : this
                    }),
            ]
        })
        window.onresize = () => this.refresh()
        window.onhashchange = () => this.fetch()
    }

    get value() {
        return this.codeinput.value.trim()
    }

    /**
     * @returns {String} source code
     */
    read() {
        let value = this.value
        return useBabel? babel(value) : value
    }

    /**
     * Start the application when it's DOM structure is ready
     * If a browser doesn't support ES2015 syntax, then load babel-standalone first
     */
    onready() {
        if(useBabel) standalone().then(() => this.start())
        else this.start()
    }

    /**
     * Start the application
     * Add event listeners and refresh the application
     */
    start() {
        this.codeinput.onchange = () => this.loop()
        this.fetch()
    }

    fetch() {
        const filename = location.hash.replace(/^#/, '')
        const url = datapath + (filename || 'index') + '.js'
        if(!document.getElementById(filename)) {
            fetch(url)
                .then(response => response.text())
                .then(response => {
                    this.codeinput.value = response
                    this.outputgroup.scroll(0, 0)
                })
        }
    }

    /**
     * Refresh the application
     */
    refresh() {
        this.outputgroup.refresh()
        this.loop()
    }

    /**
     * Start a single REPL-loop
     */
    loop() {
        const outputgroup = this.outputgroup
        outputgroup.error = null
        try {
            const input = this.read()
            const src = 'try{' + input +
                ';postMessage({type:"save"},"*")}' +
                'catch({message,stack})' +
                '{postMessage({type:"error",error:{message,stack}},"*")}'
            outputgroup.eval(new Function(src))
        }
        catch(error) {
            outputgroup.error = error
        }
    }
}
