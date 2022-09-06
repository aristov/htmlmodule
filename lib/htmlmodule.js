const HtmlType = require('./HtmlType')

exports.HtmlA = class HtmlA extends HtmlType
{
  static tagName = 'a'

  static class = undefined

  static props = {
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
  }
}

exports.HtmlAbbr = class HtmlAbbr extends HtmlType
{
  static tagName = 'abbr'

  static class = undefined
}

exports.HtmlAddress = class HtmlAddress extends HtmlType
{
  static tagName = 'address'

  static class = undefined
}

exports.HtmlArea = class HtmlArea extends HtmlType
{
  static tagName = 'area'

  static class = undefined

  static props = {
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
  }
}

exports.HtmlArticle = class HtmlArticle extends HtmlType
{
  static tagName = 'article'

  static class = undefined
}

exports.HtmlAside = class HtmlAside extends HtmlType
{
  static tagName = 'aside'

  static class = undefined
}

exports.HtmlAudio = class HtmlAudio extends HtmlType
{
  static tagName = 'audio'

  static class = undefined

  static methods = [
    'addTextTrack',
    'canPlayType',
    'fastSeek',
    'getStartDate',
    'load',
    'pause',
    'play',
  ]

  static props = {
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
  }
}

exports.HtmlB = class HtmlB extends HtmlType
{
  static tagName = 'b'

  static class = undefined
}

exports.HtmlBase = class HtmlBase extends HtmlType
{
  static tagName = 'base'

  static class = undefined

  static props = {
    href : 'href',
    target : 'target',
  }
}

exports.HtmlBdi = class HtmlBdi extends HtmlType
{
  static tagName = 'bdi'

  static class = undefined
}

exports.HtmlBdo = class HtmlBdo extends HtmlType
{
  static tagName = 'bdo'

  static class = undefined
}

exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlType
{
  static tagName = 'blockquote'

  static class = undefined

  static props = {
    cite : 'cite',
  }
}

exports.HtmlBody = class HtmlBody extends HtmlType
{
  static tagName = 'body'

  static class = undefined
}

exports.HtmlBr = class HtmlBr extends HtmlType
{
  static tagName = 'br'

  static class = undefined
}

exports.HtmlButton = class HtmlButton extends HtmlType
{
  static tagName = 'button'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'setCustomValidity',
  ]

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
    value : null,
  }
}

exports.HtmlCanvas = class HtmlCanvas extends HtmlType
{
  static tagName = 'canvas'

  static class = undefined

  static methods = [
    'getContext',
    'probablySupportsContext',
    'toBlob',
    'toDataURL',
  ]

  static props = {
    height : 'height',
    width : 'width',
  }
}

exports.HtmlCaption = class HtmlCaption extends HtmlType
{
  static tagName = 'caption'

  static class = undefined
}

exports.HtmlCite = class HtmlCite extends HtmlType
{
  static tagName = 'cite'

  static class = undefined
}

exports.HtmlCode = class HtmlCode extends HtmlType
{
  static tagName = 'code'

  static class = undefined
}

exports.HtmlCol = class HtmlCol extends HtmlType
{
  static tagName = 'col'

  static class = undefined

  static props = {
    span : 'span',
  }
}

exports.HtmlColGroup = class HtmlColGroup extends HtmlType
{
  static tagName = 'colgroup'

  static class = undefined

  static props = {
    span : 'span',
  }
}

exports.HtmlData = class HtmlData extends HtmlType
{
  static tagName = 'data'

  static class = undefined

  static props = {
    value : null,
  }
}

exports.HtmlDataList = class HtmlDataList extends HtmlType
{
  static tagName = 'datalist'

  static class = undefined
}

exports.HtmlDd = class HtmlDd extends HtmlType
{
  static tagName = 'dd'

  static class = undefined
}

exports.HtmlDel = class HtmlDel extends HtmlType
{
  static tagName = 'del'

  static class = undefined

  static props = {
    cite : 'cite',
    dateTime : 'datetime',
  }
}

