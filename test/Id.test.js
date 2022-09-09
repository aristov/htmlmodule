const test = require('ava')
const { ElemType, Id } = require('..')

test('generate', t => {
  const app = ElemType.render({
    id : Id.generate(),
    children : [
      new ElemType({ id : Id.generate() }),
      new ElemType({ id : 'second' }),
      new ElemType({ id : Id.generate() }),
    ]
  })

  t.is(app.toString(), '<div id="ID_0000"><div id="ID_0001"></div><div id="second"></div><div id="ID_0002"></div></div>')
})
