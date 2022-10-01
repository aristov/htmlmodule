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
exports = module.exports = {
  ...__webpack_require__(1),
  ...__webpack_require__(19),
}

exports.AriaType = __webpack_require__(5)
exports.Attributes = __webpack_require__(10)
exports.AttrType = __webpack_require__(6)
exports.BooleanType = __webpack_require__(7)
exports.Class = __webpack_require__(12)
exports.ClassList = __webpack_require__(13)
exports.Context = __webpack_require__(21)
exports.Dataset = __webpack_require__(14)
exports.ElemType = __webpack_require__(3)
exports.EventType = __webpack_require__(15)
exports.HtmlType = __webpack_require__(2)
exports.Id = __webpack_require__(16)
exports.ListType = __webpack_require__(8)
exports.PropType = __webpack_require__(11)
exports.RoleType = __webpack_require__(20)
exports.Style = __webpack_require__(17)
exports.TextType = __webpack_require__(18)
exports.TokenType = __webpack_require__(9)

exports.window = __webpack_require__(4)


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const HtmlType = __webpack_require__(2)
const PropType = __webpack_require__(11)

exports.HtmlA = class HtmlA extends HtmlType
{
  static tagName = 'a'

  static props = {
    download : 'download',
    hash : PropType,
    host : PropType,
    hostname : PropType,
    href : 'href',
    hreflang : 'hreflang',
    password : PropType,
    pathname : PropType,
    port : PropType,
    protocol : PropType,
    referrerPolicy : 'referrerpolicy',
    rel : 'rel',
    rev : 'rev',
    search : PropType,
    target : 'target',
    type : 'type',
    username : PropType,
  }
}

exports.HtmlAbbr = class HtmlAbbr extends HtmlType
{
  static tagName = 'abbr'
}

exports.HtmlAddress = class HtmlAddress extends HtmlType
{
  static tagName = 'address'
}

exports.HtmlArea = class HtmlArea extends HtmlType
{
  static tagName = 'area'

  static props = {
    alt : 'alt',
    coords : 'coords',
    download : 'download',
    hash : PropType,
    host : PropType,
    hostname : PropType,
    href : 'href',
    password : PropType,
    pathname : PropType,
    port : PropType,
    protocol : PropType,
    referrerPolicy : 'referrerpolicy',
    rel : 'rel',
    search : PropType,
    shape : 'shape',
    target : 'target',
    username : PropType,
  }
}

exports.HtmlArticle = class HtmlArticle extends HtmlType
{
  static tagName = 'article'
}

exports.HtmlAside = class HtmlAside extends HtmlType
{
  static tagName = 'aside'
}

exports.HtmlAudio = class HtmlAudio extends HtmlType
{
  static tagName = 'audio'

  static props = {
    autoplay : 'autoplay',
    controls : 'controls',
    crossOrigin : 'crossorigin',
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    loop : 'loop',
    muted : PropType,
    playbackRate : PropType,
    preload : 'preload',
    src : 'src',
    srcObject : PropType,
    volume : PropType,
  }
}

exports.HtmlB = class HtmlB extends HtmlType
{
  static tagName = 'b'
}

exports.HtmlBase = class HtmlBase extends HtmlType
{
  static tagName = 'base'

  static props = {
    href : 'href',
    target : 'target',
  }
}

exports.HtmlBdi = class HtmlBdi extends HtmlType
{
  static tagName = 'bdi'
}

exports.HtmlBdo = class HtmlBdo extends HtmlType
{
  static tagName = 'bdo'
}

exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlType
{
  static tagName = 'blockquote'

  static props = {
    cite : 'cite',
  }
}

exports.HtmlBody = class HtmlBody extends HtmlType
{
  static tagName = 'body'
}

exports.HtmlBr = class HtmlBr extends HtmlType
{
  static tagName = 'br'
}

exports.HtmlButton = class HtmlButton extends HtmlType
{
  static tagName = 'button'

  static props = {
    autofocus : 'autofocus',
    disabled : 'disabled',
    formAction : 'formaction',
    formEnctype : 'formenctype',
    formMethod : 'formmethod',
    formNoValidate : 'formnovalidate',
    formTarget : 'formtarget',
    name : 'name',
    type : 'type',
    value : PropType,
  }
}

exports.HtmlCanvas = class HtmlCanvas extends HtmlType
{
  static tagName = 'canvas'

  static props = {
    height : 'height',
    width : 'width',
  }
}

exports.HtmlCaption = class HtmlCaption extends HtmlType
{
  static tagName = 'caption'
}

exports.HtmlCite = class HtmlCite extends HtmlType
{
  static tagName = 'cite'
}

exports.HtmlCode = class HtmlCode extends HtmlType
{
  static tagName = 'code'
}

exports.HtmlCol = class HtmlCol extends HtmlType
{
  static tagName = 'col'

  static props = {
    span : 'span',
  }
}

exports.HtmlColGroup = class HtmlColGroup extends HtmlType
{
  static tagName = 'colgroup'

  static props = {
    span : 'span',
  }
}

exports.HtmlData = class HtmlData extends HtmlType
{
  static tagName = 'data'

  static props = {
    value : PropType,
  }
}

exports.HtmlDataList = class HtmlDataList extends HtmlType
{
  static tagName = 'datalist'
}

exports.HtmlDd = class HtmlDd extends HtmlType
{
  static tagName = 'dd'
}

exports.HtmlDel = class HtmlDel extends HtmlType
{
  static tagName = 'del'

  static props = {
    cite : 'cite',
    dateTime : 'datetime',
  }
}

exports.HtmlDetails = class HtmlDetails extends HtmlType
{
  static tagName = 'details'

  static props = {
    open : 'open',
  }
}

exports.HtmlDfn = class HtmlDfn extends HtmlType
{
  static tagName = 'dfn'
}

exports.HtmlDialog = class HtmlDialog extends HtmlType
{
  static tagName = 'dialog'

  static props = {
    open : 'open',
    returnValue : PropType,
  }
}

exports.HtmlDiv = class HtmlDiv extends HtmlType
{
  static tagName = 'div'
}

exports.HtmlDl = class HtmlDl extends HtmlType
{
  static tagName = 'dl'
}

exports.HtmlDt = class HtmlDt extends HtmlType
{
  static tagName = 'dt'
}

exports.HtmlEm = class HtmlEm extends HtmlType
{
  static tagName = 'em'
}

exports.HtmlEmbed = class HtmlEmbed extends HtmlType
{
  static tagName = 'embed'

  static props = {
    height : 'height',
    src : 'src',
    type : 'type',
    width : 'width',
  }
}

exports.HtmlFieldSet = class HtmlFieldSet extends HtmlType
{
  static tagName = 'fieldset'

  static props = {
    disabled : 'disabled',
    name : 'name',
  }
}

exports.HtmlFigCaption = class HtmlFigCaption extends HtmlType
{
  static tagName = 'figcaption'
}

