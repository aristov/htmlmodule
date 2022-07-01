const test = require('ava')
const { ElemType } = require('..')

class Foo extends ElemType
{
}

class Bar extends Foo
{
  static class = 'BAT'
}

class Baz extends Bar
{
  static class = null
}

class Cux extends Baz
{
}

test('test #1', t => {
  const elem = Cux.render('qwe')

  t.is(elem.node.className, 'Cux BAT Foo')
  t.is(elem.toString(), '<div class="Cux BAT Foo">qwe</div>')
})

test('test #2', t => {
  const elem = Cux.render({
    class : 'xUC',
    children : 'qwe',
  })

  t.is(elem.node.className, 'xUC BAT Foo')
  t.is(elem.toString(), '<div class="xUC BAT Foo">qwe</div>')
})

test('test #3', t => {
  const elem = Cux.render({
    class : null,
    children : 'qwe',
  })

  t.is(elem.node.className, 'BAT Foo')
  t.is(elem.toString(), '<div class="BAT Foo">qwe</div>')
})

test('test #4', t => {
  const elem = Baz.render({
    class : 'poi',
    children : 'qwe',
  })

  t.is(elem.node.className, 'poi BAT Foo')
  t.is(elem.toString(), '<div class="poi BAT Foo">qwe</div>')
})

test('test #5', t => {
  const elem = Bar.render({
    class : 'qaz',
    children : 'qwe',
  })

  t.is(elem.node.className, 'qaz Foo')
  t.is(elem.toString(), '<div class="qaz Foo">qwe</div>')
})

test('test #6', t => {
  const elem = Bar.render({
    class : null,
    children : 'qwe',
  })

  t.is(elem.node.className, 'Foo')
  t.is(elem.toString(), '<div class="Foo">qwe</div>')
})

test('test #7', t => {
  const elem = Foo.render({
    class : 'Wsx',
    children : 'qwe',
  })

  t.is(elem.node.className, 'Wsx')
  t.is(elem.toString(), '<div class="Wsx">qwe</div>')
})

test('test #8', t => {
  const elem = Foo.render({
    class : null,
    children : 'qwe',
  })

  t.is(elem.node.className, '')
  t.false(elem.node.hasAttribute('class'))
  t.is(elem.toString(), '<div>qwe</div>')
})
