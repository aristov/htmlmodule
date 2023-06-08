import test from 'ava'
import window from 'xwindow'
import { ElemType } from '../index.js'

const { document } =  window

test('test #1', t => {
  const node = document.createElement('div')
  const child = new ElemType({ node })
  const app = ElemType.render(child)

  t.is(app.toString(), '<div><div></div></div>')
  t.is(child.node, node)
})
