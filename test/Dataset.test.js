const test = require('ava')
const { HtmlDiv } = require('..')

test('test #1', t => {
  const instance = HtmlDiv.render({ dataset : { foo : 'bar', bat : undefined } })

  t.is(instance.dataset.foo, 'bar')
  t.is(instance.dataset.bat, undefined)
  t.is(instance.getAttr('data-foo'), 'bar')
  t.is(instance.getAttr('data-bat'), null)
  t.false(instance.node.hasAttribute('data-bat'))
  t.is(instance.toString(), '<div data-foo="bar"></div>')

  instance.destroy()
})
