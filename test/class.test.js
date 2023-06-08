import test from 'ava'
import { ElemType } from '../index.js'

class Foo extends ElemType
{
  static class = 'Foo'
}

class Bar extends Foo
{
  static class = 'BAT'
}

class Baz extends Bar
{
}

class Cux extends Baz
{
  static class = 'Cux'
}

test('test #1', t => {
  const elem = Cux.render('qwe')

  t.is(elem.className, 'Cux BAT Foo')
  t.is(elem.toString(), '<div class="Cux BAT Foo">qwe</div>')
})
