import { code, pre, details, summary, } from '../../lib';
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
            'index.html', code(pre(html)),
            'lib/index.js => build/build.js (babel transpiled)', code(pre(js)),
            'lib/index.css', code(pre(css)));
    });
    return node;
}
