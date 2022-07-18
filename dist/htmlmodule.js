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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
}

exports.HtmlInput = class HtmlInput extends HtmlType
{
  static tagName = 'INPUT'

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    if(this.props.hasOwnProperty('value') || this.props.hasOwnProperty('defaultValue')) {
      this.children = null
    }
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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

  constructor(props) {
    super(props)
    this.children = null
  }
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
    this.children = null
    if(innerText !== this.node.innerText) {
      this.node.innerText = innerText
    }
  }
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

const window = __webpack_require__(4)
const EventType = __webpack_require__(5)

const { indexOf, map } = Array.prototype
const { CustomEvent, HTMLElement, document } = window
const childFilterSet = new Set([undefined, null, false])
const nullNode = document.createElement('div')
const sampleNode = document.createElement('div')
const specialProps = {
  children : true,
  class : true,
  classList : true,
  className : true,
  key : true,
  node : true,
  role : true,
  tagName : true,
}
const descriptors = {
  __inited : {
    writable : true,
    value : false,
  },
  __handlers : {
    writable : true,
    value : null,
  },
  props : {
    writable : true,
    value : null,
  },
  state : {
    configurable : true,
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
  key : {
    writable : true,
    value : null,
  },
}

/**
 * @see https://dom.spec.whatwg.org/#interface-element
 */
class ElemType
{
  static tagName = 'DIV'

  static role = undefined

  static class = undefined

  static className = undefined

  static specialProps = specialProps

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    if(props.children === undefined) {
      props.children = null
    }
    Object.defineProperties(this, descriptors)
    this.props = props
    this.state = {}
    if(props.hasOwnProperty('key')) {
      this.key = props.key
    }
  }

  /**
   * @return {*|Element}
   * @protected
   */
  createNode() {
    return document.createElement(this.props.tagName || this.constructor.tagName)
  }

  /**
   * @abstract
   */
  init() {
    void null
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
  mount() {
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
    else if(value !== this.node.getAttribute(attr)) {
      this.node.setAttribute(attr, value)
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
    this._setClassName(this.props)
    this._render()
    this.update(this.props, prevState)
  }

  /**
   * @param {constructor @link ElemType} type
   * @return {null|ElemType|*}
   */
  find(type) {
    if(!this.children) {
      return null
    }
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
    if(!this.children) {
      return result
    }
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
    if(!context.__handlers) {
      context.__handlers = {}
    }
    let listeners = context.__handlers[eventName]
    if(!listeners) {
      context.__handlers[eventName] = listeners = new Map
    }
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
    if(!context.__handlers) {
      return
    }
    let listeners = context.__handlers[eventName]
    if(!listeners?.has(callback)) {
      return
    }
    this.node.removeEventListener(eventName, listeners.get(callback), {
      capture : options.capture,
    })
    listeners.delete(callback)
    listeners.size || delete context.__handlers[eventName]
  }

  /**
   * @public
   */
  removeAllListeners() {
    if(!this.__handlers) {
      return
    }
    let eventName, listeners, listener
    for([eventName, listeners] of Object.entries(this.__handlers)) {
      delete this.__handlers[eventName]
      if(typeof listeners === 'function') {
        this.node[eventName] = null
        continue
      }
      for(listener of listeners.values()) {
        listener.__target.removeEventListener(eventName, listener, {
          capture : listener.__options.capture,
        })
      }
      listeners.clear()
    }
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
    this.init()
    this._setProps()
    const children = this.render()
    this._setChildren(children)
    this.__inited = true
    node && this.mount()
  }

  /**
   * @param {{}} [props]
   * @private
   */
  _setProps(props) {
    const specialProps = this.constructor.specialProps
    let name
    if(props) {
      for(name in this.props) {
        if(!specialProps[name] && !props.hasOwnProperty(name)) {
          this[name] = null
        }
      }
    }
    else props = this.props
    this._setRoleAttr(props)
    this._setClassName(props)
    for(name in props) {
      if(!specialProps[name] && name in this) {
        this[name] = props[name]
      }
    }
    this.props = props
  }

  /**
   * @param {{}} props
   * @private
   */
  _setRoleAttr(props) {
    let role = props.role
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
   * @param {{}} props
   * @private
   */
  _setClassName(props) {
    let className = props.className
    if(className === undefined) {
      className = this.constructor.className
    }
    if(className === undefined) {
      this._setClass(props)
    }
    else if(className === null) {
      sampleNode.removeAttribute('class')
    }
    else sampleNode.className = className
    if(props.hasOwnProperty('classList')) {
      this.classList = props.classList
    }
    else if(!this.__inited) {
      this._updateClassName()
    }
  }

  /**
   * @param {{}} props
   * @private
   */
  _setClass(props) {
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
    if(items.size) {
      sampleNode.className = Array.from(items).filter(Boolean).join(' ')
    }
    else sampleNode.removeAttribute('class')
  }

  _updateClassName() {
    const className = sampleNode.getAttribute('class')
    if(className !== this.node.getAttribute('class')) {
      this.className = className
    }
  }

  /**
   * @param {*} children
   * @private
   */
  _setChildren(children) {
    if(this.children === null) {
      return
    }
    const childrenB = this.children = []
    if(children === undefined) {
      return
    }
    let child
    for(child of [children].flat(Infinity)) {
      if(!childFilterSet.has(child)) {
        childrenB.push(typeof child === 'number' ? String(child) : child)
      }
    }
    const node = this.node
    const childNodes = node.childNodes
    if(!childNodes.length) {
      for(child of childrenB) {
        if(child.props) {
          child._init()
          node.append(child.node)
          mount(child)
        }
        else node.append(child)
      }
      return
    }
    const indexA = {}
    const indexB = {}
    let nodeA, childA, key
    for(nodeA of childNodes) {
      childA = nodeA.__instance
      key = childA?.key ?? null
      if(key === null) {
        this._setChildNodes()
        return
      }
      indexA[key] = childA
    }
    let childB
    for(childB of childrenB) {
      key = childB.key ?? null
      if(key === null) {
        this._setChildNodes()
        return
      }
      indexB[key] = childB
    }
    const childrenA = map.call(childNodes, node => node.__instance)
    const length = childrenB.length
    let nextA, i, j
    for(childA of childrenA) {
      indexB[childA.key] || childA._destroy()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      if(indexA[childB.key]) {
        continue
      }
      nextA = childNodes[i]
      childB._init()
      if(nextA) {
        nextA.before(childB.node)
      }
      else {
        node.append(childB.node)
      }
      mount(childB)
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      childA = indexA[childB.key]
      if(!childA) {
        continue
      }
      j = indexOf.call(childNodes, childA.node)
      if(i !== j) {
        nextA = childNodes[i].nextSibling
        if(nextA) {
          if(childA.node !== nextA && childA.node.nextSibling !== nextA) {
            nextA.before(childA.node)
          }
        }
        else {
          node.append(childA.node)
        }
      }
      childA._udpateElem(childB)
      if(childA.constructor === childB.constructor) {
        childrenB[i] = childA
      }
    }
  }

  /**
   * @private
   */
  _setChildNodes() {
    const childNodes = Array.from(this.node.childNodes)
    const children = this.children
    const length = Math.max(childNodes.length, children.length)
    let i, nodeA, childA, childB
    for(i = 0; i < length; i++) {
      nodeA = childNodes[i]
      childB = children[i]
      if(nodeA === undefined) {
        childB._init?.()
        this.node.append(childB.node || childB)
        mount(childB)
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
            children[i] = childA
          }
          continue
        }
      }
      childA._destroy?.(true)
      childB._init?.()
      nodeA.replaceWith(childB.node || childB)
      mount(childB)
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
    const prevProps = this.props
    this._setProps(elem.props)
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
    this._updateClassName()
    this._setChildren(children)
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
   * @param {boolean} [keepNode]
   * @private
   */
  _destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    if(this.children) {
      let item
      for(item of this.children) {
        item._destroy?.(true)
      }
    }
    keepNode || this.node.remove()
    delete this.node.__instance
    this.node = nullNode
  }

  /**
   * @returns {NamedNodeMap}
   */
  get attributes() {
    return this.node.attributes
  }

  /**
   * @param {{}|null} attributes
   */
  set attributes(attributes) {
    let name, value
    if(this.props.attributes) {
      for(name in this.props.attributes) {
        if(!attributes?.hasOwnProperty(name)) {
          this.node.removeAttribute(name)
        }
      }
    }
    this.props.attributes = attributes
    if(!attributes) {
      return
    }
    for(name in attributes) {
      value = attributes[name]
      if(value === null) {
        this.node.removeAttribute(name)
      }
      else if(value !== this.node.getAttribute(name)) {
        this.node.setAttribute(name, value)
      }
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get classList() {
    return this.node.classList
  }

  /**
   * @param {*} classList {string|string[]|{}|null}
   */
  set classList(classList) {
    if(classList === null) {
      void null
    }
    else if(typeof classList === 'string') {
      sampleNode.classList = classList
    }
    else if(Array.isArray(classList)) {
      sampleNode.classList.add(...classList.filter(Boolean))
    }
    else {
      let key
      for(key in classList) {
        sampleNode.classList.toggle(key, classList[key])
      }
    }
    if(!this.__inited) {
      this._updateClassName()
    }
  }

  /**
   * @returns {DOMStringMap}
   */
  get dataset() {
    return this.node.dataset
  }

  /**
   * @param {{}|null} dataset
   */
  set dataset(dataset) {
    let name, value
    for(name in Object.assign({}, this.node.dataset)) {
      if(!dataset?.hasOwnProperty(name)) {
        delete this.node.dataset[name]
      }
    }
    if(!dataset) {
      return
    }
    for(name in dataset) {
      value = dataset[name]
      if(value === null) {
        delete this.node.dataset[name]
      }
      else if(value !== this.node.dataset[name]) {
        this.node.dataset[name] = value
      }
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
    this.children = null
    if(innerHTML !== this.node.innerHTML) {
      this.node.innerHTML = innerHTML
    }
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
      return
    }
    Object.assign(sampleNode.style, style)
    const value = sampleNode.getAttribute('style')
    if(value) {
      if(value !== this.node.getAttribute('style')) {
        this.node.style = value
      }
    }
    else this.node.removeAttribute('style')
    sampleNode.style = ''
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
    for(const prop in props) {
      const attr = props[prop]
      Object.defineProperty(this.prototype, prop, {
        configurable : true,
        get() {
          return this.node[prop]
        },
        set(value) {
          if(attr === null) {
            this.node[prop] = value
            return
          }
          if(value === null) {
            this.node.removeAttribute(attr)
            return
          }
          if(typeof value === 'boolean') {
            if(value !== this.node[prop]) {
              this.node[prop] = value
            }
            return
          }
          if(value != this.node.getAttribute(attr)) {
            this.node[prop] = value
          }
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
    elem._init(node)
    parentNode?.append(elem.node)
    node || elem.mount()
    return elem
  }
}

/**
 * @param {ElemType} item
 */
function mount(item) {
  if(item.node) {
    item.children?.forEach(mount)
    item.mount()
  }
}

for(const type in EventType) {
  const name = 'on' + type
  if(!(name in HTMLElement.prototype)) {
    continue
  }
  Object.defineProperty(ElemType.prototype, name, {
    configurable : true,
    set(callback) {
      if(callback) {
        if(!this.__handlers) {
          this.__handlers = {}
        }
        this.node[name] = e => callback.call(this, e, e.target.__instance)
        this.__handlers[name] = callback
        return
      }
      if(this.__handlers) {
        this.node[name] = null
        delete this.__handlers[name]
      }
    },
    get() {
      return this.__handlers?.[name] || null
    },
  })
}

ElemType.defineMethods([
  'scrollBy',
  'scrollTo',
])

ElemType.defineProps({
  className : 'class',
  id : 'id',
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
  submit : [window.Event, true, true],
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
    if(value !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
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