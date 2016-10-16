import { HTMLAssembler, NodeInit } from './htmlmodule';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

const CODE_BOX_DEFAULTS = {
    mode: 'javascript',
    indentUnit: 4,
    tabSize: 2,
    indentWithTabs: true,
    electricChars: true,
    styleActiveLine: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    smartIndent: true,
    theme : 'night'
};

const MARKUP_BOX_DEFAULTS = {
    mode : 'htmlmixed',
    readOnly : true,
    theme : 'night'
};

/*================================================================*/

export class CodeMirrorAssembler extends HTMLAssembler {
    constructor(init) {
        super(init);
        this.createElement('div', NodeInit(init));
    }
    set value(value) {
        this.mirror.setValue(value);
    }
    get value() {
        return this.mirror.getValue();
    }
    createElement(tagName, init) {
        super.createElement(tagName);
        this.createMirror(init.options);
        this.init = init;
    }
    createMirror(options) {
        return this.mirror = new CodeMirror(this.element, options);
    }
    static get options() {
        return CodeMirror.defaults;
    }
}

Object.defineProperty(CodeMirrorAssembler.prototype, 'mirror', { writable : true, value : null });

const codemirror = (init = {}) => new CodeMirrorAssembler(init);

/*================================================================*/

export const codebox = (init = {}) => {
    if(!init.options) init.options = CODE_BOX_DEFAULTS;
    return codemirror(init);
}

export const markupbox = (init = {}) => {
    if(!init.options) init.options = MARKUP_BOX_DEFAULTS;
    return codemirror(init);
}
