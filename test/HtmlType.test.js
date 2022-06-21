const test = require('ava')
const { HTMLAnchorElement } = require('xwindow')
const { HtmlA } = require('..')

let elem

test.afterEach(() => elem.destroy())

test('HtmlA', t => {
  elem = HtmlA.render({
    href : 'https://example.com/',
    children : 'Example',
    title : null,
  })

  t.is(elem.node.constructor, HTMLAnchorElement)
  t.is(elem.href, 'https://example.com/')
  t.is(elem.node.textContent, 'Example')
  t.is(elem.toString(), '<a href="https://example.com/">Example</a>')
})