exports.HtmlFigure = class HtmlFigure extends HtmlType
{
  static tagName = 'figure'
}

exports.HtmlFooter = class HtmlFooter extends HtmlType
{
  static tagName = 'footer'
}

exports.HtmlForm = class HtmlForm extends HtmlType
{
  static tagName = 'form'

  static props = {
    acceptCharset : 'accept-charset',
    action : 'action',
    autocomplete : 'autocomplete',
    enctype : 'enctype',
    method : 'method',
    name : 'name',
    noValidate : 'novalidate',
    target : 'target',
  }
}

exports.HtmlH1 = class HtmlH1 extends HtmlType
{
  static tagName = 'h1'
}

exports.HtmlH2 = class HtmlH2 extends HtmlType
{
  static tagName = 'h2'
}

exports.HtmlH3 = class HtmlH3 extends HtmlType
{
  static tagName = 'h3'
}

exports.HtmlH4 = class HtmlH4 extends HtmlType
{
  static tagName = 'h4'
}

exports.HtmlH5 = class HtmlH5 extends HtmlType
{
  static tagName = 'h5'
}

exports.HtmlH6 = class HtmlH6 extends HtmlType
{
  static tagName = 'h6'
}

exports.HtmlHGroup = class HtmlHGroup extends HtmlType
{
  static tagName = 'hgroup'
}

exports.HtmlHead = class HtmlHead extends HtmlType
{
  static tagName = 'head'
}

exports.HtmlHeader = class HtmlHeader extends HtmlType
{
  static tagName = 'header'
}

exports.HtmlHr = class HtmlHr extends HtmlType
{
  static tagName = 'hr'
}

exports.HtmlHtml = class HtmlHtml extends HtmlType
{
  static tagName = 'html'
}

exports.HtmlI = class HtmlI extends HtmlType
{
  static tagName = 'i'
}

exports.HtmlIFrame = class HtmlIFrame extends HtmlType
{
  static tagName = 'iframe'

  static props = {
    allowFullScreen : 'allowfullscreen',
    height : 'height',
    referrerPolicy : 'referrerpolicy',
    src : 'src',
    srcdoc : 'srcdoc',
    width : 'width',
  }
}

exports.HtmlImg = class HtmlImg extends HtmlType
{
  static tagName = 'img'

  static props = {
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
  }
}

exports.HtmlInput = class HtmlInput extends HtmlType
{
  static tagName = 'input'

  static props = {
    accept : 'accept',
    alt : 'alt',
    autocomplete : 'autocomplete',
    autofocus : 'autofocus',
    checked : PropType,
    defaultChecked : PropType,
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
    indeterminate : PropType,
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
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    size : 'size',
    src : 'src',
    step : 'step',
    type : 'type',
    value : PropType,
    valueAsDate : PropType,
    valueAsNumber : PropType,
    width : 'width',
  }
}

exports.HtmlIns = class HtmlIns extends HtmlType
{
  static tagName = 'ins'

  static props = {
    cite : 'cite',
    dateTime : 'datetime',
  }
}

exports.HtmlKbd = class HtmlKbd extends HtmlType
{
  static tagName = 'kbd'
}

exports.HtmlLabel = class HtmlLabel extends HtmlType
{
  static tagName = 'label'

  static props = {
    htmlFor : 'for',
  }
}

exports.HtmlLegend = class HtmlLegend extends HtmlType
{
  static tagName = 'legend'
}

exports.HtmlLi = class HtmlLi extends HtmlType
{
  static tagName = 'li'

  static props = {
    value : PropType,
  }
}

exports.HtmlLink = class HtmlLink extends HtmlType
{
  static tagName = 'link'

  static props = {
    crossOrigin : 'crossorigin',
    href : 'href',
    hreflang : 'hreflang',
    media : 'media',
    nonce : 'nonce',
    referrerPolicy : 'referrerpolicy',
    rel : 'rel',
    rev : 'rev',
    type : 'type',
  }
}

exports.HtmlMain = class HtmlMain extends HtmlType
{
  static tagName = 'main'
}

exports.HtmlMap = class HtmlMap extends HtmlType
{
  static tagName = 'map'

  static props = {
    name : 'name',
  }
}

exports.HtmlMark = class HtmlMark extends HtmlType
{
  static tagName = 'mark'
}

exports.HtmlMenu = class HtmlMenu extends HtmlType
{
  static tagName = 'menu'
}

exports.HtmlMeta = class HtmlMeta extends HtmlType
{
  static tagName = 'meta'

  static props = {
    charset : 'charset',
    content : 'content',
    httpEquiv : 'http-equiv',
    name : 'name',
  }
}

exports.HtmlMeter = class HtmlMeter extends HtmlType
{
  static tagName = 'meter'

  static props = {
    high : 'high',
    low : 'low',
    max : 'max',
    min : 'min',
    optimum : 'optimum',
    value : PropType,
  }
}

exports.HtmlNav = class HtmlNav extends HtmlType
{
  static tagName = 'nav'
}

exports.HtmlNoScript = class HtmlNoScript extends HtmlType
{
  static tagName = 'noscript'
}

exports.HtmlObject = class HtmlObject extends HtmlType
{
  static tagName = 'object'

  static props = {
    data : 'data',
    height : 'height',
    name : 'name',
    type : 'type',
    useMap : 'usemap',
    width : 'width',
  }
}

exports.HtmlOl = class HtmlOl extends HtmlType
{
  static tagName = 'ol'

  static props = {
    reversed : 'reversed',
    start : 'start',
    type : 'type',
  }
}

exports.HtmlOptGroup = class HtmlOptGroup extends HtmlType
{
  static tagName = 'optgroup'

  static props = {
    disabled : 'disabled',
    label : 'label',
  }
}

exports.HtmlOption = class HtmlOption extends HtmlType
{
  static tagName = 'option'

  static props = {
    defaultSelected : PropType,
    disabled : 'disabled',
    label : 'label',
    selected : PropType,
    text : 'text',
    value : PropType,
  }
}

exports.HtmlOutput = class HtmlOutput extends HtmlType
{
  static tagName = 'output'

  static props = {
    defaultValue : PropType,
    htmlFor : 'for',
    name : 'name',
    value : PropType,
  }
}

exports.HtmlP = class HtmlP extends HtmlType
{
  static tagName = 'p'
}

exports.HtmlParam = class HtmlParam extends HtmlType
{
  static tagName = 'param'
}

exports.HtmlPicture = class HtmlPicture extends HtmlType
{
  static tagName = 'picture'
}

exports.HtmlPre = class HtmlPre extends HtmlType
{
  static tagName = 'pre'
}

exports.HtmlProgress = class HtmlProgress extends HtmlType
{
  static tagName = 'progress'

  static props = {
    max : 'max',
    value : PropType,
  }
}

