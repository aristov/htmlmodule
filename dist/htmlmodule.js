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

exports.AttrType = __webpack_require__(7)
exports.Context = __webpack_require__(8)
exports.ElemType = __webpack_require__(3)
exports.HtmlType = __webpack_require__(2)
exports.TextType = __webpack_require__(6)

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

exports.HtmlA.defineProps({
  download : 'download',
  hash : 'hash',
  host : 'host',
  hostname : 'hostname',
  href : 'href',
  hreflang : 'hreflang',
  password : 'password',
  pathname : 'pathname',
  port : 'port',
  protocol : 'protocol',
  referrerPolicy : 'referrerpolicy',
  rel : 'rel',
  rev : 'rev',
  search : 'search',
  target : 'target',
  type : 'type',
  username : 'username',
})

exports.HtmlArea.defineProps({
  alt : 'alt',
  coords : 'coords',
  download : 'download',
  hash : 'hash',
  host : 'host',
  hostname : 'hostname',
  href : 'href',
  hreflang : 'hreflang',
  password : 'password',
  pathname : 'pathname',
  port : 'port',
  protocol : 'protocol',
  referrerPolicy : 'referrerpolicy',
  rel : 'rel',
  search : 'search',
  shape : 'shape',
  target : 'target',
  type : 'type',
  username : 'username',
})

exports.HtmlAudio.defineMethods([
  'addTextTrack',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'load',
  'pause',
  'play',
])

exports.HtmlAudio.defineProps({
  autoplay : 'autoplay',
  controls : 'controls',
  crossOrigin : 'crossorigin',
  currentTime : null,
  defaultMuted : null,
  defaultPlaybackRate : null,
  loop : 'loop',
  muted : null,
  playbackRate : null,
  preload : 'preload',
  src : 'src',
  srcObject : null,
  volume : null,
})

exports.HtmlBase.defineProps({
  href : 'href',
  target : 'target',
})

exports.HtmlBlockQuote.defineProps({
  cite : 'cite',
})

exports.HtmlButton.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlButton.defineProps({
  autofocus : 'autofocus',
  disabled : 'disabled',
  formAction : 'formaction',
  formEnctype : 'formenctype',
  formMethod : 'formmethod',
  formNoValidate : 'formnovalidate',
  formTarget : 'formtarget',
  name : 'name',
  type : 'type',
  value : null,
})

exports.HtmlCanvas.defineMethods([
  'getContext',
  'probablySupportsContext',
  'toBlob',
  'toDataURL',
])

exports.HtmlCanvas.defineProps({
  height : 'height',
  width : 'width',
})

exports.HtmlCol.defineProps({
  span : 'span',
})

exports.HtmlColGroup.defineProps({
  span : 'span',
})

exports.HtmlData.defineProps({
  value : null,
})

exports.HtmlDel.defineProps({
  cite : 'cite',
  dateTime : 'datetime',
})

exports.HtmlDetails.defineProps({
  open : 'open',
})

exports.HtmlDialog.defineMethods([
  'close',
  'show',
  'showModal',
])

exports.HtmlDialog.defineProps({
  open : 'open',
  returnValue : null,
})

exports.HtmlEmbed.defineProps({
  height : 'height',
  src : 'src',
  type : 'type',
  width : 'width',
})

exports.HtmlFieldSet.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlFieldSet.defineProps({
  disabled : 'disabled',
  name : 'name',
})

exports.HtmlForm.defineMethods([
  'checkValidity',
  'reportValidity',
  'reset',
  'submit',
])

exports.HtmlForm.defineProps({
  acceptCharset : 'accept-charset',
  action : 'action',
  autocomplete : 'autocomplete',
  enctype : 'enctype',
  method : 'method',
  name : 'name',
  noValidate : 'novalidate',
  target : 'target',
})

exports.HtmlIFrame.defineProps({
  allowFullScreen : 'allowfullscreen',
  height : 'height',
  referrerPolicy : 'referrerpolicy',
  src : 'src',
  srcdoc : 'srcdoc',
  width : 'width',
})

exports.HtmlImg.defineMethods([
  'decode',
])

exports.HtmlImg.defineProps({
  alt : 'alt',
  crossOrigin : 'crossorigin',
  height : 'height',
  isMap : 'ismap',
  referrerPolicy : 'referrerpolicy',
  sizes : 'sizes',
  src : 'src',
  srcset : 'srcset',
  useMap : 'usemap',
  width : 'width',
})

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

