// import { AriaAtomic } from './AriaAtomic'
// import { AriaBusy } from './AriaBusy'
// import { AriaControls } from './AriaControls'
// import { AriaCurrent } from './AriaCurrent'
// import { AriaDescribedBy } from './AriaDescribedBy'
// import { AriaDetails } from './AriaDetails'
// import { AriaFlowTo } from './AriaFlowTo'
// import { AriaKeyShortcuts } from './AriaKeyShortcuts'
// import { AriaLabel } from './AriaLabel'
// import { AriaLabelledBy } from './AriaLabelledBy'
// import { AriaLive } from './AriaLive'
// import { AriaOwns } from './AriaOwns'
// import { AriaRelevant } from './AriaRelevant'
// import { AriaRoleDescription } from './AriaRoleDescription'
import { Dataset } from './Dataset'
import { DomElem } from './DomElem'
import { Style } from './Style'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlelement
 * @abstract
 */
export class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @param {string} innerText
   */
  set innerText(innerText) {
    this.destroyChildren(true)
    this.node.innerText = innerText
  }

  /**
   * @returns {string}
   */
  get innerText() {
    return this.node.innerText
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    if(tabIndex === null) {
      this.removeAttr('tabindex')
    }
    else this.node.tabIndex = tabIndex
  }

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    return this.hasAttr('tabindex') ? this.node.tabIndex : null
  }
}

HtmlElem.defineMethods([
  'click',
  'focus',
  'blur',
])

HtmlElem.defineAttrs([
  'role',
  // AriaAtomic,
  // AriaBusy,
  // AriaControls,
  // AriaCurrent,
  // AriaDescribedBy,
  // AriaDetails,
  // AriaFlowTo,
  // AriaKeyShortcuts,
  // AriaLabel,
  // AriaLabelledBy,
  // AriaLive,
  // AriaOwns,
  // AriaRelevant,
  // AriaRoleDescription,
  Dataset,
  Style,
])

HtmlElem.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'isContentEditable',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'inputMode',
  'lang',
  'title',
  'translate',
], true)
