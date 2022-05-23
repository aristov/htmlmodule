const test = require('ava')
const { EventTarget } = require('xwindow')
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
  t.is(instance.toString(), '<article class="Article"><button>On</button><section hidden="">Lorem ipsum</section></article>')
  instance.toggle()
  t.is(instance.toString(), '<article class="Article"><button>Off</button><section>Lorem ipsum</section></article>')
})
