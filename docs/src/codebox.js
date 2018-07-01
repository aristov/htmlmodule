import { Div } from './htmlmodule'
import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import './codemirror.css'

export class CodeBox extends Div {
    /**
     * Refresh the CodeMirror instance
     */
    refresh() {
        this._mirror.refresh()
    }

    /**
     * Create the CodeMirror instance
     * @param {Object} options
     */
    set options(options) {
        this._mirror = new CodeMirror(this.node, options)
    }

    /**
     * Set the editor value
     * @param {String} value
     */
    set value(value) {
        this._mirror.setValue(value && value.toString())
    }

    /**
     * Get the editor value
     * @returns {String}
     */
    get value() {
        return this._mirror.getValue()
    }

    /**
     * Get the editor client height
     * @returns {Number}
     */
    get height() {
        return this.node.clientHeight
    }

    /**
     * Set the onchange event handler
     * @param {Function} onchange
     */
    set onchange(onchange) {
        this._mirror.on('change', onchange)
    }

    /**
     * Set a unique id on the editor's textarea element
     * @param {String} id
     */
    set id(id) {
        this.node.querySelector('textarea').id = id
    }

    /**
     * @returns {string}
     */
    static get defaultPropertyName() {
        return 'options'
    }
}

/**
 * CodeMirror instance
 * @property mirror
 * @type {CodeMirror|null}
 */
CodeBox.prototype._mirror = null
