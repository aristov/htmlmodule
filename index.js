/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = {
  ...require('./lib/HtmlType-lib'),
  ...require('./lib/RoleType-lib'),
}

exports.AttrType = require('./lib/AttrType')
exports.BooleanType = require('./lib/BooleanType')
exports.Context = require('./lib/Context')
exports.ElemType = require('./lib/ElemType')
exports.HtmlType = require('./lib/HtmlType')
exports.Id = require('./lib/Id')
exports.ListType = require('./lib/ListType')
exports.PropType = require('./lib/PropType')
exports.RoleType = require('./lib/RoleType')
exports.TextType = require('./lib/TextType')
exports.TokenType = require('./lib/TokenType')

exports.window = require('xwindow')
