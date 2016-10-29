import { REPLMachine } from './REPLMachine';
import { DOMSerializer } from './domserializer';

import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary, script } from './htmlmodule';
import { codebox, markupbox } from './codemirror';

import './replsite.css';

const START_INDEX = 0;

const serializer = new DOMSerializer;

let es2016support;
try {
    new Function('({test}) => test');
    es2016support = true;
}
catch(error) {
    es2016support = false;
}
const BABEL_STANDALONE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';

window.Babel = { transform : code => ({ code }) };

const babel = input => {
    const Babel = window.Babel;
    const res = Babel.transform(input, { presets: ['es2015'] });
    return res.code.replace(/^'use\sstrict';\n\n/, '');
}

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
        return babel(this.inputcode.value);
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
                    outputcode.value = serializer.serializeToString(resultnode);
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
    onready() {
        if(es2016support) this.start();
        else {
            document.body.append(script({
                src : BABEL_STANDALONE_URL,
                onload : () => this.start()
            }));
        }
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
        this.refresh();
    }
    refresh() {
        const outputcode = this.outputcode;
        const innerHeight = window.innerHeight;
        this.outputwin.height =
            (this.markupview.open?
                (innerHeight - outputcode.height) :
                innerHeight) + 'px';
        this.inputcode.refresh();
        this.replmachine.loop();
    }
    prev() {
        const data = this.data;
        this.index--;
        if(this.index < 0) this.index = data.length - 1;
        this.inputcode.value = data[this.index];
    }
    next() {
        const data = this.data;
        this.index++;
        if(this.index === data.length) this.index = 0;
        this.inputcode.value = data[this.index];
    }
}

Object.defineProperties(REPLSite.prototype, {
    data : { writable : true, value : [''] },
    node : { writable : true, value : null },
    index :  { writable : true, value : START_INDEX },
});
