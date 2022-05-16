(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["htmlmodule"] = factory();
	else
		root["htmlmodule"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see {@link https://www.w3.org/TR/html}
 * @see {@link https://html.spec.whatwg.org}
 */
module.exports = __webpack_require__(1)


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const HtmlElem = __webpack_require__(2)

exports.HtmlA = class HtmlA extends HtmlElem {}
exports.HtmlAbbr = class HtmlAbbr extends HtmlElem {}
exports.HtmlAddress = class HtmlAddress extends HtmlElem {}
exports.HtmlArea = class HtmlArea extends HtmlElem {}
exports.HtmlArticle = class HtmlArticle extends HtmlElem {}
exports.HtmlAside = class HtmlAside extends HtmlElem {}
exports.HtmlAudio = class HtmlAudio extends HtmlElem {}
exports.HtmlB = class HtmlB extends HtmlElem {}
exports.HtmlBase = class HtmlBase extends HtmlElem {}
exports.HtmlBdi = class HtmlBdi extends HtmlElem {}
exports.HtmlBdo = class HtmlBdo extends HtmlElem {}
exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlElem {}
exports.HtmlBody = class HtmlBody extends HtmlElem {}
exports.HtmlBr = class HtmlBr extends HtmlElem {}
exports.HtmlButton = class HtmlButton extends HtmlElem {}
exports.HtmlCanvas = class HtmlCanvas extends HtmlElem {}
exports.HtmlCaption = class HtmlCaption extends HtmlElem {}
exports.HtmlCite = class HtmlCite extends HtmlElem {}
exports.HtmlCode = class HtmlCode extends HtmlElem {}
exports.HtmlCol = class HtmlCol extends HtmlElem {}
exports.HtmlColGroup = class HtmlColGroup extends HtmlElem {}
exports.HtmlData = class HtmlData extends HtmlElem {}
exports.HtmlDataList = class HtmlDataList extends HtmlElem {}
exports.HtmlDd = class HtmlDd extends HtmlElem {}
exports.HtmlDel = class HtmlDel extends HtmlElem {}
exports.HtmlDetails = class HtmlDetails extends HtmlElem {}
exports.HtmlDfn = class HtmlDfn extends HtmlElem {}
exports.HtmlDialog = class HtmlDialog extends HtmlElem {}
exports.HtmlDiv = class HtmlDiv extends HtmlElem {}
exports.HtmlDl = class HtmlDl extends HtmlElem {}
exports.HtmlDt = class HtmlDt extends HtmlElem {}
exports.HtmlEm = class HtmlEm extends HtmlElem {}
exports.HtmlEmbed = class HtmlEmbed extends HtmlElem {}
exports.HtmlFieldSet = class HtmlFieldSet extends HtmlElem {}
exports.HtmlFigCaption = class HtmlFigCaption extends HtmlElem {}
exports.HtmlFigure = class HtmlFigure extends HtmlElem {}
exports.HtmlFooter = class HtmlFooter extends HtmlElem {}
exports.HtmlForm = class HtmlForm extends HtmlElem {}
exports.HtmlH1 = class HtmlH1 extends HtmlElem {}
exports.HtmlH2 = class HtmlH2 extends HtmlElem {}
exports.HtmlH3 = class HtmlH3 extends HtmlElem {}
exports.HtmlH4 = class HtmlH4 extends HtmlElem {}
exports.HtmlH5 = class HtmlH5 extends HtmlElem {}
exports.HtmlH6 = class HtmlH6 extends HtmlElem {}
exports.HtmlHGroup = class HtmlHGroup extends HtmlElem {}
exports.HtmlHead = class HtmlHead extends HtmlElem {}
exports.HtmlHeader = class HtmlHeader extends HtmlElem {}
exports.HtmlHr = class HtmlHr extends HtmlElem {}
exports.HtmlHtml = class HtmlHtml extends HtmlElem {}
exports.HtmlI = class HtmlI extends HtmlElem {}
exports.HtmlIFrame = class HtmlIFrame extends HtmlElem {}
exports.HtmlImg = class HtmlImg extends HtmlElem {}
exports.HtmlInput = class HtmlInput extends HtmlElem {}
exports.HtmlIns = class HtmlIns extends HtmlElem {}
exports.HtmlKbd = class HtmlKbd extends HtmlElem {}
exports.HtmlLabel = class HtmlLabel extends HtmlElem {}
exports.HtmlLegend = class HtmlLegend extends HtmlElem {}
exports.HtmlLi = class HtmlLi extends HtmlElem {}
exports.HtmlLink = class HtmlLink extends HtmlElem {}
exports.HtmlMain = class HtmlMain extends HtmlElem {}
exports.HtmlMap = class HtmlMap extends HtmlElem {}
exports.HtmlMark = class HtmlMark extends HtmlElem {}
exports.HtmlMenu = class HtmlMenu extends HtmlElem {}
exports.HtmlMeta = class HtmlMeta extends HtmlElem {}
exports.HtmlMeter = class HtmlMeter extends HtmlElem {}
exports.HtmlNav = class HtmlNav extends HtmlElem {}
exports.HtmlNoScript = class HtmlNoScript extends HtmlElem {}
exports.HtmlObject = class HtmlObject extends HtmlElem {}
exports.HtmlOl = class HtmlOl extends HtmlElem {}
exports.HtmlOptGroup = class HtmlOptGroup extends HtmlElem {}
exports.HtmlOption = class HtmlOption extends HtmlElem {}
exports.HtmlOutput = class HtmlOutput extends HtmlElem {}
exports.HtmlP = class HtmlP extends HtmlElem {}
exports.HtmlParam = class HtmlParam extends HtmlElem {}
exports.HtmlPicture = class HtmlPicture extends HtmlElem {}
exports.HtmlPre = class HtmlPre extends HtmlElem {}
exports.HtmlProgress = class HtmlProgress extends HtmlElem {}
exports.HtmlQ = class HtmlQ extends HtmlElem {}
exports.HtmlRp = class HtmlRp extends HtmlElem {}
exports.HtmlRt = class HtmlRt extends HtmlElem {}
exports.HtmlRuby = class HtmlRuby extends HtmlElem {}
exports.HtmlS = class HtmlS extends HtmlElem {}
exports.HtmlSamp = class HtmlSamp extends HtmlElem {}
exports.HtmlScript = class HtmlScript extends HtmlElem {}
exports.HtmlSection = class HtmlSection extends HtmlElem {}
exports.HtmlSelect = class HtmlSelect extends HtmlElem {}
exports.HtmlSmall = class HtmlSmall extends HtmlElem {}
exports.HtmlSource = class HtmlSource extends HtmlElem {}
exports.HtmlSpan = class HtmlSpan extends HtmlElem {}
exports.HtmlStrong = class HtmlStrong extends HtmlElem {}
exports.HtmlStyle = class HtmlStyle extends HtmlElem {}
exports.HtmlSub = class HtmlSub extends HtmlElem {}
exports.HtmlSummary = class HtmlSummary extends HtmlElem {}
exports.HtmlSup = class HtmlSup extends HtmlElem {}
exports.HtmlTBody = class HtmlTBody extends HtmlElem {}
exports.HtmlTFoot = class HtmlTFoot extends HtmlElem {}
exports.HtmlTHead = class HtmlTHead extends HtmlElem {}
exports.HtmlTable = class HtmlTable extends HtmlElem {}
exports.HtmlTd = class HtmlTd extends HtmlElem {}
exports.HtmlTemplate = class HtmlTemplate extends HtmlElem {}
exports.HtmlTextArea = class HtmlTextArea extends HtmlElem {}
exports.HtmlTh = class HtmlTh extends HtmlElem {}
exports.HtmlTime = class HtmlTime extends HtmlElem {}
exports.HtmlTitle = class HtmlTitle extends HtmlElem {}
exports.HtmlTr = class HtmlTr extends HtmlElem {}
exports.HtmlTrack = class HtmlTrack extends HtmlElem {}
exports.HtmlU = class HtmlU extends HtmlElem {}
exports.HtmlUl = class HtmlUl extends HtmlElem {}
exports.HtmlVar = class HtmlVar extends HtmlElem {}
exports.HtmlVideo = class HtmlVideo extends HtmlElem {}
exports.HtmlWbr = class HtmlWbr extends HtmlElem {}

exports.HtmlA.defineProps([
  'origin',
])

exports.HtmlA.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'target',
  'download',
  'rel',
  'rev',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlArea.defineProps([
  'origin',
  'relList',
])

exports.HtmlArea.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'alt',
  'coords',
  'shape',
  'target',
  'download',
  'rel',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlAudio.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlAudio.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
])

exports.HtmlAudio.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
], true)

