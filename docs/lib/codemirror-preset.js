import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

const theme = 'night';

export const codeedit = (node, value) =>
    new CodeMirror(node, {
        value,
        mode: 'javascript',
        theme,
        indentUnit: 4,
        tabSize: 2,
        indentWithTabs: true,
        electricChars: true,
        styleActiveLine: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        smartIndent: true
    });

export const markupview = (node) =>
    new CodeMirror(node, {
        mode: 'htmlmixed',
        theme,
        readOnly: true
    });
