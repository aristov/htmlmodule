import '../shim/shim';

import { output, main, div, pre, code } from '../htmldom/htmldom';
import * as HTMLDOM from '../htmldom/htmldom';

import hljs from 'highlight.js/';
import 'highlight.js/styles/agate.css';

import value from 'raw!./repl.value.rawjs';
import { HTMLSerializer } from '../html/html.serializer';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

const vars = Object.keys(HTMLDOM).map(name => name + '=__ref.' + name).join(',');

const fnbody = value => `var ${vars};${value};return dom`;

const panel = children => div({ className : 'panel', children });

const jsInput = div({ className : 'jsinput' });

const domOutput = output({ className : 'domoutput' });

const htmlOutput = pre({ className : 'htmloutput html', children : code() });

const repl = main({
    className : 'app',
    children : [
        panel(jsInput),
        panel(domOutput),
        panel(htmlOutput)
    ]
});

const serializer = new HTMLSerializer;

function evaluate(value) {
    value = String(value).trim();
    repl.classList.remove('invalid');
    if(value) {
        try {
            const fn = new Function('__ref', fnbody(value));
            domOutput.textContent = '';
            const dom = fn(HTMLDOM, domOutput);
            domOutput.append(dom);

            const htmlcode = code(serializer.serializeToString(domOutput.firstChild));
            htmlOutput.firstChild.replaceWith(htmlcode);
            hljs.highlightBlock(htmlOutput);
        } catch(error) {
            domOutput.textContent = error;
            htmlOutput.textContent = 'Error!';
            repl.classList.add('invalid');
        }
    } else domOutput.textContent = '';
}

document.body.append(repl);

const editor = new CodeMirror(jsInput, {
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

editor.on('change', () => evaluate(editor.getValue()));
evaluate(editor.getValue());
