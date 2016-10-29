import { script } from './htmlmodule';

const TEST_SRC = '()=>{}';

/**
 * @return {boolean}
 */
export const ES2016support = (src = TEST_SRC) => {
    try {
        new Function(src);
        return true;
    }
    catch(error) {
        return false;
    }
}

window.Babel = { transform : code => ({ code }) };

export const babel = input => {
    const Babel = window.Babel;
    const res = Babel.transform(input, { presets: ['es2015'] });
    return res.code.replace(/^'use\sstrict';\n\n/, '');
}

export const BABEL_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';

/**
 * Async module
 * @type {Promise}
 */
export const standalone = new Promise((resolve, reject) => {
    if(ES2016support()) resolve();
    else {
        const babelscript = script({
            src : BABEL_URL,
            onload : resolve,
            onerror : reject
        });
        document.body.append(babelscript);
    }
});
