import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/night.css';

export const codeedit = (node, value) =>
    new CodeMirror(node, {
        value : value,
        mode: 'javascript',
        theme: 'night',
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
        theme: 'night',
        readOnly: true
    });
