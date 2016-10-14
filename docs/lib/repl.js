import * as htmlmodule from '../../lib';
import { button, option, select, output, main, div, p, label, input, abbr, form }
from '../../lib';
import { siteheading } from './siteheading';
import { sitenav } from './sitenav';

import { HTMLSerializer } from '../../util/util.htmlserializer';

import { codeedit, markupview } from './codemirror';

import globaldefined from 'raw!./test/test-globaldefined.rawjs';
import exportdefault from 'raw!./test/test-exportdefault.rawjs';
import importfrom from 'raw!./test/test-importfrom.rawjs';
import { testCase } from './testcase';

import './repl.css';

/**
 * babel polyfill =)
 */
const EXPORT_DEFAULT_RE = /export\s+default\s+/;
const EXPORTS_DEFAULT_RE = /exports\s*\.\s*default\s*=/;
const IMPORT_FROM_RE = /import\s*({(?:\s*\w+\s*,)*(?:\s*\w+\s*,?\s*)})\s*from\s*'(\w+)';?/;
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

function localSave() {
    localStorage.setItem('value', codeeditmirror.getValue());
    localStorage.setItem('global', globalbox.checked);
    localStorage.setItem('option',
        String(indexOf.call(testselectboxnode.options,
            testselectboxnode.selectedOptions[0])));
}

function evaluate() {
    const code = codeeditmirror.getValue().trim();
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

            const firstChild = domoutput.firstChild;
            if(firstChild) firstChild.replaceWith(node);
            else domoutput.append(node);

            const htmlcode = serializer.serializeToString(node);
            markupviewmirror.setValue(htmlcode);
            localSave();
        }
        catch(error) {
            domoutput.textContent = error;
            markupviewmirror.setValue('');
        }
    } else {
        domoutput.textContent = '';
        markupviewmirror.setValue('');
    }
}

const panel = children => div({ className : 'panel', children });

const serializer = new HTMLSerializer;

/**
 * define global <checkbox>
 */
const localglobal = localStorage.getItem('global'); // =D
const globalbox = input({
    type : 'checkbox',
    checked : localglobal === null || localglobal === 'true',
    onchange : () => {
        evaluate();
        const checked = globalbox.checked;
        if(checked) testselectboxnode.value = '';
        else settingsform.reset();
        // localStorage.setItem('global', String(checked));
    }
});

/**
 * show markup <checkbox>
 */
const markupmode = input({
    type : 'checkbox',
    checked : localStorage.getItem('markupmode') === 'true',
    onchange : ({ target : { checked }}) => {
        markupoutput.hidden = !checked;
        localStorage.setItem('markupmode', String(checked));
        if(checked) evaluate();
    }
});

const options = [
    option({ value : '', children : '—' }),
    option({
        value : globaldefined,
        id : 'example-with-globals',
        selected : true,
        textContent : 'example with globals'
    }),
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

const testselectboxnode = select({
    children : options,
    onchange : () => {
        const selected = testselectboxnode.query('[selected]');
        if(selected) selected.removeAttribute('selected');
        const opt = testselectboxnode.selectedOptions[0];
        if(opt) opt.setAttribute('selected', '');
        updateTest();
    }
});

function updateTest() {
    globalbox.checked = testselectboxnode.value === globaldefined;
    codeeditmirror.setValue(testselectboxnode.value + '\n');
    const opt = testselectboxnode.selectedOptions[0];
    if(opt) location.hash = opt.id;
}

/**
 * clear <button>
 */
const clearbuttonnode = button({
    type : 'reset',
    onclick : clearMachine,
    children : 'clear'
});

function clearMachine() {
    const selected = testselectboxnode.query('[selected]');
    if(selected) {
        selected.removeAttribute('selected');
        selected.selected = false;
    }
    codeeditmirror.setValue('');
    location.hash = '';
};

/**
 * code setting <form>
 */
const settingsform = form({
    className : 'settings',
    children : p([
        label([globalbox, ' define globally']),
        label(testselectboxnode),
        label(clearbuttonnode)
    ])
});

const hash = location.hash.replace('#', '');

const localvalue = localStorage.getItem('value');
const localoption = localStorage.getItem('option');

if(localvalue && localoption) {
    const option = testselectboxnode.options[localoption];
    if(option) option.selected = true;
} else
if(hash) {
    const option = document.getElementById(hash);
    if(option && 'selected' in option) {
        option.selected = true;
        option.setAttribute('selected', '');
        updateTest();
    }
}

const codeinput = div({ className : 'jsinput' });

const markupoutput = div({ className : 'htmloutput', hidden : false });
markupoutput.hidden = !markupmode.checked;

const domoutput = output({ className : 'domoutput' });

const HTMLMODULE_VARIABLE_NAME = 'htmlmodule';

const snippetPart = name => name + `=${HTMLMODULE_VARIABLE_NAME}.` + name;
const snippet = Object.keys(htmlmodule).map(snippetPart).join(', ');

const imports = `var ${ snippet }`;

const indexOf = Array.prototype.indexOf;

const replmachine = main({
    className : 'repl',
    children : [
        panel([
            settingsform,
            codeinput
        ]),
        panel([
            form({
                className : 'settings',
                children : p(label([markupmode, ' show markup']))
            }),
            domoutput,
            markupoutput
        ])
    ]
})

const replabbr = abbr({
    title : 'read-eval-print-loop',
    style : { cursor : 'help' },
    children : 'repl'
});

document.body.append(siteheading(replabbr), replmachine, sitenav());

const codeeditmirror = codeedit(codeinput, localvalue);
codeeditmirror.on('change', () => evaluate());

const markupviewmirror = markupview(markupoutput, localvalue || globaldefined);

evaluate();
