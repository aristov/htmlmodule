const test = require('ava')
const { HtmlDiv } = require('..')

test('object', t => {
  const instance = HtmlDiv.render({ style : { color : '#f00', font : undefined } })

  t.is(instance.style.color, 'rgb(255, 0, 0)')
  t.is(instance.style.font, '')
  t.is(instance.node.getAttribute('style'), 'color: rgb(255, 0, 0);')
  t.is(instance.toString(), '<div style="color: rgb(255, 0, 0);"></div>')

  instance.destroy()
})

test('string', t => {
  const instance = HtmlDiv.render({ style : 'display: none;' })

  t.is(instance.style.display, 'none')
  t.is(instance.node.getAttribute('style'), 'display: none;')
  t.is(instance.toString(), '<div style="display: none;"></div>')

  instance.destroy()
})
