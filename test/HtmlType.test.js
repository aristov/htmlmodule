const test = require('ava')
const { HTMLDivElement } = require('xwindow')
const { HtmlType } = require('..')

test('test #1', t => {
  const elem = HtmlType.render({
    title : 'Hello world!',
    hidden : true,
    children : 'Example',
  })

  t.is(elem.node.constructor, HTMLDivElement)
  t.is(elem.title, 'Hello world!')
  t.is(elem.hidden, true)
  t.is(elem.node.textContent, 'Example')
  t.is(elem.toString(), '<div title="Hello world!" hidden="">Example</div>')
})