exports.HtmlQ = class HtmlQ extends HtmlType
{
  static tagName = 'q'

  static props = {
    cite : 'cite',
  }
}

exports.HtmlRp = class HtmlRp extends HtmlType
{
  static tagName = 'rp'
}

exports.HtmlRt = class HtmlRt extends HtmlType
{
  static tagName = 'rt'
}

exports.HtmlRuby = class HtmlRuby extends HtmlType
{
  static tagName = 'ruby'
}

exports.HtmlS = class HtmlS extends HtmlType
{
  static tagName = 's'
}

exports.HtmlSamp = class HtmlSamp extends HtmlType
{
  static tagName = 'samp'
}

exports.HtmlScript = class HtmlScript extends HtmlType
{
  static tagName = 'script'

  static props = {
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
  }
}

exports.HtmlSection = class HtmlSection extends HtmlType
{
  static tagName = 'section'
}

exports.HtmlSelect = class HtmlSelect extends HtmlType
{
  static tagName = 'select'

  static props = {
    autocomplete : 'autocomplete',
    autofocus : 'autofocus',
    disabled : 'disabled',
    multiple : 'multiple',
    name : 'name',
    required : 'required',
    selectedIndex : PropType,
    size : 'size',
    value : PropType,
  }
}

exports.HtmlSmall = class HtmlSmall extends HtmlType
{
  static tagName = 'small'
}

exports.HtmlSource = class HtmlSource extends HtmlType
{
  static tagName = 'source'

  static props = {
    media : 'media',
    sizes : 'sizes',
    src : 'src',
    srcset : 'srcset',
    type : 'type',
  }
}

exports.HtmlSpan = class HtmlSpan extends HtmlType
{
  static tagName = 'span'
}

exports.HtmlStrong = class HtmlStrong extends HtmlType
{
  static tagName = 'strong'
}

exports.HtmlStyle = class HtmlStyle extends HtmlType
{
  static tagName = 'style'

  static props = {
    media : 'media',
    nonce : 'nonce',
    type : 'type',
  }
}

exports.HtmlSub = class HtmlSub extends HtmlType
{
  static tagName = 'sub'
}

exports.HtmlSummary = class HtmlSummary extends HtmlType
{
  static tagName = 'summary'
}

exports.HtmlSup = class HtmlSup extends HtmlType
{
  static tagName = 'sup'
}

exports.HtmlTBody = class HtmlTBody extends HtmlType
{
  static tagName = 'tbody'
}

exports.HtmlTFoot = class HtmlTFoot extends HtmlType
{
  static tagName = 'tfoot'
}

exports.HtmlTHead = class HtmlTHead extends HtmlType
{
  static tagName = 'thead'
}

exports.HtmlTable = class HtmlTable extends HtmlType
{
  static tagName = 'table'
}

exports.HtmlTd = class HtmlTd extends HtmlType
{
  static tagName = 'td'

  static props = {
    colSpan : 'colspan',
    headers : 'headers',
    rowSpan : 'rowspan',
  }
}

exports.HtmlTemplate = class HtmlTemplate extends HtmlType
{
  static tagName = 'template'
}

exports.HtmlTextArea = class HtmlTextArea extends HtmlType
{
  static tagName = 'textarea'

  static props = {
    autocomplete : 'autocomplete',
    autofocus : 'autofocus',
    cols : 'cols',
    defaultValue : PropType,
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
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    step : 'step',
    value : PropType,
    wrap : 'wrap',
  }
}

exports.HtmlTh = class HtmlTh extends HtmlType
{
  static tagName = 'th'

  static props = {
    abbr : 'abbr',
    colSpan : 'colspan',
    headers : 'headers',
    rowSpan : 'rowspan',
    scope : 'scope',
  }
}

exports.HtmlTime = class HtmlTime extends HtmlType
{
  static tagName = 'time'

  static props = {
    dateTime : 'datetime',
  }
}

exports.HtmlTitle = class HtmlTitle extends HtmlType
{
  static tagName = 'title'

  static props = {
    text : 'text',
  }
}

exports.HtmlTr = class HtmlTr extends HtmlType
{
  static tagName = 'tr'
}

exports.HtmlTrack = class HtmlTrack extends HtmlType
{
  static tagName = 'track'

  static props = {
    default : 'default',
    kind : 'kind',
    label : 'label',
    src : 'src',
    srclang : 'srclang',
  }
}

exports.HtmlU = class HtmlU extends HtmlType
{
  static tagName = 'u'
}

exports.HtmlUl = class HtmlUl extends HtmlType
{
  static tagName = 'ul'
}

exports.HtmlVar = class HtmlVar extends HtmlType
{
  static tagName = 'var'
}

exports.HtmlVideo = class HtmlVideo extends HtmlType
{
  static tagName = 'video'

  static props = {
    autoplay : 'autoplay',
    controls : 'controls',
    crossOrigin : 'crossorigin',
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    height : 'height',
    loop : 'loop',
    muted : PropType,
    playbackRate : PropType,
    poster : 'poster',
    preload : 'preload',
    src : 'src',
    srcObject : PropType,
    volume : PropType,
    width : 'width',
  }
}

exports.HtmlWbr = class HtmlWbr extends HtmlType
{
  static tagName = 'wbr'
}


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ElemType = __webpack_require__(3)
const PropType = __webpack_require__(11)

/**
 * @abstract
 */
class HtmlType extends ElemType
{
  static props = {
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
    innerText : PropType,
  }
}

module.exports = HtmlType


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Comment, CustomEvent, document } = __webpack_require__(4)
const AriaType = __webpack_require__(5)
const AttrType = __webpack_require__(6)
const Attributes = __webpack_require__(10)
const Class = __webpack_require__(12)
const ClassList = __webpack_require__(13)
const Dataset = __webpack_require__(14)
const EventType = __webpack_require__(15)
const Id = __webpack_require__(16)
const PropType = __webpack_require__(11)
const Style = __webpack_require__(17)
const TextType = __webpack_require__(18)

const { indexOf } = Array.prototype
const skipTypes = {
  undefined : true,
  boolean : true,
}
const specialProps = {
  children : true,
  class : true,
  node : true,
  parent : true,
  tagName : true,
}
const nullDescriptor = {
  writable : true,
  value : null,
}
const descriptors = {
  __vnode : nullDescriptor,
  __node : nullDescriptor,
  __children : nullDescriptor,
  __parent : nullDescriptor,
  __index : nullDescriptor,
  __ref : nullDescriptor,
  __handlers : nullDescriptor,
  __sampleNode : nullDescriptor,
  vnode : nullDescriptor,
  node : nullDescriptor,
  children : nullDescriptor,
  parent : {
    writable : true,
    value : undefined,
  },
}
let init

function debug() {
  init.apply(this, arguments)
  this.node.__elem = this
}

/**
 * @abstract
 */
class ElemType
{
  static namespace = null

  static tagName = 'div'

