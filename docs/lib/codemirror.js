import { HTMLDOMAssembler, NodeInit } from './htmlmodule';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';

import 'codemirror/lib/codemirror.css';
import './codemirror.css';

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
};

const MARKUP_BOX_DEFAULTS = {
    mode : 'htmlmixed',
    readOnly : true,
};

export class CodeMirrorAssembler extends HTMLDOMAssembler {
    /**
     * Assembles codemirror editor instance
     * @param {Object} init
     */
    constructor(init) {
        super(init);
        this.assemble('div', NodeInit(init));
    }

    /**
     * Set the editor value
     * @param {String} value
     */
    set value(value) {
        this.mirror.setValue(value && value.toString());
    }

    /**
     * Get the editor value
     * @returns {String}
     */
    get value() {
        return this.mirror.getValue();
    }

    /**
     * Get the editor client height
     * @returns {Number}
     */
    get height() {
        return this.element.clientHeight;
    }

    /**
     * Set the onchange event handler
     * @param onchange
     */
    set onchange(onchange) {
        this.mirror.on('change', onchange);
    }

    /**
     * Set a unique id on the editor's textarea element
     * @param id
     */
    set id(id) {
        this.element.querySelector('textarea').id = id;
    }

    /**
     * Assemble widget DOM structure
     * @param tagName
     * @param init
     */
    assemble(tagName, init) {
        super.assemble(tagName);
        this.createMirror(init.options);
        delete init.options;
        this.init(init);
    }

    /**
     * Create the CodeMirror instance
     * @param options
     * @returns {*}
     */
    createMirror(options) {
        return this.mirror = new CodeMirror(this.element, options);
    }

    /**
     * Refresh the CodeMirror instance
     */
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
