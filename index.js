/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = require('./lib/htmlmodule')

exports.AttrType = require('./lib/AttrType')
exports.ElemType = require('./lib/ElemType')
exports.HtmlType = require('./lib/HtmlType')

exports.window = require('xwindow')
