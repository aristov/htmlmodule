const test = require('ava')
const { HTMLAnchorElement } = require('xwindow')
const { HtmlA } = require('../lib/htmlmodule')

let instance

test.afterEach(() => instance.destroy())

test('HtmlA', t => {
  instance = HtmlA.render({
    href : 'https://example.com/',
    children : 'Example',
    title : undefined,
  })
  t.is(instance.node.constructor, HTMLAnchorElement)
  t.is(instance.href, 'https://example.com/')
  t.is(instance.text, 'Example')
  t.is(instance.toString(), '<a href="https://example.com/">Example</a>')
})
