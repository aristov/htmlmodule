const test = require('ava')
const sinon = require('sinon')
const window = require('xwindow')
const { ElemType } = require('..')

const init = sinon.spy()
const mount = sinon.spy()
const update = sinon.spy()
const destroy = sinon.spy()

const initA = sinon.spy()
const mountA = sinon.spy()
const updateA = sinon.spy()
const destroyA = sinon.spy()

const initB = sinon.spy()
const mountB = sinon.spy()
const updateB = sinon.spy()
const destroyB = sinon.spy()

const initU = sinon.spy()
const mountU = sinon.spy()
const updateU = sinon.spy()
const destroyU = sinon.spy()

const initP = sinon.spy()
const mountP = sinon.spy()
const updateP = sinon.spy()
const destroyP = sinon.spy()

const initQ = sinon.spy()
const mountQ = sinon.spy()
const updateQ = sinon.spy()
const destroyQ = sinon.spy()

let document

class Child extends ElemType
{
  static class = 'Child'

  render() {
    this.parent = new A(this)
    return this.props.children
  }

  init() {
    init.apply(this)
  }

  mount()  {
    mount.apply(this)
  }

  update() {
    update.apply(this, arguments)
  }

  destroy() {
    destroy.apply(this)
  }
}

class A extends ElemType
{
  static tagName = 'a'
  static class = null

  render() {
    this.parent = new P(new B(this))
    return this.props.children
  }

  init() {
    initA.apply(this)
  }

  mount()  {
    mountA.apply(this)
  }

  update() {
    updateA.apply(this, arguments)
  }

  destroy() {
    destroyA.apply(this)
  }
}

class B extends ElemType
{
  static tagName = 'b'
  static class = null

  render() {
    this.parent = new U(this)
    return this.props.children
  }

  init() {
    initB.apply(this)
  }

  mount()  {
    mountB.apply(this)
  }

  update() {
    updateB.apply(this, arguments)
  }

  destroy() {
    destroyB.apply(this)
  }
}

class U extends ElemType
{
  static tagName = 'u'
  static class = null

  init() {
    initU.apply(this)
  }

  mount()  {
    mountU.apply(this)
  }

  update() {
    updateU.apply(this, arguments)
  }

  destroy() {
    destroyU.apply(this)
  }
}

class P extends ElemType
{
  static tagName = 'p'
  static class = null

  render() {
    return new Q(this.props.children)
  }

  init() {
    initP.apply(this)
  }

  mount()  {
    mountP.apply(this)
  }

  update() {
    updateP.apply(this, arguments)
  }

  destroy() {
    destroyP.apply(this)
  }
}

class Q extends ElemType
{
  static tagName = 'q'
  static class = null

  init() {
    initQ.apply(this)
  }

  mount()  {
    mountQ.apply(this)
  }

  update() {
    updateQ.apply(this, arguments)
  }

  destroy() {
    destroyQ.apply(this)
  }
}

class App extends ElemType
{
  static class = 'App'

  state = {
    step : 0,
    hidden : undefined,
    text : 'foo',
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new Child({
          hidden : this.state.hidden ?? this.props.hidden,
          children : this.state.text,
        })
      case 1:
        return null
    }
  }
}

test('test #1', t => {
  document = window.document.implementation.createHTMLDocument('test')
  const elem = App.render({ hidden : false }, document.body)

  t.is(document.body.outerHTML, '<body><div class="App"><p><q><u><b><a><div class="Child">foo</div></a></b></u></q></p></div></body>')

  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 0)
  t.is(destroy.callCount, 0)

  t.is(initA.callCount, 1)
  t.is(mountA.callCount, 1)
  t.is(updateA.callCount, 0)
  t.is(destroyA.callCount, 0)

  t.is(initB.callCount, 1)
  t.is(mountB.callCount, 1)
  t.is(updateB.callCount, 0)
  t.is(destroyB.callCount, 0)

  t.is(initU.callCount, 1)
  t.is(mountU.callCount, 1)
  t.is(updateU.callCount, 0)
  t.is(destroyU.callCount, 0)

  t.is(initP.callCount, 1)
  t.is(mountP.callCount, 1)
  t.is(updateP.callCount, 0)
  t.is(destroyP.callCount, 0)

  t.is(initQ.callCount, 1)
  t.is(mountQ.callCount, 1)
  t.is(updateQ.callCount, 0)
  t.is(destroyQ.callCount, 0)

  elem.setState({ text : 'bar' })

  t.is(document.body.outerHTML, '<body><div class="App"><p><q><u><b><a><div class="Child">bar</div></a></b></u></q></p></div></body>')

  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 1)
  t.is(destroy.callCount, 0)

  t.is(initA.callCount, 1)
  t.is(mountA.callCount, 1)
  t.is(updateA.callCount, 1)
  t.is(destroyA.callCount, 0)

  t.is(initB.callCount, 1)
  t.is(mountB.callCount, 1)
  t.is(updateB.callCount, 1)
  t.is(destroyB.callCount, 0)

  t.is(initU.callCount, 1)
  t.is(mountU.callCount, 1)
  t.is(updateU.callCount, 1)
  t.is(destroyU.callCount, 0)

  t.is(initP.callCount, 1)
  t.is(mountP.callCount, 1)
  t.is(updateP.callCount, 1)
  t.is(destroyP.callCount, 0)

  t.is(initQ.callCount, 1)
  t.is(mountQ.callCount, 1)
  t.is(updateQ.callCount, 1)
  t.is(destroyQ.callCount, 0)

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="App"></div></body>')

  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 1)
  t.is(destroy.callCount, 1)

  t.is(initA.callCount, 1)
  t.is(mountA.callCount, 1)
  t.is(updateA.callCount, 1)
  t.is(destroyA.callCount, 1)

  t.is(initB.callCount, 1)
  t.is(mountB.callCount, 1)
  t.is(updateB.callCount, 1)
  t.is(destroyB.callCount, 1)

  t.is(initU.callCount, 1)
  t.is(mountU.callCount, 1)
  t.is(updateU.callCount, 1)
  t.is(destroyU.callCount, 1)

  t.is(initP.callCount, 1)
  t.is(mountP.callCount, 1)
  t.is(updateP.callCount, 1)
  t.is(destroyP.callCount, 1)

  t.is(initQ.callCount, 1)
  t.is(mountQ.callCount, 1)
  t.is(updateQ.callCount, 1)
  t.is(destroyQ.callCount, 1)
})
