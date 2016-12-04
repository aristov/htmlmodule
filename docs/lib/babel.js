import { script } from './htmlmodule'

const TEST_SRC = '()=>{}'
const BABEL_URL = 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.14.0/babel.min.js'
const BABEL_CONFIG = { presets: ['es2015'] }

/**
 * Check if a browser supports ES2015 synthax
 * @param [src]
 * @returns {boolean}
 */
export function es2015support(src = TEST_SRC) {
    try {
        Function(src)
        return true
    }
    catch(error) {
        return false
    }
}

/**
 * Load babel-standalone asynchronously
 * @function standalone
 * @param {String} [src]
 * @async
 * @exposes window.Babel
 */
export function standalone(src = BABEL_URL) {
    return new Promise((resolve, reject) => {
        const babelscript = script({
            src,
            onload : resolve,
            onerror : reject
        })
        document.body.append(babelscript)
    })
}

/**
 * Babel.transform project wrapper
 * removes 'use strict' from result
 * @param input
 * @param [config]
 * @returns {String}
 */
export function babel(input, config = BABEL_CONFIG) {
    const res = window.Babel.transform(input, config)
    return res.code.replace(/^['"]use\sstrict['"];\n\n/, '')
}
