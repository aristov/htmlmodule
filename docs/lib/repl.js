import { REPLMachine } from './REPLMachine';
import { main, section, iframe } from './htmlmodule';
import * as htmlmodule from './htmlmodule';
import { HTMLSerializer } from '../../util/util.htmlserializer';
import { codebox, markupbox } from './codemirror';
import { testcase } from './testcase';

const replinput = codebox({
    className : 'replinput',
    value : testcase[0].src
});

const reploutput = markupbox({
    className : 'reploutput'
});

const outputwin = iframe({
    className : 'outputwin'
});

const serializer = new HTMLSerializer;

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

export const repl = () =>
    main({
        className : 'replmachine',
        children : [
            section(replinput.element),
            section([
                outputwin,
                reploutput.element
            ])
        ]
    });

export const replrefresh = () => {
    replinput.mirror.refresh();
    reploutput.mirror.refresh();
}
export const replstart = () => {
    replrefresh();
    replinput.mirror.on('change', () => replmachine.loop());
    replmachine.loop();
}
