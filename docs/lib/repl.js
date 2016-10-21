import { REPLMachine } from './REPLMachine';
import { HTMLSerializer } from '../../util/util.htmlserializer';

import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';

import { testcase } from './testcase';

import './repl.css';

const START_INDEX = 0;
const LAST_INDEX = testcase.length - 1;

const serializer = new HTMLSerializer;

export class REPL {
    constructor() {
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
            className : 'repl',
            children : [
                section([
                    this.inputcode = codebox({
                        className : 'inputcode',
                        value : testcase[this.index].src
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
                    this.outputwin = iframe({ className : 'outputwin' }),
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
        this.refresh();
        this.inputcode.onchange = () => this.replmachine.loop();
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
        this.index--;
        if(this.index < 0) this.index = LAST_INDEX;
        this.inputcode.value = testcase[this.index].src;
    }
    next() {
        this.index++
        if(this.index > LAST_INDEX) this.index = 0;
        this.inputcode.value = testcase[this.index].src;
    }
}

const proto = REPL.prototype;
proto.index = START_INDEX;
proto.node = null;
