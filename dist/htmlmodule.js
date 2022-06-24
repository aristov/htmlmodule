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

exports.AttrType = __webpack_require__(6)
exports.Context = __webpack_require__(7)
exports.ElemType = __webpack_require__(3)
exports.HtmlType = __webpack_require__(2)

exports.window = __webpack_require__(4)


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const HtmlType = __webpack_require__(2)

exports.HtmlA = class HtmlA extends HtmlType
{
  static tagName = 'A'
}
exports.HtmlAbbr = class HtmlAbbr extends HtmlType
{
  static tagName = 'ABBR'
}
exports.HtmlAddress = class HtmlAddress extends HtmlType
{
  static tagName = 'ADDRESS'
}
exports.HtmlArea = class HtmlArea extends HtmlType
{
  static tagName = 'AREA'
}
exports.HtmlArticle = class HtmlArticle extends HtmlType
{
  static tagName = 'ARTICLE'
}
exports.HtmlAside = class HtmlAside extends HtmlType
{
  static tagName = 'ASIDE'
}
exports.HtmlAudio = class HtmlAudio extends HtmlType
{
  static tagName = 'AUDIO'
}
exports.HtmlB = class HtmlB extends HtmlType
{
  static tagName = 'B'
}
exports.HtmlBase = class HtmlBase extends HtmlType
{
  static tagName = 'BASE'
}
exports.HtmlBdi = class HtmlBdi extends HtmlType
{
  static tagName = 'BDI'
}
exports.HtmlBdo = class HtmlBdo extends HtmlType
{
  static tagName = 'BDO'
}
exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlType
{
  static tagName = 'BLOCKQUOTE'
}
exports.HtmlBody = class HtmlBody extends HtmlType
{
  static tagName = 'BODY'
}
exports.HtmlBr = class HtmlBr extends HtmlType
{
  static tagName = 'BR'
}
exports.HtmlButton = class HtmlButton extends HtmlType
{
  static tagName = 'BUTTON'
}
exports.HtmlCanvas = class HtmlCanvas extends HtmlType
{
  static tagName = 'CANVAS'
}
exports.HtmlCaption = class HtmlCaption extends HtmlType
{
  static tagName = 'CAPTION'
}
exports.HtmlCite = class HtmlCite extends HtmlType
{
  static tagName = 'CITE'
}
exports.HtmlCode = class HtmlCode extends HtmlType
{
  static tagName = 'CODE'
}
exports.HtmlCol = class HtmlCol extends HtmlType
{
  static tagName = 'COL'
}
exports.HtmlColGroup = class HtmlColGroup extends HtmlType
{
  static tagName = 'COLGROUP'
}
exports.HtmlData = class HtmlData extends HtmlType
{
  static tagName = 'DATA'
}
exports.HtmlDataList = class HtmlDataList extends HtmlType
{
  static tagName = 'DATALIST'
}
exports.HtmlDd = class HtmlDd extends HtmlType
{
  static tagName = 'DD'
}
exports.HtmlDel = class HtmlDel extends HtmlType
{
  static tagName = 'DEL'
}
exports.HtmlDetails = class HtmlDetails extends HtmlType
{
  static tagName = 'DETAILS'
}
exports.HtmlDfn = class HtmlDfn extends HtmlType
{
  static tagName = 'DFN'
}
exports.HtmlDialog = class HtmlDialog extends HtmlType
{
  static tagName = 'DIALOG'
}
exports.HtmlDiv = class HtmlDiv extends HtmlType
{
  static tagName = 'DIV'
}
exports.HtmlDl = class HtmlDl extends HtmlType
{
  static tagName = 'DL'
}
exports.HtmlDt = class HtmlDt extends HtmlType
{
  static tagName = 'DT'
}
exports.HtmlEm = class HtmlEm extends HtmlType
{
  static tagName = 'EM'
}
exports.HtmlEmbed = class HtmlEmbed extends HtmlType
{
  static tagName = 'EMBED'
}
exports.HtmlFieldSet = class HtmlFieldSet extends HtmlType
{
  static tagName = 'FIELDSET'
}
exports.HtmlFigCaption = class HtmlFigCaption extends HtmlType
{
  static tagName = 'FIGCAPTION'
}
exports.HtmlFigure = class HtmlFigure extends HtmlType
{
  static tagName = 'FIGURE'
}
exports.HtmlFooter = class HtmlFooter extends HtmlType
{
  static tagName = 'FOOTER'
}
exports.HtmlForm = class HtmlForm extends HtmlType
{
  static tagName = 'FORM'
}
exports.HtmlH1 = class HtmlH1 extends HtmlType
{
  static tagName = 'H1'
}
exports.HtmlH2 = class HtmlH2 extends HtmlType
{
  static tagName = 'H2'
}
exports.HtmlH3 = class HtmlH3 extends HtmlType
{
  static tagName = 'H3'
}
exports.HtmlH4 = class HtmlH4 extends HtmlType
{
  static tagName = 'H4'
}
exports.HtmlH5 = class HtmlH5 extends HtmlType
{
  static tagName = 'H5'
}
exports.HtmlH6 = class HtmlH6 extends HtmlType
{
  static tagName = 'H6'
}
exports.HtmlHGroup = class HtmlHGroup extends HtmlType
{
  static tagName = 'HGROUP'
}
exports.HtmlHead = class HtmlHead extends HtmlType
{
  static tagName = 'HEAD'
}
exports.HtmlHeader = class HtmlHeader extends HtmlType
{
  static tagName = 'HEADER'
}
exports.HtmlHr = class HtmlHr extends HtmlType
{
  static tagName = 'HR'
}
exports.HtmlHtml = class HtmlHtml extends HtmlType
{
  static tagName = 'HTML'
}
exports.HtmlI = class HtmlI extends HtmlType
{
  static tagName = 'I'
}
exports.HtmlIFrame = class HtmlIFrame extends HtmlType
{
  static tagName = 'IFRAME'
}
exports.HtmlImg = class HtmlImg extends HtmlType
{
  static tagName = 'IMG'
}
exports.HtmlInput = class HtmlInput extends HtmlType
{
  static tagName = 'INPUT'
}
exports.HtmlIns = class HtmlIns extends HtmlType
{
  static tagName = 'INS'
}
exports.HtmlKbd = class HtmlKbd extends HtmlType
{
  static tagName = 'KBD'
}
exports.HtmlLabel = class HtmlLabel extends HtmlType
{
  static tagName = 'LABEL'
}
exports.HtmlLegend = class HtmlLegend extends HtmlType
{
  static tagName = 'LEGEND'
}
exports.HtmlLi = class HtmlLi extends HtmlType
{
  static tagName = 'LI'
}
exports.HtmlLink = class HtmlLink extends HtmlType
{
  static tagName = 'LINK'
}
exports.HtmlMain = class HtmlMain extends HtmlType
{
  static tagName = 'MAIN'
}
exports.HtmlMap = class HtmlMap extends HtmlType
{
  static tagName = 'MAP'
}
exports.HtmlMark = class HtmlMark extends HtmlType
{
  static tagName = 'MARK'
}
exports.HtmlMenu = class HtmlMenu extends HtmlType
{
  static tagName = 'MENU'
}
exports.HtmlMeta = class HtmlMeta extends HtmlType
{
  static tagName = 'META'
}
exports.HtmlMeter = class HtmlMeter extends HtmlType
{
  static tagName = 'METER'
}
exports.HtmlNav = class HtmlNav extends HtmlType
{
  static tagName = 'NAV'
}
exports.HtmlNoScript = class HtmlNoScript extends HtmlType
{
  static tagName = 'NOSCRIPT'
}
exports.HtmlObject = class HtmlObject extends HtmlType
{
  static tagName = 'OBJECT'
}
exports.HtmlOl = class HtmlOl extends HtmlType
{
  static tagName = 'OL'
}
exports.HtmlOptGroup = class HtmlOptGroup extends HtmlType
{
  static tagName = 'OPTGROUP'
}
exports.HtmlOption = class HtmlOption extends HtmlType
{
  static tagName = 'OPTION'
}
exports.HtmlOutput = class HtmlOutput extends HtmlType
{
  static tagName = 'OUTPUT'
}
exports.HtmlP = class HtmlP extends HtmlType
{
  static tagName = 'P'
}
exports.HtmlParam = class HtmlParam extends HtmlType
{
  static tagName = 'PARAM'
}
exports.HtmlPicture = class HtmlPicture extends HtmlType
{
  static tagName = 'PICTURE'
}
exports.HtmlPre = class HtmlPre extends HtmlType
{
  static tagName = 'PRE'
}
exports.HtmlProgress = class HtmlProgress extends HtmlType
{
  static tagName = 'PROGRESS'
}
exports.HtmlQ = class HtmlQ extends HtmlType
{
  static tagName = 'Q'
}
exports.HtmlRp = class HtmlRp extends HtmlType
{
  static tagName = 'RP'
}
exports.HtmlRt = class HtmlRt extends HtmlType
{
  static tagName = 'RT'
}
exports.HtmlRuby = class HtmlRuby extends HtmlType
{
  static tagName = 'RUBY'
}
exports.HtmlS = class HtmlS extends HtmlType
{
  static tagName = 'S'
}
exports.HtmlSamp = class HtmlSamp extends HtmlType
{
  static tagName = 'SAMP'
}
exports.HtmlScript = class HtmlScript extends HtmlType
{
  static tagName = 'SCRIPT'
}
exports.HtmlSection = class HtmlSection extends HtmlType
{
  static tagName = 'SECTION'
}
exports.HtmlSelect = class HtmlSelect extends HtmlType
{
  static tagName = 'SELECT'
}
exports.HtmlSmall = class HtmlSmall extends HtmlType
{
  static tagName = 'SMALL'
}
exports.HtmlSource = class HtmlSource extends HtmlType
{
  static tagName = 'SOURCE'
}
exports.HtmlSpan = class HtmlSpan extends HtmlType
{
  static tagName = 'SPAN'
}
exports.HtmlStrong = class HtmlStrong extends HtmlType
{
  static tagName = 'STRONG'
}
exports.HtmlStyle = class HtmlStyle extends HtmlType
{
  static tagName = 'STYLE'
}
exports.HtmlSub = class HtmlSub extends HtmlType
{
  static tagName = 'SUB'
}
exports.HtmlSummary = class HtmlSummary extends HtmlType
{
  static tagName = 'SUMMARY'
}
exports.HtmlSup = class HtmlSup extends HtmlType
{
  static tagName = 'SUP'
}
exports.HtmlTBody = class HtmlTBody extends HtmlType
{
  static tagName = 'TBODY'
}
exports.HtmlTFoot = class HtmlTFoot extends HtmlType
{
  static tagName = 'TFOOT'
}
exports.HtmlTHead = class HtmlTHead extends HtmlType
{
  static tagName = 'THEAD'
}
exports.HtmlTable = class HtmlTable extends HtmlType
{
  static tagName = 'TABLE'
}
exports.HtmlTd = class HtmlTd extends HtmlType
{
  static tagName = 'TD'
}
exports.HtmlTemplate = class HtmlTemplate extends HtmlType
{
  static tagName = 'TEMPLATE'
}
exports.HtmlTextArea = class HtmlTextArea extends HtmlType
{
  static tagName = 'TEXTAREA'
}
exports.HtmlTh = class HtmlTh extends HtmlType
{
  static tagName = 'TH'
}
exports.HtmlTime = class HtmlTime extends HtmlType
{
  static tagName = 'TIME'
}
exports.HtmlTitle = class HtmlTitle extends HtmlType
{
  static tagName = 'TITLE'
}
exports.HtmlTr = class HtmlTr extends HtmlType
{
  static tagName = 'TR'
}
exports.HtmlTrack = class HtmlTrack extends HtmlType
{
  static tagName = 'TRACK'
}
exports.HtmlU = class HtmlU extends HtmlType
{
  static tagName = 'U'
}
exports.HtmlUl = class HtmlUl extends HtmlType
{
  static tagName = 'UL'
}
exports.HtmlVar = class HtmlVar extends HtmlType
{
  static tagName = 'VAR'
}
exports.HtmlVideo = class HtmlVideo extends HtmlType
{
  static tagName = 'VIDEO'
}
exports.HtmlWbr = class HtmlWbr extends HtmlType
{
  static tagName = 'WBR'
}

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

