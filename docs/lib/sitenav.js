import { nav, small, footer, a } from '../../lib';
import './sitenav.css';

const pathname = location.pathname;

const navlist = [
    a({
        href : './api/',
        target : '_blank',
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
        target : '_blank',
        children : 'git repo'
    })
];

navlist.forEach(link => {
    if(link.pathname === pathname) link.removeAttribute('href');
});

const assembledby = small([
    'assembled by ',
    a({
        href : 'http://npmjs.org/package/htmlmodule',
        children : 'htmlmodule'
    })
]);

const children = [nav(navlist), assembledby];

const node = document.getElementById('sitenav');
if(node) node.append(...children);

export const sitenav = init =>
    footer({
        id : 'sitenav',
        children
    });
