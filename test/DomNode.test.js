const test = require('ava')
const { EventTarget } = require('xwindow')
const {
  DomNode,
  HtmlA,
  HtmlDiv,
  HtmlSpan,
  HtmlArticle,
  HtmlButton,
  HtmlSection,
} = require('..')

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
