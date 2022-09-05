/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = require('./lib/htmlmodule')

exports.AttrType = require('./lib/AttrType')
exports.Context = require('./lib/Context')
exports.ElemType = require('./lib/ElemType')
exports.HtmlType = require('./lib/HtmlType')
exports.TextType = require('./lib/TextType')

exports.window = require('xwindow')
