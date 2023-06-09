import test from 'ava'
import sinon from 'sinon'
import window from 'xwindow'
import { HtmlForm, HtmlButton } from '../index.js'

const { document } = window

test('submitter', t => {
  const onsubmit = sinon.spy()
  const button = new HtmlButton('Submit')
  const form = HtmlForm.render({
    onsubmit,
    children : button,
  })

  t.is(form.toString(), '<form><button>Submit</button></form>')

  form.emit('submit', {
    submitter : button.node,
  })

  t.is(onsubmit.callCount, 1)
  t.is(onsubmit.args[0][0].nativeEvent.constructor, window.SubmitEvent)
  t.is(onsubmit.args[0][0].nativeEvent.submitter, button.node)
  t.is(onsubmit.args[0][0].submitter, button)
})

test('relatedTarget', t => {
  const onfocusA = sinon.spy()
  const onfocusB = sinon.spy()
  const buttonA = new HtmlButton({
    onfocus : onfocusA,
    children : 'A',
  })
  const buttonB = new HtmlButton({
    onfocus : onfocusB,
    children : 'B',
  })
  const form = HtmlForm.render([
    buttonA,
    buttonB,
  ], document.body)

  t.is(form.toString(), '<form><button>A</button><button>B</button></form>')

  buttonA.focus()

  t.is(onfocusA.callCount, 1)
  t.is(onfocusA.args[0][0].target, buttonA)
  t.is(onfocusA.args[0][0].relatedTarget, null)

  buttonB.focus()

  t.is(onfocusA.callCount, 1)
  t.is(onfocusB.callCount, 1)
  t.is(onfocusB.args[0][0].target, buttonB)
  t.is(onfocusB.args[0][0].relatedTarget, buttonA)

  HtmlForm.destroy(form)

  t.is(document.body.innerHTML, '')
})

test('stopPropagation', t => {
  const onclickA = sinon.spy()
  const onclickB = sinon.spy()
  const button = new HtmlButton({
    onclick : e => {
      e.stopPropagation()
      onclickA(e)
    },
    children : 'Click me!',
  })
  const form = HtmlForm.render({
    onclick : onclickB,
    children : button,
  })

  t.is(form.toString(), '<form><button>Click me!</button></form>')

  button.click()

  t.is(onclickA.callCount, 1)
  t.is(onclickB.callCount, 0)
})
