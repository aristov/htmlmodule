import { details, summary, nav, ul, li, a } from './htmlmodule';
import * as htmlmodule from './htmlmodule';
import './apinav.css';

const keys = Object.keys(htmlmodule);

export const indexapi = () =>
    details({
        id : 'apinav',
        children : [
            summary('API index'),
            nav(ul(keys.map(key => li(a({
                href : './api#' + key.toLowerCase(),
                target : '_blank',
                children : key
            })))))
        ]
    });