exports.HtmlBase.defineProps([
  'href',
  'target',
], true)

exports.HtmlBlockQuote.defineProps([
  'cite',
], true)

exports.HtmlButton.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlButton.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlButton.defineProps([
  'autofocus',
  'disabled',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'type',
  'value',
], true)

exports.HtmlCanvas.defineMethods([
  'getContext',
  'probablySupportsContext',
  'toDataURL',
  'toBlob',
])

exports.HtmlCanvas.defineProps([
  'width',
  'height',
], true)

exports.HtmlCol.defineProps([
  'span',
], true)

exports.HtmlColGroup.defineProps([
  'span',
], true)

exports.HtmlData.defineProps([
  'value',
], true)

exports.HtmlDel.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlDetails.defineProps([
  'open',
], true)

exports.HtmlDialog.defineMethods([
  'show',
  'showModal',
  'close',
])

exports.HtmlDialog.defineProps([
  'open',
  'returnValue',
], true)

exports.HtmlEmbed.defineProps([
  'src',
  'type',
  'width',
  'height',
], true)

exports.HtmlFieldSet.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlFieldSet.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlFieldSet.defineProps([
  'disabled',
  'name',
], true)

exports.HtmlForm.defineMethods([
  'checkValidity',
  'reportValidity',
  'reset',
  'submit',
])

