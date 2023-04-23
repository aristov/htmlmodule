/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = {
  ...require('./lib/HtmlModule'),
  ...require('./lib/AriaModule'),
}

exports.AriaType = require('./lib/AriaType')
exports.AttrType = require('./lib/AttrType')
exports.Attributes = require('./lib/Attributes')
exports.BooleanType = require('./lib/BooleanType')
exports.Class = require('./lib/Class')
exports.ClassList = require('./lib/ClassList')
exports.Context = require('./lib/Context')
exports.Dataset = require('./lib/Dataset')
exports.ElemType = require('./lib/ElemType')
exports.EventType = require('./lib/EventType')
exports.HtmlType = require('./lib/HtmlType')
exports.Id = require('./lib/Id')
exports.InnerHTML = require('./lib/InnerHTML')
exports.InnerText = require('./lib/InnerText')
exports.NumberType = require('./lib/NumberType')
exports.PropType = require('./lib/PropType')
exports.RoleType = require('./lib/RoleType')
exports.Style = require('./lib/Style')
exports.TextType = require('./lib/TextType')
exports.TokenType = require('./lib/TokenType')

exports.window = require('xwindow')
