const test = require('ava')
const { HtmlDiv } = require('..')

test('object', t => {
  const elem = HtmlDiv.render({ style : { color : '#f00', font : undefined } })

  t.is(elem.style.color, 'rgb(255, 0, 0)')
  t.is(elem.style.font, '')
  t.is(elem.node.getAttribute('style'), 'color: rgb(255, 0, 0);')
  t.is(elem.toString(), '<div style="color: rgb(255, 0, 0);"></div>')
})

test('string', t => {
  const elem = HtmlDiv.render({ style : 'display: none;' })

  t.is(elem.style.display, 'none')
  t.is(elem.node.getAttribute('style'), 'display: none;')
  t.is(elem.toString(), '<div style="display: none;"></div>')
})
