import test from 'ava'
import window from '../lib/window.cjs'
import { ElemType } from '../index.js'

const { HTMLMetaElement, HTMLLinkElement } =  window

test('test #1', t => {
  class Bar extends ElemType
  {
    static tagName = 'meta'

    static class = 'Bar'
  }

  const elem = Bar.render()

  t.is(elem.node.tagName, 'META')
  t.is(elem.node.constructor, HTMLMetaElement)
  t.is(elem.node.className, 'Bar')
  t.is(elem.toString(), '<meta class="Bar">')
})

test('test #2', t => {
  const elem = ElemType.render({ tagName : 'LINK' })

  t.is(elem.node.tagName, 'LINK')
  t.is(elem.node.constructor, HTMLLinkElement)
  t.is(elem.toString(), '<link>')
})
