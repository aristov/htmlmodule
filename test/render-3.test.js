const test = require('ava')
const {
  HtmlDiv,
  HtmlInput,
  HtmlOutput,
  HtmlOption,
  HtmlAudio,
  HtmlTextArea,
} = require('../lib/htmlmodule')

test('test #1', t => {
  const elem = HtmlDiv.render([
    new HtmlInput({
      defaultValue : 'foo',
      value : null,
    }),
    new HtmlInput({
      type : 'checkbox',
      defaultChecked : true,
      checked : null,
    }),
    new HtmlOutput({
      value : 'foo',
      defaultValue : null,
    }),
    new HtmlTextArea({
      defaultValue : 'foo',
      value : null,
    }),
    new HtmlOption({
      defaultSelected : true,
      selected : null,
    }),
    new HtmlAudio({
      defaultMuted : true,
      muted : null,
    }),
  ])
  const children = elem.children

  t.is(children[0].toString(), '<input value="foo">')
  t.is(children[0].value, '')

  t.is(children[1].toString(), '<input type="checkbox" checked="">')
  t.is(children[1].checked, false)

  t.is(children[2].toString(), '<output>foo</output>')
  t.is(children[2].defaultValue, 'null')

  t.is(children[3].toString(), '<textarea>foo</textarea>')
  t.is(children[3].value, '')

  t.is(children[4].toString(), '<option selected=""></option>')
  t.is(children[4].selected, false)

  t.is(children[5].toString(), '<audio muted=""></audio>')
  t.is(children[5].muted, false)
})
