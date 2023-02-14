const test = require('ava')
const lib = require('../lib/HtmlLib')

test('test #1', t => {
  t.is(lib.HtmlA.render().toString(), '<a></a>')
  t.is(lib.HtmlAbbr.render().toString(), '<abbr></abbr>')
  t.is(lib.HtmlAddress.render().toString(), '<address></address>')
  t.is(lib.HtmlArea.render().toString(), '<area>')
  t.is(lib.HtmlArticle.render().toString(), '<article></article>')
  t.is(lib.HtmlAside.render().toString(), '<aside></aside>')
  t.is(lib.HtmlAudio.render().toString(), '<audio></audio>')
  t.is(lib.HtmlB.render().toString(), '<b></b>')
  t.is(lib.HtmlBase.render().toString(), '<base>')
  t.is(lib.HtmlBdi.render().toString(), '<bdi></bdi>')
  t.is(lib.HtmlBdo.render().toString(), '<bdo></bdo>')
  t.is(lib.HtmlBlockQuote.render().toString(), '<blockquote></blockquote>')
  t.is(lib.HtmlBody.render().toString(), '<body></body>')
  t.is(lib.HtmlBr.render().toString(), '<br>')
  t.is(lib.HtmlButton.render().toString(), '<button></button>')
  t.is(lib.HtmlCanvas.render().toString(), '<canvas></canvas>')
  t.is(lib.HtmlCaption.render().toString(), '<caption></caption>')
  t.is(lib.HtmlCite.render().toString(), '<cite></cite>')
  t.is(lib.HtmlCode.render().toString(), '<code></code>')
  t.is(lib.HtmlCol.render().toString(), '<col>')
  t.is(lib.HtmlColGroup.render().toString(), '<colgroup></colgroup>')
  t.is(lib.HtmlData.render().toString(), '<data></data>')
  t.is(lib.HtmlDataList.render().toString(), '<datalist></datalist>')
  t.is(lib.HtmlDd.render().toString(), '<dd></dd>')
  t.is(lib.HtmlDel.render().toString(), '<del></del>')
  t.is(lib.HtmlDetails.render().toString(), '<details></details>')
  t.is(lib.HtmlDfn.render().toString(), '<dfn></dfn>')
  t.is(lib.HtmlDialog.render().toString(), '<dialog></dialog>')
  t.is(lib.HtmlDiv.render().toString(), '<div></div>')
  t.is(lib.HtmlDl.render().toString(), '<dl></dl>')
  t.is(lib.HtmlDt.render().toString(), '<dt></dt>')
  t.is(lib.HtmlEm.render().toString(), '<em></em>')
  t.is(lib.HtmlEmbed.render().toString(), '<embed>')
  t.is(lib.HtmlFieldSet.render().toString(), '<fieldset></fieldset>')
  t.is(lib.HtmlFigCaption.render().toString(), '<figcaption></figcaption>')
  t.is(lib.HtmlFigure.render().toString(), '<figure></figure>')
  t.is(lib.HtmlFooter.render().toString(), '<footer></footer>')
  t.is(lib.HtmlForm.render().toString(), '<form></form>')
  t.is(lib.HtmlH1.render().toString(), '<h1></h1>')
  t.is(lib.HtmlH2.render().toString(), '<h2></h2>')
  t.is(lib.HtmlH3.render().toString(), '<h3></h3>')
  t.is(lib.HtmlH4.render().toString(), '<h4></h4>')
  t.is(lib.HtmlH5.render().toString(), '<h5></h5>')
  t.is(lib.HtmlH6.render().toString(), '<h6></h6>')
  t.is(lib.HtmlHGroup.render().toString(), '<hgroup></hgroup>')
  t.is(lib.HtmlHead.render().toString(), '<head></head>')
  t.is(lib.HtmlHeader.render().toString(), '<header></header>')
  t.is(lib.HtmlHr.render().toString(), '<hr>')
  t.is(lib.HtmlHtml.render().toString(), '<html></html>')
  t.is(lib.HtmlI.render().toString(), '<i></i>')
  t.is(lib.HtmlIFrame.render().toString(), '<iframe></iframe>')
  t.is(lib.HtmlImg.render().toString(), '<img>')
  t.is(lib.HtmlInput.render().toString(), '<input>')
  t.is(lib.HtmlIns.render().toString(), '<ins></ins>')
  t.is(lib.HtmlKbd.render().toString(), '<kbd></kbd>')
  t.is(lib.HtmlLabel.render().toString(), '<label></label>')
  t.is(lib.HtmlLegend.render().toString(), '<legend></legend>')
  t.is(lib.HtmlLi.render().toString(), '<li></li>')
  t.is(lib.HtmlLink.render().toString(), '<link>')
  t.is(lib.HtmlMain.render().toString(), '<main></main>')
  t.is(lib.HtmlMap.render().toString(), '<map></map>')
  t.is(lib.HtmlMark.render().toString(), '<mark></mark>')
  t.is(lib.HtmlMenu.render().toString(), '<menu></menu>')
  t.is(lib.HtmlMeta.render().toString(), '<meta>')
  t.is(lib.HtmlMeter.render().toString(), '<meter></meter>')
  t.is(lib.HtmlNav.render().toString(), '<nav></nav>')
  t.is(lib.HtmlNoScript.render().toString(), '<noscript></noscript>')
  t.is(lib.HtmlObject.render().toString(), '<object></object>')
  t.is(lib.HtmlOl.render().toString(), '<ol></ol>')
  t.is(lib.HtmlOptGroup.render().toString(), '<optgroup></optgroup>')
  t.is(lib.HtmlOption.render().toString(), '<option></option>')
  t.is(lib.HtmlOutput.render().toString(), '<output></output>')
  t.is(lib.HtmlP.render().toString(), '<p></p>')
  t.is(lib.HtmlPicture.render().toString(), '<picture></picture>')
  t.is(lib.HtmlPre.render().toString(), '<pre></pre>')
  t.is(lib.HtmlProgress.render().toString(), '<progress></progress>')
  t.is(lib.HtmlQ.render().toString(), '<q></q>')
  t.is(lib.HtmlRp.render().toString(), '<rp></rp>')
  t.is(lib.HtmlRt.render().toString(), '<rt></rt>')
  t.is(lib.HtmlRuby.render().toString(), '<ruby></ruby>')
  t.is(lib.HtmlS.render().toString(), '<s></s>')
  t.is(lib.HtmlSamp.render().toString(), '<samp></samp>')
  t.is(lib.HtmlScript.render().toString(), '<script></script>')
  t.is(lib.HtmlSection.render().toString(), '<section></section>')
  t.is(lib.HtmlSelect.render().toString(), '<select></select>')
  t.is(lib.HtmlSmall.render().toString(), '<small></small>')
  t.is(lib.HtmlSource.render().toString(), '<source>')
  t.is(lib.HtmlSpan.render().toString(), '<span></span>')
  t.is(lib.HtmlStrong.render().toString(), '<strong></strong>')
  t.is(lib.HtmlStyle.render().toString(), '<style></style>')
  t.is(lib.HtmlSub.render().toString(), '<sub></sub>')
  t.is(lib.HtmlSummary.render().toString(), '<summary></summary>')
  t.is(lib.HtmlSup.render().toString(), '<sup></sup>')
  t.is(lib.HtmlTBody.render().toString(), '<tbody></tbody>')
  t.is(lib.HtmlTFoot.render().toString(), '<tfoot></tfoot>')
  t.is(lib.HtmlTHead.render().toString(), '<thead></thead>')
  t.is(lib.HtmlTable.render().toString(), '<table></table>')
  t.is(lib.HtmlTd.render().toString(), '<td></td>')
  t.is(lib.HtmlTemplate.render().toString(), '<template></template>')
  t.is(lib.HtmlTextArea.render().toString(), '<textarea></textarea>')
  t.is(lib.HtmlTh.render().toString(), '<th></th>')
  t.is(lib.HtmlTime.render().toString(), '<time></time>')
  t.is(lib.HtmlTitle.render().toString(), '<title></title>')
  t.is(lib.HtmlTr.render().toString(), '<tr></tr>')
  t.is(lib.HtmlTrack.render().toString(), '<track>')
  t.is(lib.HtmlU.render().toString(), '<u></u>')
  t.is(lib.HtmlUl.render().toString(), '<ul></ul>')
  t.is(lib.HtmlVar.render().toString(), '<var></var>')
  t.is(lib.HtmlVideo.render().toString(), '<video></video>')
  t.is(lib.HtmlWbr.render().toString(), '<wbr>')
})