exports.HtmlInput.defineProps({
  accept : 'accept',
  alt : 'alt',
  autocomplete : 'autocomplete',
  autofocus : 'autofocus',
  checked : null,
  defaultChecked : null,
  defaultValue : 'value',
  dirName : 'dirname',
  disabled : 'disabled',
  files : 'files',
  formAction : 'formaction',
  formEnctype : 'formenctype',
  formMethod : 'formmethod',
  formNoValidate : 'formnovalidate',
  formTarget : 'formtarget',
  height : 'height',
  indeterminate : null,
  inputMode : 'inputmode',
  max : 'max',
  maxLength : 'maxlength',
  min : 'min',
  minLength : 'minlength',
  multiple : 'multiple',
  name : 'name',
  pattern : 'pattern',
  placeholder : 'placeholder',
  readOnly : 'readonly',
  required : 'required',
  selectionDirection : null,
  selectionEnd : null,
  selectionStart : null,
  size : 'size',
  src : 'src',
  step : 'step',
  type : 'type',
  value : null,
  valueAsDate : null,
  valueAsNumber : null,
  width : 'width',
})

exports.HtmlIns.defineProps({
  cite : 'cite',
  dateTime : 'datetime',
})

exports.HtmlLabel.defineProps({
  htmlFor : 'for',
})

exports.HtmlLi.defineProps({
  value : null,
})

exports.HtmlLink.defineProps({
  crossOrigin : 'crossorigin',
  href : 'href',
  hreflang : 'hreflang',
  media : 'media',
  nonce : 'nonce',
  referrerPolicy : 'referrerpolicy',
  rel : 'rel',
  rev : 'rev',
  type : 'type',
})

exports.HtmlMap.defineProps({
  name : 'name',
})

exports.HtmlMeta.defineProps({
  charset : 'charset',
  content : 'content',
  httpEquiv : 'http-equiv',
  name : 'name',
})

exports.HtmlMeter.defineProps({
  high : 'high',
  low : 'low',
  max : 'max',
  min : 'min',
  optimum : 'optimum',
  value : null,
})

exports.HtmlObject.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlObject.defineProps({
  data : 'data',
  height : 'height',
  name : 'name',
  type : 'type',
  useMap : 'usemap',
  width : 'width',
})

exports.HtmlOl.defineProps({
  reversed : 'reversed',
  start : 'start',
  type : 'type',
})

exports.HtmlOptGroup.defineProps({
  disabled : 'disabled',
  label : 'label',
})

exports.HtmlOption.defineProps({
  defaultSelected : null,
  disabled : 'disabled',
  label : 'label',
  selected : null,
  text : 'text',
  value : null,
})

exports.HtmlOutput.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlOutput.defineProps({
  defaultValue : null,
  htmlFor : 'for',
  name : 'name',
  value : null,
})

exports.HtmlProgress.defineProps({
  max : 'max',
  value : null,
})

exports.HtmlQ.defineProps({
  cite : 'cite',
})

exports.HtmlScript.defineProps({
  async : 'async',
  charset : 'charset',
  crossOrigin : 'crossorigin',
  defer : 'defer',
  integrity : 'integrity',
  noModule : 'nomodule',
  nonce : 'nonce',
  referrerPolicy : 'referrerpolicy',
  src : 'src',
  text : 'text',
  type : 'type',
})

exports.HtmlSelect.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

exports.HtmlSelect.defineProps({
  autocomplete : 'autocomplete',
  autofocus : 'autofocus',
  disabled : 'disabled',
  multiple : 'multiple',
  name : 'name',
  required : 'required',
  selectedIndex : null,
  size : 'size',
  value : null,
})

exports.HtmlSource.defineProps({
  media : 'media',
  sizes : 'sizes',
  src : 'src',
  srcset : 'srcset',
  type : 'type',
})

exports.HtmlStyle.defineProps({
  media : 'media',
  nonce : 'nonce',
  type : 'type',
})

exports.HtmlTd.defineProps({
  colSpan : 'colspan',
  headers : 'headers',
  rowSpan : 'rowspan',
})

exports.HtmlTextArea.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
])

exports.HtmlTextArea.defineProps({
  autocomplete : 'autocomplete',
  autofocus : 'autofocus',
  cols : 'cols',
  defaultValue : null,
  dirName : 'dirname',
  disabled : 'disabled',
  inputMode : 'inputmode',
  maxLength : 'maxlength',
  minLength : 'minlength',
  name : 'name',
  placeholder : 'placeholder',
  readOnly : 'readonly',
  required : 'required',
  rows : 'rows',
  selectionDirection : null,
  selectionEnd : null,
  selectionStart : null,
  step : 'step',
  value : null,
  wrap : 'wrap',
})

