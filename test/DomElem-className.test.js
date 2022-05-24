const test = require('ava')
const { document } = require('xwindow')
const { HtmlDiv } = require('..')

class Foo extends HtmlDiv
{
}

class Bar extends Foo
{
}

class Bat extends HtmlDiv
{
  className = null
}

class Baz extends HtmlDiv
{
  className = 'foo'
}

let instance

test.afterEach(() => instance.destroy())

test('test #1', t => {
  instance = Foo.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'Foo')
  t.is(instance.toString(), '<div class="Foo">bar</div>')
})

test('test #2', t => {
  instance = Bar.render('bat', document.createElement('body'))
  t.is(instance.node.className, 'Bar Foo')
  t.is(instance.toString(), '<div class="Bar Foo">bat</div>')
})

test('test #3', t => {
  instance = Bat.render('bar', document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('test #4', t => {
  instance = Foo.render({ className : null, text : 'bar' }, document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('test #5', t => {
  instance = Baz.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'foo')
  t.is(instance.toString(), '<div class="foo">bar</div>')
})
