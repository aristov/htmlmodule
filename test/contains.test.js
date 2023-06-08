import test from 'ava'
import { ElemType } from '../index.js'

test('test #1', t => {
  const childA = new ElemType()
  const childB = new ElemType()
  const childC = new ElemType(childB)
  const app = ElemType.render([childA, childC])

  t.false(app.contains(app))
  t.true(app.contains(childA))
  t.true(app.contains(childB))
  t.true(app.contains(childC))

  t.false(childA.contains(app))
  t.false(childA.contains(childA))
  t.false(childA.contains(childB))
  t.false(childA.contains(childC))

  t.false(childB.contains(app))
  t.false(childB.contains(childA))
  t.false(childB.contains(childB))
  t.false(childB.contains(childC))

  t.false(childC.contains(app))
  t.false(childC.contains(childA))
  t.true(childC.contains(childB))
  t.false(childC.contains(childC))
})
