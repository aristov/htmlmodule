import { footer, nav, a, small } from '../../lib';
import './sitenav.css';

const pathname = location.pathname;

const navlist = [
    a({
        href : './api/',
        children : 'api doc'
    }),
    a({
        href : './spec.html',
        children : 'spec suite'
    }),
    a({
        href : './repl.html',
        children : 'repl machine'
    }),
    a({
        href : './test.html',
        children : 'test case'
    }),
    a({
        href : '//github.com/aristov/htmlmodule',
        children : 'git repo'
    })
];

navlist.forEach(link => {
    if(link.pathname === pathname) link.removeAttribute('href');
});

const modulemark = small([
    'assembled by ',
    a({
        href : 'http://npmjs.org/package/htmlmodule',
        children : 'htmlmodule'
    })
]);

export const sitenav = () => footer({
    id : 'sitenav',
    children : [nav(navlist), modulemark]
});
