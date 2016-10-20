import { REPLMachine } from './REPLMachine';
import { HTMLSerializer } from '../../util/util.htmlserializer';
import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';
import { testcase } from './testcase';
import './repl.css';

const serializer = new HTMLSerializer;

const lastindex = testcase.length - 1;
let testindex = 0;

/*----------------------------------------------------------------*/

const inputcode = codebox({
    className : 'inputcode',
    value : testcase[testindex].src
});

const outputwin = iframe({ className : 'outputwin' });

const outputcode = markupbox({ className : 'outputcode' });

const markupview = details({
    className : 'markupview',
    ontoggle : () => replrefresh(),
    children : [
        summary({
            id : 'markuptoggle',
            className : 'markuptoggle',
            children : 'markup'
        }),
        outputcode.element
    ]
});

/*----------------------------------------------------------------*/

export const repl = () =>
    main({
        className : 'repl',
        children : [
            section([
                inputcode.element,
                button({
                    id : 'replbuttonprev',
                    className : 'prevbutton',
                    onclick : () => {
                        testindex = testindex === 0? lastindex : testindex - 1;
                        inputcode.value = testcase[testindex].src;
                    },
                    children : 'prev'
                }),
                button({
                    id : 'replbuttonnext',
                    className : 'nextbutton',
                    onclick : () => {
                        testindex = testindex === lastindex? 0 : testindex + 1;
                        inputcode.value = testcase[testindex].src;
                    },
                    children : 'next'
                }),
            ]),
            section([outputwin, markupview])
        ]
    });

/*----------------------------------------------------------------*/

const output = {
    set value(value) {
        const body = outputwin.contentDocument.body;
        body.innerHTML = '';
        if(markupview.open) outputcode.value = '';
        if(value instanceof Error) {
            body.textContent = value;
        } else {
            try {
                const node = typeof value === 'function'? value(htmlmodule) : value;
                if(node) {
                    body.appendChild(node);
                    if(markupview.open) {
                        outputcode.value = serializer.serializeToString(node);
                    }
                }
            }
            catch(error) {
                body.textContent = error;
            }
        }
    }
}

const replmachine = new REPLMachine({ input : inputcode, output });

export function replrefresh() {
    const innerHeight = window.innerHeight;
    outputwin.height = markupview.open?
        (innerHeight - outputcode.element.clientHeight) + 'px' :
        innerHeight + 'px';
    inputcode.mirror.refresh();
    outputcode.mirror.refresh();
    replmachine.loop();
}

export function replstart() {
    replrefresh();
    inputcode.mirror.on('change', () => replmachine.loop());
}

window.onresize = () => replrefresh();
