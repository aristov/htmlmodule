const test = require('ava')
const { ElemType } = require('..')

test('object', t => {
  const elem = ElemType.render({
    style : {
      color : '#f00',
      font : undefined,
    },
  })

  t.is(elem.toString(), '<div style="color: rgb(255, 0, 0);"></div>')
  t.is(elem.node.getAttribute('style'), 'color: rgb(255, 0, 0);')
  t.is(elem.style.color, 'rgb(255, 0, 0)')
  t.is(elem.style.font, '')
})

test('string', t => {
  const elem = ElemType.render({
    style : 'display: none;',
  })

  t.is(elem.toString(), '<div style="display: none;"></div>')
  t.is(elem.node.getAttribute('style'), 'display: none;')
  t.is(elem.style.display, 'none')
})
