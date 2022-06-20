const test = require('ava')
const sinon = require('sinon')
const { HtmlDiv } = require('..')
const { CustomEvent, Event } = require('xwindow')

let instance

test.afterEach(() => instance.destroy())

test('onload', t => {
  const onload = sinon.spy()
  instance = HtmlDiv.render({ onload })

  t.is(instance.onload, onload)

  instance.emit('load')

  t.true(onload.calledOnce)
  t.is(onload.getCall(0).thisValue, instance)
  t.is(onload.args[0][0].type, 'load')
  t.is(onload.args[0][1], instance)

  instance.onload = null

  t.is(instance.onload, null)

  instance.emit('load')

  t.true(onload.calledOnce)
})

test('custom event', t => {
  const onfoo = sinon.spy()
  instance = HtmlDiv.render()
  instance.node.addEventListener('foo', onfoo)
  instance.emit('foo', { detail : 'bar' })

  t.true(onfoo.calledOnce)
  t.is(onfoo.getCall(0).thisValue, instance.node)
  t.is(onfoo.args[0][0].type, 'foo')
  t.is(onfoo.args[0][0].detail, 'bar')

  const event = new CustomEvent('foo', { detail : 'bat' })
  instance.emit(event)

  t.true(onfoo.calledTwice)
  t.is(onfoo.getCall(1).thisValue, instance.node)
  t.is(onfoo.args[1][0], event)

  instance.node.removeEventListener('foo', onfoo)
  instance.emit('foo')

  t.true(onfoo.calledTwice)
})

test('on/off', t => {
  const onclick = sinon.spy()
  instance = HtmlDiv.render()
  instance.on('click', onclick)
  instance.on('click', onclick)
  instance.click()

  t.true(onclick.calledOnce)
  t.is(onclick.getCall(0).thisValue, instance)
  t.is(onclick.args[0][0].type, 'click')
  t.is(onclick.args[0][1], instance)

  instance.off('click', onclick)
  instance.off('click', onclick)
  instance.click()

  t.true(onclick.calledOnce)
})

test('capture', t => {
  let eventPhase
  const spy = sinon.spy()
  const onclick = (e, elem) => {
    eventPhase = e.eventPhase
    spy(e, elem)
  }
  const child = new HtmlDiv
  instance = HtmlDiv.render(child)
  instance.on('click', onclick, true)
  child.click()

  t.true(spy.calledOnce)
  t.is(eventPhase, Event.CAPTURING_PHASE)

  instance.off('click', onclick, true)
  child.click()

  t.true(spy.calledOnce)

  child.destroy()
})

test('context', t => {
  const context = HtmlDiv.render()
  const onclick = sinon.spy()
  instance = HtmlDiv.render()
  instance.on('click', onclick, context)
  instance.click()

  t.true(onclick.calledOnce)
  t.is(onclick.getCall(0).thisValue, context)
  t.is(onclick.args[0][1], instance)

  instance.off('click', onclick, context)
  instance.click()

  t.true(onclick.calledOnce)

  context.destroy()
})

test('once', t => {
  const onclick = sinon.spy()
  instance = HtmlDiv.render()
  instance.on('click', onclick, { once : true })
  instance.click()

  t.true(onclick.calledOnce)

  instance.click()

  t.true(onclick.calledOnce)
})

test('removeAllListeners', t => {
  const onfoo = sinon.spy()
  const onbar = sinon.spy()
  instance = HtmlDiv.render()
  instance.on('foo', onfoo)
  instance.on('bar', onbar)
  instance.emit('foo')
  instance.emit('bar')
  instance.emit('bar')

  t.true(onfoo.calledOnce)
  t.true(onbar.calledTwice)

  instance.removeAllListeners()
  instance.emit('foo')
  instance.emit('bar')

  t.true(onfoo.calledOnce)
  t.true(onbar.calledTwice)
})
