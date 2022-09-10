const HtmlType = require('./HtmlType')
const PropType = require('./PropType')

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
