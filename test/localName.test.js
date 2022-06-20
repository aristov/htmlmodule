const test = require('ava')
const { ElemType } = require('..')

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
  class Bar extends ElemType
  {
    static localName = 'meta'
  }

  instance = Bar.render()

  t.is(instance.node.localName, 'meta')
  t.is(instance.toString(), '<meta>')
})

test('test #2', t => {
  instance = ElemType.render({ localName : 'link' })

  t.is(instance.node.localName, 'link')
  t.is(instance.toString(), '<link>')
})