exports.HtmlDetails = class HtmlDetails extends HtmlType
{
  static tagName = 'details'

  static class = undefined

  static props = {
    open : 'open',
  }
}

exports.HtmlDfn = class HtmlDfn extends HtmlType
{
  static tagName = 'dfn'

  static class = undefined
}

exports.HtmlDialog = class HtmlDialog extends HtmlType
{
  static tagName = 'dialog'

  static class = undefined

  static methods = [
    'close',
    'show',
    'showModal',
  ]

  static props = {
    open : 'open',
    returnValue : null,
  }
}

exports.HtmlDiv = class HtmlDiv extends HtmlType
{
  static tagName = 'div'

  static class = undefined
}

exports.HtmlDl = class HtmlDl extends HtmlType
{
  static tagName = 'dl'

  static class = undefined
}

exports.HtmlDt = class HtmlDt extends HtmlType
{
  static tagName = 'dt'

  static class = undefined
}

exports.HtmlEm = class HtmlEm extends HtmlType
{
  static tagName = 'em'

  static class = undefined
}

exports.HtmlEmbed = class HtmlEmbed extends HtmlType
{
  static tagName = 'embed'

  static class = undefined

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

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'setCustomValidity',
  ]

  static props = {
    disabled : 'disabled',
    name : 'name',
  }
}

exports.HtmlFigCaption = class HtmlFigCaption extends HtmlType
{
  static tagName = 'figcaption'

  static class = undefined
}

exports.HtmlFigure = class HtmlFigure extends HtmlType
{
  static tagName = 'figure'

  static class = undefined
}

exports.HtmlFooter = class HtmlFooter extends HtmlType
{
  static tagName = 'footer'

  static class = undefined
}

exports.HtmlForm = class HtmlForm extends HtmlType
{
  static tagName = 'form'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'reset',
    'submit',
  ]

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

  static class = undefined
}

exports.HtmlH2 = class HtmlH2 extends HtmlType
{
  static tagName = 'h2'

  static class = undefined
}

exports.HtmlH3 = class HtmlH3 extends HtmlType
{
  static tagName = 'h3'

  static class = undefined
}

exports.HtmlH4 = class HtmlH4 extends HtmlType
{
  static tagName = 'h4'

  static class = undefined
}

exports.HtmlH5 = class HtmlH5 extends HtmlType
{
  static tagName = 'h5'

  static class = undefined
}

exports.HtmlH6 = class HtmlH6 extends HtmlType
{
  static tagName = 'h6'

  static class = undefined
}

exports.HtmlHGroup = class HtmlHGroup extends HtmlType
{
  static tagName = 'hgroup'

  static class = undefined
}

exports.HtmlHead = class HtmlHead extends HtmlType
{
  static tagName = 'head'

  static class = undefined
}

exports.HtmlHeader = class HtmlHeader extends HtmlType
{
  static tagName = 'header'

  static class = undefined
}

exports.HtmlHr = class HtmlHr extends HtmlType
{
  static tagName = 'hr'

  static class = undefined
}

exports.HtmlHtml = class HtmlHtml extends HtmlType
{
  static tagName = 'html'

  static class = undefined
}

exports.HtmlI = class HtmlI extends HtmlType
{
  static tagName = 'i'

  static class = undefined
}

exports.HtmlIFrame = class HtmlIFrame extends HtmlType
{
  static tagName = 'iframe'

  static class = undefined

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

  static class = undefined

  static methods = [
    'decode',
  ]

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

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'select',
    'setCustomValidity',
    'setRangeText',
    'setSelectionRange',
    'stepDown',
    'stepUp',
  ]

  static props = {
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
  }
}

exports.HtmlIns = class HtmlIns extends HtmlType
{
  static tagName = 'ins'

  static class = undefined

  static props = {
    cite : 'cite',
    dateTime : 'datetime',
  }
}

exports.HtmlKbd = class HtmlKbd extends HtmlType
{
  static tagName = 'kbd'

  static class = undefined
}

