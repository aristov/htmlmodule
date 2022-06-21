const test = require('ava')
const { AttrType, HtmlDiv } = require('..')

class Foo extends AttrType
{
}

test('test #1', t => {
  const elem = HtmlDiv.render()
  elem.setAttr(Foo, 'bar')

  t.is(elem.getAttr(Foo), 'bar')
  t.is(elem.toString(), '<div foo="bar"></div>')

  elem.destroy()
})
