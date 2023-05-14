const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')

let app, assign1, render1, render2

class SuperApp extends ElemType
{
  static class = 'SuperApp'

  assign() {
    assign1()
    this.id = 'id1'
  }

  render() {
    render1()
    return new ElemType(this.props.children)
  }
}

class App extends SuperApp
{
  static class = 'App'

  render() {
    render2()
    return new ElemType({
      tagName : 'span',
      children : this.props.children,
    })
  }
}

test('test #1', t => {
  assign1 = sinon.spy()
  render1 = sinon.spy()
  render2 = sinon.spy()
  app = SuperApp.render('Hello world!')

  t.is(app.toString(), '<div class="SuperApp" id="id1"><div>Hello world!</div></div>')
  t.is(assign1.callCount, 1)
  t.is(render1.callCount, 1)
  t.is(render2.callCount, 0)
})

test('test #2', t => {
  assign1 = sinon.spy()
  render1 = sinon.spy()
  render2 = sinon.spy()
  app = App.render('Hello foobar?')

  t.is(app.toString(), '<div class="App SuperApp" id="id1"><span>Hello foobar?</span></div>')
  t.is(assign1.callCount, 1)
  t.is(render1.callCount, 0)
  t.is(render2.callCount, 1)
})
