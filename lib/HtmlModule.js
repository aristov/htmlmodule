import { AttrType } from './AttrType.js'
import { BooleanType } from './BooleanType.js'
import { NumberType } from './NumberType.js'
import { HtmlType } from './HtmlType.js'
import { PropType } from './PropType.js'

const attr = AttrType.define.bind(AttrType)
const boolean = BooleanType.define.bind(BooleanType)
const number = NumberType.define.bind(NumberType)

export class HtmlA extends HtmlType
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

export class HtmlAbbr extends HtmlType
{
  static tagName = 'abbr'
}

export class HtmlAddress extends HtmlType
{
  static tagName = 'address'
}

export class HtmlArea extends HtmlType
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

export class HtmlArticle extends HtmlType
{
  static tagName = 'article'
}

export class HtmlAside extends HtmlType
{
  static tagName = 'aside'
}

export class HtmlAudio extends HtmlType
{
  static tagName = 'audio'

  static props = {
    autoplay : boolean('autoplay'),
    controls : boolean('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    loop : boolean('loop'),
    muted : PropType,
    playbackRate : PropType,
    preload : attr('preload'),
    src : attr('src'),
    srcObject : PropType,
    volume : PropType,
  }
}

export class HtmlB extends HtmlType
{
  static tagName = 'b'
}

export class HtmlBase extends HtmlType
{
  static tagName = 'base'

  static props = {
    href : attr('href'),
    target : attr('target'),
  }
}

export class HtmlBdi extends HtmlType
{
  static tagName = 'bdi'
}

export class HtmlBdo extends HtmlType
{
  static tagName = 'bdo'
}

export class HtmlBlockQuote extends HtmlType
{
  static tagName = 'blockquote'

  static props = {
    cite : attr('cite'),
  }
}

export class HtmlBody extends HtmlType
{
  static tagName = 'body'
}

export class HtmlBr extends HtmlType
{
  static tagName = 'br'
}

export class HtmlButton extends HtmlType
{
  static tagName = 'button'

  static props = {
    autofocus : boolean('autofocus'),
    disabled : boolean('disabled'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : boolean('formnovalidate'),
    formTarget : attr('formtarget'),
    name : attr('name'),
    type : attr('type'),
    value : PropType,
  }
}

export class HtmlCanvas extends HtmlType
{
  static tagName = 'canvas'

  static props = {
    height : number('height'),
    width : number('width'),
  }
}

export class HtmlCaption extends HtmlType
{
  static tagName = 'caption'
}

export class HtmlCite extends HtmlType
{
  static tagName = 'cite'
}

export class HtmlCode extends HtmlType
{
  static tagName = 'code'
}

export class HtmlCol extends HtmlType
{
  static tagName = 'col'

  static props = {
    span : number('span'),
  }
}

export class HtmlColGroup extends HtmlType
{
  static tagName = 'colgroup'

  static props = {
    span : number('span'),
  }
}

export class HtmlData extends HtmlType
{
  static tagName = 'data'

  static props = {
    value : PropType,
  }
}

export class HtmlDataList extends HtmlType
{
  static tagName = 'datalist'
}

export class HtmlDd extends HtmlType
{
  static tagName = 'dd'
}

export class HtmlDel extends HtmlType
{
  static tagName = 'del'

  static props = {
    cite : attr('cite'),
    dateTime : attr('datetime'),
  }
}

export class HtmlDetails extends HtmlType
{
  static tagName = 'details'

  static props = {
    open : boolean('open'),
  }
}

export class HtmlDfn extends HtmlType
{
  static tagName = 'dfn'
}

export class HtmlDialog extends HtmlType
{
  static tagName = 'dialog'

  static props = {
    open : boolean('open'),
    returnValue : PropType,
  }
}

export class HtmlDiv extends HtmlType
{
  static tagName = 'div'
}

export class HtmlDl extends HtmlType
{
  static tagName = 'dl'
}

export class HtmlDt extends HtmlType
{
  static tagName = 'dt'
}

export class HtmlEm extends HtmlType
{
  static tagName = 'em'
}

export class HtmlEmbed extends HtmlType
{
  static tagName = 'embed'

