import { siteheading } from './siteheading';
import { sitenav } from './sitenav';

/**
 * Use global `window.htmlmodule` variable
 * to test global script distribution bundle,
 * already imported by index.html
 */
const { a, code, pre, main, ul, li, details, summary, fieldset, legend } = htmlmodule;

const sourcedetails = details(summary('page source'));

const items = Object.keys(htmlmodule).map(key => {
    return li(a({
        href : './api#' + key.toLowerCase(),
        target : '_blank',
        children : key
    }))
});

document.body.append(
    siteheading(),
    sourcedetails,
    main(fieldset([legend('htmlmodule API index'), ul(items)])),
    sitenav());

Promise.all([
    fetch('index.html').then(response => response.text()),
    fetch('lib/index.js').then(response => response.text()),
    fetch('lib/index.css').then(response => response.text())
]).then(function([html, babeljs, css]) {
    sourcedetails.append(
        'index.html', code(pre(html)),
        'lib/index.js => build/build.js (babel transpiled)', code(pre(babeljs)),
        'lib/index.css', code(pre(css))
    );
});
