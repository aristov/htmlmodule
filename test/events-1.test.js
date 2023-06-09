import test from 'ava'
import sinon from 'sinon'
import window from 'xwindow'
import { ElemType, HtmlType } from '../index.js'

const { CustomEvent, Event, document } = window

test('onload', t => {
  class App extends ElemType
  {
    state = { onload }

    render() {
      return new ElemType({
        onload : this.state.onload,
      })
    }
  }

  const onload = sinon.spy()
  const app = App.render()
  const child = app.children[0]

  child.emit('load')

  t.is(onload.callCount, 1)
  t.is(onload.getCall(0).thisValue, child)
  t.is(onload.args[0][0].type, 'load')
  t.is(onload.args[0][1], child)

  app.setState({ onload : null })

  t.is(child.onload, null)

  child.emit('load')

  t.is(onload.callCount, 1)
})

test('custom event', t => {
  const onfoo = sinon.spy()
  const elem = ElemType.render()
  elem.node.addEventListener('foo', onfoo)
  elem.emit('foo', { detail : 'bar' })

  t.is(onfoo.callCount, 1)
  t.is(onfoo.getCall(0).thisValue, elem.node)
  t.is(onfoo.args[0][0].type, 'foo')
  t.is(onfoo.args[0][0].detail, 'bar')

  const event = new CustomEvent('foo', { detail : 'bat' })
  elem.emit(event)

  t.is(onfoo.callCount, 2)
  t.is(onfoo.getCall(1).thisValue, elem.node)
  t.is(onfoo.args[1][0], event)

  elem.node.removeEventListener('foo', onfoo)
  elem.emit('foo')

  t.is(onfoo.callCount, 2)
})

test('on/off', t => {
  class App extends ElemType
  {
    state = { mode : 'on' }

    render() {
      if(this.state.mode === 'on') {
        this.on('click', onclick)
        this.on('click', onclick)
      }
      if(this.state.mode === 'off') {
        this.off('click', onclick)
        this.off('click', onclick)
      }
    }
  }

  const onclick = sinon.spy()
  const app = App.render()

  app.emit('click')

  t.is(onclick.callCount, 1)
  t.is(onclick.getCall(0).thisValue, app)
  t.is(onclick.args[0][0].type, 'click')
  t.is(onclick.args[0][1], app)

  app.setState({ mode : 'off' })
  app.emit('click')

  t.is(onclick.callCount, 1)
})

test('capture', t => {
  class App extends ElemType
  {
    state = { mode : 'on' }

    render() {
      if(this.state.mode === 'on') {
        this.on('click', onclick, true)
      }
      if(this.state.mode === 'off') {
        this.off('click', onclick, true)
      }
      return this.props.children
    }
  }

  let eventPhase
  const spy = sinon.spy()
  const onclick = (e, elem) => {
    eventPhase = e.eventPhase
    spy(e, elem)
  }
  const child = new ElemType
  const app = App.render(child)

  child.emit('click')

  t.is(spy.callCount, 1)
  t.is(eventPhase, Event.CAPTURING_PHASE)

  app.setState({ mode : 'off' })
  child.emit('click')

  t.is(spy.callCount, 1)
})

test('once', t => {
  class App extends ElemType
  {
    init() {
      this.on('click', onclick, { once : true })
    }
  }

  const onclick = sinon.spy()
  const app = App.render()

  app.emit('click')

  t.is(onclick.callCount, 1)

  app.emit('click')

  t.is(onclick.callCount, 1)
})

test('removeAllListeners', t => {
  class App extends ElemType
  {
    state = { mode : 'on' }

    render() {
      if(this.state.mode === 'on') {
        this.on('foo', onfoo)
        this.on('bar', onbar)
      }
      if(this.state.mode === 'off') {
        this.removeAllListeners()
      }
      return super.render()
    }
  }

  const onclick = sinon.spy()
  const onfoo = sinon.spy()
  const onbar = sinon.spy()
  const app = App.render({ onclick })

  app.emit('click')
  app.emit('foo')
  app.emit('bar')
  app.emit('bar')

  t.is(onclick.callCount, 1)
  t.is(onfoo.callCount, 1)
  t.is(onbar.callCount, 2)

  app.setState({ mode : 'off' })
  app.emit('click')
  app.emit('foo')
  app.emit('bar')

  t.is(onclick.callCount, 2)
  t.is(onfoo.callCount, 1)
  t.is(onbar.callCount, 2)
})

test('off', t => {
  class App extends ElemType
  {
    state = { mode : 'on' }

    render() {
      if(this.state.mode === 'off') {
        this.onclick = null
        this.off('foo', () => {
        })
      }
      return super.render()
    }
  }

  const app = App.render()

  t.notThrows(() => app.setState({ mode : 'off' }))
})

test('focus + blur', t => {
  const onfocus = sinon.spy()
  const onblur = sinon.spy()
  const elem = HtmlType.render({
    tabIndex : 0,
    onfocus,
    onblur,
  }, document.body)

  t.is(elem.toString(), '<div tabindex="0"></div>')

  elem.focus()

  t.is(onfocus.callCount, 1)
  t.is(onblur.callCount, 0)

  elem.blur()

  t.is(onfocus.callCount, 1)
  t.is(onblur.callCount, 1)

  HtmlType.destroy(elem)
  
  t.is(document.body.innerHTML, '')
})
