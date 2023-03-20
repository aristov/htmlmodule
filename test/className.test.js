const test = require('ava')
const { ElemType } = require('..')

class Foo extends ElemType
{
  static class = 'Foo'
}

class Bar extends Foo
{
  static class = 'Bar'
}

class Bat extends ElemType
{
  static className = null
}

class Baz extends ElemType
{
  static className = 'foo'
}

class Cux extends ElemType
{
  static class = 'Cux'

  render() {
    this.className = null
    return this.props.children
  }
}

test('test #1', t => {
  const elem = Foo.render('bar')

  t.is(elem.className, 'Foo')
  t.is(elem.toString(), '<div class="Foo">bar</div>')
})

test('test #2', t => {
  const elem = Bar.render('bat')

  t.is(elem.className, 'Bar Foo')
  t.is(elem.toString(), '<div class="Bar Foo">bat</div>')
})

test('test #3', t => {
  const elem = Bat.render('baz')

  t.is(elem.className, '')
  t.is(elem.toString(), '<div>baz</div>')
})

test('test #4', t => {
  const elem = Foo.render({ className : null, children : 'bar' })

  t.is(elem.className, '')
  t.is(elem.toString(), '<div>bar</div>')
})

test('test #5', t => {
  const elem = Baz.render('qaz')

  t.is(elem.className, 'foo')
  t.is(elem.toString(), '<div class="foo">qaz</div>')
})

test('test #6', t => {
  const elem = Cux.render('qwe')

  t.is(elem.className, '')
  t.is(elem.toString(), '<div>qwe</div>')
})
