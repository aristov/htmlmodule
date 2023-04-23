const test = require('ava')
const { ElemType } = require('..')

class SuperApp extends ElemType
{
  static defaultProps = {
    hidden : false,
    current : 'page',
  }
}

class App1 extends SuperApp
{
  static defaultProps = {
    current : 'date',
    disabled : true,
  }
}

class App2 extends SuperApp
{
  static defaultProps = {
    current : 'step',
    children : 'foo',
  }
}

test('test #1', t => {
  const app = SuperApp.render()

  t.is(app.toString(), '<div aria-hidden="false" aria-current="page"></div>')
})

test('test #2', t => {
  const app = SuperApp.render({
    hidden : true,
    label : 'foo',
  })

  t.is(app.toString(), '<div aria-hidden="true" aria-current="page" aria-label="foo"></div>')
})

test('test #3', t => {
  const app = App1.render()

  t.is(app.toString(), '<div aria-hidden="false" aria-current="date" aria-disabled="true"></div>')
})

test('test #4', t => {
  const app = App1.render({
    hidden : true,
    current : 'location',
    children : 'foo',
  })

  t.is(app.toString(), '<div aria-hidden="true" aria-current="location" aria-disabled="true">foo</div>')
})

test('test #5', t => {
  const app = App2.render()

  t.is(app.toString(), '<div aria-hidden="false" aria-current="step">foo</div>')
})

test('test #6', t => {
  const app = App2.render({
    hidden : true,
    current : 'time',
    label : 'foo',
    children : 'bar',
  })

  t.is(app.toString(), '<div aria-hidden="true" aria-current="time" aria-label="foo">bar</div>')
})
