import { a, ul, li, fieldset, legend } from '../../lib';
import * as htmlmodule from '../../lib';
import './indexapi.css'

const keys = Object.keys(htmlmodule);

export const indexapi = () =>
    fieldset({
        id : 'indexapi',
        children : [
            legend('htmlmodule API index'),
            ul(keys.map(key =>
                li(a({
                    href : './api#' + key.toLowerCase(),
                    target : '_blank',
                    children : key
                }))))
        ]
    });
