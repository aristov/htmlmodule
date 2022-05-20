const test = require('ava')
const { HTMLAnchorElement } = require('xwindow')
const { HtmlA } = require('..')

test('HtmlA', t => {
  const instance = new HtmlA({ href : 'https://example.com/', text : 'Example' })
  t.is(instance.node.constructor, HTMLAnchorElement)
  t.is(instance.href, 'https://example.com/')
  t.is(instance.text, 'Example')
  t.is(instance.toString(), '<a href="https://example.com/">Example</a>')
})
