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
/***/ ((module, exports, __webpack_require__) => {

/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
exports = module.exports = __webpack_require__(1)

exports.AttrType = __webpack_require__(4)
exports.Dataset = __webpack_require__(3)
exports.DomElem = __webpack_require__(5)
exports.DomNode = __webpack_require__(7)
exports.HtmlElem = __webpack_require__(2)
exports.Style = __webpack_require__(17)

exports.window = __webpack_require__(6)


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
const Style = __webpack_require__(17)

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 * @abstract
 */
class HtmlElem extends DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'
}

HtmlElem.defineAttrs([
  Dataset,
  Style,
])

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineProps([
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
  'tabIndex',
  'title',
  'translate',
], true)

module.exports = HtmlElem


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(4)

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
    let constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name?.startsWith(prefix)) {
      const name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    throw Error(`Unable to resolve localName for "${ prefix }" prefix`)
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setClassName()
    super.init(deep)
  }

  setClassName() {
    if(this.props.className !== undefined) {
      this.className = this.props.className
    }
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
        return
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
      return attr.get(this)
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
      value === null || attr.set(this, value)
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
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
      value === null ?
        this.node.removeAttribute(name) :
        this.node.setAttribute(name, value)
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
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    for(const attr of attrs) {
      const name = typeof attr === 'string' ? attr : attr.attrName
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        get() {
          return this.getAttr(attr)
        },
        set(value) {
          if(value !== undefined) {
            this.setAttr(attr, value)
          }
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

/**
 * @module xwindow
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 */
if(typeof window === 'undefined') {
  // Calling via eval() prevents jsdom extraction when using a module bundler
  const { JSDOM } = eval('require("jsdom")')
  const { window } = new JSDOM
  module.exports = window
}
else module.exports = window


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(6)
const actualize = __webpack_require__(8)
const events = __webpack_require__(15)
const {
  getKey,
  nodeWillMount,
  nodeDidMount,
  nodeWillUpdate,
  nodeDidUpdate,
  childrenDidUpdate,
  nodeWillUnmount,
} = __webpack_require__(16)

const { CustomEvent, DocumentFragment, EventTarget, Node } = window
const SPECIAL_PROPS = {
  children : true,
  className : true,
  key : true,
  node : true,
}

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
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    if(props.key) {
      this.key = props.key
    }
  }

  /**
   * @param {*} [props]
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
   * @param {boolean} [deep]
   * @returns {this}
   */
  init(deep) {
    this.setProps()
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
  }

  setProps() {
    let name, value
    for(name in this.props) {
      value = this.props[name]
      if(SPECIAL_PROPS[name]) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
    }
  }

  /**
   * @param {*} [children]
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
    const fragment = new DocumentFragment
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.props.children = this.normalizeChildren(this.render())
    fragment.append(...this.props.children.map(child => child.node || child))
    actualize(this.node, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
      nodeWillUpdate,
      nodeDidUpdate,
      childrenDidUpdate,
      nodeWillUnmount,
    })
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
   * @param {boolean} [keepNode]
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
      this.__handlers.delete(type)
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
            this.node[name] = e => callback.call(this, e, e.target.__instance)
            this.__handlers.set(name, callback)
            return
          }
          this.node[name] = null
          this.__handlers.delete(name)
        },
        get() {
          return this.__handlers.get(name) || null
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
          if(value !== undefined) {
            this.node[name] = value
          }
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
      instance.init(true)
      return instance
    }
    const fragment = new DocumentFragment
    fragment.append(instance.node)
    actualize(parentNode, fragment, {
      childrenOnly : true,
      getKey,
      nodeWillMount,
      nodeDidMount,
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

/**
 * @module actualize
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see {@link https://github.com/aristov/actualize}
 */
module.exports = __webpack_require__(9)


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const setChildren = __webpack_require__(10)
const updateNode = __webpack_require__(13)

const getNodeId = node => node.id

/**
 * @param {*|Node} treeA node for updating
 * @param {*|Node} treeB node to which `treeA` should be updated
 * @param {{}} [options] actualize options
 * @param {boolean} [options.childrenOnly] Update only the child nodes of the `treeA`, the element itself will be skipped. The default value is `false`.
 * @param {function} [options.getKey] Called to get a custom key of the node in a child list.  The default value is `node.id`.
 * @param {function} [options.nodeWillMount] Called before a node from the `B` tree is mounted to the `A` tree.
 * @param {function} [options.nodeDidMount] Called after a node from the `B` tree has been mounted to the `A` tree.
 * @param {function} [options.nodeWillUnmount] Called before a node in the `A` tree is unmounted.
 * @param {function} [options.nodeDidUnmount] Called after a node in the `A` tree has been unmounted.
 * @param {function} [options.nodeWillUpdate] Called before updating a node in the `A` tree.
 * @param {function} [options.nodeDidUpdate] Called after updating a node in the `A` tree.
 * @param {function} [options.childrenWillUpdate] Called before updating the child nodes of an element in the `A` tree.
 * @param {function} [options.childrenDidUpdate] Called after updating the child nodes of an element in the `A` tree.
 * @return {Element}
 */
function actualize(treeA, treeB, options = {}) {
  if(!options.getKey) {
    options.getKey = getNodeId
  }
  if(options.childrenOnly) {
    setChildren(treeA, treeB, options)
    return treeA
  }
  return updateNode(treeA, treeB, options)
}

module.exports = actualize


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = setChildren // avoiding empty exports for circular dependency

const getKeyIndex = __webpack_require__(11)
const setChildNodes = __webpack_require__(12)
const updateNode = __webpack_require__(13)

const { indexOf } = Array.prototype

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 * @param {{}} [options]
 */
function setChildren(nodeA, nodeB, options) {
  const indexA = getKeyIndex(nodeA, options.getKey)
  const indexB = getKeyIndex(nodeB, options.getKey)
  if(!indexA || !indexB) {
    setChildNodes(nodeA, nodeB, options)
    return
  }
  const {
    getKey,
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
  } = options
  const childrenB = Array.from(nodeB.children)
  let childA = nodeA.firstElementChild
  let childB, nextA, i, j
  while(childA) {
    nextA = childA.nextElementSibling
    if(!indexB[getKey(childA)]) {
      nodeWillUnmount?.(childA)
      childA.remove()
      nodeDidUnmount?.(childA)
    }
    childA = nextA
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(childA) {
      continue
    }
    nextA = nodeA.children[i]
    nodeWillMount?.(childB)
    if(nextA) {
      nextA.before(childB)
    }
    else nodeA.append(childB)
    nodeDidMount?.(childB)
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(!childA) {
      continue
    }
    j = indexOf.call(nodeA.children, childA)
    if(i === j) {
      updateNode(childA, childB, options)
      continue
    }
    nextA = nodeA.children[i].nextElementSibling
    if(nextA) {
      if(childA !== nextA && childA.nextElementSibling !== nextA) {
        nextA.before(childA)
      }
    }
    else nodeA.append(childA)
    updateNode(childA, childB, options)
  }
}


/***/ }),
/* 11 */
/***/ ((module) => {

const ELEMENT_NODE = 1

/**
 * @param {Node} node
 * @param {function} getKey
 * @return {{}|null}
 */
function getKeyIndex(node, getKey) {
  const index = {}
  let child, key
  for(child of node.childNodes) {
    if(child.nodeType !== ELEMENT_NODE) {
      return null
    }
    key = getKey(child)
    if(!key) {
      return null
    }
    index[key] = child
  }
  return index
}

module.exports = getKeyIndex


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const updateNode = __webpack_require__(13)

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 * @param {{}} [options]
 */
function setChildNodes(nodeA, nodeB, options) {
  const {
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
  } = options
  const childNodesA = Array.from(nodeA.childNodes)
  const childNodesB = Array.from(nodeB.childNodes)
  const length = Math.max(childNodesA.length, childNodesB.length)
  let i, childA, childB
  for(i = 0; i < length; i++) {
    childA = childNodesA[i]
    childB = childNodesB[i]
    if(!childA) {
      nodeWillMount?.(childB)
      nodeA.append(childB)
      nodeDidMount?.(childB)
      continue
    }
    if(!childB) {
      nodeWillUnmount?.(childA)
      childA.remove()
      nodeDidUnmount?.(childA)
      continue
    }
    updateNode(childA, childB, options)
  }
}

module.exports = setChildNodes


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const setAttrs = __webpack_require__(14)
const setChildren = __webpack_require__(10)

const ELEMENT_NODE = 1
const TEXT_NODE = 3

/**
 * @param {*|Node} nodeA
 * @param {*|Node} nodeB
 * @param {{}} [options]
 * @retuns {Node}
 */
function updateNode(nodeA, nodeB, options) {
  const {
    getKey,
    nodeWillMount,
    nodeDidMount,
    nodeWillUnmount,
    nodeDidUnmount,
    nodeWillUpdate,
    nodeDidUpdate,
    childrenWillUpdate,
    childrenDidUpdate,
  } = options
  if(nodeA.nodeType === TEXT_NODE && nodeB.nodeType === TEXT_NODE) {
    if(nodeA.data !== nodeB.data) {
      nodeWillUpdate?.(nodeA, nodeB)
      nodeA.data = nodeB.data
      nodeDidUpdate?.(nodeA, nodeB)
    }
    return nodeA
  }
  if(nodeA.nodeType === ELEMENT_NODE && nodeB.nodeType === ELEMENT_NODE) {
    if(nodeA.tagName === nodeB.tagName && getKey(nodeA) === getKey(nodeB)) {
      nodeWillUpdate?.(nodeA, nodeB)
      setAttrs(nodeA, nodeB)
      nodeDidUpdate?.(nodeA, nodeB)
      childrenWillUpdate?.(nodeA, nodeB)
      setChildren(nodeA, nodeB, options)
      childrenDidUpdate?.(nodeA, nodeB)
      return nodeA
    }
  }
  nodeWillUnmount?.(nodeA)
  nodeWillMount?.(nodeB)
  nodeA.replaceWith(nodeB)
  nodeDidUnmount?.(nodeA)
  nodeDidMount?.(nodeB)
  return nodeB
}

module.exports = updateNode


/***/ }),
/* 14 */
/***/ ((module) => {

/**
 * @param {*|Element} nodeA
 * @param {*|Element} nodeB
 */
function setAttrs(nodeA, nodeB) {
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

module.exports = setAttrs


/***/ }),
/* 15 */
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
/* 16 */
/***/ ((module) => {

/**
 * @param {DomElem|string} child
 */
const componentDidMount = child => {
  if(child.node) {
    child.componentDidMount()
    child.props.children.forEach(componentDidMount)
  }
}

module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeWillMount(nodeB) {
    nodeB.__instance?.init(true)
  },
  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeDidMount(nodeB) {
    nodeB.__instance && componentDidMount(nodeB.__instance)
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.state = instanceA.state
    }
    instanceB.init()
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    for(const type of instanceA.__handlers.keys()) {
      nodeA[type] = null
    }
    for(const type of instanceB.__handlers.keys()) {
      nodeA[type] = nodeB[type]
      nodeB[type] = null
    }
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  childrenDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    instanceB.node = nodeA
    nodeA.__instance = instanceB
    nodeB.__instance = null
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.componentDidUpdate(instanceA.props, instanceB.state)
    }
    else instanceB.componentDidMount()
  },
  /**
   * @param {ChildNode|Element} nodeA
   */
  nodeWillUnmount(nodeA) {
    nodeA.__instance?.destroy(true)
  },
}


/***/ }),
/* 17 */
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});