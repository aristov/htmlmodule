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

const babelOptions = {
    presets : ['es2015'],
    plugins : ['transform-es2015-modules-commonjs']
};

const HTMLDOM_VARIABLE_NAME = 'HTMLDOM';

const snippet = Object.keys(HTMLDOM).map(name => name + `=${HTMLDOM_VARIABLE_NAME}.` + name).join(',');
const vars = ['var ' + snippet, ''].join(';');

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
            const es5 = Babel.transform(code, babelOptions);
            const fn = new Function('exports', es5.code);
            const exports = {
                default : () => {
                    throw Error('Module is not Exported!')
                }
            };
            fn(exports);
            const node = exports.default(HTMLDOM);

            domOutput.textContent = '';
            domOutput.append(node);

            const htmlcode = serializer.serializeToString(node);
            htmlEditor.setValue(htmlcode);
        }
        catch(error) {
            domOutput.textContent = error;
            htmlEditor.setValue('');

        }
    } else domOutput.textContent = '';
}
