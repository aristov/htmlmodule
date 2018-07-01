const { JSDOM } = require('jsdom')
const { window } = new JSDOM

global.window = window
global.sinon = require('sinon')

/*
 * https://github.com/jsdom/jsdom/issues/1641
 */
Object.defineProperty(window.Attr.prototype, 'nodeType', {
    configurable : true,
    enumerable : true,
    get() {
        return window.Node.ATTRIBUTE_NODE
    }
})

require('../spec/index.spec.js')
