const test = require('ava')
const { HTMLAnchorElement, document } = require('xwindow')
const { HtmlA, HtmlDiv } = require('../lib/htmlmodule')

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

test('HtmlA', t => {
  instance = HtmlA.render({
    href : 'https://example.com/',
    children : 'Example',
    title : undefined,
  })
  t.is(instance.node.constructor, HTMLAnchorElement)
  t.is(instance.href, 'https://example.com/')
  t.is(instance.text, 'Example')
  t.is(instance.toString(), '<a href="https://example.com/">Example</a>')
})

test('className #1', t => {
  instance = Foo.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'Foo')
  t.is(instance.toString(), '<div class="Foo">bar</div>')
})

test('className #2', t => {
  instance = Bar.render('bat', document.createElement('body'))
  t.is(instance.node.className, 'Bar Foo')
  t.is(instance.toString(), '<div class="Bar Foo">bat</div>')
})

test('className #3', t => {
  instance = Bat.render('bar', document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #4', t => {
  instance = Foo.render({ className : null, text : 'bar' }, document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #5', t => {
  instance = Baz.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'foo')
  t.is(instance.toString(), '<div class="foo">bar</div>')
})
