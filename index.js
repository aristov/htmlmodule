/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = {
  ...require('./lib/HtmlType-lib'),
  ...require('./lib/RoleType-lib'),
}

exports.AriaType = require('./lib/AriaType')
exports.Attributes = require('./lib/Attributes')
exports.AttrType = require('./lib/AttrType')
exports.BooleanType = require('./lib/BooleanType')
exports.Class = require('./lib/Class')
exports.Context = require('./lib/Context')
exports.Dataset = require('./lib/Dataset')
exports.ElemType = require('./lib/ElemType')
exports.EventType = require('./lib/EventType')
exports.HtmlType = require('./lib/HtmlType')
exports.Id = require('./lib/Id')
exports.ListType = require('./lib/ListType')
exports.PropType = require('./lib/PropType')
exports.RoleType = require('./lib/RoleType')
exports.Style = require('./lib/Style')
exports.TextType = require('./lib/TextType')
exports.TokenType = require('./lib/TokenType')

exports.window = require('xwindow')
