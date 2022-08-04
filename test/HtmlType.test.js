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
  t.is(elem.node.title, 'Hello world!')
  t.is(elem.node.hidden, true)
  t.is(elem.node.tabIndex, -1)
  t.is(elem.node.textContent, 'Example')
})

test('test #2', t => {
  const elem = HtmlInput.render({
    type : 'number',
    valueAsNumber : 42,
  })

  t.is(elem.toString(), '<input type="number">')
  t.is(elem.node.type, 'number')
  t.is(elem.node.valueAsNumber, 42)
})