Object.values(exports).forEach(type => type.class = undefined)


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ElemType = __webpack_require__(3)

/**
 * @see https://html.spec.whatwg.org/#htmlelement
 */
class HtmlType extends ElemType
{
  static class = undefined

  /**
   * @return {string}
   */
  get innerText() {
    return this.node.innerText
  }

  /**
   * @param {string|null} innerText
   */
  set innerText(innerText) {
    this.node.innerText = innerText
  }
}

HtmlType.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlType.defineProps([
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlType.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'inputMode',
  'lang',
  'tabIndex',
  'title',
  'translate',
], true)

module.exports = HtmlType


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(4)
const events = __webpack_require__(5)

const { indexOf, map } = Array.prototype
const { CustomEvent, document } = window
const AttrNameMap = {
  htmlFor : 'for',
  defaultValue : 'value',
  defaultChecked : 'checked',
  defaultSelected : 'selected',
  value : null,
  checked : null,
  selected : null,
  indeterminate : null,
}
const nullNode = document.createElement('div')

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class ElemType
{
  static tagName = 'DIV'

  static class = undefined

  static specialProps = {
    children : true,
    class : true,
    className : true,
    key : true,
    node : true,
    role : true,
    tagName : true,
  }

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    Object.defineProperties(this, {
      __handlers : {
        value : new Map,
      },
      props : {
        writable : true,
        value : props,
      },
      state : {
        configurable : true,
        value : {},
      },
      node : {
        writable : true,
        value : null,
      },
      children : {
        writable : true,
        value : null,
      },
      className : {
        configurable : true,
        writable : true,
        value : undefined,
      },
      key : {
        writable : true,
        value : props.key ?? null,
      },
    })
  }

  /**
   * @return {*|Element}
   * @protected
   */
  createNode() {
    return document.createElement(this.props.tagName || this.constructor.tagName)
  }

  /**
   * @private
   */
  _setRoleAttr() {
    let role = this.props.role
    if(role !== null) {
      role ||= this.constructor.role
    }
    if(role) {
      this.node.setAttribute('role', role)
    }
    else this.node.removeAttribute('role')
  }

  /**
   * @private
   */
  _setClassName() {
    if(this.props.className !== undefined) {
      this.className = this.props.className
    }
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    const items = new Set
    let constructor = this.constructor
    let name
    do {
      name = constructor.hasOwnProperty('class') && constructor.class
      if(name === undefined) {
        break
      }
      if(constructor === this.constructor && this.props.hasOwnProperty('class')) {
        name = this.props.class
      }
      if(name === null) {
        continue
      }
      name ||= constructor.name
      name && items.add(name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
    if(items.size) {
      this.node.className = Array.from(items).join(' ')
    }
  }

  /**
   * @param {constructor @link AttrType|string} attr
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
   * @param {constructor @link AttrType|string} attr
   * @param {string} [attr.nodeName]
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(value === null) {
      this.node.removeAttribute(attr.nodeName || attr)
    }
    else if(typeof attr === 'function') {
      attr.set(this, value)
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
   * @param {Element} [node]
   * @private
   */
  _init(node) {
    this.node = node || this.createNode()
    this.node.__instance = this
    this._setRoleAttr()
    this._setClassName()
    this._setProps()
    const children = this.render()
    this.children = [children].flat(Infinity).filter(Boolean)
    if(node) {
      if(children !== undefined) {
        this._setChildren()
      }
      this.init()
      return
    }
    this.node.append(...this.children.map(child => {
      if(child.props) {
        child._init()
        return child.node
      }
      return child
    }))
  }

  /**
   * @private
   */
  _setProps() {
    const specialProps = this.constructor.specialProps
    let name
    for(name in this.props) {
      if(specialProps[name]) {
        continue
      }
      if(name in this) {
        this[name] = this.props[name]
      }
    }
  }

  /**
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    if(state) {
      if(typeof state === 'function') {
        state = state(this.state)
      }
      Object.assign(this.state, state)
    }
    this._render()
    this.update(this.props, prevState)
  }

  /**
   * @private
   */
  _render() {
    const refs = {}
    let key, item
    for(key in this) {
      item = this[key]
      if(item?.node) {
        refs[key] = item
      }
    }
    const children = this.render()
    this.children = [children].flat(Infinity).filter(Boolean)
    if(children !== undefined) {
      this._setChildren()
    }
    for(key in refs) {
      item = refs[key]
      if(this.node.contains(item.node)) {
        this[key] = item
      }
      if(!this.node.contains(this[key].node)) {
        delete this[key]
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  _udpateElem(elem) {
    if(this.constructor !== elem.constructor) {
      this._replaceElem(elem)
      return
    }
    const specialProps = this.constructor.specialProps
    const prevProps = Object.assign({}, this.props)
    const props = Object.assign({}, elem.props)
    let name
    for(name in prevProps) {
      if(!specialProps[name]) {
        if(props.hasOwnProperty(name)) {
          this[name] = props[name]
        }
        else this[name] = null
      }
      delete props[name]
    }
    Object.assign(this, props)
    this.props = elem.props
    this._render()
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  _replaceElem(elem) {
    const node = this.node
    this.destroy()
    this.removeAllListeners()
    for(const attr of Array.from(node.attributes)) {
      node.removeAttribute(attr.name)
    }
    this.node = nullNode
    elem._init(node)
  }

  /**
   * @private
   */
  _setChildren() {
    const indexA = {}
    const indexB = {}
    let nodeA, childA, key
    for(nodeA of this.node.childNodes) {
      childA = nodeA.__instance
      key = childA?.key
      if(!key) {
        this._setChildNodes()
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of this.children) {
      key = childB.key
      if(!key) {
        this._setChildNodes()
        return
      }
      indexB[key] = childB
    }
    const children = map.call(this.node.children, node => node.__instance)
    let nextA, i, j
    for(childA of children) {
      indexB[childA.key] || childA._destroy()
    }
    for(i = 0; i < this.children.length; i++) {
      childB = this.children[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = this.node.children[i]
      childB._init()
      if(nextA) {
        nextA.before(childB.node)
      }
      else {
        this.node.append(childB.node)
      }
      init(childB)
    }
    for(i = 0; i < this.children.length; i++) {
      childB = this.children[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = indexOf.call(this.node.children, childA.node)
      if(i !== j) {
        nextA = this.node.children[i].nextSibling
        if(nextA) {
          if(childA.node !== nextA && childA.node.nextSibling !== nextA) {
            nextA.before(childA.node)
          }
        }
        else {
          this.node.append(childA.node)
        }
      }
      childA._udpateElem(childB)
      if(childA.constructor === childB.constructor) {
        this.children[i] = childA
      }
    }
  }

  /**
   * @private
   */
  _setChildNodes() {
    const childNodes = Array.from(this.node.childNodes)
    const length = Math.max(childNodes.length, this.children.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      nodeA = childNodes[i]
      childB = this.children[i]
      if(nodeA === undefined) {
        childB._init?.()
        this.node.append(childB.node || childB)
        init(childB)
        continue
      }
      childA = nodeA.__instance || nodeA.data || {}
      if(childB === undefined) {
        if(childA.node) {
          childA._destroy()
        }
        else nodeA.remove()
        continue
      }
      if(typeof childA === 'string' && typeof childB === 'string') {
        if(childA !== childB) {
          nodeA.data = childB
        }
        continue
      }
      if(childA.node && childB.props) {
        if(nodeA.tagName === childB.tagName.toUpperCase() && childA.key === childB.key) {
          childA._udpateElem(childB)
          if(childA.constructor === childB.constructor) {
            this.children[i] = childA
          }
          continue
        }
      }
      childA._destroy?.(true)
      childB._init?.()
      nodeA.replaceWith(childB.node || childB)
      init(childB)
    }
  }

  /**
   * @return {*}
   * @abstract
   */
  render() {
    return this.props.children
  }

  /**
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @param {{}} prevProps
   * @param {{}} prevState
   * @abstract
   */
  update(prevProps, prevState) {
    void null
  }

  /**
   * @abstract
   */
  destroy() {
    void null
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  _destroy(keepNode = false) {
    if(this.node === nullNode) {
      return
    }
    this.destroy()
    this.removeAllListeners()
    for(const node of this.node.children) {
      node.__instance?._destroy(true)
    }
    keepNode || this.node.remove()
    delete this.node.__instance
    this.node = nullNode
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
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture,once,passive}|boolean|ElemType|*} [options]
   * @param {ElemType} [options.context=this]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof ElemType) {
      options = { context : options }
    }
    const context = options.context || this
    let listeners = context.__handlers.get(eventName)
    listeners || context.__handlers.set(eventName, listeners = new Map)
    if(listeners.has(callback)) {
      return
    }
    const listener = event => {
      options.once && listeners.delete(callback)
      callback.call(context, event, event.target.__instance)
    }
    listener.__target = this.node
    listener.__options = options
    listeners.set(callback, listener)
    this.node.addEventListener(eventName, listener, {
      capture : options.capture || false,
      once : options.once || false,
      passive : options.passive || false,
    })
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{context,capture}|boolean|ElemType|*} [options]
   * @param {ElemType} [options.context=this]
   * @param {boolean} [options.capture=false]
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    else if(options instanceof ElemType) {
      options = { context : options }
    }
    const context = options.context || this
    let listeners = context.__handlers.get(eventName)
    if(!listeners?.has(callback)) {
      return
    }
    this.node.removeEventListener(eventName, listeners.get(callback), {
      capture : options.capture,
    })
    listeners.delete(callback)
    listeners.size || context.__handlers.delete(eventName)
  }

  /**
   * @public
   */
  removeAllListeners() {
    for(const [eventName, listeners] of this.__handlers.entries()) {
      this.__handlers.delete(eventName)
      if(typeof listeners === 'function') {
        this.node[eventName] = null
        continue
      }
      for(const listener of listeners.values()) {
        listener.__target.removeEventListener(eventName, listener, {
          capture : listener.__options.capture,
        })
      }
      listeners.clear()
    }
  }

  /**
   * @param {constructor @link ElemType} type
   * @return {null|ElemType|*}
   */
  find(type) {
    let child
    for(child of this.children) {
      if(typeof child === 'string') {
        continue
      }
      if(child instanceof type) {
        return child
      }
      if(child = child.find(type)) {
        return child
      }
    }
    return null
  }

  /**
   * @param {constructor @link ElemType} type
   * @return {(null|ElemType|*)[]}
   */
  findAll(type) {
    const result = []
    let child
    for(child of this.children) {
      if(typeof child === 'string') {
        continue
      }
      if(child instanceof type) {
        result.push(child)
      }
      result.push(...child.findAll(type))
    }
    return result
  }

  /**
   * @returns {NamedNodeMap}
   */
  get attributes() {
    return this.node.attributes
  }

  /**
   * @param {{}} attributes
   */
  set attributes(attributes) {
    let name, value
    for(name in attributes) {
      value = attributes[name]
      if(value === null) {
        this.node.removeAttribute(name)
      }
      else this.node.setAttribute(name, value)
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get classList() {
    return this.node.classList
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set classList(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
      return
    }
    if(!value || value.constructor !== Object) {
      this.node.classList = value
      return
    }
    let key
    for(key in value) {
      this.node.classList.toggle(key, value[key])
    }
  }

  /**
   * @returns {DOMStringMap}
   */
  get dataset() {
    return this.node.dataset
  }

  /**
   * @param {{}} dataset
   */
  set dataset(dataset) {
    let name, value
    for(name in dataset) {
      value = dataset[name]
      if(value === null) {
        delete this.node.dataset[name]
      }
      else this.node.dataset[name] = value
    }
  }

  /**
   * @return {string}
   */
  get innerHTML() {
    return this.node.innerHTML
  }

  /**
   * @param {string|null} innerHTML
   */
  set innerHTML(innerHTML) {
    this.node.innerHTML = innerHTML
  }

  /**
   * @returns {CSSStyleDeclaration}
   */
  get style() {
    return this.node.style
  }

  /**
   * @param {{}|string|null} style
   */
  set style(style) {
    if(style === null) {
      this.node.removeAttribute('style')
      return
    }
    if(typeof style === 'string') {
      this.node.style = style
    }
    else {
      Object.assign(this.node.style, style)
    }
    if(this.node.getAttribute('style') === '') {
      this.node.removeAttribute('style')
    }
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.node?.tagName || this.props.tagName || this.constructor.tagName
  }

  /**
   * @param {string[]|(constructor[] @link AttrType)} attrs
   */
  static defineAttrs(attrs) {
    for(const attr of attrs) {
      const name = attr.propName || attr
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
        value(...args) {
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
    for(const prop of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[prop]
        },
      }
      if(setters) {
        desc.set = function(value) {
          if(value === null && AttrNameMap[prop] !== null) {
            const attr = AttrNameMap[prop] || prop.toLowerCase()
            this.node.removeAttribute(attr)
          }
          else this.node[prop] = value
        }
      }
      Object.defineProperty(this.prototype, prop, desc)
    }
  }

  /**
   * @param {{}} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    const node = elem.props.node
    elem._init(node)
    parentNode?.append(elem.node)
    node || init(elem)
    return elem
  }
}

/**
 * @param {ElemType} item
 */
function init(item) {
  if(item.node) {
    item.children.forEach(init)
    item.init()
  }
}

ElemType.defineEvents(Object.keys(events))

ElemType.defineMethods([
  'scrollTo',
  'scrollBy',
])

ElemType.defineProps([
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

ElemType.defineProps([
  'id',
], true)

module.exports = ElemType


/***/ }),
/* 4 */
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
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(4)

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
  paste : [window.ClipboardEvent, true, true],
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
/* 6 */
/***/ ((module) => {

/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 * @abstract
 */
class AttrType
{
  static nodeName = undefined

  static propName = undefined

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @returns {string|null|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.nodeName)
  }

  /**
   * @param {ElemType} elem
   * @param {string|null|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.nodeName, value)
  }
}

module.exports = AttrType


/***/ }),
/* 7 */
/***/ ((module) => {

/**
 * @param {*} value
 * @constructor
 */
function Context(value) {
  /**
   * @param {*} newValue
   * @param {*} children
   * @return {*}
   */
  this.Provider = ({ value : newValue, children }) => {
    value = newValue
    return children
  }
  /**
   * @param {function} render
   */
  this.Consumer = render => render(value)
}

module.exports = Context


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