  static role = null

  static class = null

  static className = null

  static props = {
    role : 'role',
    className : Class,
    classList : ClassList,
    id : Id,
    style : Style,
    dataset : Dataset,
    attributes : Attributes,
    textContent : PropType,
    innerHTML : PropType,
    ...EventType.props,
    ...AriaType.props,
  }

  static defaultProps = null

  /**
   * @param {*} [props]
   */
  constructor(props) {
    this.constructor.__init()
    Object.defineProperties(this, descriptors)
    Object.defineProperty(this, 'props', {
      writable : true,
      value : {
        children : null,
        ...this.constructor.defaultProps,
      },
    })
    if(props?.constructor === Object) {
      Object.assign(this.props, props)
    }
    else if(props !== undefined) {
      this.props.children = props
    }
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
    const prevState = { ...this.state }
    if(!this.state) {
      this.state = {}
    }
    if(typeof state === 'function') {
      state = state(this.state)
    }
    Object.assign(this.state, state)
    this.vnode = this.__createVNode()
    this.__assignProps()
    this.__update()
    this.update(this.props, prevState)
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
   * @param {Element} node
   * @return {ElemType|*|null}
   */
  getElemByNode(node) {
    return node === this.node ?
      this :
      this.find(ElemType, elem => elem.node === node)
  }

  /**
   * @param {constructor @link ElemType} type
   * @param {function} [filter]
   * @return {ElemType|*|null}
   */
  closest(type, filter) {
    if(this instanceof type) {
      if(!filter || filter(this)) {
        return this
      }
    }
    return this.__parent?.closest(type, filter) || null
  }

  /**
   * @public
   */
  blur() {
    this.node.blur()
  }

  /**
   * @public
   */
  click() {
    this.node.click()
  }

  /**
   * @public
   */
  focus() {
    this.node.focus()
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}|*} [dict]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event !== 'string') {
      return this.node.dispatchEvent(event)
    }
    const desc = EventType.types[event]
    event = desc ?
      new desc.constructor(event, { ...desc.dict, ...dict }) :
      new CustomEvent(event, dict)
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string} type
   * @param {function} callback
   * @param {{capture,once,passive}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @param {boolean} [options.once=false]
   * @param {boolean} [options.passive=false]
   * @protected
   */
  on(type, callback, options = {}) {
    if(!this.__handlers) {
      this.__handlers = new Map
    }
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    let listeners = this.__handlers.get(type)
    if(!listeners) {
      this.__handlers.set(type, listeners = new Map)
    }
    let listener = listeners.get(callback)
    if(listener) {
      return
    }
    listener = e => {
      options.once && listeners.delete(callback)
      callback.call(this, e, this.getElemByNode(e.target))
    }
    listener.__options = options
    listeners.set(callback, listener)
    this.node.addEventListener(type, listener, options)
  }

  /**
   * @param {string} type
   * @param {function} callback
   * @param {{capture}|boolean|*} [options]
   * @param {boolean} [options.capture=false]
   * @protected
   */
  off(type, callback, options = {}) {
    if(!this.__handlers) {
      return
    }
    if(typeof options === 'boolean') {
      options = { capture : options }
    }
    const listeners = this.__handlers.get(type)
    const listener = listeners?.get(callback)
    if(listener) {
      this.node.removeEventListener(type, listener, options)
      listeners.delete(callback)
      listeners.size || this.__handlers.delete(type)
    }
  }

  /**
   * @protected
   */
  removeAllListeners() {
    if(!this.__handlers) {
      return
    }
    let type, listeners, callback, listener
    for([type, listeners] of this.__handlers.entries()) {
      for([callback, listener] of listeners.entries()) {
        this.node.removeEventListener(type, listener, listener.__options)
        listeners.delete(callback)
      }
      this.__handlers.delete(type)
    }
    this.__handlers = null
  }

  /**
   * @protected
   * @abstract
   */
  init() {
    void null
  }

  /**
   * @protected
   * @abstract
   */
  assign() {
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
   * @param {Element} [node]
   * @param {Element} [parentNode]
   * @private
   */
  __init(node, parentNode) {
    if(this.node) {
      return
    }
    this.node = node || this.__createNode()
    this.__sampleNode = this.props.tagName ?
      this.__createNode() :
      this.constructor.__sampleNode
    this.vnode = this.__createVNode()
    this.state && Object.defineProperty(this, 'state', {
      enumerable : false,
      value : this.state,
    })
    this.init()
    this.__assignProps()
    this.assign()
    this.__children = this.render()
    this.__setRefs()
    if(this.parent === undefined) {
      node || parentNode?.append(this.node)
      this.__setProps()
      this.__setChildren()
      node && this.__mount()
      return
    }
    if(this.parent === null) {
      this.__node = new Comment(this.constructor.name)
      if(node?.parentNode) {
        node.replaceWith(this.__node)
      }
      else parentNode?.append(this.__node)
      this.children = []
      node && this.__mount()
      return
    }
    this.__setProps()
    this.__setChildren()
    this.__node = new Comment(this.constructor.name)
    this.node.replaceWith(this.__node)
    this.parent.append(this.node)
    node && this.__mount()
  }

  /**
   * @private
   */
  __mount() {
    let child
    for(child of this.children) {
      child.props && child.__mount()
    }
    this.mount()
  }

  /**
   * @private
   */
  __assignProps() {
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
    return this.constructor.__createNode(this.props.tagName)
  }

  /**
   * @private
   * @return {{role,className,classList}}
   */
  __createVNode() {
    const vnode = {
      role : this.constructor.role,
      className : Class.generate(this.constructor),
    }
    Object.defineProperty(vnode, 'classList', nullDescriptor)
    return vnode
  }

  /**
   * @private
   */
  __setProps() {
    if(this.__vnode) {
      this.__resetProps()
    }
    const map = this.constructor.__props
    const vnode = this.vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.update(this, name, vnode[name])
    }
    this.__vnode = this.vnode
  }

  /**
   * @private
   */
  __resetProps() {
    const map = this.constructor.__props
    const vnode = this.__vnode
    let name, type
    for(name in vnode) {
      type = map[name]
      type.reset(this, name, vnode[name])
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
        childB.__parent = this
        childB.__init()
        node.append(childB.__node || childB.node)
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
      childB.__parent = this
      childB.__init()
      if(nextA) {
        nextA.before(childB.__node || childB.node)
      }
      else {
        node.append(childB.__node || childB.node)
      }
      childB.__mount()
    }
    for(i = 0; i < length; i++) {
      childB = childrenB[i]
      key = childB.props.key
      childA = indexA[key]
      if(!childA) {
        continue
      }
      nodeA = childA.__node || childA.node
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
      if(childA.constructor !== childB.constructor) {
        childA.__replaceElem(childB)
        continue
      }
      childrenB[i] = childA
      indexB[key] = childA
      childA.__parent = this
      childA.__updateElem(childB)
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
        childB.__parent = this
        childB.__init()
        this.node.append(childB.__node || childB.node)
        childB.__mount?.()
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
          if(childA.constructor !== childB.constructor) {
            childA.__replaceElem(childB)
            continue
          }
          childrenB[i] = childA
          childA.__parent = this
          childA.__updateElem(childB)
          continue
        }
      }
      nodeA = childA.node
      childA.__destroy(true)
      childB.__parent = this
      childB.__init()
      nodeA.replaceWith(childB.__node || childB.node)
      childB.__mount?.()
    }
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __updateElem(elem) {
    const prevProps = this.props
    const refA = this.__ref
    const refB = elem.__ref
    this.props = elem.props
    this.vnode = this.__createVNode()
    this.__assignProps()
    this.__update()
    if(refA && refB) {
      refB.ctx[refB.name] = this
    }
    this.update(prevProps, this.state)
  }

  /**
   * @param {ElemType} elem
   * @private
   */
  __replaceElem(elem) {
    const node = this.node
    const children = this.children
    const parent = this.__parent
    this.children = []
    this.vnode = this.__createVNode()
    this.__resetProps()
    this.__destroy(true)
    this.node = null
    elem.children = children
    elem.__parent = parent
    elem.__init(node)
  }

  /**
   * @private
   */
  __setRefs() {
    let name, item
    for(name in this) {
      item = this[name]
      if(item?.props) {
        item.__ref = { name, ctx : this }
      }
    }
  }

  /**
   * @private
   */
  __update() {
    this.parent = undefined
    this.assign()
    this.__children = this.render()
    this.__setRefs()
    if(this.parent === undefined) {
      if(this.__node) {
        this.__node.replaceWith(this.node)
        this.__node = null
      }
      this.__setProps()
      this.__setChildren()
      return
    }
    if(this.parent === null) {
      if(!this.__node) {
        this.__node = new Comment(this.constructor.name)
        this.node.replaceWith(this.__node)
      }
      else this.node.remove()
      return
    }
    if(!this.__node) {
      this.__node = new Comment(this.constructor.name)
      this.node.replaceWith(this.__node)
    }
    this.__setProps()
    this.__setChildren()
    if(this.node.parentNode !== this.parent) {
      this.parent.append(this.node)
    }
  }

  /**
   * @param {boolean} [keepNode]
   * @private
   */
  __destroy(keepNode = false) {
    this.destroy()
    this.removeAllListeners()
    this.children.forEach(child => child.__destroy(true))
    if(this.__node) {
      this.__node.replaceWith(this.node)
      this.__node = null
    }
    this.__parent = null
    this.__ref = null
    keepNode || this.node.remove()
  }

  /**
   * @return {string}
   */
  get tagName() {
    return this.props.tagName || this.constructor.tagName
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
    node || elem.__mount()
    return elem
  }

  /**
   * @param {boolean} value
   */
  static setDebugMode(value) {
    init = init || ElemType.prototype.__init
    ElemType.prototype.__init = value ? debug : init
  }

  /**
   * @param {string} prop
   * @param {constructor @link PropType|constructor @link AttrType|constructor @link EventType} type
   * @return {*}
   * @private
   */
  static __defineProp(prop, type) {
    Object.defineProperty(this.prototype, prop, {
      configurable : true,
      get() {
        return type.get(this, prop)
      },
      set(value) {
        type.set(this, prop, value)
      },
    })
  }

  /**
   * @param {{}} props
   */
  static __defineProps(props) {
    let prop, type
    for(prop in props) {
      type = props[prop]
      if(typeof type === 'string') {
        type = props[prop] = AttrType.define(type)
      }
      this.__defineProp(prop, type)
    }
  }

  /**
   * @private
   */
  static __init() {
    if(this.hasOwnProperty('__props')) {
      return
    }
    if(this !== ElemType) {
      Object.getPrototypeOf(this).__init()
    }
    if(this.hasOwnProperty('props')) {
      this.__defineProps(this.props)
    }
    Object.defineProperties(this, {
      __props : {
        value : { ...this.__props, ...this.props },
      },
      __sampleNode : {
        value : this.__createNode(),
      },
    })
  }

  /**
   * @param {string} [tagName]
   * @return {HTMLElement|*}
   * @private
   */
  static __createNode(tagName = this.tagName) {
    return this.namespace === null ?
      document.createElement(tagName) :
      document.createElementNS(this.namespace, tagName)
  }
}

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

