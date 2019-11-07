import { CodeBox } from './CodeBox'

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
}

/**
 * Create codebox widget
 * @param init
 * @returns {CodeBox}
 */
export class CodeInput extends CodeBox {
    init(init) {
        super.init(init)
        if(!init.options) {
            this.options = CODE_BOX_DEFAULTS
        }
    }
}
