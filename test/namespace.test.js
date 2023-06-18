import test from 'ava'
import window from '../lib/window.cjs'
import { AttrType, ElemType } from '../index.js'

const { SVGElement } =  window

const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg'

class SvgType extends ElemType
{
  static namespace = SVG_NAMESPACE_URI
}

class Svg extends SvgType
{
  static tagName = 'svg'

  static props = {
    width : AttrType.define('width'),
    height : AttrType.define('height'),
  }
}

class Path extends SvgType
{
  static tagName = 'path'

  static props = {
    d : AttrType.define('d'),
  }
}

test('test #1', t => {
  const elem = Svg.render({
    width : '100',
    height : '100',
    children : new Path({ d : 'M 0,0 L 100,100' }),
  })

  t.is(elem.toString(), '<svg width="100" height="100"><path d="M 0,0 L 100,100"></path></svg>')
  t.is(elem.node.namespaceURI, SVG_NAMESPACE_URI)
  t.is(elem.children[0].node.namespaceURI, SVG_NAMESPACE_URI)
  t.true(elem.node instanceof SVGElement)
  t.true(elem.children[0].node instanceof SVGElement)
})