exports.HtmlTh.defineProps({
  abbr : 'abbr',
  colSpan : 'colspan',
  headers : 'headers',
  rowSpan : 'rowspan',
  scope : 'scope',
})

exports.HtmlTime.defineProps({
  dateTime : 'datetime',
})

exports.HtmlTitle.defineProps({
  text : 'text',
})

exports.HtmlTrack.defineProps({
  default : 'default',
  kind : 'kind',
  label : 'label',
  src : 'src',
  srclang : 'srclang',
})

exports.HtmlVideo.defineMethods([
  'addTextTrack',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'load',
  'pause',
  'play',
])

exports.HtmlVideo.defineProps({
  autoplay : 'autoplay',
  controls : 'controls',
  crossOrigin : 'crossorigin',
  currentTime : null,
  defaultMuted : null,
  defaultPlaybackRate : null,
  height : 'height',
  loop : 'loop',
  muted : null,
  playbackRate : null,
  poster : 'poster',
  preload : 'preload',
  src : 'src',
  srcObject : null,
  volume : null,
  width : 'width',
})

Object.values(exports).forEach(type => type.class = undefined)


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ElemType = __webpack_require__(3)

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static class = undefined
}

HtmlType.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlType.defineProps({
  accessKey : 'accesskey',
  autofocus : 'autofocus',
  contentEditable : 'contenteditable',
  dir : 'dir',
  hidden : 'hidden',
  innerText : null,
  inputMode : 'inputmode',
  lang : 'lang',
  tabIndex : 'tabindex',
  title : 'title',
  translate : 'translate',
})

module.exports = HtmlType


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Comment, CustomEvent, HTMLElement, document } = __webpack_require__(4)
const EventType = __webpack_require__(5)
const TextType = __webpack_require__(6)

const { indexOf } = Array.prototype
const sampleNode = document.createElement('div')
const skipTypes = {
  undefined : true,
  boolean : true,
}
const specialProps = {
  children : true,
  node : true,
  parent : true,
  tagName : true,
}
const descriptors = {
  __vnode : {
    writable : true,
    value : null,
  },
  __node : {
    writable : true,
    value : null,
  },
  __children : {
    writable : true,
    value : null,
  },
  __index : {
    writable : true,
    value : null,
  },
  __handlers : {
    writable : true,
    value : null,
  },
  __loop : {
    writable : true,
    value : false,
  },
  props : {
    writable : true,
    value : null,
  },
  vnode : {
    writable : true,
    value : null,
  },
  node : {
    writable : true,
    value : null,
  },
  children : {
    writable : true,
    value : undefined,
  },
  parent : {
    writable : true,
    value : undefined,
  },
}

/**
 * @abstract
 */
class ElemType
{
  static namespace = undefined

  static tagName = 'DIV'

  static role = undefined

  static class = undefined

  static className = undefined

  static specialProps = specialProps

  static __mounted = new Set

