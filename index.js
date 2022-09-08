/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = require('./lib/htmlmodule')

exports.AttrType = require('./lib/AttrType')
exports.BooleanType = require('./lib/BooleanType')
exports.Context = require('./lib/Context')
exports.ElemType = require('./lib/ElemType')
exports.HtmlType = require('./lib/HtmlType')
exports.ListType = require('./lib/ListType')
exports.PropType = require('./lib/PropType')
exports.RoleType = require('./lib/RoleType')
exports.TextType = require('./lib/TextType')
exports.TokenType = require('./lib/TokenType')

exports.window = require('xwindow')
