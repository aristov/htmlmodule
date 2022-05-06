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
// import { TabIndex } from './TabIndex'

/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlelement
 * @abstract
 */
export class HtmlElem extends DomElem
{
  createNode() {
    let constructor = this.constructor
    do if(constructor.name.startsWith('Html')) {
      return document.createElement(constructor.name.slice(4))
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * Click the element
   */
  click() {
    this.node.click()
  }

  /**
   * Focus the element
   */
  focus() {
    this.node.focus()
  }

  /**
   * Blur the element
   */
  blur() {
    this.node.blur()
  }

  /**
   * @param {string} accessKey
   */
  set accessKey(accessKey) {
    this.node.accessKey = accessKey
  }

  /**
   * @returns {string}
   */
  get accessKey() {
    return this.node.accessKey
  }

  /**
   * @param {boolean} autofocus
   */
  set autofocus(autofocus) {
    this.node.autofocus = autofocus
  }

  /**
   * @returns {boolean}
   */
  get autofocus() {
    return this.node.autofocus
  }

  /**
   * @param {string} contentEditable
   */
  set contentEditable(contentEditable) {
    this.node.contentEditable = contentEditable
  }

  /**
   * @returns {string}
   */
  get contentEditable() {
    return this.node.contentEditable
  }

  /**
   * @param {{}} dataset
   */
  set dataset(dataset) {
    this.setAttr(Dataset, dataset)
  }

  /**
   * @returns {DOMStringMap}
   */
  get dataset() {
    return this.getAttr(Dataset)
  }

  /**
   * @param {string} dir
   */
  set dir(dir) {
    this.node.dir = dir
  }

  /**
   * @returns {string}
   */
  get dir() {
    return this.node.dir
  }

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
   * @return {string}
   */
  get inputMode() {
    return this.node.inputMode
  }

  /**
   * @param {string} inputMode
   */
  set inputMode(inputMode) {
    this.node.inputMode = inputMode
  }

  /**
   * @return {boolean}
   */
  get isContentEditable() {
    return this.node.isContentEditable
  }

  /**
   * @param {string} lang
   */
  set lang(lang) {
    this.node.lang = lang
  }

  /**
   * @returns {string}
   */
  get lang() {
    return this.node.lang
  }

  /**
   * @param {string} role
   */
  set role(role) {
    this.setAttr('role', role)
  }

  /**
   * @returns {string}
   */
  get role() {
    return this.getAttr('role')
  }

  /**
   * @param {*} style {string|{}}
   */
  set style(style) {
    this.setAttr(Style, style)
  }

  /**
   * @returns {CSSStyleDeclaration}
   */
  get style() {
    return this.getAttr(Style)
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    // this.setAttr(TabIndex, tabIndex)
    this.node.tabIndex = tabIndex
  }

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    // return this.getAttr(TabIndex)
    return this.node.tabIndex
  }

  /**
   * @param {string} title
   */
  set title(title) {
    this.node.title = title
  }

  /**
   * @returns {string}
   */
  get title() {
    return this.node.title
  }

  /**
   * @param {boolean} translate
   */
  set translate(translate) {
    this.node.translate = translate
  }

  /**
   * @returns {boolean}
   */
  get translate() {
    return this.node.translate
  }

  /**
   * @param {boolean} hidden
   */
  set hidden(hidden) {
    this.node.hidden = hidden
  }

  /**
   * @returns {boolean}
   */
  get hidden() {
    return this.node.hidden
  }
}

/*HtmlElem.defineAttrs([
  AriaAtomic,
  AriaBusy,
  AriaControls,
  AriaCurrent,
  AriaDescribedBy,
  AriaDetails,
  AriaFlowTo,
  AriaKeyShortcuts,
  AriaLabel,
  AriaLabelledBy,
  AriaLive,
  AriaOwns,
  AriaRelevant,
  AriaRoleDescription,
])*/

HtmlElem.defineGetters([
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
  'offsetHeight',
])
