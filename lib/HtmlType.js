import { BooleanType } from './BooleanType.js'
import { ElemType } from './ElemType.js'
import { RoleType } from './RoleType.js'

/**
 * @abstract
 */
export class HtmlType extends ElemType
{
  static props = {
    ...RoleType.props,
    hidden : BooleanType.define('hidden'),
  }
}
