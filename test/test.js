const test = require('ava')
const { EventTarget, HTMLAnchorElement, document } = require('xwindow')
const DomNode = require('../lib/DomNode')
const { HtmlA, HtmlDiv } = require('..')

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

test('DomNode', t => {
  const instance = new DomNode
  t.is(instance.node.constructor, EventTarget)
})

test('HtmlA', t => {
  const instance = new HtmlA({ href : 'https://example.com/', text : 'Example' })
  t.is(instance.node.constructor, HTMLAnchorElement)
  t.is(instance.href, 'https://example.com/')
  t.is(instance.text, 'Example')
  t.is(instance.toString(), '<a href="https://example.com/">Example</a>')
})

test('className #1', t => {
  const instance = Foo.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'Foo')
  t.is(instance.toString(), '<div class="Foo">bar</div>')
})

test('className #2', t => {
  const instance = Bar.render('foo', document.createElement('body'))
  t.is(instance.node.className, 'Bar Foo')
  t.is(instance.toString(), '<div class="Bar Foo">foo</div>')
})

test('className #3', t => {
  const instance = Bat.render('bar', document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #4', t => {
  const instance = Foo.render({ className : null, text : 'bar' }, document.createElement('body'))
  t.is(instance.node.className, '')
  t.is(instance.toString(), '<div>bar</div>')
})

test('className #5', t => {
  const instance = Baz.render('bar', document.createElement('body'))
  t.is(instance.node.className, 'foo')
  t.is(instance.toString(), '<div class="foo">bar</div>')
})
