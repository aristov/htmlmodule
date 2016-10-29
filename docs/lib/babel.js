import { script } from './htmlmodule';

const TEST_SRC = '()=>{}';
const BABEL_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js';
const BABEL_CONFIG = { presets: ['es2015'] };

/**
 * Check if a browser supports ES2015 synthax
 * @param src
 * @returns {boolean}
 */
export const es2015support = (src = TEST_SRC) => {
    try {
        new Function(src);
        return true;
    }
    catch(error) {
        return false;
    }
}

/**
 * Load babel-standalone asynchronously
 * @function standalone
 * @param {String} src
 * @async
 * @exposes window.Babel
 */
export const standalone = (src = BABEL_URL) => (
    new Promise((resolve, reject) => {
        const babelscript = script({
            src,
            onload : resolve,
            onerror : reject
        });
        document.body.append(babelscript);
    }));

/**
 * Babel.transform project wrapper
 * removes 'use strict' from result
 * @param input
 * @returns {String}
 */
export const babel = input => {
    const res = window.Babel.transform(input, BABEL_CONFIG);
    return res.code.replace(/^'use\sstrict';\n\n/, '');
}
