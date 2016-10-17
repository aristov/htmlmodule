import { REPLMachine } from './REPLMachine';
import { HTMLSerializer } from '../../util/util.htmlserializer';
import * as htmlmodule from './htmlmodule';
import { main, section, iframe, details, summary } from './htmlmodule';
import { codebox, markupbox } from './codemirror';
import { testcase } from './testcase';

const OUTPUTWIN_FULL_HEIGHT = 600;
const OUTPUTWIN_HALF_HEIGHT = 300;

const serializer = new HTMLSerializer;

/*----------------------------------------------------------------*/

const replinput = codebox({ className : 'replinput', value : testcase[0].src });

const reploutput = markupbox({ className : 'reploutput' });

const outputwin = iframe({ className : 'outputwin' });

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
            section(replinput.element),
            section([
                outputwin,
                markupview
            ])
        ]
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
