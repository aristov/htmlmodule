const test = require('ava')
const { HtmlDiv } = require('..')

test('test', t => {
  const instance = HtmlDiv.render({ dataset : { foo : 'bar', bat : undefined } })
  t.is(instance.dataset.foo, 'bar')
  t.is(instance.dataset.bat, undefined)
  t.is(instance.node.getAttribute('data-key'), null)
  t.false(instance.node.hasAttribute('data-bat'))
})
