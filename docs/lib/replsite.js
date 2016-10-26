import { REPLMachine } from './REPLMachine';
import { DOMSerializer } from './domserializer';

import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';

import './replsite.css';

const START_INDEX = 0;

const serializer = new DOMSerializer;

export class REPLSite {
    constructor(data) {
        this.data = data;
        this.replmachine = new REPLMachine({
            input : this,
            output : this
        });
        this.node = this.assemble();
        window.onresize = () => this.refresh();
    }
    get value() {
        return this.inputcode.value;
    }
    set value(value) {
        const { markupview, outputcode } = this;
        const { body } = this.outputwin.contentDocument;
        body.innerHTML = '';
        if(markupview.open) outputcode.value = '';
        if(value instanceof Error) {
            body.textContent = value;
        } else {
            try {
                const resultnode = typeof value === 'function'?
                    value(htmlmodule) :
                    value;
                if(resultnode) {
                    body.appendChild(resultnode);
                    if(markupview.open) {
                        outputcode.value = serializer.serializeToString(resultnode);
                    }
                }
            }
            catch(error) {
                body.textContent = error;
            }
        }
    }
    assemble() {
        return main({
            className : 'replsite',
            children : [
                section([
                    this.inputcode = codebox({
                        className : 'inputcode',
                        value : this.data[this.index].src
                    }),
                    this.prevbutton = button({
                        id : 'replbuttonprev',
                        className : 'prevbutton',
                        onclick : () => this.prev(),
                        children : 'prev'
                    }),
                    this.nextbutton = button({
                        id : 'replbuttonnext',
                        className : 'nextbutton',
                        onclick : () => this.next(),
                        children : 'next'
                    })
                ]),
                section([
                    this.outputwin = iframe({
                        className : 'outputwin',
                        onload : () => this.refresh()
                    }),
                    this.markupview = details({
                        className : 'markupview',
                        ontoggle : () => this.refresh(),
                        children : [
                            summary({
                                id : 'markuptoggle',
                                className : 'markuptoggle',
                                children : 'markup'
                            }),
                            this.outputcode = markupbox({
                                className : 'outputcode'
                            })
                        ]
                    })
                ])
            ]
        });
    }
    start() {
        this.inputcode.onchange = () => this.replmachine.loop();
        window.onkeydown = ({ target, keyCode }) => {
            if(target.tagName !== 'TEXTAREA') {
                if(keyCode === 37) this.prev();
                if(keyCode === 39) this.next();
                if(keyCode === 38) this.markupview.open = true;
                if(keyCode === 40) this.markupview.open = false;
            }
        }
    }
    refresh() {
        const outputcode = this.outputcode;
        const innerHeight = window.innerHeight;
        this.outputwin.height = this.markupview.open?
            (innerHeight - outputcode.height) + 'px' :
            innerHeight + 'px';
        this.inputcode.refresh();
        outputcode.refresh();
        this.replmachine.loop();
    }
    prev() {
        const data = this.data;
        this.index--;
        if(this.index < 0) this.index = data.length - 1;
        this.inputcode.value = data[this.index].src;
    }
    next() {
        const data = this.data;
        this.index++;
        if(this.index === data.length) this.index = 0;
        this.inputcode.value = data[this.index].src;
    }
}

Object.defineProperty(REPLSite.prototype, 'index', { writable : true, value : START_INDEX });
Object.defineProperty(REPLSite.prototype, 'node', { writable : true, value : null });
Object.defineProperty(REPLSite.prototype, 'data', { writable : true, value : [] });
