import { footer, a } from '../';
import './sitenav.css';

const sitenavset = {
    doc : {
        href : '../documentation',
        children : 'api doc'
    },
    spec : {
        href : '../spec',
        children : 'spec suite'
    },
    repo : {
        href : '//github.com/aristov/htmlmodule',
        children : 'git repo'
    },
    test : {
        href : '../test',
        children : 'test suite'
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
