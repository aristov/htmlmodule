const test = require('ava')
const sinon = require('sinon')
const { CustomEvent, EventTarget } = require('xwindow')
const DomNode = require('../lib/DomNode')
const {
  HtmlA,
  HtmlDiv,
  HtmlSpan,
  HtmlArticle,
  HtmlButton,
  HtmlSection,
} = require('../lib/htmlmodule')

class Article extends HtmlArticle
{
  state = { expanded : false }

  render() {
    return [
      this._button = new HtmlButton({
        text : this.state.expanded ? 'Off' : 'On',
        onclick : this.onClick,
      }),
      new HtmlSection({
        hidden : !this.state.expanded,
        children : 'Lorem ipsum',
      }),
      this.state.expanded ? 'Click button to close' : 'Click button to open',
    ]
  }

  onClick = () => this.setState({ expanded : !this.state.expanded })

  toggle() {
    this._button.click()
  }
}

let instance

test.afterEach(() => instance.destroy())

test('new DomNode', t => {
  instance = new DomNode
  t.is(instance.node.constructor, EventTarget)
})

test('children', t => {
  instance = HtmlDiv.render([
    'foo', null, [new HtmlSpan('bar'), [], [['bat'], new HtmlA('baz')]],
  ])
  t.is(instance.node.childNodes.length, 4)
  t.is(instance.node.childElementCount, 2)
  t.is(instance.toString(), '<div>foo<span>bar</span>bat<a>baz</a></div>')
})

test('setState', t => {
  instance = Article.render()
  t.is(instance.toString(), '<article class="Article"><button>On</button><section hidden="">Lorem ipsum</section>Click button to open</article>')
  instance.toggle()
  t.is(instance.toString(), '<article class="Article"><button>Off</button><section>Lorem ipsum</section>Click button to close</article>')
  instance.setState(state => ({ expanded : !state.expanded }))
  t.is(instance.toString(), '<article class="Article"><button>On</button><section hidden="">Lorem ipsum</section>Click button to open</article>')
})

test('events #1', t => {
  const onload = sinon.spy()
  instance = HtmlDiv.render({ onload })
  t.is(instance.onload, onload)

  instance.emit('load')
  t.true(onload.calledOnce)
  t.is(onload.getCall(0).thisValue, instance)
  t.is(onload.args[0][0].type, 'load')
  t.is(onload.args[0][1], instance)

  instance.onload = null
  t.is(instance.onload, null)

  instance.emit('load')
  t.true(onload.calledOnce)
})

test('events #2', t => {
  const onfoo = sinon.spy()
  instance = HtmlDiv.render()
  instance.node.addEventListener('foo', onfoo)
  instance.emit('foo', { detail : 'bar' })
  t.true(onfoo.calledOnce)
  t.is(onfoo.getCall(0).thisValue, instance.node)
  t.is(onfoo.args[0][0].type, 'foo')
  t.is(onfoo.args[0][0].detail, 'bar')

  const event = new CustomEvent('foo', { detail : 'bat' })
  instance.emit(event)
  t.true(onfoo.calledTwice)
  t.is(onfoo.getCall(1).thisValue, instance.node)
  t.is(onfoo.args[1][0], event)

  instance.node.removeEventListener('foo', onfoo)
  instance.emit('foo')
  t.true(onfoo.calledTwice)
})

test('destroy', t => {
  const children = new HtmlSpan('foo')
  const instance = HtmlDiv.render({
    onclick : () => null,
    children,
  })
  instance.destroy()
  t.is(instance.node, null)
  t.is(instance.onclick, null)
  t.is(children.node, null)
})
