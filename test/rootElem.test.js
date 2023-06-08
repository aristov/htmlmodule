import test from 'ava'
import { ElemType } from '../index.js'

test('test #1', t => {
  let child1, child2, child3
  const app = ElemType.render([
    child1 = new ElemType(
      child2 = new ElemType(
        child3 = new ElemType('42')
      )
    )
  ])

  t.is(app.toString(), '<div><div><div><div>42</div></div></div></div>')
  t.is(child1.rootElem, app)
  t.is(child2.rootElem, app)
  t.is(child3.rootElem, app)
  t.is(app.rootElem, app)
})