const AttrType = __webpack_require__(6)
const BooleanType = __webpack_require__(7)
const ListType = __webpack_require__(8)
const TokenType = __webpack_require__(9)

/**
 * @mixin
 */
class AriaType
{
  static props = {
    activeDescendant : AttrType.define('aria-activedescendant'),
    atomic : BooleanType.define('aria-atomic'),
    autoComplete : TokenType.define('aria-autocomplete', 'none'),
    busy : BooleanType.define('aria-busy'),
    checked : TokenType.define('aria-checked'),
    colCount : AttrType.define('aria-colcount'),
    colIndex : AttrType.define('aria-colindex'),
    colSpan : AttrType.define('aria-colspan'),
    controls : ListType.define('aria-controls'),
    current : TokenType.define('aria-current', false),
    describedBy : ListType.define('aria-describedby'),
    details : AttrType.define('aria-details'),
    disabled : BooleanType.define('aria-disabled'),
    dropEffect : ListType.define('aria-dropeffect', 'none'),
    errorMessage : AttrType.define('aria-errormessage'),
    expanded : TokenType.define('aria-expanded'),
    flowTo : ListType.define('aria-flowto'),
    grabbed : TokenType.define('aria-grabbed'),
    hasPopup : TokenType.define('aria-haspopup', false),
    hidden : TokenType.define('aria-hidden'),
    invalid : TokenType.define('aria-invalid', false),
    keyShortcuts : AttrType.define('aria-keyshortcuts'),
    label : AttrType.define('aria-label'),
    labelledBy : ListType.define('aria-labelledby'),
    level : AttrType.define('aria-level'),
    live : TokenType.define('aria-live', 'off'),
    modal : BooleanType.define('aria-modal'),
    multiLine : BooleanType.define('aria-multiline'),
    multiSelectable : BooleanType.define('aria-multiselectable'),
    orientation : TokenType.define('aria-orientation'),
    owns : ListType.define('aria-owns'),
    placeholder : AttrType.define('aria-placeholder'),
    posInSet : AttrType.define('aria-posinset'),
    pressed : TokenType.define('aria-pressed'),
    readOnly : BooleanType.define('aria-readonly'),
    relevant : ListType.define('aria-relevant', ['additions', 'text']),
    required : BooleanType.define('aria-required'),
    roleDescription : AttrType.define('aria-roledescription'),
    rowCount : AttrType.define('aria-rowcount'),
    rowIndex : AttrType.define('aria-rowindex'),
    rowSpan : AttrType.define('aria-rowspan'),
    selected : TokenType.define('aria-selected'),
    setSize : AttrType.define('aria-setsize'),
    sort : TokenType.define('aria-sort', 'none'),
    valueMax : AttrType.define('aria-valuemax'),
    valueMin : AttrType.define('aria-valuemin'),
    valueNow : AttrType.define('aria-valuenow'),
    valueText : AttrType.define('aria-valuetext'),
  }
}

