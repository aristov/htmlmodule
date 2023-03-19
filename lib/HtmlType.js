const AttrType = require('./AttrType')
const ElemType = require('./ElemType')
const RoleType = require('./RoleType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static props = {
    ...RoleType.props,
    hidden : AttrType.define('hidden'),
  }
}

module.exports = HtmlType