exports.HtmlForm.defineProps([
  'acceptCharset',
  'action',
  'autocomplete',
  'enctype',
  'method',
  'name',
  'noValidate',
  'target',
], true)

exports.HtmlIFrame.defineProps([
  'sandbox',
])

exports.HtmlIFrame.defineProps([
  'src',
  'srcdoc',
  'allowFullScreen',
  'allowPaymentRequest',
  'width',
  'height',
  'referrerPolicy',
], true)

exports.HtmlImg.defineMethods([
  'decode',
])

exports.HtmlImg.defineProps([
  'complete',
  'currentSrc',
  'naturalWidth',
  'naturalHeight',
])

exports.HtmlImg.defineProps([
  'alt',
  'referrerPolicy',
  'src',
  'srcset',
  'sizes',
  'crossOrigin',
  'useMap',
  'isMap',
  'height',
  'width',
], true)

exports.HtmlInput.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
  'stepDown',
  'stepUp',
])

exports.HtmlInput.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlInput.defineProps([
  'accept',
  'alt',
  'autocomplete',
  'autofocus',
  'defaultChecked',
  'checked',
  'dirName',
  'disabled',
  'files',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'indeterminate',
  'inputMode',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'defaultValue',
  'value',
  'valueAsDate',
  'valueAsNumber',
  'width',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlIns.defineProps([
  'cite',
  'dateTime',
], true)

exports.HtmlLabel.defineProps([
  'htmlFor',
], true)

exports.HtmlLi.defineProps([
  'value',
], true)

exports.HtmlLink.defineProps([
  'relList',
  'sizes',
])

exports.HtmlLink.defineProps([
  'href',
  'crossOrigin',
  'rel',
  'rev',
  'media',
  'nonce',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

exports.HtmlMap.defineProps([
  'name',
], true)

exports.HtmlMeta.defineAttrs([
  'charset',
])

exports.HtmlMeta.defineProps([
  'httpEquiv',
  'name',
  'content',
], true)

exports.HtmlMeter.defineProps([
  'value',
  'min',
  'max',
  'low',
  'high',
  'optimum',
], true)

exports.HtmlObject.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlObject.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlObject.defineProps([
  'name',
  'data',
  'type',
  'typeMustMatch',
  'useMap',
  'width',
  'height',
], true)

exports.HtmlOl.defineProps([
  'reversed',
  'start',
  'type',
], true)

exports.HtmlOptGroup.defineProps([
  'disabled',
  'label',
], true)

exports.HtmlOption.defineProps([
  'index',
])

exports.HtmlOption.defineProps([
  'disabled',
  'label',
  'defaultSelected',
  'selected',
  'value',
  'text',
], true)

exports.HtmlOutput.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlOutput.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlOutput.defineProps([
  'htmlFor',
  'defaultValue',
  'name',
  'value',
], true)

exports.HtmlParam.defineProps([
  'name',
  'value',
], true)

exports.HtmlProgress.defineProps([
  'position',
])

exports.HtmlProgress.defineProps([
  'value',
  'max',
], true)

exports.HtmlQ.defineProps([
  'cite',
], true)

exports.HtmlScript.defineProps([
  'src',
  'type',
  'noModule',
  'charset',
  'async',
  'defer',
  'crossOrigin',
  'integrity',
  'referrerPolicy',
  'text',
  'nonce',
], true)

exports.HtmlSelect.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlSelect.defineProps([
  'type',
  'length',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlSelect.defineProps([
  'autocomplete',
  'autofocus',
  'disabled',
  'multiple',
  'name',
  'required',
  'size',
  'selectedIndex',
  'value',
], true)

exports.HtmlSource.defineProps([
  'src',
  'type',
  'srcset',
  'sizes',
  'media',
], true)

exports.HtmlStyle.defineProps([
  'media',
  'nonce',
  'type',
], true)

exports.HtmlTd.defineProps([
  'cellIndex',
])

exports.HtmlTd.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
], true)

exports.HtmlTextArea.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
])

exports.HtmlTextArea.defineProps([
  'type',
  'textLength',
  'willValidate',
  'validity',
  'validationMessage',
])

exports.HtmlTextArea.defineProps([
  'autocomplete',
  'autofocus',
  'cols',
  'dirName',
  'disabled',
  'inputMode',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'wrap',
  'step',
  'defaultValue',
  'value',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

exports.HtmlTh.defineProps([
  'cellIndex',
])

exports.HtmlTh.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
  'scope',
  'abbr',
], true)

exports.HtmlTime.defineProps([
  'dateTime',
], true)

exports.HtmlTitle.defineProps([
  'text',
], true)

exports.HtmlTr.defineProps([
  'rowIndex',
  'sectionRowIndex',
])

exports.HtmlTrack.defineProps([
  'readyState',
  'track',
])

exports.HtmlTrack.defineProps([
  'kind',
  'src',
  'srclang',
  'label',
  'default',
], true)

exports.HtmlVideo.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

exports.HtmlVideo.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
  'videoWidth',
  'videoHeight',
])

