const AttrType = require('./AttrType')
const HtmlType = require('./HtmlType')
const PropType = require('./PropType')

const attr = AttrType.define.bind(AttrType)

exports.HtmlA = class HtmlA extends HtmlType
{
  static tagName = 'a'

  static props = {
    download : attr('download'),
    hash : PropType,
    host : PropType,
    hostname : PropType,
    href : attr('href'),
    hreflang : attr('hreflang'),
    password : PropType,
    pathname : PropType,
    port : PropType,
    protocol : PropType,
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    rev : attr('rev'),
    search : PropType,
    target : attr('target'),
    type : attr('type'),
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
    alt : attr('alt'),
    coords : attr('coords'),
    download : attr('download'),
    hash : PropType,
    host : PropType,
    hostname : PropType,
    href : attr('href'),
    password : PropType,
    pathname : PropType,
    port : PropType,
    protocol : PropType,
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    search : PropType,
    shape : attr('shape'),
    target : attr('target'),
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
    autoplay : attr('autoplay'),
    controls : attr('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    loop : attr('loop'),
    muted : PropType,
    playbackRate : PropType,
    preload : attr('preload'),
    src : attr('src'),
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
    href : attr('href'),
    target : attr('target'),
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
    cite : attr('cite'),
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
    autofocus : attr('autofocus'),
    disabled : attr('disabled'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : attr('formnovalidate'),
    formTarget : attr('formtarget'),
    name : attr('name'),
    type : attr('type'),
    value : PropType,
  }
}

exports.HtmlCanvas = class HtmlCanvas extends HtmlType
{
  static tagName = 'canvas'

  static props = {
    height : attr('height'),
    width : attr('width'),
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
    span : attr('span'),
  }
}

exports.HtmlColGroup = class HtmlColGroup extends HtmlType
{
  static tagName = 'colgroup'

  static props = {
    span : attr('span'),
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
    cite : attr('cite'),
    dateTime : attr('datetime'),
  }
}

exports.HtmlDetails = class HtmlDetails extends HtmlType
{
  static tagName = 'details'

  static props = {
    open : attr('open'),
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
    open : attr('open'),
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
    height : attr('height'),
    src : attr('src'),
    type : attr('type'),
    width : attr('width'),
  }
}

exports.HtmlFieldSet = class HtmlFieldSet extends HtmlType
{
  static tagName = 'fieldset'

  static props = {
    disabled : attr('disabled'),
    name : attr('name'),
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
    acceptCharset : attr('accept-charset'),
    action : attr('action'),
    autocomplete : attr('autocomplete'),
    enctype : attr('enctype'),
    method : attr('method'),
    name : attr('name'),
    noValidate : attr('novalidate'),
    target : attr('target'),
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
    allowFullScreen : attr('allowfullscreen'),
    height : attr('height'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    srcdoc : attr('srcdoc'),
    width : attr('width'),
  }
}

exports.HtmlImg = class HtmlImg extends HtmlType
{
  static tagName = 'img'

  static props = {
    alt : attr('alt'),
    crossOrigin : attr('crossorigin'),
    height : attr('height'),
    isMap : attr('ismap'),
    referrerPolicy : attr('referrerpolicy'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    useMap : attr('usemap'),
    width : attr('width'),
  }
}

exports.HtmlInput = class HtmlInput extends HtmlType
{
  static tagName = 'input'

  static props = {
    accept : attr('accept'),
    alt : attr('alt'),
    autocomplete : attr('autocomplete'),
    autofocus : attr('autofocus'),
    checked : PropType,
    defaultChecked : PropType,
    defaultValue : attr('value'),
    dirName : attr('dirname'),
    disabled : attr('disabled'),
    files : attr('files'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : attr('formnovalidate'),
    formTarget : attr('formtarget'),
    height : attr('height'),
    indeterminate : PropType,
    inputMode : attr('inputmode'),
    max : attr('max'),
    maxLength : attr('maxlength'),
    min : attr('min'),
    minLength : attr('minlength'),
    multiple : attr('multiple'),
    name : attr('name'),
    pattern : attr('pattern'),
    placeholder : attr('placeholder'),
    readOnly : attr('readonly'),
    required : attr('required'),
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    size : attr('size'),
    src : attr('src'),
    step : attr('step'),
    type : attr('type'),
    value : PropType,
    valueAsDate : PropType,
    valueAsNumber : PropType,
    width : attr('width'),
  }
}

exports.HtmlIns = class HtmlIns extends HtmlType
{
  static tagName = 'ins'

  static props = {
    cite : attr('cite'),
    dateTime : attr('datetime'),
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
    htmlFor : attr('for'),
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
    crossOrigin : attr('crossorigin'),
    href : attr('href'),
    hreflang : attr('hreflang'),
    media : attr('media'),
    nonce : attr('nonce'),
    referrerPolicy : attr('referrerpolicy'),
    rel : attr('rel'),
    rev : attr('rev'),
    type : attr('type'),
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
    name : attr('name'),
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
    charset : attr('charset'),
    content : attr('content'),
    httpEquiv : attr('http-equiv'),
    name : attr('name'),
  }
}

exports.HtmlMeter = class HtmlMeter extends HtmlType
{
  static tagName = 'meter'

  static props = {
    high : attr('high'),
    low : attr('low'),
    max : attr('max'),
    min : attr('min'),
    optimum : attr('optimum'),
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
    data : attr('data'),
    height : attr('height'),
    name : attr('name'),
    type : attr('type'),
    useMap : attr('usemap'),
    width : attr('width'),
  }
}

exports.HtmlOl = class HtmlOl extends HtmlType
{
  static tagName = 'ol'

  static props = {
    reversed : attr('reversed'),
    start : attr('start'),
    type : attr('type'),
  }
}

exports.HtmlOptGroup = class HtmlOptGroup extends HtmlType
{
  static tagName = 'optgroup'

  static props = {
    disabled : attr('disabled'),
    label : attr('label'),
  }
}

exports.HtmlOption = class HtmlOption extends HtmlType
{
  static tagName = 'option'

  static props = {
    defaultSelected : PropType,
    disabled : attr('disabled'),
    label : attr('label'),
    selected : PropType,
    text : attr('text'),
    value : PropType,
  }
}

exports.HtmlOutput = class HtmlOutput extends HtmlType
{
  static tagName = 'output'

  static props = {
    defaultValue : PropType,
    htmlFor : attr('for'),
    name : attr('name'),
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
    max : attr('max'),
    value : PropType,
  }
}

exports.HtmlQ = class HtmlQ extends HtmlType
{
  static tagName = 'q'

  static props = {
    cite : attr('cite'),
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
    async : attr('async'),
    charset : attr('charset'),
    crossOrigin : attr('crossorigin'),
    defer : attr('defer'),
    integrity : attr('integrity'),
    noModule : attr('nomodule'),
    nonce : attr('nonce'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    text : attr('text'),
    type : attr('type'),
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
    autocomplete : attr('autocomplete'),
    autofocus : attr('autofocus'),
    disabled : attr('disabled'),
    multiple : attr('multiple'),
    name : attr('name'),
    required : attr('required'),
    selectedIndex : PropType,
    size : attr('size'),
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
    media : attr('media'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    type : attr('type'),
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
    media : attr('media'),
    nonce : attr('nonce'),
    type : attr('type'),
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
    colSpan : attr('colspan'),
    headers : attr('headers'),
    rowSpan : attr('rowspan'),
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
    autocomplete : attr('autocomplete'),
    autofocus : attr('autofocus'),
    cols : attr('cols'),
    defaultValue : PropType,
    dirName : attr('dirname'),
    disabled : attr('disabled'),
    inputMode : attr('inputmode'),
    maxLength : attr('maxlength'),
    minLength : attr('minlength'),
    name : attr('name'),
    placeholder : attr('placeholder'),
    readOnly : attr('readonly'),
    required : attr('required'),
    rows : attr('rows'),
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    step : attr('step'),
    value : PropType,
    wrap : attr('wrap'),
  }
}

exports.HtmlTh = class HtmlTh extends HtmlType
{
  static tagName = 'th'

  static props = {
    abbr : attr('abbr'),
    colSpan : attr('colspan'),
    headers : attr('headers'),
    rowSpan : attr('rowspan'),
    scope : attr('scope'),
  }
}

exports.HtmlTime = class HtmlTime extends HtmlType
{
  static tagName = 'time'

  static props = {
    dateTime : attr('datetime'),
  }
}

exports.HtmlTitle = class HtmlTitle extends HtmlType
{
  static tagName = 'title'

  static props = {
    text : attr('text'),
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
    default : attr('default'),
    kind : attr('kind'),
    label : attr('label'),
    src : attr('src'),
    srclang : attr('srclang'),
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
    autoplay : attr('autoplay'),
    controls : attr('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    height : attr('height'),
    loop : attr('loop'),
    muted : PropType,
    playbackRate : PropType,
    poster : attr('poster'),
    preload : attr('preload'),
    src : attr('src'),
    srcObject : PropType,
    volume : PropType,
    width : attr('width'),
  }
}

exports.HtmlWbr = class HtmlWbr extends HtmlType
{
  static tagName = 'wbr'
}
