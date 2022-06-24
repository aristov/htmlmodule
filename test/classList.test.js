const test = require('ava')
const { ElemType } = require('../index')

test('test #1', t => {
  const elem = ElemType.render({ classList : ['foo', null, 'bar'] })

  t.is(elem.classList[0], 'foo')
  t.is(elem.classList[1], 'bar')

  elem.classList = { foo : false, bat : true }

  t.is(elem.classList[0], 'bar')
  t.is(elem.classList[1], 'bat')

  elem.classList = 'foo baz'

  t.is(elem.classList[0], 'foo')
  t.is(elem.classList[1], 'baz')
})
