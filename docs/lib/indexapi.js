import { a, ul, li, details, summary } from '../../lib';
import * as htmlmodule from '../../lib';
import './indexapi.css'

const keys = Object.keys(htmlmodule).map(key =>
    li(a({
        href : './api#' + key.toLowerCase(),
        target : '_blank',
        children : key
    })));

export const indexapi = () =>
    details({
        id : 'indexapi',
        children : [
            summary('API index'),
            ul(keys)
        ]
    });
