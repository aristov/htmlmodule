const test = require('ava')
const { ElemType } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
  class Bar extends ElemType
  {
    static tagName = 'meta'
  }

  instance = Bar.render()

  t.is(instance.node.tagName, 'meta')
  t.is(instance.toString(), '<meta>')
})

test('test #2', t => {
  instance = ElemType.render({ tagName : 'link' })

  t.is(instance.node.tagName, 'link')
  t.is(instance.toString(), '<link>')
})
