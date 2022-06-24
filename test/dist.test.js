const test = require('ava')
const { ElemType, HtmlType, HtmlDiv } = require('../dist/htmlmodule.min')

class Foo extends ElemType
{
}

class Bar extends HtmlType
{
}

class Bat extends HtmlDiv
{
}

class Baz extends Bat
{
}

test('test #1', t => {
  const foo = Foo.render('bar')

  t.is(foo.node.className, 'Foo')
  t.is(foo.toString(), '<div class="Foo">bar</div>')
})

test('test #2', t => {
  const foo = Bar.render('bat')

  t.is(foo.node.className, 'Bar')
  t.is(foo.toString(), '<div class="Bar">bat</div>')
})

test('test #3', t => {
  const foo = Bat.render('baz')

  t.is(foo.node.className, 'Bat')
  t.is(foo.toString(), '<div class="Bat">baz</div>')
})

test('test #4', t => {
  const foo = Baz.render('foo')

  t.is(foo.node.className, 'Baz Bat')
  t.is(foo.toString(), '<div class="Baz Bat">foo</div>')
})
