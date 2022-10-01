const test = require('ava')
const {
  HtmlDiv,
  HtmlInput,
  HtmlOutput,
  HtmlForm,
  HtmlOption,
  HtmlMeta,
  HtmlLabel,
  HtmlAudio,
  HtmlTextArea,
} = require('..')

class App extends HtmlDiv
{
  static class = 'App'

  state = {
    defaultValue : 'foo',
    defaultChecked : true,
    defaultSelected : true,
    acceptCharset : 'UTF-8',
    httpEquiv : 'refresh',
    htmlFor : 'id1',
    className : 'test',
    defaultMuted : true,
    muted : true,
  }

  render() {
    const {
      acceptCharset,
      defaultValue,
      defaultChecked,
      defaultSelected,
      httpEquiv,
      htmlFor,
      className,
      defaultMuted,
    } = this.state
    return [
      new HtmlInput({ defaultValue }),
      new HtmlOutput({ defaultValue }),
      new HtmlForm({ acceptCharset }),
      new HtmlInput({ type : 'checkbox', defaultChecked }),
      new HtmlOption({ defaultSelected }),
      new HtmlMeta({ httpEquiv }),
      new HtmlLabel({ htmlFor }),
      new HtmlDiv({ className }),
      new HtmlAudio({ defaultMuted }),
      new HtmlTextArea({ defaultValue }),
    ]
  }
}

test('test #1', t => {
  const elem = App.render()
  const children = elem.children

  t.is(children[0].toString(), '<input value="foo">')
  t.is(children[1].toString(), '<output>foo</output>')
  t.is(children[2].toString(), '<form accept-charset="UTF-8"></form>')
  t.is(children[3].toString(), '<input type="checkbox" checked="">')
  t.is(children[4].toString(), '<option selected=""></option>')
  t.is(children[5].toString(), '<meta http-equiv="refresh">')
  t.is(children[6].toString(), '<label for="id1"></label>')
  t.is(children[7].toString(), '<div class="test"></div>')
  t.is(children[8].toString(), '<audio muted=""></audio>')
  t.is(children[9].toString(), '<textarea>foo</textarea>')

  elem.setState({
    defaultValue : null,
    defaultChecked : null,
    acceptCharset : null,
    defaultSelected : null,
    httpEquiv : null,
    htmlFor : null,
    className : null,
    defaultMuted : null,
  })

  t.is(children[0].toString(), '<input>')
  t.is(children[1].toString(), '<output>null</output>')
  t.is(children[2].toString(), '<form></form>')
  t.is(children[3].toString(), '<input type="checkbox">')
  t.is(children[4].toString(), '<option></option>')
  t.is(children[5].toString(), '<meta>')
  t.is(children[6].toString(), '<label></label>')
  t.is(children[7].toString(), '<div></div>')
  t.is(children[8].toString(), '<audio></audio>')
  t.is(children[9].toString(), '<textarea>null</textarea>')
})