exports.HtmlLabel = class HtmlLabel extends HtmlType
{
  static tagName = 'label'

  static class = undefined

  static props = {
    htmlFor : 'for',
  }
}

exports.HtmlLegend = class HtmlLegend extends HtmlType
{
  static tagName = 'legend'

  static class = undefined
}

exports.HtmlLi = class HtmlLi extends HtmlType
{
  static tagName = 'li'

  static class = undefined

  static props = {
    value : null,
  }
}

exports.HtmlLink = class HtmlLink extends HtmlType
{
  static tagName = 'link'

  static class = undefined

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

  static class = undefined
}

exports.HtmlMap = class HtmlMap extends HtmlType
{
  static tagName = 'map'

  static class = undefined

  static props = {
    name : 'name',
  }
}

exports.HtmlMark = class HtmlMark extends HtmlType
{
  static tagName = 'mark'

  static class = undefined
}

exports.HtmlMenu = class HtmlMenu extends HtmlType
{
  static tagName = 'menu'

  static class = undefined
}

exports.HtmlMeta = class HtmlMeta extends HtmlType
{
  static tagName = 'meta'

  static class = undefined

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

  static class = undefined

  static props = {
    high : 'high',
    low : 'low',
    max : 'max',
    min : 'min',
    optimum : 'optimum',
    value : null,
  }
}

exports.HtmlNav = class HtmlNav extends HtmlType
{
  static tagName = 'nav'

  static class = undefined
}

exports.HtmlNoScript = class HtmlNoScript extends HtmlType
{
  static tagName = 'noscript'

  static class = undefined
}

exports.HtmlObject = class HtmlObject extends HtmlType
{
  static tagName = 'object'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'setCustomValidity',
  ]

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

  static class = undefined

  static props = {
    reversed : 'reversed',
    start : 'start',
    type : 'type',
  }
}

exports.HtmlOptGroup = class HtmlOptGroup extends HtmlType
{
  static tagName = 'optgroup'

  static class = undefined

  static props = {
    disabled : 'disabled',
    label : 'label',
  }
}

exports.HtmlOption = class HtmlOption extends HtmlType
{
  static tagName = 'option'

  static class = undefined

  static props = {
    defaultSelected : null,
    disabled : 'disabled',
    label : 'label',
    selected : null,
    text : 'text',
    value : null,
  }
}

exports.HtmlOutput = class HtmlOutput extends HtmlType
{
  static tagName = 'output'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'setCustomValidity',
  ]

  static props = {
    defaultValue : null,
    htmlFor : 'for',
    name : 'name',
    value : null,
  }
}

exports.HtmlP = class HtmlP extends HtmlType
{
  static tagName = 'p'

  static class = undefined
}

exports.HtmlParam = class HtmlParam extends HtmlType
{
  static tagName = 'param'

  static class = undefined
}

exports.HtmlPicture = class HtmlPicture extends HtmlType
{
  static tagName = 'picture'

  static class = undefined
}

exports.HtmlPre = class HtmlPre extends HtmlType
{
  static tagName = 'pre'

  static class = undefined
}

exports.HtmlProgress = class HtmlProgress extends HtmlType
{
  static tagName = 'progress'

  static class = undefined

  static props = {
    max : 'max',
    value : null,
  }
}

exports.HtmlQ = class HtmlQ extends HtmlType
{
  static tagName = 'q'

  static class = undefined

  static props = {
    cite : 'cite',
  }
}

exports.HtmlRp = class HtmlRp extends HtmlType
{
  static tagName = 'rp'

  static class = undefined
}

exports.HtmlRt = class HtmlRt extends HtmlType
{
  static tagName = 'rt'

  static class = undefined
}

exports.HtmlRuby = class HtmlRuby extends HtmlType
{
  static tagName = 'ruby'

  static class = undefined
}

exports.HtmlS = class HtmlS extends HtmlType
{
  static tagName = 's'

  static class = undefined
}

exports.HtmlSamp = class HtmlSamp extends HtmlType
{
  static tagName = 'samp'

  static class = undefined
}

