import { REPLMachine } from './REPLMachine';
import { DOMSerializer } from './domserializer';

import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';
import { es2015support, babel, standalone } from './babel';

import './replapp.css';

const START_INDEX = 0;

const useBabel = !es2015support();

const serializer = new DOMSerializer;

export class REPLApp {
    /**
     * Build the REPL application
     * @param {Array[]} data Array of sources for the site test case
     */
    constructor(data) {
        this.data = data;
        this.replmachine = new REPLMachine({
            input : this,
            output : this
        });
        this.node = this.assemble();
        window.onresize = () => this.refresh();
    }

    /**
     * Get a value from the source code text editor
     * @returns {*} source code
     */
    get value() {
        const value = 'exports.default=' + this.inputcode.value;
        return useBabel? babel(value) : value;
    }

    /**
     * Set a result value, produced by the REPL-machine
     * @param {String|Function|Node|Error} value
     */
    set value(value) {
        const { markupview, outputcode } = this;
        const { body } = this.outputwin.contentDocument;
        body.innerHTML = '';
        if(markupview.open) outputcode.value = '';
        if(value instanceof Error) {
            body.textContent = value;
        }
        else {
            try {
                const resultnode = typeof value === 'function'?
                    value(htmlmodule) :
                    value;
                if(resultnode) {
                    body.appendChild(resultnode);
                    outputcode.value = serializer.serializeToString(resultnode);
                }
            }
            catch(error) {
                body.textContent = error;
            }
        }
    }

    /**
     * Assemble the DOM structure of the REPL application
     * @returns {HTMLElement} root application
     */
    assemble() {
        return main({
            className : 'replapp',
            children : [
                section([
                  this.inputcode =
                    codebox({
                        id : 'replinputcode',
                        className : 'inputcode',
                        value : this.data[this.index]
                    }),
                  this.prevbutton =
                    button({
                        id : 'replbuttonprev',
                        className : 'prevbutton',
                        onclick : () => this.prev(),
                        children : 'prev'
                    }),
                  this.nextbutton =
                    button({
                        id : 'replbuttonnext',
                        className : 'nextbutton',
                        onclick : () => this.next(),
                        children : 'next'
                    })
                ]),
                section([
                  this.outputwin =
                    iframe({
                        className : 'outputwin',
                        onload : () => this.onready()
                        // iframe creates an inner document asynchronously
                        // so we need to listen onload to access it's body
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
            ]
        });
    }

    /**
     * Start the application when it's DOM structure is ready
     * If a browser doesn't support ES2015 syntax, then load babel-standalone first
     */
    onready() {
        if(useBabel) standalone().then(() => this.start());
        else this.start();
    }

    /**
     * Start the application
     * Add event listeners and refresh the application
     */
    start() {
        this.inputcode.onchange = () => this.replmachine.loop();
        window.onkeydown = ({ target, keyCode }) => {
            if(target.tagName !== 'TEXTAREA') {
                if(keyCode === 37) this.prev();
                if(keyCode === 39) this.next();
                if(keyCode === 38) this.markupview.open = true;
                if(keyCode === 40) this.markupview.open = false;
            }
        };
        this.refresh();
    }

    /**
     * Refresh the application
     */
    refresh() {
        const outputcode = this.outputcode;
        const innerHeight = window.innerHeight;
        this.outputwin.height =
            (this.markupview.open?
                innerHeight - outputcode.height :
                innerHeight) + 'px';
        this.inputcode.refresh();
        this.replmachine.loop();
    }

    /**
     * Switch to the previous test
     */
    prev() {
        const data = this.data;
        if(--this.index < 0) this.index = data.length - 1;
        this.inputcode.value = data[this.index];
    }

    /**
     * Switch to the next test
     */
    next() {
        const data = this.data;
        if(++this.index === data.length) this.index = 0;
        this.inputcode.value = data[this.index];
    }
}

Object.assign(REPLApp.prototype, {
    replmachine : null,
    node : null,
    data : [''],
    index :  START_INDEX,
});
