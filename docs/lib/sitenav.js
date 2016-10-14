import { footer, a } from '../../lib';
import './sitenav.css';

const pathname = location.pathname;

const children = [
    a({
        href : './test.html',
        children : 'test case'
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
        href : './api/',
        target : '_blank',
        children : 'api doc'
    }),
    a({
        href : '//github.com/aristov/htmlmodule',
        target : '_blank',
        children : 'git repo'
    })
];

children.forEach(link => {
    if(link.pathname === pathname) link.removeAttribute('href');
});

const sitenavNode = document.getElementById('sitenav');
if(sitenavNode) sitenavNode.append(...children);

export const sitenav = init => footer({ id : 'sitenav', children });
