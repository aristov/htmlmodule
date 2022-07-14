const HtmlType = require('./HtmlType')

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