exports.HtmlScript = class HtmlScript extends HtmlType
{
  static tagName = 'script'

  static class = undefined

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

  static class = undefined
}

exports.HtmlSelect = class HtmlSelect extends HtmlType
{
  static tagName = 'select'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'setCustomValidity',
  ]

  static props = {
    autocomplete : 'autocomplete',
    autofocus : 'autofocus',
    disabled : 'disabled',
    multiple : 'multiple',
    name : 'name',
    required : 'required',
    selectedIndex : null,
    size : 'size',
    value : null,
  }
}

exports.HtmlSmall = class HtmlSmall extends HtmlType
{
  static tagName = 'small'

  static class = undefined
}

exports.HtmlSource = class HtmlSource extends HtmlType
{
  static tagName = 'source'

  static class = undefined

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

  static class = undefined
}

exports.HtmlStrong = class HtmlStrong extends HtmlType
{
  static tagName = 'strong'

  static class = undefined
}

exports.HtmlStyle = class HtmlStyle extends HtmlType
{
  static tagName = 'style'

  static class = undefined

  static props = {
    media : 'media',
    nonce : 'nonce',
    type : 'type',
  }
}

exports.HtmlSub = class HtmlSub extends HtmlType
{
  static tagName = 'sub'

  static class = undefined
}

exports.HtmlSummary = class HtmlSummary extends HtmlType
{
  static tagName = 'summary'

  static class = undefined
}

exports.HtmlSup = class HtmlSup extends HtmlType
{
  static tagName = 'sup'

  static class = undefined
}

exports.HtmlTBody = class HtmlTBody extends HtmlType
{
  static tagName = 'tbody'

  static class = undefined
}

exports.HtmlTFoot = class HtmlTFoot extends HtmlType
{
  static tagName = 'tfoot'

  static class = undefined
}

exports.HtmlTHead = class HtmlTHead extends HtmlType
{
  static tagName = 'thead'

  static class = undefined
}

exports.HtmlTable = class HtmlTable extends HtmlType
{
  static tagName = 'table'

  static class = undefined
}

exports.HtmlTd = class HtmlTd extends HtmlType
{
  static tagName = 'td'

  static class = undefined

  static props = {
    colSpan : 'colspan',
    headers : 'headers',
    rowSpan : 'rowspan',
  }
}

exports.HtmlTemplate = class HtmlTemplate extends HtmlType
{
  static tagName = 'template'

  static class = undefined
}

exports.HtmlTextArea = class HtmlTextArea extends HtmlType
{
  static tagName = 'textarea'

  static class = undefined

  static methods = [
    'checkValidity',
    'reportValidity',
    'select',
    'setCustomValidity',
    'setRangeText',
    'setSelectionRange',
  ]

  static props = {
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
  }
}

exports.HtmlTh = class HtmlTh extends HtmlType
{
  static tagName = 'th'

  static class = undefined

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

  static class = undefined

  static props = {
    dateTime : 'datetime',
  }
}

exports.HtmlTitle = class HtmlTitle extends HtmlType
{
  static tagName = 'title'

  static class = undefined

  static props = {
    text : 'text',
  }
}

exports.HtmlTr = class HtmlTr extends HtmlType
{
  static tagName = 'tr'

  static class = undefined
}

exports.HtmlTrack = class HtmlTrack extends HtmlType
{
  static tagName = 'track'

  static class = undefined

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

  static class = undefined
}

exports.HtmlUl = class HtmlUl extends HtmlType
{
  static tagName = 'ul'

  static class = undefined
}

exports.HtmlVar = class HtmlVar extends HtmlType
{
  static tagName = 'var'

  static class = undefined
}

exports.HtmlVideo = class HtmlVideo extends HtmlType
{
  static tagName = 'video'

  static class = undefined

  static methods = [
    'addTextTrack',
    'canPlayType',
    'fastSeek',
    'getStartDate',
    'load',
    'pause',
    'play',
  ]

  static props = {
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
  }
}

exports.HtmlWbr = class HtmlWbr extends HtmlType
{
  static tagName = 'wbr'

  static class = undefined
}
