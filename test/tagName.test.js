const test = require('ava')
const { HTMLMetaElement, HTMLLinkElement } = require('xwindow')
const { ElemType } = require('..')

let elem

test.afterEach(() => elem.destroy())

test('test #1', t => {
  class Bar extends ElemType
  {
    static tagName = 'META'
  }

  elem = Bar.render()

  t.is(elem.node.tagName, 'META')
  t.is(elem.node.constructor, HTMLMetaElement)
  t.is(elem.node.className, 'Bar')
  t.is(elem.toString(), '<meta class="Bar">')
})

test('test #2', t => {
  elem = ElemType.render({ tagName : 'LINK' })

  t.is(elem.node.tagName, 'LINK')
  t.is(elem.node.constructor, HTMLLinkElement)
  t.is(elem.toString(), '<link>')
})