  static __debug = false

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    if(props?.constructor !== Object) {
      props = { children : props }
    }
    if(props.children === undefined) {
      props.children = null
    }
    Object.defineProperties(this, descriptors)
    this.props = props
  }

  /**
   * @return {string}
   */
  toString() {
    this.__init()
    return this.node.outerHTML
  }

  /**
   * @param {{}|function} state
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    if(!this.state) {
      this.state = {}
    }
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.vnode = { attributes : {} }
    this.__assignProps()
    this.__update()
    this.update(this.props, prevState)
    ElemType.__mounted.clear()
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {null|ElemType|*}
   */
  find(type, filter) {
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || filter(child)) {
          return child
        }
      }
      if(child = child.find(type, filter)) {
        return child
      }
    }
    return null
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {(null|ElemType|*)[]}
   */
  findAll(type, filter) {
    const result = []
    let child
    for(child of this.children) {
      if(!child.props) {
        continue
      }
      if(child instanceof type) {
        if(!filter || filter(child)) {
          result.push(child)
        }
      }
      result.push(...child.findAll(type, filter))
    }
    return result
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
      const description = EventType[event] || [CustomEvent]
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
   * @param {{capture,once,passive}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   * @protected
   */
  on(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    let listeners = this.__handlers.get(eventName)
    if(!listeners) {
      this.__handlers.set(eventName, listeners = new Map)
    }
    let listener = listeners.get(callback)
    if(listener) {
      listener.__on = true
      return
    }
    listener = e => {
      options.once && listeners.delete(callback)
      callback.call(this, e, this.__getElemByNode(e.target))
    }
    listener.__on = true
    listener.__options = options
    listeners.set(callback, listener)
  }

  /**
   * @param {string} eventName
   * @param {function} callback
   * @param {{capture}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @protected
   */
  off(eventName, callback, options = {}) {
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    const listeners = this.__handlers.get(eventName)
    const listener = listeners?.get(callback)
    if(listener) {
      listener.__on = false
    }
  }

  /**
   * @protected
   */
  removeAllListeners() {
    let eventName, listeners, listener
    for([eventName, listeners] of this.__handlers.entries()) {
      if(typeof listeners === 'function') {
        listeners.__on = false
        continue
      }
      for(listener of listeners.values()) {
        listener.__on = false
      }
    }
  }

  /**
   * @protected
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @return {*}
   * @protected
   * @abstract
   */
  render() {
    return this.props.children
  }

  /**
   * @protected
   * @abstract
   */
  mount() {
    void null
  }

  /**
   * @param {{}} prevProps
   * @param {{}} prevState
   * @protected
   * @abstract
   */
  update(prevProps, prevState) {
    void null
  }

  /**
   * @protected
   * @abstract
   */
  destroy() {
    void null
  }

  /**
   * @param {constructor @link AttrType|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   * @protected
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.get(this)
    }
    return this.vnode.attributes[attr]
  }

  /**
   * @param {constructor @link AttrType|string} attr
   * @param {string} [attr.nodeName]
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   * @protected
   */
  setAttr(attr, value) {
    const attributes = this.vnode.attributes
    if(value === null) {
      delete attributes[attr.nodeName || attr]
    }
    else if(typeof attr === 'function') {
      attr.set(this, value)
    }
    else if(value !== attributes[attr]) {
      attributes[attr] = value
    }
  }

  /**
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node, parentNode) {
    if(this.node) {
      return
    }
    this.__handlers = new Map
    this.vnode = { attributes : {} }
    this.state && Object.defineProperty(this, 'state', {
      enumerable : false,
      value : this.state,
    })
    this.init()
    this.__assignProps()
    this.__children = this.render()
    if(this.parent === undefined) {
      this.node = node || this.__createNode()
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && ElemType.__mount(this)
      return
    }
    if(this.parent === null) {
      this.node = node || this.__createNode()
      this.__node = new Comment(this.constructor.name)
      if(node?.parentNode) {
        node.replaceWith(this.__node)
      }
      else parentNode?.append(this.__node)
      this.children = []
      node && ElemType.__mount(this)
      return
    }
    if(!this.parent.props) {
      this.node = node || this.__createNode()
      this.__setProps()
      this.__setChildren()
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
      this.parent.append(this.node)
      node && ElemType.__mount(this)
      return
    }
    this.node = !parentNode && node || this.__createNode()
    if(node && parentNode) {
      this.children.forEach(child => child.__destroy())
      this.children = []
    }
    this.__setProps()
    this.__setChildren()
    this.parent.__init()
    this.__node = this.parent.node
    node?.replaceWith(this.parent.__node || this.parent.node)
    node && ElemType.__mount(this)
  }

  /**
   * @private
   */
  __assignProps() {
    const specialProps = this.constructor.specialProps
    const props = this.props
    let name
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
  }

  /**
   * @return {*|Element}
   * @private
   */
  __createNode() {
    const constructor = this.constructor
    const namespace = constructor.namespace
    const tagName = this.props.tagName || constructor.tagName
    const node = namespace === undefined ?
      document.createElement(tagName) :
      document.createElementNS(namespace, tagName)
    if(ElemType.__debug) {
      node.__elem = this
    }
    return node
  }

  /**
   * @private
   */
  __setProps() {
    if(this.__vnode) {
      this.__resetProps()
    }
    this.__setRoleAttr()
    this.__setClassName()
    this.__updateProps()
    this.__setHandlers()
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.props
    const vnodeA = this.__vnode
    const vnodeB = this.vnode
    const node = this.node
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in vnodeA.attributes) {
          if(!vnodeB.attributes.hasOwnProperty(attr)) {
            node.removeAttribute(attr)
          }
        }
      },
      dataset() {
        for(attr in vnodeA.dataset) {
          if(!vnodeB.dataset?.hasOwnProperty(attr)) {
            delete node.dataset[attr]
          }
        }
      },
      style() {
        if(!vnodeB.hasOwnProperty('style')) {
          node.removeAttribute('style')
        }
      },
    }
    let name, attr, handler
    for(name in vnodeA) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(vnodeB.hasOwnProperty(name)) {
        continue
      }
      attr = map[name]
      if(attr) {
        node.removeAttribute(attr)
      }
      else node[name] = null
    }
  }

  /**
   * @private
   */
  __updateProps() {
    const map = this.constructor.props
    const vnode = this.vnode
    const node = this.node
    const handlers = {
      classList() {
        void null
      },
      className() {
        void null
      },
      attributes() {
        for(attr in vnode.attributes) {
          valueB = vnode.attributes[attr]
          if(valueB === null) {
            node.removeAttribute(attr)
          }
          else if(valueB !== node.getAttribute(attr)) {
            node.setAttribute(attr, valueB)
          }
        }
      },
      dataset() {
        for(attr in vnode.dataset) {
          valueB = vnode.dataset[attr]
          if(valueB === null) {
            delete node.dataset[attr]
          }
          else if(valueB !== node.dataset[attr]) {
            node.dataset[attr] = valueB
          }
        }
      },
      style() {
        if(typeof vnode.style !== 'string' && vnode.style !== null) {
          Object.assign(sampleNode.style, vnode.style)
          valueB = sampleNode.getAttribute('style')
        }
        else valueB = vnode.style ?? ''
        if(!valueB.length) {
          node.removeAttribute('style')
        }
        else if(valueB !== node.getAttribute('style')) {
          node.style = valueB
        }
        sampleNode.style = ''
      },
    }
    let name, attr, valueA, valueB, handler
    for(name in vnode) {
      if(handler = handlers[name]) {
        handler()
        continue
      }
      if(!(name in node)) {
        continue
      }
      attr = map[name]
      valueB = vnode[name]
      if(valueB === null) {
        if(attr) {
          node.removeAttribute(attr)
        }
        else node[name] = null
        continue
      }
      valueA = attr && typeof valueB !== 'boolean' ?
        node.getAttribute(attr) :
        node[name]
      if(valueA != valueB) {
        node[name] = valueB
      }
    }
  }

  /**
   * @private
   */
  __setHandlers() {
    const handlers = this.__handlers
    let eventName, listeners, callback, listener, options
    for([eventName, listeners] of handlers.entries()) {
      if(typeof listeners === 'function') {
        if(listeners.__on) {
          this.node[eventName] = listeners
          listeners.__on = false
          continue
        }
        this.node[eventName] = null
        handlers.delete(eventName)
        continue
      }
      for([callback, listener] of listeners.entries()) {
        options = listener.__options
        if(listener.__on) {
          this.node.addEventListener(eventName, listener, {
            capture : options.capture || false,
            once : options.once || false,
            passive : options.passive || false,
          })
          continue
        }
        this.node.removeEventListener(eventName, listener, {
          capture : options.capture,
        })
        listeners.delete(callback)
      }
      listeners.size || handlers.delete(eventName)
    }
  }

  /**
   * @private
   */
  __setRoleAttr() {
    let role = this.props.role
    if(role === undefined) {
      role = this.constructor.role
    }
    if(!role) {
      this.node.removeAttribute('role')
    }
    else if(role !== this.node.getAttribute('role')) {
      this.node.setAttribute('role', role)
    }
  }

  /**
   * @private
   */
  __setClassName() {
    let className = this.vnode.className
    if(className === null) {
      this.node.removeAttribute('class')
      return
    }
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this.__setClass()
    }
    else this.__setClassList([className])
  }

  /**
   * @private
   */
  __setClass() {
    const props = this.props
    const items = new Set
    let constructor = this.constructor
    let name
    do {
      name = constructor.hasOwnProperty('class') && constructor.class
      if(name === undefined) {
        break
      }
      if(constructor === this.constructor && props.hasOwnProperty('class')) {
        name = props.class
      }
      if(name === null) {
        continue
      }
      items.add(name || constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
    this.__setClassList(Array.from(items))
  }

  /**
   * @param classList
   * @private
   */
  __setClassList(classList) {
    const list = this.vnode.classList
    if(typeof list === 'string') {
      this.node.className = list
      return
    }
    if(!Array.isArray(list)) {
      let name
      for(name in list) {
        list[name] && classList.push(name)
      }
    }
    else classList.push(...list)
    classList = classList.filter(Boolean)
    if(!classList.length) {
      this.node.removeAttribute('class')
      return
    }
    const className = classList.join(' ')
    if(className !== this.node.className) {
      this.node.className = className
    }
  }

  /**
   * @private
   */
  __setChildren() {
    if(this.__children === undefined) {
      this.children = this.children || []
      return
    }
    const node = this.node
    const childrenA = this.children
    const childrenB = []
    const indexA = this.__index
    let indexB = {}
    let childB, key
    const forEach = childB => {
      if(skipTypes[typeof childB] || childB === null) {
        return
      }
      if(Array.isArray(childB)) {
        childB.forEach(forEach)
        return
      }
      if(!childB.props && !childB.__init) {
        childB = new TextType(childB)
        indexB = null
      }
      childrenB.push(childB)
      if(!childrenA) {
        childB.__init()
        node.append(childB.__getAnchorNode(this))
      }
      if(!indexB) {
        return
      }
      key = childB.props.key
      if(key === undefined) {
        indexB = null
      }
      else if(indexB[key]) {
        indexB = null
        console.warn('Duplicate key detected', key, childB, this)
      }
      else indexB[key] = childB
    }
    forEach(this.__children)
    this.__children = childrenB
    this.__index = indexB
    if(!childrenA) {
      this.children = childrenB
      return
    }
    if(!indexA || !indexB) {
      this.__setChildNodes()
      this.children = childrenB
      return
    }
    const childNodes = node.childNodes
    const length = childrenB.length
    let childA, nodeA, nextA, i, j
    for(childA of childrenA) {
      if(!indexB[childA.props.key]) {
        childA.__destroy()
      }
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.props.key]) {
        continue
      }
      nextA = childNodes[i]
      childB.__init()
      if(nextA) {
        nextA.before(childB.__getAnchorNode(this))
      }
      else {
        node.append(childB.__getAnchorNode(this))
      }
      ElemType.__mount(childB)
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      key = childB.props.key
      childA = indexA[key]
      if(!childA) {
        continue
      }
      nodeA = childA.__getAnchorNode(this)
      j = indexOf.call(childNodes, nodeA)
      if(i !== j) {
        nextA = childNodes[i].nextSibling
        if(nextA) {
          if(nodeA !== nextA && nodeA.nextSibling !== nextA) {
            nextA.before(nodeA)
          }
        }
        else node.append(nodeA)
      }
      childA.__updateElem(childB)
      if(childA.constructor === childB.constructor) {
        childrenB[i] = childA
        indexB[key] = childA
      }
    }
    this.children = childrenB
  }

  /**
   * @private
   */
  __setChildNodes() {
    const childrenA = this.children
    const childrenB = this.__children
    const length = Math.max(childrenA.length, childrenB.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      childA = childrenA[i]
      childB = childrenB[i]
      if(childA === undefined) {
        childB.__init()
        this.node.append(childB.__getAnchorNode(this))
        ElemType.__mount(childB)
        continue
      }
      if(childB === undefined) {
        childA.__destroy()
        continue
      }
      if(!childA.props && !childB.props) {
        if(childA.node.data !== childB.data) {
          childA.node.data = childB.data
        }
        childrenB[i] = childA
        continue
      }
      if(childA.props && childB.props) {
        if(childA.tagName === childB.tagName && childA.props.key === childB.props.key) {
          childA.__updateElem(childB)
          if(childA.constructor === childB.constructor) {
            childrenB[i] = childA
          }
          continue
        }
      }
      nodeA = childA.node
      childA.__destroy(true)
      childB.__init()
      nodeA.replaceWith(childB.__getAnchorNode(this))
      ElemType.__mount(childB)
    }
  }

  /**
   * @param {ElemType} context
   * @return {null|Comment|Element}
   * @private
   */
  __getAnchorNode(context) {
    const node = arguments[1] ? null : this.node
    if(this.parent === undefined || this.parent === context) {
      return node
    }
    if(this.parent === null || !this.parent.props) {
      return this.__node
    }
    return this.parent.__getAnchorNode(context, true) || this.__node || node
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __updateElem(elem) {
    if(this.__loop) {
      return
    }
    if(this.constructor !== elem.constructor) {
      this.__replaceElem(elem)
      return
    }
    const prevProps = this.props
    this.props = elem.props
    this.vnode = { attributes : {} }
    this.__assignProps()
    this.__update()
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __replaceElem(elem) {
    const node = this.node
    const children = this.children
    this.children = []
    this.__destroy(true)
    this.vnode = { attributes : {} }
    this.__resetProps()
    this.node = null
    elem.children = children
    elem.__init(node, node.parentNode)
  }

  /**
   * @private
   */
  __update() {
    const refs = {}
    let ref, item
    for(ref in this) {
      item = this[ref]
      if(item?.props) {
        refs[ref] = item
      }
    }
    this.__render()
    for(ref in refs) {
      item = refs[ref]
      if(this.__contains(item)) {
        this[ref] = item
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @return {boolean}
   * @private
   * todo __parent (optimization)
   */
  __contains(elem) {
    return !!this.find(ElemType, item => item.node === elem.node)
  }

  /**
   * @private
   */
  __render() {
    const parentA = this.parent
    this.parent = undefined
    this.__children = this.render()
    const parentB = this.parent
    if(parentB === undefined) {
      parentA?.props && parentA.__destroy(true)
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
      }
      this.__setProps()
      this.__setChildren()
      return
    }
    if(parentB === null) {
      parentA?.props && parentA.__destroy(true)
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      else this.node.remove()
      return
    }
    if(!parentB.props) {
      parentA?.props && parentA.__destroy(true)
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      this.__setProps()
      this.__setChildren()
      if(this.node.parentNode !== parentB) {
        parentB.append(this.node)
      }
      return
    }
    if(!parentA) {
      const node = new Comment(this.constructor.name)
      this.node.replaceWith(node)
      this.__setProps()
      this.__setChildren()
      parentB.__init()
      node.replaceWith(this.__node = parentB.node)
      return
    }
    if(!parentA.props) {
      this.__setProps()
      this.__setChildren()
      parentB.__init()
      this.__node.replaceWith(parentB.node)
      this.__node = parentB.node
      return
    }
    this.__setProps()
    this.__setChildren()
    if(parentB.tagName === parentA.tagName) {
      if(parentA.constructor === parentB.constructor) {
        this.parent = parentA
      }
      this.__loop = true
      parentA.__updateElem(parentB)
      this.__loop = false
      return
    }
    this.__node = null
    parentA.children = []
    parentA.__destroy(true)
    parentB.__init()
    this.__node = parentB.node
    parentA.node.replaceWith(this.__node)
  }

  /**
   * @param {Element} node
   * @return {ElemType|*|null}
   * @private
   */
  __getElemByNode(node) {
    return node === this.node ?
      this :
      this.find(ElemType, elem => elem.node === node)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    if(this.__loop) {
      return
    }
    this.destroy()
    this.removeAllListeners()
    this.__setHandlers()
    this.__loop = true
    this.children.forEach(child => child.__destroy(true))
    if(this.parent?.props) {
      this.parent.__destroy(true)
    }
    this.__loop = false
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    keepNode || this.node.remove()
  }

  /**
   * @return {{}}
   */
  get attributes() {
    return this.vnode.attributes
  }

  /**
   * @param {{}} attributes
   */
  set attributes(attributes) {
    const vnode = this.vnode
    if(attributes) {
      attributes = Object.assign(vnode.attributes, attributes)
      delete vnode.attributes
      vnode.attributes = attributes
    }
    else vnode.attributes = {}
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
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
   * @param {{}} props
   */
  static defineProps(props) {
    this.props = { ...this.props, ...props }
    for(const prop in props) {
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        get() {
          return this.vnode[prop]
        },
        set(value) {
          this.vnode[prop] = value
        },
      })
    }
  }

  /**
   * @param {[]} types
   */
  static defineHandlers(types) {
    for(const type of types) {
      const name = 'on' + type
      if(!(name in HTMLElement.prototype)) {
        continue
      }
      Object.defineProperty(ElemType.prototype, name, {
        configurable : true,
        set(callback) {
          if(!callback) {
            const listener = this.__handlers.get(name)
            if(listener) {
              listener.__on = false
            }
            return
          }
          const listener = e => {
            return callback.call(this, e, this.__getElemByNode(e.target))
          }
          listener.__on = true
          this.__handlers.set(name, listener)
        },
        get() {
          return this.__handlers.get(name) || null
        },
      })
    }
  }

  /**
   * @param {*} [props]
   * @param {ParentNode} [parentNode]
   * @return {*|ElemType}
   */
  static render(props, parentNode) {
    const elem = new this(props)
    const node = elem.props.node
    if(node?.hasChildNodes()) {
      node.innerHTML = ''
    }
    elem.__init(node, parentNode)
    node || ElemType.__mount(elem)
    ElemType.__mounted.clear()
    return elem
  }

  /**
   * @param {ElemType|TextType} item
   * @private
   */
  static __mount(item) {
    if(!item.props || item.__loop || ElemType.__mounted.has(item)) {
      return
    }
    item.children?.forEach(ElemType.__mount)
    item.mount()
    ElemType.__mounted.add(item)
    let parent = item
    while(parent.parent?.props) {
      ElemType.__mount(parent.parent)
      parent = parent.parent
    }
  }
}

ElemType.defineHandlers(Object.keys(EventType))

ElemType.defineMethods([
  'scrollBy',
  'scrollTo',
])

ElemType.defineProps({
  classList : null,
  className : 'class',
  dataset : null,
  id : 'id',
  innerHTML : null,
  style : null,
})

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
const EventType = {
  afterprint : [window.Event],
  auxclick : [window.MouseEvent, true, true],
  beforematch : [window.Event],
  beforeprint : [window.Event],
  beforeunload : [window.Event],
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  canplay : [window.Event],
  canplaythrough : [window.Event],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextlost : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  contextrestored : [window.Event],
  copy : [window.ClipboardEvent, true, true],
  cuechange : [window.Event],
  cut : [window.ClipboardEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  drag : [window.DragEvent, true, true],
  dragend : [window.DragEvent, true],
  dragenter : [window.DragEvent, true, true],
  dragleave : [window.DragEvent, true],
  dragover : [window.DragEvent, true, true],
  dragstart : [window.DragEvent, true, true],
  drop : [window.DragEvent, true, true],
  durationchange : [window.Event],
  emptied : [window.Event],
  ended : [window.Event],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  formdata : [window.FormDataEvent],
  hashchange : [window.HashChangeEvent],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keypress : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  languagechange : [window.Event],
  load : [window.Event],
  loadeddata : [window.Event],
  loadedmetadata : [window.Event],
  loadstart : [window.Event],
  message : [window.MessageEvent],
  messageerror : [window.MessageEvent],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  offline : [window.Event],
  online : [window.Event],
  pagehide : [window.PageTransitionEvent],
  pageshow : [window.PageTransitionEvent],
  paste : [window.ClipboardEvent, true, true],
  pause : [window.Event],
  play : [window.Event],
  playing : [window.Event],
  popstate : [window.PopStateEvent],
  progress : [window.ProgressEvent],
  ratechange : [window.Event],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  rejectionhandled : [window.PromiseRejectionEvent],
  scroll : [window.Event, true],
  securitypolicyviolation : [window.SecurityPolicyViolationEvent, true],
  seeked : [window.Event],
  seeking : [window.Event],
  select : [window.UIEvent, true],
  slotchange : [window.Event, true],
  stalled : [window.Event],
  storage : [window.StorageEvent],
  submit : [window.SubmitEvent, true, true],
  suspend : [window.Event],
  timeupdate : [window.Event],
  toggle : [window.Event],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
  transitioncancel : [window.TransitionEvent, true],
  transitionend : [window.TransitionEvent, true, true],
  transitionrun : [window.TransitionEvent, true],
  transitionstart : [window.TransitionEvent, true],
  unhandledrejection : [window.PromiseRejectionEvent],
  unload : [window.Event],
  volumechange : [window.Event],
  waiting : [window.Event],
  wheel : [window.WheelEvent, true, true],
}

module.exports = EventType


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Text } = __webpack_require__(4)

class TextType
{
  /**
   * @param {string|number|*} data
   */
  constructor(data) {
    this.data = String(data)
    this.node = null
  }

  /**
   * @param {Text} [node]
   * @private
   */
  __init(node) {
    this.node = node || new Text(this.data)
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode) {
    keepNode || this.node.remove()
  }

  /**
   * @return {Text|null}
   * @private
   */
  __getAnchorNode() {
    return this.node
  }
}

module.exports = TextType


/***/ }),
/* 7 */
/***/ ((module) => {

/**
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
    return elem.vnode.attributes[this.nodeName] ?? null
  }

  /**
   * @param {ElemType} elem
   * @param {string|null|*} value
   */
  static set(elem, value) {
    elem.vnode.attributes[this.nodeName] = value
  }
}

module.exports = AttrType


/***/ }),
/* 8 */
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