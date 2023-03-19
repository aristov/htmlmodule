const { document } = require('xwindow')
const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')

let spy

class App extends ElemType
{
  static class = 'App'

  destroy() {
    spy()
  }
}

test('keepNode: false', t => {
  spy = sinon.spy()
  const app = App.render(new ElemType('test'), document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><div>test</div></div></body>')
  t.is(spy.callCount, 0)

  App.destroy(app)

  t.is(document.body.outerHTML, '<body></body>')
  t.is(spy.callCount, 1)
})

test('keepNode: true', t => {
  spy = sinon.spy()
  const app = App.render(new ElemType('test'), document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><div>test</div></div></body>')
  t.is(spy.callCount, 0)

  App.destroy(app, true)

  t.is(document.body.outerHTML, '<body><div class="App"><div>test</div></div></body>')
  t.is(spy.callCount, 1)
})
