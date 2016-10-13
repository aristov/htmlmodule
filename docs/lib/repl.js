import { button, option, select, output, main, div, p, label, input, abbr, form }
from '../../lib';

import * as htmlmodule from '../../lib';
import { HTMLSerializer } from '../../util/util.htmlserializer';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

import globaldefined from 'raw!./test/test-globaldefined.rawjs';
import exportdefault from 'raw!./test/test-exportdefault.rawjs';
import importfrom from 'raw!./test/test-importfrom.rawjs';
import { testCase } from './testcase';

import { sitenav } from './sitenav';
import { siteheading } from './siteheading';
import './repl.css';

const localValue = localStorage.getItem('value');
const localGlobal = localStorage.getItem('global');

const EXPORT_DEFAULT_RE = /export\s+default\s+/;
const EXPORTS_DEFAULT_RE = /exports\s*\.\s*default\s*=/;

const IMPORT_FROM_RE = /import\s*({(?:\s*\w+\s*,)*(?:\s*\w+\s*,?\s*)})\s*from\s*'(\w+)';?/;

// babel polyfill =)
if(!window.Babel) {
    window.Babel = {
        transform : code => {
            code = code.replace(IMPORT_FROM_RE, 'const $1 = $2;');
            if(EXPORT_DEFAULT_RE.test(code)) {
                code = code.replace(EXPORT_DEFAULT_RE, 'exports.default = ');
            }
            else if(!EXPORTS_DEFAULT_RE.test(code)) {
                code = 'exports.default = ' + code;
            }
            return { code };
        }
    }
}

const panel = children => div({ className : 'panel', children });

const jsInput = div({ className : 'jsinput' });

const domOutput = output({ className : 'domoutput' });

const htmlOutput = div({ className : 'htmloutput', hidden : false });

const serializer = new HTMLSerializer;

const globalbox = input({
    type : 'checkbox',
    checked : localGlobal === null || localGlobal === 'true',
    onchange : () => {
        evaluate();
        const checked = globalbox.checked;
        if(checked) testselectbox.value = '';
        else settingsformnode.reset();
        // localStorage.setItem('global', String(checked));
    }
});

const modebox = input({
    type : 'checkbox',
    checked : true,
    onchange : () => htmlOutput.hidden = !modebox.checked
});


let selectedOption = option({
    value : globaldefined,
    id : 'example-with-globals',
    selected : true,
    textContent : 'example with globals'
});

const options = [
    option({ value : '', children : '—' }),
    selectedOption,
    option({
        value : exportdefault,
        id : 'export-default-example',
        children : 'export default example'
    }),
    option({
        value : importfrom,
        id : 'full-module-example',
        children : 'full module example'
    }),
    testCase.map(({ src }) => {
        const match = src.match(/\({ ((?:\w+,? )+)}\)/);
        const textContent = match? match[1].trim() : '?';
        const elements = textContent.split(', ');
        const id = elements.join('+');
        return option({ id, textContent, value : src });
    })
];

function updateTest() {
    globalbox.checked = testselectbox.value === globaldefined;
    jsEditor.setValue(testselectbox.value + '\n');
    const opt = testselectbox.selectedOptions[0];
    if(opt) location.hash = opt.id;
}

const testselectbox = select({
    children : options,
    onchange : () => {
        const selected = testselectbox.query('[selected]');
        if(selected) selected.removeAttribute('selected');
        const opt = testselectbox.selectedOptions[0];
        if(opt) opt.setAttribute('selected', '');
        updateTest();
    }
});

// todo refactor
class REPLApp {
    clear() {
        const selected = testselectbox.query('[selected]');
        if(selected) {
            selected.removeAttribute('selected');
            selected.selected = false;
        }
        jsEditor.setValue('');
        location.hash = '';
    }
}

const clear = () => {
    REPLApp.prototype.clear();
};

const clearboxnode = button({
    type : 'reset',
    onclick : clear,
    children : 'clear'
});

const settingsformnode = form({
    className : 'settings',
    children : p([
        label([globalbox, ' define globally']),
        label(testselectbox),
        label(clearboxnode)
    ])
});

document.body.append(
    siteheading(abbr({
        title : 'read-eval-print-loop',
        style : { cursor : 'help' },
        children : 'repl'
    })),
    main({
        className : 'repl',
        children : [
            panel([
                settingsformnode,
                jsInput
            ]),
            panel([
                form({
                    className : 'settings',
                    children : p(label([modebox, ' show markup']))
                }),
                domOutput,
                htmlOutput
            ])
        ]
    }),
    sitenav()
);

const jsEditor = new CodeMirror(jsInput, {
    value : localValue || globaldefined,
    mode: 'javascript',
    theme: 'night',
    indentUnit: 4,
    tabSize: 2,
    indentWithTabs: true,
    electricChars: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    smartIndent: true
});

// use mutation observer to init after append
const htmlEditor = new CodeMirror(htmlOutput, {
    mode: 'htmlmixed',
    theme: 'night',
    readOnly: true
});

const hash = location.hash.replace('#', '');

if(hash && !localValue) {
    const option = document.getElementById(hash);
    if(option && 'selected' in option) {
        option.selected = true;
        option.setAttribute('selected', '');
        updateTest();
    }
}

jsEditor.on('change', () => evaluate());

const HTMLMODULE_VARIABLE_NAME = 'htmlmodule';

const snippetPart = name => name + `=${HTMLMODULE_VARIABLE_NAME}.` + name;
const snippet = Object.keys(htmlmodule).map(snippetPart).join(', ');
const imports = `var ${ snippet }`;

function evaluate() {
    const code = jsEditor.getValue().trim();
    if(code) {
        try {
            const es5 = Babel.transform(code);
            const src = globalbox.checked? [imports, es5.code].join(';\n\n') : es5.code;

            const fn = new Function('exports', HTMLMODULE_VARIABLE_NAME, src);
            const exports = {
                default : () => {
                    throw Error('Module is not Exported!');
                }
            };

            fn(exports, htmlmodule);

            const node = typeof exports.default === 'function'?
                exports.default(htmlmodule) :
                exports.default;

            const firstChild = domOutput.firstChild;
            if(firstChild) firstChild.replaceWith(node);
            else domOutput.append(node);

            const htmlcode = serializer.serializeToString(node);
            htmlEditor.setValue(htmlcode);
            localStorage.setItem('value', jsEditor.getValue());
            localStorage.setItem('global', globalbox.checked);
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

evaluate();
