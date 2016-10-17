import { REPLMachine } from './REPLMachine';
import { HTMLSerializer } from '../../util/util.htmlserializer';
import * as htmlmodule from './htmlmodule';
import { main, section, iframe, button, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';
import { testcase } from './testcase';

const OUTPUTWIN_FULL_HEIGHT = 600;
const OUTPUTWIN_HALF_HEIGHT = 300;

const serializer = new HTMLSerializer;

const lastindex = testcase.length - 1;
let testindex = 0;

/*----------------------------------------------------------------*/

const replinput = codebox({
    className : 'replinput',
    value : testcase[testindex].src
});

const reploutput = markupbox({ className : 'reploutput' });

const outputwin = iframe({ className : 'outputwin' });

const markupview = details({
    className : 'markupview',
    ontoggle : () => replrefresh(),
    open : true,
    children : [
        summary({
            className : 'markuptoggle',
            children : 'markup'
        }),
        reploutput.element
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
                    className : 'prevbutton',
                    onclick : () => {
                        testindex = testindex === 0? lastindex : testindex - 1;
                        replinput.value = testcase[testindex].src;
                    },
                    children : 'prev'
                }),
                button({
                    className : 'nextbutton',
                    onclick : () => {
                        testindex = testindex > lastindex? 0 : testindex + 1;
                        replinput.value = testcase[testindex].src;
                    },
                    children : 'next'
                }),
            ]),
            section([
                outputwin,
                markupview
            ])
        ]
    });

/*----------------------------------------------------------------*/

const replmachine = new REPLMachine({
    input : replinput,
    output : {
        set value(value) {
            const body = outputwin.contentDocument.body;
            if(value instanceof Error) {
                body.textContent = value;
                reploutput.value = '';
            } else {
                try {
                    const node = typeof value === 'function'?
                        value(htmlmodule) :
                        value;
                    body.innerHTML = '';
                    body.appendChild(node);
                    reploutput.value = serializer.serializeToString(node);
                }
                catch(error) {
                    body.textContent = error;
                }
            }
        }
    }
});

export const replrefresh = () => {
    replinput.mirror.refresh();
    reploutput.mirror.refresh();
    outputwin.height = markupview.open?
        OUTPUTWIN_HALF_HEIGHT :
        OUTPUTWIN_FULL_HEIGHT;
}
export const replstart = () => {
    replrefresh();
    replinput.mirror.on('change', () => replmachine.loop());
    replmachine.loop();
}

/**
 * HMREPLMachine
 * htmodulerepl
 */
