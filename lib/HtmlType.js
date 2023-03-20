const BooleanType = require('./BooleanType')
const ElemType = require('./ElemType')
const RoleType = require('./RoleType')

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static props = {
    ...RoleType.props,
    hidden : BooleanType.define('hidden'),
  }
}

module.exports = HtmlType
