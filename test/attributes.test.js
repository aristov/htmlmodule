const test = require('ava')
const { ElemType } = require('..')

test('test #1', t => {
  const elem = ElemType.render({
    attributes : {
      'aria-hidden' : 'true',
      'aria-label' : null,
    },
  })

  t.is(elem.attributes['aria-hidden'].value, 'true')
  t.is(elem.attributes['aria-label'], undefined)
  t.is(elem.toString(), '<div aria-hidden="true"></div>')

  elem.setAttr('aria-hidden', 'false')

  t.is(elem.attributes['aria-hidden'].value, 'false')
  t.is(elem.toString(), '<div aria-hidden="false"></div>')

  elem.setAttr('aria-hidden', null)

  t.is(elem.attributes['aria-hidden'], undefined)
  t.is(elem.toString(), '<div></div>')
})
