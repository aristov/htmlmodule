const test = require('ava')
const { AttrType, HtmlDiv } = require('..')

class Foo extends AttrType
{
}

test('test', t => {
  const instance = HtmlDiv.render()
  instance.setAttr(Foo, 'bar')
  t.is(instance.getAttr(Foo), 'bar')
  t.is(instance.toString(), '<div foo="bar"></div>')
})
