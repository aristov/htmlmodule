/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = require('./lib/htmlmodule')

exports.AttrType = require('./lib/AttrType')
exports.DomElem = require('./lib/DomElem')
exports.DomNode = require('./lib/DomNode')
exports.HtmlElem = require('./lib/HtmlElem')

exports.window = require('xwindow')
