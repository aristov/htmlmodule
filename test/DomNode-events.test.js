const test = require('ava')
const sinon = require('sinon')
const { HtmlDiv } = require('..')
const { CustomEvent } = require('xwindow')

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
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

test('test #2', t => {
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