exports.HtmlVideo.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
  'width',
  'height',
  'poster',
], true)


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Dataset = __webpack_require__(3)
const DomElem = __webpack_require__(5)
const Style = __webpack_require__(11)

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    return this.node.hasAttribute('tabindex') ? this.node.tabIndex : null
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    if(tabIndex === null) {
      this.node.removeAttribute('tabindex')
    }
    else this.node.tabIndex = tabIndex
  }
}

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineAttrs([
  Dataset,
  Style,
])

HtmlElem.defineProps([
  'isContentEditable',
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'innerText',
  'inputMode',
  'lang',
  'title',
  'translate',
], true)

module.exports = HtmlElem


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(4)

let undefined

class Dataset extends AttrType
{
  /**
   * @param {DomElem} elem
   * @returns {DOMStringMap}
   */
  static get(elem) {
    return elem.node.dataset
  }

  /**
   * @param {DomElem} elem
   * @param {{}} dataset
   */
  static set(elem, dataset) {
    const map = elem.node.dataset
    for(let [name, value] of Object.entries(dataset)) {
      if(value !== undefined) {
        map[name] = dataset[name]
      }
    }
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'dataset' in elem.node
  }
}

module.exports = Dataset


/***/ }),
/* 4 */
/***/ ((module) => {

/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  static defaultValue = null

  /**
   * @param {DomElem} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.localName, value)
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return elem.node.hasAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   */
  static remove(elem) {
    elem.node.removeAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {*} value
   * @returns {boolean}
   */
  static removeOnValue(elem, value) {
    return value === null && !this.remove(elem)
  }

  /**
   * @returns {string}
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {string}
   */
  static get localName() {
    return this.name.toLowerCase()
  }
}

module.exports = AttrType


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(6)
const DomNode = __webpack_require__(7)

const { document } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class DomElem extends DomNode
{
  className = undefined

  static prefix = ''

  static namespace = ''

  /**
   * @return {*|Element}
   */
  createNode() {
    let name, constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name.startsWith(prefix)) {
      name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    return super.createNode()
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    super.init(deep)
    this.setClassName()
  }

  setClassName() {
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    let constructor = this.constructor
    const prefix = constructor.prefix
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        break
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.has(this)? attr.get(this) : attr.defaultValue
    }
    return this.node.getAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(typeof attr === 'function') {
      if(!attr.removeOnValue(this, value)) {
        attr.set(this, value)
      }
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.has]
   * @returns {boolean}
   */
  hasAttr(attr) {
    return typeof attr === 'function'?
      attr.has(this) :
      this.node.hasAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.remove]
   */
  removeAttr(attr) {
    if(typeof attr === 'function') {
      attr.remove(this)
    }
    else this.node.removeAttribute(attr)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attrs() {
    const attrs = {}
    for(const { name, value } of this.node.attributes) {
      attrs[name] = value
    }
    return attrs
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null?
        this.removeAttr(name) :
        this.setAttr(name, value)
    }
  }

  /**
   * @return {string[]}
   */
  get class() {
    return this.node.className.split(' ')
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set class(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        this.node.classList.toggle(token, value[token])
      }
    }
    else this.node.classList = value
  }

  /**
   * @returns {DOMRect}
   */
  get rect() {
    return this.node.getBoundingClientRect()
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    let attr, name
    for(attr of attrs) {
      name = typeof attr === 'string'? attr : attr.attrName
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.getAttr(attr)
        },
        set(value) {
          this.setAttr(attr, value)
        },
      })
    }
  }
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineProps([
  'classList',
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.defineProps([
  'id',
  'innerHTML',
  'textContent',
], true)

Object.defineProperties(DomElem.prototype, {
  html : Object.getOwnPropertyDescriptor(DomElem.prototype, 'innerHTML'),
  text : Object.getOwnPropertyDescriptor(DomElem.prototype, 'textContent'),
})

module.exports = DomElem


/***/ }),
/* 6 */
/***/ ((module) => {

if(typeof window === 'undefined') {
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(6)
const morph = __webpack_require__(8)
const events = __webpack_require__(9)
const {
  getKey,
  nodeWillAppend,
  nodeDidAppend,
  nodeWillUpdate,
  childrenWillUpdate,
  childrenDidUpdate,
  nodeWillRemove,
} = __webpack_require__(10)

const SPECIAL_PROPS = ['node', 'children']
const { CustomEvent, DocumentFragment, EventTarget, Node } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = null
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    this.setProps()
  }

  /**
   * @param {*} props
   * @return {{}}
   */
  normalizeProps(props) {
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
  }

  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {boolean} deep
   * @returns {this}
   */
  init(deep = false) {
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
    return this
  }

  setProps() {
    let name, value
    for(name in this.props) {
      if(!this.props.hasOwnProperty(name)) {
        continue
      }
      value = this.props[name]
      if(SPECIAL_PROPS.includes(name) || value === undefined) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
      else if(name in this.node) {
        this.node[name] = value
      }
    }
  }

  /**
   * @param {*} children
   * @return {(*|DomNode|string)[]}
   */
  normalizeChildren(children) {
    const result = []
    for(const child of [children].flat(Infinity)) {
      if(child === false || child === null || child === undefined) {
        continue
      }
      result.push(child)
    }
    return result
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    Object.assign(this.state, typeof state === 'function' ? state(this.state) : state)
    this.props.children = this.normalizeChildren(this.render())
    if(this.props.children.length) {
      const fragment = new DocumentFragment
      fragment.append(...this.props.children.map(child => child.node || child))
      morph(this.node, fragment, {
        childrenOnly : true,
        getKey,
        nodeWillAppend,
        nodeDidAppend,
        nodeWillUpdate,
        childrenWillUpdate,
        childrenDidUpdate,
        nodeWillRemove,
      })
    }
    this.componentDidUpdate(this.props, prevState)
  }

  /**
   * @return {*}
   */
  render() {
    return this.props.children
  }

  componentDidMount() {
    void null
  }

  componentDidUpdate() {
    void null
  }

  componentWillUnmount() {
    void null
  }

  /**
   * @param {boolean} keepNode
   */
  destroy(keepNode = false) {
    if(!this.node) {
      return
    }
    this.componentWillUnmount()
    for(const child of this.props.children) {
      child.node && child.destroy(true)
    }
    for(const type of this.__handlers.keys()) {
      this.node[type] = null
    }
    keepNode || this.node.remove()
    this.node.__instance = null
    this.node = null
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback(e, e.target.__instance)
            this.__handlers.set(name, callback)
          }
          else this.__handlers.delete(name)
        },
        get() {
          return this.node[name]
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this.node[name](...args)
        },
      })
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    for(const name of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          this.node[name] = value
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {{}} props
   * @param {Node} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props)
    if(!parentNode) {
      return instance.init(true)
    }
    const fragment = new DocumentFragment
    fragment.append(instance.node)
    morph(parentNode, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillAppend,
      nodeDidAppend,
    })
    return instance
  }
}

