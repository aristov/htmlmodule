const test = require('ava')
const { HtmlArticle, HtmlButton, HtmlSection } = require('..')

class Article extends HtmlArticle
{
  state = {
    expanded : false,
  }

  render() {
    return [
      this.refs.button = new HtmlButton({
        children : this.state.expanded ? 'Off' : 'On',
        onclick : this.onClick,
      }),
      new HtmlSection({
        hidden : !this.state.expanded,
        children : 'Foo',
      }),
      this.state.expanded ? 'Bat' : 'Bar',
    ]
  }

  onClick = () => this.setState(state => ({ expanded : !state.expanded }))

  toggle() {
    this.refs.button.click()
  }
}

test('setState', t => {
  const instance = Article.render()

  t.is(instance.toString(), '<article class="Article"><button>On</button><section hidden="">Foo</section>Bar</article>')

  instance.toggle()

  t.is(instance.toString(), '<article class="Article"><button>Off</button><section>Foo</section>Bat</article>')

  instance.toggle()

  t.is(instance.toString(), '<article class="Article"><button>On</button><section hidden="">Foo</section>Bar</article>')

  instance.destroy()
})
