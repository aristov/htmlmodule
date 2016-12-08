// import { DOMSerializer } from './domserializer'

import {
    HTMLDOMAssembler,
    html, head, body,
    section, iframe, details, summary, script
} from './htmlmodule'

import { codebox, markupbox } from './codemirror'
import { es2015support, babel, standalone } from './babel'

import './replapp.css'

const useBabel = !es2015support()

// const serializer = new DOMSerializer

const datapath = 'docs/data/'

class OutputGroup extends HTMLDOMAssembler {
    constructor({ onload }) {
        super()
        this.assemble('section', [
            this.outputwin =
                iframe({
                    className : 'outputwin',
                    srcdoc : '<script src=dist/dist.window.htmlmodule.js></script>',
                    onload
                }),
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
    eval(node) {
        const doc = this.outputwin.contentDocument
        if(!doc.documentElement) doc.append(html())
        const root = doc.documentElement
        if(!doc.head) root.prepend(head())
        if(!doc.body) root.append(body())
        try {
            doc.body.append(node)
        }
        catch(error) {
            // console.log(error)
        }
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
                    new OutputGroup({
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
        return useBabel? babel(value) : value
    }

    /**
     * @param {String|Function|Node|Error} scriptnode
     */
    print(scriptnode) {
        this.outputgroup.eval(scriptnode)
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
            const src = this.read()
            this.print(script(`{${ src }}`))
        }
        catch(error) {
            // console.log(error)
        }
    }
}
