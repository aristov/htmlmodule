const test = require('ava')
const { HtmlDiv } = require('..')

test('test #1', t => {
  const elem = HtmlDiv.render({ dataset : { foo : 'bar', bat : null } })

  t.is(elem.dataset.foo, 'bar')
  t.is(elem.dataset.bat, undefined)
  t.is(elem.getAttr('data-foo'), 'bar')
  t.is(elem.getAttr('data-bat'), null)
  t.false(elem.node.hasAttribute('data-bat'))
  t.is(elem.toString(), '<div data-foo="bar"></div>')
})
