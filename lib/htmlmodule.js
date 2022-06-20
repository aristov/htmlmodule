const HtmlType = require('./HtmlType')

exports.HtmlA = class HtmlA extends HtmlType {}
exports.HtmlAbbr = class HtmlAbbr extends HtmlType {}
exports.HtmlAddress = class HtmlAddress extends HtmlType {}
exports.HtmlArea = class HtmlArea extends HtmlType {}
exports.HtmlArticle = class HtmlArticle extends HtmlType {}
exports.HtmlAside = class HtmlAside extends HtmlType {}
exports.HtmlAudio = class HtmlAudio extends HtmlType {}
exports.HtmlB = class HtmlB extends HtmlType {}
exports.HtmlBase = class HtmlBase extends HtmlType {}
exports.HtmlBdi = class HtmlBdi extends HtmlType {}
exports.HtmlBdo = class HtmlBdo extends HtmlType {}
exports.HtmlBlockQuote = class HtmlBlockQuote extends HtmlType {}
exports.HtmlBody = class HtmlBody extends HtmlType {}
exports.HtmlBr = class HtmlBr extends HtmlType {}
exports.HtmlButton = class HtmlButton extends HtmlType {}
exports.HtmlCanvas = class HtmlCanvas extends HtmlType {}
exports.HtmlCaption = class HtmlCaption extends HtmlType {}
exports.HtmlCite = class HtmlCite extends HtmlType {}
exports.HtmlCode = class HtmlCode extends HtmlType {}
exports.HtmlCol = class HtmlCol extends HtmlType {}
exports.HtmlColGroup = class HtmlColGroup extends HtmlType {}
exports.HtmlData = class HtmlData extends HtmlType {}
exports.HtmlDataList = class HtmlDataList extends HtmlType {}
exports.HtmlDd = class HtmlDd extends HtmlType {}
exports.HtmlDel = class HtmlDel extends HtmlType {}
exports.HtmlDetails = class HtmlDetails extends HtmlType {}
exports.HtmlDfn = class HtmlDfn extends HtmlType {}
exports.HtmlDialog = class HtmlDialog extends HtmlType {}
exports.HtmlDiv = class HtmlDiv extends HtmlType {}
exports.HtmlDl = class HtmlDl extends HtmlType {}
exports.HtmlDt = class HtmlDt extends HtmlType {}
exports.HtmlEm = class HtmlEm extends HtmlType {}
exports.HtmlEmbed = class HtmlEmbed extends HtmlType {}
exports.HtmlFieldSet = class HtmlFieldSet extends HtmlType {}
exports.HtmlFigCaption = class HtmlFigCaption extends HtmlType {}
exports.HtmlFigure = class HtmlFigure extends HtmlType {}
exports.HtmlFooter = class HtmlFooter extends HtmlType {}
exports.HtmlForm = class HtmlForm extends HtmlType {}
exports.HtmlH1 = class HtmlH1 extends HtmlType {}
exports.HtmlH2 = class HtmlH2 extends HtmlType {}
exports.HtmlH3 = class HtmlH3 extends HtmlType {}
exports.HtmlH4 = class HtmlH4 extends HtmlType {}
exports.HtmlH5 = class HtmlH5 extends HtmlType {}
exports.HtmlH6 = class HtmlH6 extends HtmlType {}
exports.HtmlHGroup = class HtmlHGroup extends HtmlType {}
exports.HtmlHead = class HtmlHead extends HtmlType {}
exports.HtmlHeader = class HtmlHeader extends HtmlType {}
exports.HtmlHr = class HtmlHr extends HtmlType {}
exports.HtmlHtml = class HtmlHtml extends HtmlType {}
exports.HtmlI = class HtmlI extends HtmlType {}
exports.HtmlIFrame = class HtmlIFrame extends HtmlType {}
exports.HtmlImg = class HtmlImg extends HtmlType {}
exports.HtmlInput = class HtmlInput extends HtmlType {}
exports.HtmlIns = class HtmlIns extends HtmlType {}
exports.HtmlKbd = class HtmlKbd extends HtmlType {}
exports.HtmlLabel = class HtmlLabel extends HtmlType {}
exports.HtmlLegend = class HtmlLegend extends HtmlType {}
exports.HtmlLi = class HtmlLi extends HtmlType {}
exports.HtmlLink = class HtmlLink extends HtmlType {}
exports.HtmlMain = class HtmlMain extends HtmlType {}
exports.HtmlMap = class HtmlMap extends HtmlType {}
exports.HtmlMark = class HtmlMark extends HtmlType {}
exports.HtmlMenu = class HtmlMenu extends HtmlType {}
exports.HtmlMeta = class HtmlMeta extends HtmlType {}
exports.HtmlMeter = class HtmlMeter extends HtmlType {}
exports.HtmlNav = class HtmlNav extends HtmlType {}
exports.HtmlNoScript = class HtmlNoScript extends HtmlType {}
exports.HtmlObject = class HtmlObject extends HtmlType {}
exports.HtmlOl = class HtmlOl extends HtmlType {}
exports.HtmlOptGroup = class HtmlOptGroup extends HtmlType {}
exports.HtmlOption = class HtmlOption extends HtmlType {}
exports.HtmlOutput = class HtmlOutput extends HtmlType {}
exports.HtmlP = class HtmlP extends HtmlType {}
exports.HtmlParam = class HtmlParam extends HtmlType {}
exports.HtmlPicture = class HtmlPicture extends HtmlType {}
exports.HtmlPre = class HtmlPre extends HtmlType {}
exports.HtmlProgress = class HtmlProgress extends HtmlType {}
exports.HtmlQ = class HtmlQ extends HtmlType {}
exports.HtmlRp = class HtmlRp extends HtmlType {}
exports.HtmlRt = class HtmlRt extends HtmlType {}
exports.HtmlRuby = class HtmlRuby extends HtmlType {}
exports.HtmlS = class HtmlS extends HtmlType {}
exports.HtmlSamp = class HtmlSamp extends HtmlType {}
exports.HtmlScript = class HtmlScript extends HtmlType {}
exports.HtmlSection = class HtmlSection extends HtmlType {}
exports.HtmlSelect = class HtmlSelect extends HtmlType {}
exports.HtmlSmall = class HtmlSmall extends HtmlType {}
exports.HtmlSource = class HtmlSource extends HtmlType {}
exports.HtmlSpan = class HtmlSpan extends HtmlType {}
exports.HtmlStrong = class HtmlStrong extends HtmlType {}
exports.HtmlStyle = class HtmlStyle extends HtmlType {}
exports.HtmlSub = class HtmlSub extends HtmlType {}
exports.HtmlSummary = class HtmlSummary extends HtmlType {}
exports.HtmlSup = class HtmlSup extends HtmlType {}
exports.HtmlTBody = class HtmlTBody extends HtmlType {}
exports.HtmlTFoot = class HtmlTFoot extends HtmlType {}
exports.HtmlTHead = class HtmlTHead extends HtmlType {}
exports.HtmlTable = class HtmlTable extends HtmlType {}
exports.HtmlTd = class HtmlTd extends HtmlType {}
exports.HtmlTemplate = class HtmlTemplate extends HtmlType {}
exports.HtmlTextArea = class HtmlTextArea extends HtmlType {}
exports.HtmlTh = class HtmlTh extends HtmlType {}
exports.HtmlTime = class HtmlTime extends HtmlType {}
exports.HtmlTitle = class HtmlTitle extends HtmlType {}
exports.HtmlTr = class HtmlTr extends HtmlType {}
exports.HtmlTrack = class HtmlTrack extends HtmlType {}
exports.HtmlU = class HtmlU extends HtmlType {}
exports.HtmlUl = class HtmlUl extends HtmlType {}
exports.HtmlVar = class HtmlVar extends HtmlType {}
exports.HtmlVideo = class HtmlVideo extends HtmlType {}
exports.HtmlWbr = class HtmlWbr extends HtmlType {}

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
