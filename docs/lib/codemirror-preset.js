import { div } from './htmlmodule';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

const theme = 'night';

class CodeInput {
    constructor(options) {
        const node = div();
        
    }
    static get options() {
        return {
            mode: 'javascript',
            indentUnit: 4,
            tabSize: 2,
            indentWithTabs: true,
            electricChars: true,
            styleActiveLine: true,
            autoCloseBrackets: true,
            matchBrackets: true,
            smartIndent: true,
            theme
        }
    }
}

export const codeedit = (node, value) =>
    new CodeMirror(node, options);

export const markupview = (node) =>
    new CodeMirror(node, {
        mode: 'htmlmixed',
        readOnly: true,
        theme
    });
