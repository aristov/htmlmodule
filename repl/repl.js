import '../shim/shim';

import * as HTMLDOM from '../htmldom/htmldom';
import { output, main, div } from '../htmldom/htmldom';

import value from 'raw!./repl.value.rawjs';
import { HTMLSerializer } from '../html/html.serializer';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

const vars = `var ${ Object.keys(HTMLDOM).map(name => name + '=__ref.' + name).join(',') };`;

const fnbody = code => vars + code + ';return dom;';

const panel = children => div({ className : 'panel', children });

const jsInput = div({ className : 'jsinput' });

const domOutput = output({ className : 'domoutput' });

const htmlOutput = div({ className : 'htmloutput' });

const serializer = new HTMLSerializer;

document.body.append(main({
    className : 'app',
    children : [
        panel(jsInput),
        panel(domOutput),
        panel(htmlOutput)
    ]
}));

const jsEditor = new CodeMirror(jsInput, {
    value,
    mode: 'javascript',
    theme: 'night',
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: true,
    electricChars: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    smartIndent: true
});

const htmlEditor = new CodeMirror(htmlOutput, {
    mode: 'htmlmixed',
    theme: 'night',
    readOnly: true
});

evaluate();

jsEditor.on('change', () => evaluate());

function evaluate() {
    const code = jsEditor.getValue().trim();
    if(code) {
        try {
            const fn = new Function('__ref', fnbody(code));
            const dom = fn(HTMLDOM, domOutput);

            domOutput.textContent = '';
            domOutput.append(dom);

            const htmlcode = serializer.serializeToString(domOutput.firstChild);
            htmlEditor.setValue(htmlcode);
        }
        catch(error) {
            domOutput.textContent = error;
            htmlEditor.setValue('');
        }
    } else domOutput.textContent = '';
}