  static props = {
    height : number('height'),
    src : attr('src'),
    type : attr('type'),
    width : number('width'),
  }
}

export class HtmlFieldSet extends HtmlType
{
  static tagName = 'fieldset'

  static props = {
    disabled : boolean('disabled'),
    name : attr('name'),
  }
}

export class HtmlFigCaption extends HtmlType
{
  static tagName = 'figcaption'
}

export class HtmlFigure extends HtmlType
{
  static tagName = 'figure'
}

export class HtmlFooter extends HtmlType
{
  static tagName = 'footer'
}

export class HtmlForm extends HtmlType
{
  static tagName = 'form'

  static props = {
    acceptCharset : attr('accept-charset'),
    action : attr('action'),
    autocomplete : attr('autocomplete'),
    enctype : attr('enctype'),
    method : attr('method'),
    name : attr('name'),
    noValidate : boolean('novalidate'),
    target : attr('target'),
  }
}

export class HtmlH1 extends HtmlType
{
  static tagName = 'h1'
}

export class HtmlH2 extends HtmlType
{
  static tagName = 'h2'
}

export class HtmlH3 extends HtmlType
{
  static tagName = 'h3'
}

export class HtmlH4 extends HtmlType
{
  static tagName = 'h4'
}

export class HtmlH5 extends HtmlType
{
  static tagName = 'h5'
}

export class HtmlH6 extends HtmlType
{
  static tagName = 'h6'
}

export class HtmlHGroup extends HtmlType
{
  static tagName = 'hgroup'
}

export class HtmlHead extends HtmlType
{
  static tagName = 'head'
}

export class HtmlHeader extends HtmlType
{
  static tagName = 'header'
}

export class HtmlHr extends HtmlType
{
  static tagName = 'hr'
}

export class HtmlHtml extends HtmlType
{
  static tagName = 'html'
}

export class HtmlI extends HtmlType
{
  static tagName = 'i'
}

export class HtmlIFrame extends HtmlType
{
  static tagName = 'iframe'

  static props = {
    allowFullScreen : boolean('allowfullscreen'),
    height : number('height'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    srcdoc : attr('srcdoc'),
    width : number('width'),
  }
}

export class HtmlImg extends HtmlType
{
  static tagName = 'img'

  static props = {
    alt : attr('alt'),
    crossOrigin : attr('crossorigin'),
    height : number('height'),
    isMap : boolean('ismap'),
    referrerPolicy : attr('referrerpolicy'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    useMap : attr('usemap'),
    width : number('width'),
  }
}

export class HtmlInput extends HtmlType
{
  static tagName = 'input'

  static props = {
    accept : attr('accept'),
    alt : attr('alt'),
    autocomplete : attr('autocomplete'),
    checked : PropType,
    defaultChecked : PropType,
    defaultValue : attr('value'),
    dirName : attr('dirname'),
    disabled : boolean('disabled'),
    formAction : attr('formaction'),
    formEnctype : attr('formenctype'),
    formMethod : attr('formmethod'),
    formNoValidate : boolean('formnovalidate'),
    formTarget : attr('formtarget'),
    height : number('height'),
    indeterminate : PropType,
    inputMode : attr('inputmode'),
    max : attr('max'),
    maxLength : number('maxlength'),
    min : attr('min'),
    minLength : number('minlength'),
    multiple : boolean('multiple'),
    name : attr('name'),
    pattern : attr('pattern'),
    placeholder : attr('placeholder'),
    readOnly : boolean('readonly'),
    required : boolean('required'),
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    size : number('size'),
    src : attr('src'),
    step : attr('step'),
    type : attr('type'),
    value : PropType,
    valueAsDate : PropType,
    valueAsNumber : PropType,
    width : number('width'),
  }
}

export class HtmlIns extends HtmlType
{
  static tagName = 'ins'

  static props = {
    cite : attr('cite'),
    dateTime : attr('datetime'),
  }
}

export class HtmlKbd extends HtmlType
{
  static tagName = 'kbd'
}

export class HtmlLabel extends HtmlType
{
  static tagName = 'label'

  static props = {
    htmlFor : attr('for'),
  }
}

export class HtmlLegend extends HtmlType
{
  static tagName = 'legend'
}

export class HtmlLi extends HtmlType
{
  static tagName = 'li'