DomNode.defineEvents(Object.keys(events))

Object.defineProperty(DomNode.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = DomNode


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(6)
const { Node } = window
const { indexOf } = Array.prototype

function morph(nodeA, nodeB, options = {}) {
  options.getKey ??= getNodeId
  if(options.childrenOnly) {
    morphChildren(nodeA, nodeB, options)
    return nodeA
  }
  morphNode(nodeA, nodeB, options)
  return nodeA
}

function morphNode(nodeA, nodeB, options) {
  const {
    nodeWillUpdate,
    nodeDidUpdate,
    childrenWillUpdate,
    childrenDidUpdate,
  } = options
  nodeWillUpdate?.(nodeA, nodeB)
  morphAttrs(nodeA, nodeB, options)
  nodeDidUpdate?.(nodeA)
  childrenWillUpdate?.(nodeA, nodeB)
  morphChildren(nodeA, nodeB, options)
  childrenDidUpdate?.(nodeA)
}

function morphAttrs(nodeA, nodeB) {
  const names = new Set
  let attr, value
  for(attr of nodeA.attributes) {
    names.add(attr.name)
    value = nodeB.getAttribute(attr.name)
    if(value === null) {
      nodeA.removeAttribute(attr.name)
      continue
    }
    if(attr.value !== value) {
      attr.value = value
    }
  }
  for(attr of nodeB.attributes) {
    if(!names.has(attr.name)) {
      nodeA.setAttribute(attr.name, attr.value)
    }
  }
  switch(nodeA.tagName) {
    case 'OPTION':
      nodeA.selected = nodeB.selected
      break
    case 'INPUT':
      nodeA.checked = nodeB.checked
      nodeA.indeterminate = nodeB.indeterminate
    case 'TEXTAREA':
      nodeA.value = nodeB.value
  }
}

function morphChildren(nodeA, nodeB, options) {
  const indexA = getKeyIndex(nodeA, options.getKey)
  const indexB = getKeyIndex(nodeB, options.getKey)
  if(!indexA || !indexB) {
    morphChildNodes(nodeA, nodeB, options)
    return
  }
  const {
    getKey,
    nodeWillAppend,
    nodeDidAppend,
    nodeWillRemove,
    nodeDidRemove,
  } = options
  const childrenB = Array.from(nodeB.children)
  let childA = nodeA.firstElementChild
  let childB, nextA, i, j
  while(childA) {
    nextA = childA.nextElementSibling
    if(!indexB[getKey(childA)]) {
      nodeWillRemove?.(childA)
      childA.remove()
      deep(childA, nodeDidRemove)
    }
    childA = nextA
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(childA) {
      morphNode(childA, childB, options)
      continue
    }
    nextA = nodeA.children[i]
    nodeWillAppend?.(childB)
    if(nextA) {
      nextA.before(childB)
    }
    else nodeA.append(childB)
    deep(childB, nodeDidAppend)
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(!childA) {
      continue
    }
    j = indexOf.call(nodeA.children, childA)
    if(i === j) {
      continue
    }
    nextA = nodeA.children[i].nextElementSibling
    if(nextA) {
      if(childA !== nextA && childA.nextElementSibling !== nextA) {
        nextA.before(childA)
      }
    }
    else nodeA.append(childA)
    morphNode(childA, childB, options)
  }
}

function morphChildNodes(nodeA, nodeB, options) {
  const {
    getKey,
    nodeWillAppend,
    nodeDidAppend,
    nodeWillUpdate,
    nodeDidUpdate,
    nodeWillRemove,
    nodeDidRemove,
  } = options
  const childNodesA = Array.from(nodeA.childNodes)
  const childNodesB = Array.from(nodeB.childNodes)
  const length = Math.max(childNodesA.length, childNodesB.length)
  let i, childA, childB
  for(i = 0; i < length; i++) {
    childA = childNodesA[i]
    childB = childNodesB[i]
    if(!childA) {
      nodeWillAppend?.(childB)
      nodeA.append(childB)
      deep(childB, nodeDidAppend)
      continue
    }
    if(!childB) {
      nodeWillRemove?.(childA)
      childA.remove()
      deep(childA, nodeDidRemove)
      continue
    }
    if(childA.nodeType === Node.TEXT_NODE && childB.nodeType === Node.TEXT_NODE) {
      if(childA.data !== childB.data) {
        nodeWillUpdate?.(childA, childB)
        childA.data = childB.data
        nodeDidUpdate?.(childA)
      }
      continue
    }
    if(childA.nodeType === childB.nodeType && childA.tagName === childB.tagName) {
      if(getKey(childA) === getKey(childB)) {
        morphNode(childA, childB, options)
        continue
      }
    }
    nodeWillRemove?.(childA)
    nodeWillAppend?.(childB)
    childA.replaceWith(childB)
    deep(childA, nodeDidRemove)
    deep(childB, nodeDidAppend)
  }
}

function getNodeId(node) {
  return node.id
}

function getKeyIndex(node, getKey) {
  const index = {}
  let child, key
  for(child of node.childNodes) {
    key = getKey(child)
    if(!key) {
      return null
    }
    index[key] = child
  }
  return index
}

function deep(node, handler) {
  if(!handler) {
    return
  }
  handler(node)
  if(!node.children) {
    return
  }
  for(const child of node.children) {
    deep(child, handler)
  }
}

module.exports = morph


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(6)

/**
 * type : [constructor, bubbles, cancelable]
 */
module.exports = {
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  load : [window.Event],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  scroll : [window.Event, true],
  submit : [window.Event, true, true],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
  transitioncancel : [window.TransitionEvent, true],
  transitionend : [window.TransitionEvent, true, true],
  transitionrun : [window.TransitionEvent, true],
  transitionstart : [window.TransitionEvent, true],
}


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode} nodeB
   */
  nodeWillAppend(nodeB) {
    nodeB.__instance?.init(true)
  },
  /**
   * @param {ChildNode} nodeB
   */
  nodeDidAppend(nodeB) {
    nodeB.__instance?.componentDidMount()
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(instanceB && instanceA) {
      if(instanceA.constructor === instanceB.constructor) {
        instanceB.state = instanceA.state
      }
      instanceB.init()
    }
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  childrenWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(instanceB && instanceA) {
      for(const type of instanceA.__handlers.keys()) {
        nodeA[type] = null
      }
      for(const type of instanceB.__handlers.keys()) {
        nodeA[type] = nodeB[type]
        nodeB[type] = null
      }
      if(instanceA.constructor === instanceB.constructor) {
        instanceB.__prevProps = instanceA.props
      }
      instanceB.node = nodeA
      nodeA.__instance = instanceB
      nodeB.__instance = null
    }
  },
  /**
   * @param {ChildNode} nodeA
   */
  childrenDidUpdate(nodeA) {
    const instanceA = nodeA.__instance
    if(instanceA) {
      if(instanceA.__prevProps) {
        instanceA.componentDidUpdate(instanceA.__prevProps, instanceA.state)
        instanceA.__prevProps = null
      }
      else instanceA.componentDidMount()
    }
  },
  /**
   * @param {ChildNode} nodeA
   */
  nodeWillRemove(nodeA) {
    nodeA.__instance?.destroy(true)
  },
}


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(4)

class Style extends AttrType
{
  /**
   * @param {HtmlElem} elem
   * @returns {CSSStyleDeclaration}
   */
  static get(elem) {
    return elem.node.style
  }

  /**
   * @param {HtmlElem} elem
   * @param {string|{}} style
   */
  static set(elem, style) {
    if(typeof style === 'string') {
      elem.node.style = style
    }
    else Object.assign(elem.node.style, style)
  }

  /**
   * @param {HtmlElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'style' in elem.node
  }
}

module.exports = Style


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});