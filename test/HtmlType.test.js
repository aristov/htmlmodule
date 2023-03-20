const test = require('ava')
const { HTMLDivElement } = require('xwindow')
const { HtmlType, HtmlInput } = require('..')

test('test #1', t => {
  const elem = HtmlType.render({
    title : 'Hello world!',
    hidden : true,
    tabIndex : -1,
    children : 'Example',
  })

  t.is(elem.toString(), '<div title="Hello world!" hidden="" tabindex="-1">Example</div>')
  t.is(elem.node.constructor, HTMLDivElement)
  t.is(elem.title, 'Hello world!')
  t.is(elem.hidden, true)
  t.is(elem.tabIndex, -1)
  t.is(elem.textContent, 'Example')
})

test('test #2', t => {
  const elem = HtmlInput.render({
    type : 'number',
    valueAsNumber : 42,
  })

  t.is(elem.toString(), '<input type="number">')
  t.is(elem.type, 'number')
  t.is(elem.valueAsNumber, 42)
})