module.exports = AriaType


/***/ }),
/* 6 */
/***/ ((module) => {

/**
 * @abstract
 */
class AttrType
{
  static nodeName = null

  static defaultValue = null

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @returns {string|null|*}
   */
  static get(elem, propName) {
    return elem.vnode[propName] ?? this.defaultValue
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|null|*} value
   */
  static set(elem, propName, value) {
    elem.vnode[propName] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {*} value
   */
  static update(elem, propName, value) {
    if(value === true) {
      value = ''
    }
    else if(value === false || value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
      return
    }
    if(value != elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} propName
   */
  static reset(elem, propName) {
    if(!elem.vnode.hasOwnProperty(propName)) {
      elem.node.removeAttribute(this.nodeName)
    }
  }

  /**
   * @param {string} nodeName
   * @param {*} [defaultValue]
   * @return {constructor @link AttrType}
   */
  static define(nodeName, defaultValue = this.defaultValue) {
    return class extends this
    {
      static nodeName = nodeName
      static defaultValue = defaultValue
    }
  }
}

module.exports = AttrType


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class BooleanType extends AttrType
{
  static defaultValue = false

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {boolean} value
   */
  static update(elem, propName, value) {
    if(value) {
      elem.node.setAttribute(this.nodeName, 'true')
    }
    else elem.node.removeAttribute(this.nodeName)
  }
}

module.exports = BooleanType


/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class ListType extends AttrType
{
  static defaultValue = []

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|string[]|null} value
   */
  static update(elem, propName, value) {
    if(Array.isArray(value)) {
      value = value.join(' ')
    }
    if(!value || value === this.defaultValue.join(' ')) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(value !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}

module.exports = ListType


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class TokenType extends AttrType
{
  static defaultValue = undefined

  /**
   * @param {ElemType} elem
   * @param {string} propName
   * @param {string|boolean|null|undefined} value
   */
  static update(elem, propName, value) {
    if(value === null || value === this.defaultValue) {
      elem.node.removeAttribute(this.nodeName)
    }
    else if(String(value) !== elem.node.getAttribute(this.nodeName)) {
      elem.node.setAttribute(this.nodeName, value)
    }
  }
}

module.exports = TokenType


/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const PropType = __webpack_require__(11)

class Attributes extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}|null} value
   */
  static set(elem, name, value) {
    const vnode = elem.vnode
    if(!value) {
      delete vnode.attributes
      return
    }
    if(vnode.attributes) {
      value = Object.assign(vnode.attributes, value)
    }
    delete vnode.attributes
    vnode.attributes = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} attributes
   */
  static update(elem, name, attributes) {
    let attr, value
    for(attr in attributes) {
      value = attributes[attr]
      if(value === null) {
        elem.node.removeAttribute(attr)
      }
      else if(value !== elem.node.getAttribute(attr)) {
        elem.node.setAttribute(attr, value)
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} attributes
   */
  static reset(elem, name, attributes) {
    let attr
    for(attr in attributes) {
      if(!elem.vnode.attributes?.hasOwnProperty(attr)) {
        elem.node.removeAttribute(attr)
      }
    }
  }
}

module.exports = Attributes


/***/ }),
/* 11 */
/***/ ((module) => {

/**
 * @abstract
 */
class PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @returns {string|null|*}
   */
  static get(elem, name) {
    return elem.vnode[name] ?? null
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode[name] = value
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} value
   */
  static update(elem, name, value) {
    if(value !== elem.node[name]) {
      elem.node[name] = value
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = elem.__sampleNode[name]
    }
  }
}

module.exports = PropType


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

class Class extends AttrType
{
  static nodeName = 'class'

  /**
   * @param {ElemType} elem
   */
  static update(elem) {
    const arr = [elem.vnode.className]
    const classList = elem.vnode.classList
    if(classList) {
      arr.push(...classList)
    }
    const className = arr.filter(Boolean).join(' ')
    super.update(elem, this.nodeName, className || null)
  }

  /**
   * @param {constructor @link ElemType} constructor
   * @return {string}
   */
  static generate(constructor) {
    if(constructor.hasOwnProperty('className')) {
      return constructor.className
    }
    const set = new Set
    let proto = constructor
    while(proto.class !== null) {
      set.add(proto.class)
      proto = Object.getPrototypeOf(proto)
    }
    const className = Array.from(set).join(' ')
    return constructor.className = className || null
  }
}

module.exports = Class


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const PropType = __webpack_require__(11)

class ClassList extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {string|null|*} value
   */
  static set(elem, name, value) {
    elem.vnode.classList = [elem.vnode.classList, value].flat()
  }
}

module.exports = ClassList


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const PropType = __webpack_require__(11)

class Dataset extends PropType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {*} dataset
   */
  static update(elem, name, dataset) {
    let attr, value
    for(attr in dataset) {
      value = dataset[attr]
      if(value === null) {
        delete elem.node.dataset[attr]
      }
      else if(value !== elem.node.dataset[attr]) {
        elem.node.dataset[attr] = value
      }
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {{}} dataset
   */
  static reset(elem, name, dataset) {
    let attr
    for(attr in dataset) {
      if(!elem.vnode.dataset?.hasOwnProperty(attr)) {
        delete elem.node.dataset[attr]
      }
    }
  }
}

module.exports = Dataset


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const window = __webpack_require__(4)
const { HTMLElement } = window

class EventType
{
  /**
   * @param {ElemType} elem
   * @param {string} name
   * @return {function|null}
   */
  static get(elem, name) {
    return elem.vnode[name] || null
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function|null} callback
   */
  static set(elem, name, callback) {
    if(!callback) {
      delete elem.vnode[name]
      return
    }
    elem.vnode[name] = e => {
      return callback.call(elem, e, elem.getElemByNode(e.target))
    }
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   * @param {function} callback
   */
  static update(elem, name, callback) {
    elem.node[name] = callback
  }

  /**
   * @param {ElemType} elem
   * @param {string} name
   */
  static reset(elem, name) {
    if(!elem.vnode.hasOwnProperty(name)) {
      elem.node[name] = null
    }
  }

  /**
   * @return {{string: constructor @link EventType}}
   */
  static types = {
    afterprint : define(window.Event),
    auxclick : define(window.MouseEvent, true, true),
    beforematch : define(window.Event),
    beforeprint : define(window.Event),
    beforeunload : define(window.Event),
    blur : define(window.FocusEvent),
    cancel : define(window.Event, false, true),
    canplay : define(window.Event),
    canplaythrough : define(window.Event),
    change : define(window.Event, true),
    click : define(window.MouseEvent, true, true),
    close : define(window.Event),
    contextlost : define(window.Event),
    contextmenu : define(window.MouseEvent, true, true),
    contextrestored : define(window.Event),
    copy : define(window.ClipboardEvent, true, true),
    cuechange : define(window.Event),
    cut : define(window.ClipboardEvent, true, true),
    dblclick : define(window.MouseEvent, true, true),
    drag : define(window.DragEvent, true, true),
    dragend : define(window.DragEvent, true),
    dragenter : define(window.DragEvent, true, true),
    dragleave : define(window.DragEvent, true),
    dragover : define(window.DragEvent, true, true),
    dragstart : define(window.DragEvent, true, true),
    drop : define(window.DragEvent, true, true),
    durationchange : define(window.Event),
    emptied : define(window.Event),
    ended : define(window.Event),
    error : define(window.Event),
    focus : define(window.FocusEvent),
    focusin : define(window.FocusEvent, true),
    focusout : define(window.FocusEvent, true),
    formdata : define(window.FormDataEvent),
    hashchange : define(window.HashChangeEvent),
    input : define(window.InputEvent, true),
    invalid : define(window.Event, false, true),
    keydown : define(window.KeyboardEvent, true, true),
    keypress : define(window.KeyboardEvent, true, true),
    keyup : define(window.KeyboardEvent, true, true),
    languagechange : define(window.Event),
    load : define(window.Event),
    loadeddata : define(window.Event),
    loadedmetadata : define(window.Event),
    loadstart : define(window.Event),
    message : define(window.MessageEvent),
    messageerror : define(window.MessageEvent),
    mousedown : define(window.MouseEvent, true, true),
    mouseenter : define(window.MouseEvent),
    mouseleave : define(window.MouseEvent),
    mousemove : define(window.MouseEvent, true, true),
    mouseout : define(window.MouseEvent, true, true),
    mouseover : define(window.MouseEvent, true, true),
    mouseup : define(window.MouseEvent, true, true),
    offline : define(window.Event),
    online : define(window.Event),
    pagehide : define(window.PageTransitionEvent),
    pageshow : define(window.PageTransitionEvent),
    paste : define(window.ClipboardEvent, true, true),
    pause : define(window.Event),
    play : define(window.Event),
    playing : define(window.Event),
    popstate : define(window.PopStateEvent),
    progress : define(window.ProgressEvent),
    ratechange : define(window.Event),
    reset : define(window.Event, true, true),
    resize : define(window.UIEvent),
    rejectionhandled : define(window.PromiseRejectionEvent),
    scroll : define(window.Event, true),
    securitypolicyviolation : define(window.SecurityPolicyViolationEvent, true),
    seeked : define(window.Event),
    seeking : define(window.Event),
    select : define(window.UIEvent, true),
    slotchange : define(window.Event, true),
    stalled : define(window.Event),
    storage : define(window.StorageEvent),
    submit : define(window.SubmitEvent, true, true),
    suspend : define(window.Event),
    timeupdate : define(window.Event),
    toggle : define(window.Event),
    touchcancel : define(window.TouchEvent, true),
    touchend : define(window.TouchEvent, true, true),
    touchmove : define(window.TouchEvent, true, true),
    touchstart : define(window.TouchEvent, true, true),
    transitioncancel : define(window.TransitionEvent, true),
    transitionend : define(window.TransitionEvent, true, true),
    transitionrun : define(window.TransitionEvent, true),
    transitionstart : define(window.TransitionEvent, true),
    unhandledrejection : define(window.PromiseRejectionEvent),
    unload : define(window.Event),
    volumechange : define(window.Event),
    waiting : define(window.Event),
    wheel : define(window.WheelEvent, true, true),
  }

  static get props() {
    const props = {}
    let type, name
    for(type in this.types) {
      name = 'on' + type
      if(name in HTMLElement.prototype) {
        props[name] = EventType
      }
    }
    return props
  }
}

/**
 * @param {constructor @link Event} constructor
 * @param {boolean} bubbles
 * @param {boolean} cancelable
 * @return {{constructor, dict: {cancelable, bubbles}}}
 */
function define(constructor, bubbles, cancelable) {
  return {
    constructor,
    dict : { bubbles, cancelable },
  }
}

module.exports = EventType


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AttrType = __webpack_require__(6)

let counter = 0

class Id extends AttrType
{
  static nodeName = 'id'

  static generate() {
    const str = (counter++).toString(36)
    return 'ID_' + str.padStart(4, '0')
  }
}

module.exports = Id


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { document } = __webpack_require__(4)
const AttrType = __webpack_require__(6)

const sampleNode = document.createElement('div')

class Style extends AttrType
{
  static nodeName = 'style'

  static set(elem, prop, value) {
    if(typeof value === 'string' || value === null) {
      elem.vnode.style = value || null
      return
    }
    Object.assign(sampleNode.style, value)
    elem.vnode.style = sampleNode.getAttribute('style') || null
    sampleNode.style = ''
  }
}

module.exports = Style


/***/ }),
/* 18 */
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
}

module.exports = TextType


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const RoleType = __webpack_require__(20)

exports.RoleAlert = class RoleAlert extends RoleType
{
  static role = 'Alert'
}

exports.RoleAlertDialog = class RoleAlertDialog extends RoleType
{
  static role = 'AlertDialog'
}

exports.RoleApplication = class RoleApplication extends RoleType
{
  static role = 'Application'
}

exports.RoleArticle = class RoleArticle extends RoleType
{
  static role = 'Article'
}

exports.RoleBanner = class RoleBanner extends RoleType
{
  static role = 'Banner'
}

exports.RoleBlockQuote = class RoleBlockQuote extends RoleType
{
  static role = 'BlockQuote'
}

exports.RoleButton = class RoleButton extends RoleType
{
  static role = 'Button'
}

exports.RoleCaption = class RoleCaption extends RoleType
{
  static role = 'Caption'
}

exports.RoleCell = class RoleCell extends RoleType
{
  static role = 'Cell'
}

exports.RoleCheckBox = class RoleCheckBox extends RoleType
{
  static role = 'CheckBox'
}

exports.RoleColumnHeader = class RoleColumnHeader extends RoleType
{
  static role = 'ColumnHeader'
}

exports.RoleComboBox = class RoleComboBox extends RoleType
{
  static role = 'ComboBox'
}

exports.RoleComplementary = class RoleComplementary extends RoleType
{
  static role = 'Complementary'
}

exports.RoleContentInfo = class RoleContentInfo extends RoleType
{
  static role = 'ContentInfo'
}

exports.RoleDefinition = class RoleDefinition extends RoleType
{
  static role = 'Definition'
}

exports.RoleDialog = class RoleDialog extends RoleType
{
  static role = 'Dialog'
}

exports.RoleDirectory = class RoleDirectory extends RoleType
{
  static role = 'Directory'
}

exports.RoleDocument = class RoleDocument extends RoleType
{
  static role = 'Document'
}

exports.RoleFeed = class RoleFeed extends RoleType
{
  static role = 'Feed'
}

exports.RoleFigure = class RoleFigure extends RoleType
{
  static role = 'Figure'
}

exports.RoleForm = class RoleForm extends RoleType
{
  static role = 'Form'
}

exports.RoleGrid = class RoleGrid extends RoleType
{
  static role = 'Grid'
}

exports.RoleGridCell = class RoleGridCell extends RoleType
{
  static role = 'GridCell'
}

exports.RoleGroup = class RoleGroup extends RoleType
{
  static role = 'Group'
}

exports.RoleHeading = class RoleHeading extends RoleType
{
  static role = 'Heading'
}

exports.RoleImg = class RoleImg extends RoleType
{
  static role = 'Img'
}

exports.RoleLink = class RoleLink extends RoleType
{
  static role = 'Link'
}

exports.RoleList = class RoleList extends RoleType
{
  static role = 'List'
}

exports.RoleListBox = class RoleListBox extends RoleType
{
  static role = 'ListBox'
}

exports.RoleListItem = class RoleListItem extends RoleType
{
  static role = 'ListItem'
}

exports.RoleLog = class RoleLog extends RoleType
{
  static role = 'Log'
}

exports.RoleMain = class RoleMain extends RoleType
{
  static role = 'Main'
}

exports.RoleMarquee = class RoleMarquee extends RoleType
{
  static role = 'Marquee'
}

exports.RoleMath = class RoleMath extends RoleType
{
  static role = 'Math'
}

exports.RoleMenu = class RoleMenu extends RoleType
{
  static role = 'Menu'
}

exports.RoleMenuBar = class RoleMenuBar extends RoleType
{
  static role = 'MenuBar'
}

exports.RoleMenuItem = class RoleMenuItem extends RoleType
{
  static role = 'MenuItem'
}

exports.RoleMenuItemCheckBox = class RoleMenuItemCheckBox extends RoleType
{
  static role = 'MenuItemCheckBox'
}

exports.RoleMenuItemRadio = class RoleMenuItemRadio extends RoleType
{
  static role = 'MenuItemRadio'
}

exports.RoleNavigation = class RoleNavigation extends RoleType
{
  static role = 'Navigation'
}

exports.RoleNone = class RoleNone extends RoleType
{
  static role = 'None'
}

exports.RoleNote = class RoleNote extends RoleType
{
  static role = 'Note'
}

exports.RoleOption = class RoleOption extends RoleType
{
  static role = 'Option'
}

exports.RoleParagraph = class RoleParagraph extends RoleType
{
  static role = 'Paragraph'
}

exports.RolePresentation = class RolePresentation extends RoleType
{
  static role = 'Presentation'
}

exports.RoleProgressBar = class RoleProgressBar extends RoleType
{
  static role = 'ProgressBar'
}

exports.RoleRadio = class RoleRadio extends RoleType
{
  static role = 'Radio'
}

exports.RoleRadioGroup = class RoleRadioGroup extends RoleType
{
  static role = 'RadioGroup'
}

exports.RoleRegion = class RoleRegion extends RoleType
{
  static role = 'Region'
}

exports.RoleRow = class RoleRow extends RoleType
{
  static role = 'Row'
}

exports.RoleRowGroup = class RoleRowGroup extends RoleType
{
  static role = 'RowGroup'
}

exports.RoleRowHeader = class RoleRowHeader extends RoleType
{
  static role = 'RowHeader'
}

exports.RoleScrollBar = class RoleScrollBar extends RoleType
{
  static role = 'ScrollBar'
}

exports.RoleSearch = class RoleSearch extends RoleType
{
  static role = 'Search'
}

exports.RoleSearchBox = class RoleSearchBox extends RoleType
{
  static role = 'SearchBox'
}

exports.RoleSectionHead = class RoleSectionHead extends RoleType
{
  static role = 'SectionHead'
}

exports.RoleSeparator = class RoleSeparator extends RoleType
{
  static role = 'Separator'
}

exports.RoleSlider = class RoleSlider extends RoleType
{
  static role = 'Slider'
}

exports.RoleSpinButton = class RoleSpinButton extends RoleType
{
  static role = 'SpinButton'
}

exports.RoleStatus = class RoleStatus extends RoleType
{
  static role = 'Status'
}

exports.RoleStrong = class RoleStrong extends RoleType
{
  static role = 'Strong'
}

exports.RoleSwitch = class RoleSwitch extends RoleType
{
  static role = 'Switch'
}

exports.RoleTab = class RoleTab extends RoleType
{
  static role = 'Tab'
}

exports.RoleTabList = class RoleTabList extends RoleType
{
  static role = 'TabList'
}

exports.RoleTabPanel = class RoleTabPanel extends RoleType
{
  static role = 'TabPanel'
}

exports.RoleTable = class RoleTable extends RoleType
{
  static role = 'Table'
}

exports.RoleTerm = class RoleTerm extends RoleType
{
  static role = 'Term'
}

exports.RoleTextBox = class RoleTextBox extends RoleType
{
  static role = 'TextBox'
}

exports.RoleTimer = class RoleTimer extends RoleType
{
  static role = 'Timer'
}

exports.RoleToolBar = class RoleToolBar extends RoleType
{
  static role = 'ToolBar'
}

exports.RoleToolTip = class RoleToolTip extends RoleType
{
  static role = 'ToolTip'
}

exports.RoleTree = class RoleTree extends RoleType
{
  static role = 'Tree'
}

exports.RoleTreeGrid = class RoleTreeGrid extends RoleType
{
  static role = 'TreeGrid'
}

exports.RoleTreeItem = class RoleTreeItem extends RoleType
{
  static role = 'TreeItem'
}


/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ElemType = __webpack_require__(3)
const PropType = __webpack_require__(11)

/**
 * @abstract
 */
class RoleType extends ElemType
{
  static props = {
    accessKey : 'accesskey',
    autofocus : 'autofocus',
    contentEditable : 'contenteditable',
    dir : 'dir',
    inputMode : 'inputmode',
    lang : 'lang',
    tabIndex : 'tabindex',
    title : 'title',
    translate : 'translate',
    innerText : PropType,
  }
}

module.exports = RoleType


/***/ }),
/* 21 */
/***/ ((module) => {

/**
 * @param {*} props
 * @constructor
 */
function Context(props) {
  /**
   * @param {*} newProps
   * @param {*} children
   * @return {*}
   */
  this.Provider = ({ children, ...newProps }) => {
    props = newProps
    return children
  }
  /**
   * @param {function} render
   */
  this.Consumer = render => render(props)
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