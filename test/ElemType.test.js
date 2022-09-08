const test = require('ava')
const { HTMLDivElement } = require('xwindow')
const { ElemType, PropType, HtmlA, HtmlB, HtmlI, HtmlP } = require('..')

test('test #1', t => {
  class App extends ElemType
  {
    state = { foo : 'bar' }
  }

  const app = App.render()

  t.deepEqual(Object.keys(app), [])
  t.deepEqual(Object.assign({}, app), {})
  for(const key in app) {
    t.fail()
  }
})

test('className', t => {
  class App extends ElemType
  {
    static class = 'App'
    static props = {
      foobar : PropType,
    }
  }

  const app = App.render({
    foobar : '123',
    children : 'test',
  })

  t.is(app.toString(), '<div class="App">test</div>')
  t.is(app.tagName, 'div')
  t.is(app.foobar, '123')
  t.is(app.node.className, 'App')
  t.is(app.node.textContent, 'test')
  t.is(app.node.constructor, HTMLDivElement)
})

test('children', t => {
  const elem = ElemType.render([
    'foo',
    null,
    [
      new HtmlA('bar'),
      [],
      Infinity,
      [
        [new HtmlB('bat'), 'baz'],
        false,
        new HtmlI(42),
      ],
      NaN,
      true,
      new HtmlP(0),
    ],
    undefined,
  ])

  t.is(elem.toString(), '<div>foo<a>bar</a>Infinity<b>bat</b>baz<i>42</i>NaN<p>0</p></div>')
  t.is(elem.node.childNodes.length, 8)
  t.is(elem.node.childElementCount, 4)
})

test('toString', t => {
  const elem = new ElemType({
    id : 'id1',
    className : 'App',
    children : new ElemType('foobar'),
  })

  t.is(elem.toString(), '<div class="App" id="id1"><div>foobar</div></div>')
})

test('debug', t => {
  ElemType.__debug = true

  const elem = ElemType.render()

  t.is(elem.node.__elem, elem)

  ElemType.__debug = false
})
