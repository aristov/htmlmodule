import { DOMSerializer } from './domserializer'

import * as htmlmodule from './htmlmodule'
import {
    HTMLDOMAssembler,
    section, iframe, html, head, body, details, summary
} from './htmlmodule'

import { codebox, markupbox } from './codemirror'
import { es2015support, babel, standalone } from './babel'

import './replapp.css'

const { documentElement } = window.document

const useBabel = !es2015support()

const serializer = new DOMSerializer

const datapath = '../docs/data/'

class OutputGroup extends HTMLDOMAssembler {
    constructor({ onload }) {
        super()
        this.assemble('section', [
          this.outputwin =
            iframe({ className : 'outputwin', onload }),
          this.markupview =
            details({
                className : 'markupview',
                ontoggle : () => this.refresh(),
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
        ])
    }
    set value(node) {
        const { outputwin, outputcode } = this
        const doc = outputwin.contentDocument
        let result
        try {
            if(!documentElement.contains(node)) {
                switch(node.tagName) {
                    case 'HTML':
                        result = node
                        break
                    case 'HEAD':
                    case 'BODY':
                        result = html(node)
                        break
                    case 'TITLE':
                    case 'BASE':
                    case 'LINK':
                    case 'META':
                        result = html([head(node)])
                        break
                    default:
                        result = html([head(), body(node)])
                        break
                }
                doc.documentElement.replaceWith(result)

                outputcode.value = serializer.serializeToString(node)
            }
        }
        catch(error) {
            doc.documentElement.replaceWith(html([head(), body(error)]))
        }
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
                        id : 'replinputcode',
                        className : 'inputcode',
                        value : ''
                    }),
                ]),
                this.outputgroup = new OutputGroup({
                    onload : () => this.onready()
                })
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
        if(value) {
            if(useBabel) value = babel(value)
            return `return ${ value };`
        }
        else return ''
    }

    /**
     * @param {String|Function|Node|Error} value
     */
    print(value) {
        let node;
        if(typeof value === 'function') {
            node = value(htmlmodule)
        }
        else if(value instanceof Error) {
            node = document.createTextNode(value.toString())
        }
        if(node instanceof Node) {
            this.outputgroup.value = node
        }
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
        this.refresh()
        this.fetch()
    }

    fetch() {
        const filename = location.hash.replace(/^#/, '')
        const url = datapath + (filename || 'index') + '.js'
        fetch(url).then(response => response.text())
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
        try {
            const { contentWindow, contentDocument } = this.outputgroup.outputwin
            const evaluable = new Function('window', 'document', this.read())
            const result = evaluable(contentWindow, contentDocument)
            this.print(result)
        }
        catch(error) {
            this.print(document.createTextNode(error.toString()))
        }
    }
}
