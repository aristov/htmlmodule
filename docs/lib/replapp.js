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

const srcdoc =
    '<script>window.parent = window</script>' +
    '<script src=dist/dist.window.htmlmodule.js></script>'

class OutputGroup extends HTMLDOMAssembler {
    constructor({ onready }) {
        super()
        this.assemble('section', {
            className : 'outputgroup',
            children : [
                this.group = div([
                    this.outputwin =
                        iframe({
                            className : 'outputwin',
                            srcdoc : '<!doctype html>' + srcdoc,
                            onload : event => {
                                this.onready()
                                onready(event)
                            }
                        }),
                    this.markupview =
                        details({
                            className : 'markupview',
                            ontoggle : () => this.refresh(),
                            open : true,
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
    onready() {
        const doc = this.outputwin.contentDocument
        const observer = new MutationObserver(() => {
            this.outputcode.value = serializer.serializeToString(doc)
        })
        observer.observe(doc, {
            attributes : true,
            childList : true,
            characterData : true,
            subtree : true
        })
        this.outputcode.value = serializer.serializeToString(doc)
        this.outputwin.contentWindow.onmessage = this.onmessage.bind(this)
    }
    onmessage({ data }) {
        if(data.type === 'clear') location.hash = 'blank'
        if(data.type === 'error') this.error = data.error
    }
    eval(fn) {
        const node = script(`(${ fn })()`)
        const doc = this.outputwin.contentDocument
        if(!doc.documentElement) doc.append(html())
        const root = doc.documentElement
        if(!doc.head) root.prepend(head())
        if(!doc.body) root.append(body())
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
}

export class REPLApp extends HTMLDOMAssembler {
    constructor() {
        super()
        this.assemble('article', {
            className : 'replapp',
            children : [
                section([
                    this.inputcode =
                        codebox({
                            className : 'inputcode',
                            value : ''
                        }),
                ]),
                this.outputgroup =
                    new OutputGroup({ onready : () => this.onready() }),
            ]
        })
        window.onresize = () => this.refresh()
        window.onhashchange = () => this.fetch()
    }

    /**
     * @returns {String} source code
     */
    read() {
        let value = this.inputcode.value.trim()
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
        this.inputcode.onchange = () => this.loop()
        this.fetch()
    }

    fetch() {
        const filename = location.hash.replace(/^#/, '')
        const url = datapath + (filename || 'index') + '.js'
        fetch(url)
            .then(response => response.text())
            .then(response => {
                this.inputcode.value = response
            })
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
            const src = `try{${ input }}catch({message,stack})` +
                '{window.postMessage({type:"error",error:{message,stack}},"*")}'
            outputgroup.eval(new Function(src))
        }
        catch(error) {
            outputgroup.error = error
        }
    }
}
