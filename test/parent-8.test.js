const test = require('ava')
const sinon = require('sinon')
const window = require('xwindow')
const { ElemType } = require('..')

const init = sinon.spy()
const init1 = sinon.spy()
const init2 = sinon.spy()
const init3 = sinon.spy()

const mount = sinon.spy()
const mount1 = sinon.spy()
const mount2 = sinon.spy()
const mount3 = sinon.spy()

const update = sinon.spy()
const update1 = sinon.spy()
const update2 = sinon.spy()
const update3 = sinon.spy()

const destroy = sinon.spy()
const destroy1 = sinon.spy()
const destroy2 = sinon.spy()
const destroy3 = sinon.spy()

let document

class Child extends ElemType
{
  static class = 'Child'

  render() {
    this.parent = new Parent1(this)
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

class Parent1 extends ElemType
{
  static class = 'Parent1'

  render() {
    this.parent = new Parent2(this)
    return this.props.children
  }

  init() {
    init1.apply(this)
  }

  mount()  {
    mount1.apply(this)
  }

  update() {
    update1.apply(this, arguments)
  }

  destroy() {
    destroy1.apply(this)
  }
}

class Parent2 extends ElemType
{
  static class = 'Parent2'

  render() {
    this.parent = new Parent3(this)
    return this.props.children
  }

  init() {
    init2.apply(this)
  }

  mount()  {
    mount2.apply(this)
  }

  update() {
    update2.apply(this, arguments)
  }

  destroy() {
    destroy2.apply(this)
  }
}

class Parent3 extends ElemType
{
  static class = 'Parent3'

  render() {
    return this.props.children
  }

  init() {
    init3.apply(this)
  }

  mount()  {
    mount3.apply(this)
  }

  update() {
    update3.apply(this, arguments)
  }

  destroy() {
    destroy3.apply(this)
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

  t.is(document.body.outerHTML, '<body><div class="App"><div class="Parent3"><div class="Parent2"><div class="Parent1"><div class="Child">foo</div></div></div></div></div></body>')
  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 0)
  t.is(destroy.callCount, 0)
  t.is(init1.callCount, 1)
  t.is(mount1.callCount, 1)
  t.is(update1.callCount, 0)
  t.is(destroy1.callCount, 0)
  t.is(init2.callCount, 1)
  t.is(mount2.callCount, 1)
  t.is(update2.callCount, 0)
  t.is(destroy2.callCount, 0)
  t.is(init3.callCount, 1)
  t.is(mount3.callCount, 1)
  t.is(update3.callCount, 0)
  t.is(destroy3.callCount, 0)

  elem.setState({ text : 'bar' })

  t.is(document.body.outerHTML, '<body><div class="App"><div class="Parent3"><div class="Parent2"><div class="Parent1"><div class="Child">bar</div></div></div></div></div></body>')
  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 1)
  t.is(destroy.callCount, 0)
  t.is(init1.callCount, 1)
  t.is(mount1.callCount, 1)
  t.is(update1.callCount, 1)
  t.is(destroy1.callCount, 0)
  t.is(init2.callCount, 1)
  t.is(mount2.callCount, 1)
  t.is(update2.callCount, 1)
  t.is(destroy2.callCount, 0)
  t.is(init3.callCount, 1)
  t.is(mount3.callCount, 1)
  t.is(update3.callCount, 1)
  t.is(destroy3.callCount, 0)

  elem.setState({ step : 1 })

  t.is(document.body.outerHTML, '<body><div class="App"></div></body>')
  t.is(init.callCount, 1)
  t.is(mount.callCount, 1)
  t.is(update.callCount, 1)
  t.is(destroy.callCount, 1)
  t.is(init1.callCount, 1)
  t.is(mount1.callCount, 1)
  t.is(update1.callCount, 1)
  t.is(destroy1.callCount, 1)
  t.is(init2.callCount, 1)
  t.is(mount2.callCount, 1)
  t.is(update2.callCount, 1)
  t.is(destroy2.callCount, 1)
  t.is(init3.callCount, 1)
  t.is(mount3.callCount, 1)
  t.is(update3.callCount, 1)
  t.is(destroy3.callCount, 1)
})
