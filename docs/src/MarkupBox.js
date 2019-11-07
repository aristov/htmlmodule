import { CodeBox } from './CodeBox'

const MARKUP_BOX_DEFAULTS = {
    mode : 'htmlmixed',
    readOnly : true,
}

/**
 * Create markupbox widget
 * @param init
 * @returns {CodeBox}
 */
export class MarkupBox extends CodeBox {
    init(init = {}) {
        super.init(init)
        if(!init.options) {
            this.options = MARKUP_BOX_DEFAULTS
        }
    }
}
