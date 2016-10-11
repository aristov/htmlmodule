import { footer, a } from '../';
import './sitenav.css';

const sitenavset = {
    repl : {
        href : '../repl',
        children : 'repl app'
    },
    repo : {
        href : '//github.com/aristov/htmlmodule',
        children : 'git repo'
    },
    doc : {
        href : '../documentation',
        children : 'api doc'
    },
    spec : {
        href : '../spec',
        children : 'spec suite'
    },
    test : {
        href : '../test',
        children : 'test case'
    },
    dist : {
        href : '../dist',
        children : 'dist test'
    }
}

export const sitenav = current => footer({
    className : 'sitenav',
    children : Object.keys(sitenavset).map(key => {
        const value = sitenavset[key];
        if(key === current) delete value.href;
        return a(value);
    })
});
