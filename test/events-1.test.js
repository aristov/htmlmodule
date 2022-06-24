const test = require('ava')
const sinon = require('sinon')
const { ElemType } = require('..')
const { CustomEvent, Event } = require('xwindow')

test('onload', t => {
  const onload = sinon.spy()
  const elem = ElemType.render({ onload })

  t.is(elem.onload, onload)

  elem.emit('load')

  t.true(onload.calledOnce)
  t.is(onload.getCall(0).thisValue, elem)
  t.is(onload.args[0][0].type, 'load')
  t.is(onload.args[0][1], elem)

  elem.onload = null

  t.is(elem.onload, null)

  elem.emit('load')

  t.true(onload.calledOnce)
})

test('custom event', t => {
  const onfoo = sinon.spy()
  const elem = ElemType.render()
  elem.node.addEventListener('foo', onfoo)
  elem.emit('foo', { detail : 'bar' })

  t.true(onfoo.calledOnce)
  t.is(onfoo.getCall(0).thisValue, elem.node)
  t.is(onfoo.args[0][0].type, 'foo')
  t.is(onfoo.args[0][0].detail, 'bar')

  const event = new CustomEvent('foo', { detail : 'bat' })
  elem.emit(event)

  t.true(onfoo.calledTwice)
  t.is(onfoo.getCall(1).thisValue, elem.node)
  t.is(onfoo.args[1][0], event)

  elem.node.removeEventListener('foo', onfoo)
  elem.emit('foo')

  t.true(onfoo.calledTwice)
})

test('on/off', t => {
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick)
  elem.on('click', onclick)
  elem.emit('click')

  t.true(onclick.calledOnce)
  t.is(onclick.getCall(0).thisValue, elem)
  t.is(onclick.args[0][0].type, 'click')
  t.is(onclick.args[0][1], elem)

  elem.off('click', onclick)
  elem.off('click', onclick)
  elem.emit('click')

  t.true(onclick.calledOnce)
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

  t.true(spy.calledOnce)
  t.is(eventPhase, Event.CAPTURING_PHASE)

  elem.off('click', onclick, true)
  child.emit('click')

  t.true(spy.calledOnce)
})

test('context', t => {
  const context = ElemType.render()
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick, context)
  elem.emit('click')

  t.true(onclick.calledOnce)
  t.is(onclick.getCall(0).thisValue, context)
  t.is(onclick.args[0][1], elem)

  elem.off('click', onclick, context)
  elem.emit('click')

  t.true(onclick.calledOnce)
})

test('once', t => {
  const onclick = sinon.spy()
  const elem = ElemType.render()
  elem.on('click', onclick, { once : true })
  elem.emit('click')

  t.true(onclick.calledOnce)

  elem.emit('click')

  t.true(onclick.calledOnce)
})

test('removeAllListeners', t => {
  const onfoo = sinon.spy()
  const onbar = sinon.spy()
  const elem = ElemType.render()
  elem.on('foo', onfoo)
  elem.on('bar', onbar)
  elem.emit('foo')
  elem.emit('bar')
  elem.emit('bar')

  t.true(onfoo.calledOnce)
  t.true(onbar.calledTwice)

  elem.removeAllListeners()
  elem.emit('foo')
  elem.emit('bar')

  t.true(onfoo.calledOnce)
  t.true(onbar.calledTwice)
})
