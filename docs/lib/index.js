import { siteheading } from './siteheading';
import { sitenav } from './sitenav';

const { ul, li, main, code, a } = htmlmodule;
const listnode = main([
    siteheading('htmlmodule'),
    ul({
        style : {
            columnCount : 7,
            listStyle : 'none'
        },
        children : Object.keys(htmlmodule).map((key) => li(a({
            href : './api#' + key.toLowerCase(),
            target : 'blank',
            children : code(key)
        })))
    })
]);

document.body.append(listnode, sitenav());
