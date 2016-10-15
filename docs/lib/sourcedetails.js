import { code, pre, details, summary, } from './htmlmodule';
import './sourcedetails.css';

export const sourcedetails = () =>
    details({
        id : 'sourcedetails',
        children : summary('page source')
    });

const fetch = window.fetch;
export const sourcefetch = node => {
    Promise.all([
        fetch('index.html').then(response => response.text()),
        fetch('lib/index.js').then(response => response.text()),
        fetch('lib/index.css').then(response => response.text())
    ]).then(function([html, js, css]) {
        node.append(
            code({
                className : 'sourcetitle',
                children : 'index.html'
            }),
            pre(code(html)),
            code({
                className : 'sourcetitle',
                children : 'lib/index.js => build/build.js (babel transpiled)'
            }),
            pre(code(js)),
            code({
                className : 'sourcetitle',
                children : 'lib/index.css'
            }),
            pre(code(css)));
    });
    return node;
}
