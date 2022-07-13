const test = require('ava')
const htmlmodule = require('../lib/htmlmodule')

test('HtmlA', t => t.is(htmlmodule.HtmlA.render().toString(), '<a></a>'))
test('HtmlAbbr', t => t.is(htmlmodule.HtmlAbbr.render().toString(), '<abbr></abbr>'))
test('HtmlAddress', t => t.is(htmlmodule.HtmlAddress.render().toString(), '<address></address>'))
test('HtmlArea', t => t.is(htmlmodule.HtmlArea.render().toString(), '<area>'))
test('HtmlArticle', t => t.is(htmlmodule.HtmlArticle.render().toString(), '<article></article>'))
test('HtmlAside', t => t.is(htmlmodule.HtmlAside.render().toString(), '<aside></aside>'))
test('HtmlAudio', t => t.is(htmlmodule.HtmlAudio.render().toString(), '<audio></audio>'))
test('HtmlB', t => t.is(htmlmodule.HtmlB.render().toString(), '<b></b>'))
test('HtmlBase', t => t.is(htmlmodule.HtmlBase.render().toString(), '<base>'))
test('HtmlBdi', t => t.is(htmlmodule.HtmlBdi.render().toString(), '<bdi></bdi>'))
test('HtmlBdo', t => t.is(htmlmodule.HtmlBdo.render().toString(), '<bdo></bdo>'))
test('HtmlBlockQuote', t => t.is(htmlmodule.HtmlBlockQuote.render().toString(), '<blockquote></blockquote>'))
test('HtmlBody', t => t.is(htmlmodule.HtmlBody.render().toString(), '<body></body>'))
test('HtmlBr', t => t.is(htmlmodule.HtmlBr.render().toString(), '<br>'))
test('HtmlButton', t => t.is(htmlmodule.HtmlButton.render().toString(), '<button></button>'))
test('HtmlCanvas', t => t.is(htmlmodule.HtmlCanvas.render().toString(), '<canvas></canvas>'))
test('HtmlCaption', t => t.is(htmlmodule.HtmlCaption.render().toString(), '<caption></caption>'))
test('HtmlCite', t => t.is(htmlmodule.HtmlCite.render().toString(), '<cite></cite>'))
test('HtmlCode', t => t.is(htmlmodule.HtmlCode.render().toString(), '<code></code>'))
test('HtmlCol', t => t.is(htmlmodule.HtmlCol.render().toString(), '<col>'))
test('HtmlColGroup', t => t.is(htmlmodule.HtmlColGroup.render().toString(), '<colgroup></colgroup>'))
test('HtmlData', t => t.is(htmlmodule.HtmlData.render().toString(), '<data></data>'))
test('HtmlDataList', t => t.is(htmlmodule.HtmlDataList.render().toString(), '<datalist></datalist>'))
test('HtmlDd', t => t.is(htmlmodule.HtmlDd.render().toString(), '<dd></dd>'))
test('HtmlDel', t => t.is(htmlmodule.HtmlDel.render().toString(), '<del></del>'))
test('HtmlDetails', t => t.is(htmlmodule.HtmlDetails.render().toString(), '<details></details>'))
test('HtmlDfn', t => t.is(htmlmodule.HtmlDfn.render().toString(), '<dfn></dfn>'))
test('HtmlDialog', t => t.is(htmlmodule.HtmlDialog.render().toString(), '<dialog></dialog>'))
test('HtmlDiv', t => t.is(htmlmodule.HtmlDiv.render().toString(), '<div></div>'))
test('HtmlDl', t => t.is(htmlmodule.HtmlDl.render().toString(), '<dl></dl>'))
test('HtmlDt', t => t.is(htmlmodule.HtmlDt.render().toString(), '<dt></dt>'))
test('HtmlEm', t => t.is(htmlmodule.HtmlEm.render().toString(), '<em></em>'))
test('HtmlEmbed', t => t.is(htmlmodule.HtmlEmbed.render().toString(), '<embed>'))
test('HtmlFieldSet', t => t.is(htmlmodule.HtmlFieldSet.render().toString(), '<fieldset></fieldset>'))
test('HtmlFigCaption', t => t.is(htmlmodule.HtmlFigCaption.render().toString(), '<figcaption></figcaption>'))
test('HtmlFigure', t => t.is(htmlmodule.HtmlFigure.render().toString(), '<figure></figure>'))
test('HtmlFooter', t => t.is(htmlmodule.HtmlFooter.render().toString(), '<footer></footer>'))
test('HtmlForm', t => t.is(htmlmodule.HtmlForm.render().toString(), '<form></form>'))
test('HtmlH1', t => t.is(htmlmodule.HtmlH1.render().toString(), '<h1></h1>'))
test('HtmlH2', t => t.is(htmlmodule.HtmlH2.render().toString(), '<h2></h2>'))
test('HtmlH3', t => t.is(htmlmodule.HtmlH3.render().toString(), '<h3></h3>'))
test('HtmlH4', t => t.is(htmlmodule.HtmlH4.render().toString(), '<h4></h4>'))
test('HtmlH5', t => t.is(htmlmodule.HtmlH5.render().toString(), '<h5></h5>'))
test('HtmlH6', t => t.is(htmlmodule.HtmlH6.render().toString(), '<h6></h6>'))
test('HtmlHGroup', t => t.is(htmlmodule.HtmlHGroup.render().toString(), '<hgroup></hgroup>'))
test('HtmlHead', t => t.is(htmlmodule.HtmlHead.render().toString(), '<head></head>'))
test('HtmlHeader', t => t.is(htmlmodule.HtmlHeader.render().toString(), '<header></header>'))
test('HtmlHr', t => t.is(htmlmodule.HtmlHr.render().toString(), '<hr>'))
test('HtmlHtml', t => t.is(htmlmodule.HtmlHtml.render().toString(), '<html></html>'))
test('HtmlI', t => t.is(htmlmodule.HtmlI.render().toString(), '<i></i>'))
test('HtmlIFrame', t => t.is(htmlmodule.HtmlIFrame.render().toString(), '<iframe></iframe>'))
test('HtmlImg', t => t.is(htmlmodule.HtmlImg.render().toString(), '<img>'))
test('HtmlInput', t => t.is(htmlmodule.HtmlInput.render().toString(), '<input>'))
test('HtmlIns', t => t.is(htmlmodule.HtmlIns.render().toString(), '<ins></ins>'))
test('HtmlKbd', t => t.is(htmlmodule.HtmlKbd.render().toString(), '<kbd></kbd>'))
test('HtmlLabel', t => t.is(htmlmodule.HtmlLabel.render().toString(), '<label></label>'))
test('HtmlLegend', t => t.is(htmlmodule.HtmlLegend.render().toString(), '<legend></legend>'))
test('HtmlLi', t => t.is(htmlmodule.HtmlLi.render().toString(), '<li></li>'))
test('HtmlLink', t => t.is(htmlmodule.HtmlLink.render().toString(), '<link>'))
test('HtmlMain', t => t.is(htmlmodule.HtmlMain.render().toString(), '<main></main>'))
test('HtmlMap', t => t.is(htmlmodule.HtmlMap.render().toString(), '<map></map>'))
test('HtmlMark', t => t.is(htmlmodule.HtmlMark.render().toString(), '<mark></mark>'))
test('HtmlMenu', t => t.is(htmlmodule.HtmlMenu.render().toString(), '<menu></menu>'))
test('HtmlMeta', t => t.is(htmlmodule.HtmlMeta.render().toString(), '<meta>'))
test('HtmlMeter', t => t.is(htmlmodule.HtmlMeter.render().toString(), '<meter></meter>'))
test('HtmlNav', t => t.is(htmlmodule.HtmlNav.render().toString(), '<nav></nav>'))
test('HtmlNoScript', t => t.is(htmlmodule.HtmlNoScript.render().toString(), '<noscript></noscript>'))
test('HtmlObject', t => t.is(htmlmodule.HtmlObject.render().toString(), '<object></object>'))
test('HtmlOl', t => t.is(htmlmodule.HtmlOl.render().toString(), '<ol></ol>'))
test('HtmlOptGroup', t => t.is(htmlmodule.HtmlOptGroup.render().toString(), '<optgroup></optgroup>'))
test('HtmlOption', t => t.is(htmlmodule.HtmlOption.render().toString(), '<option></option>'))
test('HtmlOutput', t => t.is(htmlmodule.HtmlOutput.render().toString(), '<output></output>'))
test('HtmlP', t => t.is(htmlmodule.HtmlP.render().toString(), '<p></p>'))
test('HtmlPicture', t => t.is(htmlmodule.HtmlPicture.render().toString(), '<picture></picture>'))
test('HtmlPre', t => t.is(htmlmodule.HtmlPre.render().toString(), '<pre></pre>'))
test('HtmlProgress', t => t.is(htmlmodule.HtmlProgress.render().toString(), '<progress></progress>'))
test('HtmlQ', t => t.is(htmlmodule.HtmlQ.render().toString(), '<q></q>'))
test('HtmlRp', t => t.is(htmlmodule.HtmlRp.render().toString(), '<rp></rp>'))
test('HtmlRt', t => t.is(htmlmodule.HtmlRt.render().toString(), '<rt></rt>'))
test('HtmlRuby', t => t.is(htmlmodule.HtmlRuby.render().toString(), '<ruby></ruby>'))
test('HtmlS', t => t.is(htmlmodule.HtmlS.render().toString(), '<s></s>'))
test('HtmlSamp', t => t.is(htmlmodule.HtmlSamp.render().toString(), '<samp></samp>'))
test('HtmlScript', t => t.is(htmlmodule.HtmlScript.render().toString(), '<script></script>'))
test('HtmlSection', t => t.is(htmlmodule.HtmlSection.render().toString(), '<section></section>'))
test('HtmlSelect', t => t.is(htmlmodule.HtmlSelect.render().toString(), '<select></select>'))
test('HtmlSmall', t => t.is(htmlmodule.HtmlSmall.render().toString(), '<small></small>'))
test('HtmlSource', t => t.is(htmlmodule.HtmlSource.render().toString(), '<source>'))
test('HtmlSpan', t => t.is(htmlmodule.HtmlSpan.render().toString(), '<span></span>'))
test('HtmlStrong', t => t.is(htmlmodule.HtmlStrong.render().toString(), '<strong></strong>'))
test('HtmlStyle', t => t.is(htmlmodule.HtmlStyle.render().toString(), '<style></style>'))
test('HtmlSub', t => t.is(htmlmodule.HtmlSub.render().toString(), '<sub></sub>'))
test('HtmlSummary', t => t.is(htmlmodule.HtmlSummary.render().toString(), '<summary></summary>'))
test('HtmlSup', t => t.is(htmlmodule.HtmlSup.render().toString(), '<sup></sup>'))
test('HtmlTBody', t => t.is(htmlmodule.HtmlTBody.render().toString(), '<tbody></tbody>'))
test('HtmlTFoot', t => t.is(htmlmodule.HtmlTFoot.render().toString(), '<tfoot></tfoot>'))
test('HtmlTHead', t => t.is(htmlmodule.HtmlTHead.render().toString(), '<thead></thead>'))
test('HtmlTable', t => t.is(htmlmodule.HtmlTable.render().toString(), '<table></table>'))
test('HtmlTd', t => t.is(htmlmodule.HtmlTd.render().toString(), '<td></td>'))
test('HtmlTemplate', t => t.is(htmlmodule.HtmlTemplate.render().toString(), '<template></template>'))
test('HtmlTextArea', t => t.is(htmlmodule.HtmlTextArea.render().toString(), '<textarea></textarea>'))
test('HtmlTh', t => t.is(htmlmodule.HtmlTh.render().toString(), '<th></th>'))
test('HtmlTime', t => t.is(htmlmodule.HtmlTime.render().toString(), '<time></time>'))
test('HtmlTitle', t => t.is(htmlmodule.HtmlTitle.render().toString(), '<title></title>'))
test('HtmlTr', t => t.is(htmlmodule.HtmlTr.render().toString(), '<tr></tr>'))
test('HtmlTrack', t => t.is(htmlmodule.HtmlTrack.render().toString(), '<track>'))
test('HtmlU', t => t.is(htmlmodule.HtmlU.render().toString(), '<u></u>'))
test('HtmlUl', t => t.is(htmlmodule.HtmlUl.render().toString(), '<ul></ul>'))
test('HtmlVar', t => t.is(htmlmodule.HtmlVar.render().toString(), '<var></var>'))
test('HtmlVideo', t => t.is(htmlmodule.HtmlVideo.render().toString(), '<video></video>'))
test('HtmlWbr', t => t.is(htmlmodule.HtmlWbr.render().toString(), '<wbr>'))
