import './style/REPLApp.css'
import { Article, Section } from './htmlmodule'
import { OutputGroup } from './OutputGroup'
import { CodeInput } from './CodeInput'
import { es2015support, babel, standalone } from './babel'

const useBabel = !es2015support()
const datapath = 'data/'

export class REPLApp extends Article {
    /**
     * The main window split application
     */
    create(init) {
        super.create(init)
        this.children = [
            new Section([
                this._codeInput = new CodeInput({
                    id : 'codeinput',
                    value : ''
                }),
            ]),
            this._outputGroup = new OutputGroup({ app : this }),
        ]
    }

    init(init) {
        super.init(init)
        this.on('ready', this.onReady)
        window.onresize = () => this.refresh()
        window.onhashchange = () => this.fetch()
    }

    get value() {
        return this._codeInput.value.trim()
    }

    /**
     * Start the application when it's DOM structure is ready
     * If a browser doesn't support ES2015 syntax, then load babel-standalone first
     */
    onReady(event) {
        if(useBabel) {
            standalone().then(() => this.start())
        }
        else this.start()
    }

    /**
     * Document onload handler
     * @param response
     */
    onload(response) {
        this._codeInput.value = response
        this._outputGroup.scroll(0, 0)
    }

    /**
     * @returns {String} source code
     */
    read() {
        let value = this.value
        return useBabel? babel(value) : value
    }

    /**
     * Start the application
     * Add event listeners and refresh the application
     */
    start() {
        this._codeInput.onchange = () => this.loop()
        this.fetch()
    }

    /**
     * Fetches the document specified by hash
     */
    fetch() {
        const filename = location.hash.replace(/^#/, '')
        const url = datapath + (filename || 'index') + '.js'
        if(!document.getElementById(filename)) {
            fetch(url)
                .then(response => response.text())
                .then(response => {
                    this.onload(response)
                })
        }
    }

    /**
     * Refresh the application
     */
    refresh() {
        this._outputGroup.refresh()
        this.loop()
    }

    /**
     * Start a single REPL-loop
     */
    loop() {
        const group = this._outputGroup
        group.error = null
        try {
            const input = this.read()
            const src = 'try{' + input +
                ';postMessage({type:"save"},"*")}' +
                'catch({message,stack})' +
                '{postMessage({type:"error",error:{message,stack}},"*")}'
            group.eval(new Function(src))
        }
        catch(error) {
            group.error = error
        }
    }
}
