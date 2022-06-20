const test = require('ava')
const { HTMLAnchorElement } = require('xwindow')
const { HtmlA } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('HtmlA', t => {
  instance = HtmlA.render({
    href : 'https://example.com/',
    children : 'Example',
    title : null,
  })

  t.is(instance.node.constructor, HTMLAnchorElement)
  t.is(instance.href, 'https://example.com/')
  t.is(instance.node.textContent, 'Example')
  t.is(instance.toString(), '<a href="https://example.com/">Example</a>')
})
