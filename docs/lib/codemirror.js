import { HTMLAssembler, NodeInit } from './htmlmodule';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

import 'codemirror/lib/codemirror.css';
import './codemirror.css';

import 'codemirror/theme/rubyblue.css';
const theme = 'rubyblue';

const CODE_BOX_DEFAULTS = {
    mode : 'javascript',
    indentUnit : 4,
    tabSize : 4,
    indentWithTabs : true,
    electricChars : true,
    styleActiveLine : true,
    autoCloseBrackets : true,
    matchBrackets : true,
    smartIndent : true,
    theme
};

const MARKUP_BOX_DEFAULTS = {
    mode : 'htmlmixed',
    readOnly : true,
    theme
};

export class CodeMirrorAssembler extends HTMLAssembler {
    constructor(init) {
        super(init);
        this.createElement('div', NodeInit(init));
    }
    set value(value) {
        this.mirror.setValue(value && value.toString());
    }
    get value() {
        return this.mirror.getValue();
    }
    get height() {
        return this.element.clientHeight;
    }
    set onchange(onchange) {
        this.mirror.on('change', onchange);
    }
    set id(id) {
        this.element.querySelector('textarea').id = id;
    }
    createElement(tagName, init) {
        super.createElement(tagName);
        this.createMirror(init.options);
        delete init.options;
        this.init(init);
    }
    createMirror(options) {
        return this.mirror = new CodeMirror(this.element, options);
    }
    refresh() {
        this.mirror.refresh();
    }
}

Object.defineProperty(CodeMirrorAssembler.prototype, 'mirror', { writable : true, value : null });

export function codemirror(init = {}) {
    return new CodeMirrorAssembler(init)
}

export function codebox(init = {}) {
    if(!init.options) init.options = CODE_BOX_DEFAULTS;
    return codemirror(init);
}

export function markupbox(init = {}) {
    if(!init.options) init.options = MARKUP_BOX_DEFAULTS;
    return codemirror(init);
}
