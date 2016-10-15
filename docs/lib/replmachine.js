import * as htmlmodule from './htmlmodule';
import { input, output } from './htmlmodule';
import { HTMLSerializer } from '../../util/util.htmlserializer';

/**================================================================**/

const VAR_NAME_EXPORTS = 'exports';

export class REPLMachine {
    constructor({ value }) {
        this.input = input({ value });
        this.output = output();
        this.loop();
    }
    loop() {
        this.input.oninput = this.oninput;
        this.read(this.input.value);
    }
    read(source) {
        try {
            const evaluable = new Function(VAR_NAME_EXPORTS, source);
            this.eval(evaluable);
        }
        catch(error) {
            this.onerror(error);
        }
    }
    eval(evaluable) {
        try {
            const result = evaluable(this.exports);
            this.print(result);
        }
        catch(error) {
            this.onerror(error, evaluable);
        }
    }
    print(result) {
        this.output.value = result;
    }
    oninput() {
        this.read(this.input.value);
    }
    onerror(error, ...args) {
        console.error(error, ...args);
        this.print(undefined);
    }
    get exports() {
        return {
            default : () => {
                throw Error('The default module is not exported');
            }
        };
    }
}

Object.defineProperty(REPLMachine.prototype, 'input', { writable : true, value : null });
Object.defineProperty(REPLMachine.prototype, 'output', { writable : true, value : null });

/**================================================================**/

const IMPORT_FROM_RE = /\bimport\s*({(?:\s*\w+\s*,)*(?:\s*\w+\s*,?\s*)})\s*from\s*'(\w+)';?/;
const EXPORT_DEFAULT_RE = /\bexport\s+default\s+/;
const EXPORTS_DEFAULT_RE = /\bexports\s*\.\s*default\s*=/;

// export class ESTransform {} // todo

export const transform = code => {
    if(IMPORT_FROM_RE.test(code)) {
        code = code.replace(IMPORT_FROM_RE, 'const $1 = $2;');
    }
    if(EXPORT_DEFAULT_RE.test(code)) {
        code = code.replace(EXPORT_DEFAULT_RE, 'exports.default = ');
    } else
    if(!EXPORTS_DEFAULT_RE.test(code)) {
        code = 'exports.default = ' + code;
    }
    return code;
}

/**================================================================**/

const HTMLMODULE_VARIABLE_NAME = 'htmlmodule';

const snippetpart = name => name + '=' + HTMLMODULE_VARIABLE_NAME + '.' + name;
const IMPORTS_SNIPPET_PART = Object.keys(htmlmodule).map(snippetpart).join(', ');
const IMPORTS_SNIPPET = 'var ' + IMPORTS_SNIPPET_PART;

const serializer = new HTMLSerializer;

export class HTMLREPLMachine {
    constructor() {}
    print(node) {
        const firstChild = this.domoutput.firstChild;
        if(firstChild) firstChild.replaceWith(node);
        else this.domoutput.append(node);
        this.markupviewmirror.setValue(serializer.serializeToString(node));
    }
    get value() {
        return this.cmEditBox.getValue();
    }
    get global() {
        return this.globalbox.checked;
    }
    htmlModuleEval() {
        const code = this.value.trim();
        if(code) {
            try {
                const fn = this.buildEvalFn(transform(code));
                const exports = {
                    'default' : () => { throw Error('Module is not exported!') }
                }
                fn(exports, htmlmodule);

                const node = typeof exports.default === 'function'?
                    exports.default(htmlmodule) :
                    exports.default;

                this.print(node);

                localStorage.setItem('value', codeeditmirror.getValue());
                localStorage.setItem('global', globalbox.checked);
                localStorage.setItem('option', String(indexOf.call(testselectbox.options, testselectbox.selectedOptions[0])));
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
    buildEvalFn(code) {
        const src = this.global? [IMPORTS_SNIPPET, code].join(';\n\n') : code;
        return new Function('exports', HTMLMODULE_VARIABLE_NAME, src);
    }
}

/**================================================================**/
