import '../shim/shim';

import * as HTMLDOM from '../htmldom/htmldom';
import { option, select, output, main, div, header, h3, p, label, input, abbr } from '../htmldom/htmldom';

import value from 'raw!./repl.value.rawjs';
import { HTMLSerializer } from '../html/html.serializer';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

import jsb from '../jsb/jsb';

import { test } from '../htmldom/htmldom.test.js';


const EXPORT_DEFAULT_RE = /export\s+default\s+/;

// babel polyfill =)
if(!window.Babel) {
    window.Babel = {
        transform : code => {
            if(EXPORT_DEFAULT_RE.test(code)) {
                code = code.replace(EXPORT_DEFAULT_RE, 'exports.default = ');
            }
            else code = 'exports.default = ' + code;
            return { code };
        }
    }
}
const babelOptions = {
    presets : ['es2015'],
    plugins : ['transform-es2015-modules-commonjs']
};

const HTMLDOM_VARIABLE_NAME = 'HTMLDOM';

const snippet = Object.keys(HTMLDOM).map(name => name + `=${HTMLDOM_VARIABLE_NAME}.` + name).join(',');
const imports = ['var ' + snippet, ''].join(';');

const panel = children => div({ className : 'panel', children });

const jsInput = div({ className : 'jsinput' });

const domOutput = output({ className : 'domoutput' });

const htmlOutput = div({ className : 'htmloutput', hidden : false });

const serializer = new HTMLSerializer;

const globalbox = input({
    type : 'checkbox',
    checked : true,
    onchange : () => evaluate()
});

const modebox = input({
    type : 'checkbox',
    checked : true,
    onchange : () => {
        htmlOutput.hidden = !modebox.checked;
    }
});

const options = [
    option({ textContent : 'example with globals', value }),
    test.map(fn => {
        const value = fn.toString();
        const textContent = value.match(/\({ ((?:\w+,? )+)}\)/)[1].trim();
        return option({ textContent, value : jsb(value) });
    })
];

const suitebox = select({
    children : options,
    onchange : () => {
        globalbox.checked = suitebox.value === value;
        jsEditor.setValue(suitebox.value);
    }
});

document.body.append(
    header(h3([abbr('HTMLDOM'), ' ', abbr('REPL')])),
    main({
        className : 'repl',
        children : [
            panel([
                p([
                    label([globalbox, ' define globally']),
                    label(suitebox)
                ]),
                jsInput
            ]),
            panel([
                p(label([modebox, ' view ', abbr('HTML')])),
                domOutput,
                htmlOutput
            ])
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
            const src = globalbox.checked?
                [imports, es5.code].join(';') :
                es5.code;
            const fn = new Function('exports', HTMLDOM_VARIABLE_NAME, src);
            const exports = {
                default : () => {
                    throw Error('Module is not Exported!');
                }
            };
            fn(exports, HTMLDOM);
            const node = typeof exports.default === 'function'?
                exports.default(HTMLDOM) :
                exports.default;

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


/*const BABEL_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';

let babelscript;

// label([babelbox, ' use Babel']),

const babelbox = input({
    type : 'checkbox',
    onchange : event => {
        if(!babelscript) babelLoad();
    }
});

function babelLoad() {
    if(window.Babel) delete window.Babel;
    document.body.append(babelscript = script({ src : BABEL_URL }));
}*/

