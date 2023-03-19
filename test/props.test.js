const test = require('ava')
const { HtmlType, HtmlH1 } = require('..')

class App extends HtmlType
{
  static props = {
    id : 'foo',
    title : undefined,
  }

  render() {
    return new HtmlH1(this.props.title)
  }
}

test('test #1', t => {
  const elem = HtmlType.render()
  const app = App.render()

  t.is(elem.toString(), '<div></div>')
  t.is(elem.id, '')
  t.is(elem.title, '')

  t.is(app.toString(), '<div><h1></h1></div>')
  t.is(app.id, 'foo')
  t.is(app.title, undefined)
})


test('test #2', t => {
  const elem = HtmlType.render({
    id : 'foo',
    title : 'Example',
  })
  const app = App.render({
    id : 'bar',
    title : 'Example',
  })

  t.is(elem.toString(), '<div id="foo" title="Example"></div>')
  t.is(elem.id, 'foo')
  t.is(elem.title, 'Example')

  t.is(app.toString(), '<div><h1>Example</h1></div>')
  t.is(app.id, 'bar')
  t.is(app.title, 'Example')
})
