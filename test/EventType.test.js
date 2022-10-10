const test = require('ava')
const sinon = require('sinon')
const { window, document } = require('xwindow')

// SubmitEvent polyfill for JSDOM
class SubmitEvent extends window.Event
{
  constructor(type, init) {
    super(type, init)
    this.submitter = init.submitter
  }
}
window.SubmitEvent = SubmitEvent

const { HtmlForm, HtmlButton } = require('..')

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
  t.is(onsubmit.args[0][0].nativeEvent.constructor, SubmitEvent)
  t.is(onsubmit.args[0][0].nativeEvent.submitter, button.node)
  t.is(onsubmit.args[0][0].submitter, button)
})

test('relatedTarget', t => {
  const onfocusA = sinon.spy()
  const onfocusB = sinon.spy()
  const buttonA = new HtmlButton({
    onfocus : onfocusA,
    children : 'A'
  })
  const buttonB = new HtmlButton({
    onfocus : onfocusB,
    children : 'B'
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

  document.body.innerHTML = ''
})
