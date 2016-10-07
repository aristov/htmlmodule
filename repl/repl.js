import '../shim/shim';

import * as HTMLDOM from '../htmldom/htmldom';
import {
    button, option, select, output, main,
    div, header, h3, p, label, input, abbr, form
} from '../htmldom/htmldom';

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


let selectedOption = option({
    value,
    selected : true,
    textContent : 'example with globals'
});

const options = [
    option({ value : '', children : '—' }),
    selectedOption,
    test.map(fn => {
        const src = fn.toString();
        const textContent = src.match(/\({ ((?:\w+,? )+)}\)/)[1].trim();
        const elements = textContent.split(', ');
        const id = elements.join('+');
        return option({ id, textContent, value : jsb(src) });
    })
];

function updateTest() {
    globalbox.checked = suitebox.value === value;
    jsEditor.setValue(suitebox.value);
    location.hash = suitebox.selectedOptions[0].id;
}

const suitebox = select({
    children : options,
    onchange : updateTest
});

const clear = () => {
    jsEditor.setValue('');
    location.hash = '';
};

const clearbox = button({
    type : 'reset',
    onclick : clear,
    children : 'clear'
});

document.body.append(
    header(h3([abbr('HTMLDOM'), ' ', abbr('REPL')])),
    main({
        className : 'repl',
        children : [
            panel([
                form({
                    className : 'settings',
                    children : p([
                        label([globalbox, ' define globally']),
                        label(suitebox),
                        label(clearbox)
                    ])
                }),
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

const hash = location.hash.replace('#', '');

if(hash) {
    const option = document.getElementById(hash);
    if('selected' in option) {
        option.selected = true;
        updateTest();
    }
}

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
    } else {
        domOutput.textContent = '';
        htmlEditor.setValue('');
    }
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

