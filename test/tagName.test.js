const test = require('ava')
const { HTMLMetaElement, HTMLLinkElement } = require('xwindow')
const { ElemType } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
  class Bar extends ElemType
  {
    static tagName = 'META'
  }

  instance = Bar.render()

  t.is(instance.node.tagName, 'META')
  t.is(instance.node.constructor, HTMLMetaElement)
  t.is(instance.toString(), '<meta>')
})

test('test #2', t => {
  instance = ElemType.render({ tagName : 'LINK' })

  t.is(instance.node.tagName, 'LINK')
  t.is(instance.node.constructor, HTMLLinkElement)
  t.is(instance.toString(), '<link>')
})
