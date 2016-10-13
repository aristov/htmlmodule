import { h1, a } from '../../lib';
import './siteheading.css';

const MODULE_NAME = 'htmlmodule';

export const siteheading = children => {
    const isIndex = !/\.html$/.test(location.pathname);
    return h1({
        id : 'siteheading',
        children : [
            a({
                href : isIndex? undefined : './',
                children : MODULE_NAME
            }),
            ' ',
            children
        ]
    });
}