  static props = {
    value : PropType,
  }
}

export class HtmlLink extends HtmlType
{
  static tagName = 'link'

  static props = {
    crossOrigin : attr('crossorigin'),
    disabled : boolean('disabled'),
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

export class HtmlMain extends HtmlType
{
  static tagName = 'main'
}

export class HtmlMap extends HtmlType
{
  static tagName = 'map'

  static props = {
    name : attr('name'),
  }
}

export class HtmlMark extends HtmlType
{
  static tagName = 'mark'
}

export class HtmlMenu extends HtmlType
{
  static tagName = 'menu'
}

export class HtmlMeta extends HtmlType
{
  static tagName = 'meta'

  static props = {
    charset : attr('charset'),
    content : attr('content'),
    httpEquiv : attr('http-equiv'),
    name : attr('name'),
  }
}

export class HtmlMeter extends HtmlType
{
  static tagName = 'meter'

  static props = {
    high : number('high'),
    low : number('low'),
    max : number('max'),
    min : number('min'),
    optimum : number('optimum'),
    value : PropType,
  }
}

export class HtmlNav extends HtmlType
{
  static tagName = 'nav'
}

export class HtmlNoScript extends HtmlType
{
  static tagName = 'noscript'
}

export class HtmlObject extends HtmlType
{
  static tagName = 'object'

  static props = {
    data : attr('data'),
    height : number('height'),
    name : attr('name'),
    type : attr('type'),
    useMap : attr('usemap'),
    width : number('width'),
  }
}

export class HtmlOl extends HtmlType
{
  static tagName = 'ol'

  static props = {
    reversed : boolean('reversed'),
    start : number('start'),
    type : attr('type'),
  }
}

export class HtmlOptGroup extends HtmlType
{
  static tagName = 'optgroup'

  static props = {
    disabled : boolean('disabled'),
    label : attr('label'),
  }
}

export class HtmlOption extends HtmlType
{
  static tagName = 'option'

  static props = {
    defaultSelected : PropType,
    disabled : boolean('disabled'),
    label : attr('label'),
    selected : PropType,
    text : attr('text'),
    value : PropType,
  }
}

export class HtmlOutput extends HtmlType
{
  static tagName = 'output'

  static props = {
    defaultValue : PropType,
    htmlFor : attr('for'),
    name : attr('name'),
    value : PropType,
  }
}

export class HtmlP extends HtmlType
{
  static tagName = 'p'
}

export class HtmlParam extends HtmlType
{
  static tagName = 'param'
}

export class HtmlPicture extends HtmlType
{
  static tagName = 'picture'
}

export class HtmlPre extends HtmlType
{
  static tagName = 'pre'
}

export class HtmlProgress extends HtmlType
{
  static tagName = 'progress'

  static props = {
    max : number('max'),
    value : PropType,
  }
}

export class HtmlQ extends HtmlType
{
  static tagName = 'q'

  static props = {
    cite : attr('cite'),
  }
}

export class HtmlRp extends HtmlType
{
  static tagName = 'rp'
}

export class HtmlRt extends HtmlType
{
  static tagName = 'rt'
}

export class HtmlRuby extends HtmlType
{
  static tagName = 'ruby'
}

export class HtmlS extends HtmlType
{
  static tagName = 's'
}

export class HtmlSamp extends HtmlType
{
  static tagName = 'samp'
}

export class HtmlScript extends HtmlType
{
  static tagName = 'script'

  static props = {
    async : boolean('async'),
    charset : attr('charset'),
    crossOrigin : attr('crossorigin'),
    defer : boolean('defer'),
    integrity : attr('integrity'),
    noModule : boolean('nomodule'),
    nonce : attr('nonce'),
    referrerPolicy : attr('referrerpolicy'),
    src : attr('src'),
    text : attr('text'),
    type : attr('type'),
  }
}

export class HtmlSection extends HtmlType
{
  static tagName = 'section'
}

export class HtmlSelect extends HtmlType
{
  static tagName = 'select'

  static props = {
    autocomplete : attr('autocomplete'),
    disabled : boolean('disabled'),
    multiple : boolean('multiple'),
    name : attr('name'),
    required : boolean('required'),
    selectedIndex : PropType,
    size : number('size'),
    value : PropType,
  }
}

export class HtmlSmall extends HtmlType
{
  static tagName = 'small'
}

export class HtmlSource extends HtmlType
{
  static tagName = 'source'

  static props = {
    height : number('height'),
    media : attr('media'),
    sizes : attr('sizes'),
    src : attr('src'),
    srcset : attr('srcset'),
    type : attr('type'),
    width : number('width'),
  }
}

export class HtmlSpan extends HtmlType
{
  static tagName = 'span'
}

export class HtmlStrong extends HtmlType
{
  static tagName = 'strong'
}

export class HtmlStyle extends HtmlType
{
  static tagName = 'style'

  static props = {
    media : attr('media'),
    nonce : attr('nonce'),
    type : attr('type'),
  }
}

export class HtmlSub extends HtmlType
{
  static tagName = 'sub'
}

export class HtmlSummary extends HtmlType
{
  static tagName = 'summary'
}

export class HtmlSup extends HtmlType
{
  static tagName = 'sup'
}

export class HtmlTBody extends HtmlType
{
  static tagName = 'tbody'
}

export class HtmlTFoot extends HtmlType
{
  static tagName = 'tfoot'
}

export class HtmlTHead extends HtmlType
{
  static tagName = 'thead'
}

export class HtmlTable extends HtmlType
{
  static tagName = 'table'
}

export class HtmlTd extends HtmlType
{
  static tagName = 'td'

  static props = {
    colSpan : number('colspan'),
    headers : attr('headers'),
    rowSpan : number('rowspan'),
  }
}

export class HtmlTemplate extends HtmlType
{
  static tagName = 'template'
}

export class HtmlTextArea extends HtmlType
{
  static tagName = 'textarea'

  static props = {
    autocomplete : attr('autocomplete'),
    cols : number('cols'),
    defaultValue : PropType,
    dirName : attr('dirname'),
    disabled : boolean('disabled'),
    inputMode : attr('inputmode'),
    maxLength : number('maxlength'),
    minLength : number('minlength'),
    name : attr('name'),
    placeholder : attr('placeholder'),
    readOnly : boolean('readonly'),
    required : boolean('required'),
    rows : number('rows'),
    selectionDirection : PropType,
    selectionEnd : PropType,
    selectionStart : PropType,
    step : attr('step'),
    value : PropType,
    wrap : attr('wrap'),
  }
}

export class HtmlTh extends HtmlType
{
  static tagName = 'th'

  static props = {
    abbr : attr('abbr'),
    colSpan : number('colspan'),
    headers : attr('headers'),
    rowSpan : number('rowspan'),
    scope : attr('scope'),
  }
}

export class HtmlTime extends HtmlType
{
  static tagName = 'time'

  static props = {
    dateTime : attr('datetime'),
  }
}

export class HtmlTitle extends HtmlType
{
  static tagName = 'title'

  static props = {
    text : attr('text'),
  }
}

export class HtmlTr extends HtmlType
{
  static tagName = 'tr'
}

export class HtmlTrack extends HtmlType
{
  static tagName = 'track'

  static props = {
    default : boolean('default'),
    kind : attr('kind'),
    label : attr('label'),
    src : attr('src'),
    srclang : attr('srclang'),
  }
}

export class HtmlU extends HtmlType
{
  static tagName = 'u'
}

export class HtmlUl extends HtmlType
{
  static tagName = 'ul'
}

export class HtmlVar extends HtmlType
{
  static tagName = 'var'
}

export class HtmlVideo extends HtmlType
{
  static tagName = 'video'

  static props = {
    autoplay : boolean('autoplay'),
    controls : boolean('controls'),
    crossOrigin : attr('crossorigin'),
    currentTime : PropType,
    defaultMuted : PropType,
    defaultPlaybackRate : PropType,
    height : number('height'),
    loop : boolean('loop'),
    muted : PropType,
    playbackRate : PropType,
    playsinline : boolean('playsInline'),
    poster : attr('poster'),
    preload : attr('preload'),
    src : attr('src'),
    srcObject : PropType,
    volume : PropType,
    width : number('width'),
  }
}

export class HtmlWbr extends HtmlType
{
  static tagName = 'wbr'
}
