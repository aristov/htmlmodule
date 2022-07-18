const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')
const { CustomEvent, Event } = require('xwindow')

test('onload', t => {
  const onload = sinon.spy()
  const elem = ElemType.render({ onload })

  t.is(elem.onload, onload)

  elem.emit('load')

  t.is(onload.callCount, 1)
  t.is(onload.getCall(0).thisValue, elem)
  t.is(onload.args[0][0].type, 'load')
  t.is(onload.args[0][1], elem)

  elem.onload = null

  t.is(elem.onload, null)

  elem.emit('load')

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
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick)
  elem.on('click', onclick)
  elem.emit('click')

  t.is(onclick.callCount, 1)
  t.is(onclick.getCall(0).thisValue, elem)
  t.is(onclick.args[0][0].type, 'click')
  t.is(onclick.args[0][1], elem)

  elem.off('click', onclick)
  elem.off('click', onclick)
  elem.emit('click')

  t.is(onclick.callCount, 1)
})

test('capture', t => {
  let eventPhase
  const spy = sinon.spy()
  const onclick = (e, elem) => {
    eventPhase = e.eventPhase
    spy(e, elem)
  }
  const child = new ElemType
  const elem = ElemType.render(child)
  elem.on('click', onclick, true)
  child.emit('click')

  t.is(spy.callCount, 1)
  t.is(eventPhase, Event.CAPTURING_PHASE)

  elem.off('click', onclick, true)
  child.emit('click')

  t.is(spy.callCount, 1)
})

test('context', t => {
  const context = ElemType.render()
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick, context)
  elem.emit('click')

  t.is(onclick.callCount, 1)
  t.is(onclick.getCall(0).thisValue, context)
  t.is(onclick.args[0][1], elem)

  elem.off('click', onclick, context)
  elem.emit('click')

  t.is(onclick.callCount, 1)
})

test('once', t => {
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick, { once : true })
  elem.emit('click')

  t.is(onclick.callCount, 1)

  elem.emit('click')

  t.is(onclick.callCount, 1)
})

test('removeAllListeners', t => {
  const onclick = sinon.spy()
  const onfoo = sinon.spy()
  const onbar = sinon.spy()
  const elem = ElemType.render({ onclick })
  elem.on('foo', onfoo)
  elem.on('bar', onbar)
  elem.emit('click')
  elem.emit('foo')
  elem.emit('bar')
  elem.emit('bar')

  t.is(onclick.callCount, 1)
  t.is(onfoo.callCount, 1)
  t.is(onbar.callCount, 2)

  elem.removeAllListeners()
  elem.emit('click')
  elem.emit('foo')
  elem.emit('bar')

  t.is(onclick.callCount, 1)
  t.is(onfoo.callCount, 1)
  t.is(onbar.callCount, 2)
})

test('off', t => {
  const elem = ElemType.render()

  t.notThrows(() => elem.onclick = null)
  t.notThrows(() => elem.off('foo', () => {}))
})
