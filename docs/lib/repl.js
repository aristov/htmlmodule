import { REPLMachine } from './REPLMachine';
import { HTMLSerializer } from '../../util/util.htmlserializer';
import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';
import { testcase } from './testcase';

const serializer = new HTMLSerializer;

const lastindex = testcase.length - 1;
let testindex = 0;

/*----------------------------------------------------------------*/

const replinput = codebox({
    className : 'replinput',
    value : testcase[testindex].src
});

const reploutputcode = markupbox({ className : 'reploutputcode' });

const reploutputwin = iframe({ className : 'reploutputwin' });

const markupview = details({
    className : 'markupview',
    ontoggle : () => replrefresh(),
    open : true,
    children : [
        summary({
            id : 'markuptoggle',
            className : 'markuptoggle',
            children : 'markup'
        }),
        reploutputcode.element
    ]
});

/*----------------------------------------------------------------*/

export const repl = () =>
    main({
        className : 'replmachine',
        children : [
            section([
                replinput.element,
                button({
                    id : 'replbuttonprev',
                    className : 'prevbutton',
                    onclick : () => {
                        testindex = testindex === 0? lastindex : testindex - 1;
                        replinput.value = testcase[testindex].src;
                    },
                    children : 'prev'
                }),
                button({
                    id : 'replbuttonnext',
                    className : 'nextbutton',
                    onclick : () => {
                        testindex = testindex === lastindex? 0 : testindex + 1;
                        replinput.value = testcase[testindex].src;
                    },
                    children : 'next'
                }),
            ]),
            section([reploutputwin, markupview])
        ]
    });

/*----------------------------------------------------------------*/

const output = {
    set value(value) {
        const body = reploutputwin.contentDocument.body;
        body.innerHTML = '';
        if(markupview.open) reploutputcode.value = '';
        if(value instanceof Error) {
            body.textContent = value;
        } else {
            try {
                const node = typeof value === 'function'? value(htmlmodule) : value;
                if(node) {
                    body.appendChild(node);
                    if(markupview.open) {
                        reploutputcode.value = serializer.serializeToString(node);
                    }
                }
            }
            catch(error) {
                body.textContent = error;
            }
        }
    }
}

const replmachine = new REPLMachine({ input : replinput, output });

export function replrefresh() {
    const innerHeight = window.innerHeight;
    reploutputwin.height = markupview.open?
        (innerHeight - reploutputcode.element.clientHeight) + 'px' :
        innerHeight + 'px';
    replinput.mirror.refresh();
    reploutputcode.mirror.refresh();
    replmachine.loop();
}

export function replstart() {
    replrefresh();
    replinput.mirror.on('change', () => replmachine.loop());
}

window.onresize = () => replrefresh();
