import { HTMLDOMAssembler, NodeInit } from './htmlmodule';

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

export class CodeMirrorAssembler extends HTMLDOMAssembler {
    constructor(init) {
        super(init);
        this.assemble('div', NodeInit(init));
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
    assemble(tagName, init) {
        super.assemble(tagName);
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

/**
 * CodeMirror instance
 * @property mirror
 * @type {CodeMirror|null}
 */
CodeMirrorAssembler.prototype.mirror = null;

/**
 * Create generic codemirror widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function codemirror(init = {}) {
    return new CodeMirrorAssembler(init);
}

/**
 * Create codebox widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function codebox(init = {}) {
    if(!init.options) init.options = CODE_BOX_DEFAULTS;
    return codemirror(init);
}

/**
 * Create markupbox widget
 * @param init
 * @returns {CodeMirrorAssembler}
 */
export function markupbox(init = {}) {
    if(!init.options) init.options = MARKUP_BOX_DEFAULTS;
    return codemirror(init);
}
