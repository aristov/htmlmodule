import test from 'ava'
import { HtmlArticle, HtmlButton, HtmlSection } from '../index.js'

class Article extends HtmlArticle
{
  static class = 'Article'

  state = {
    expanded : false,
  }

  render() {
    return [
      this._button = new HtmlButton({
        onclick : this.onClick,
        children : this.state.expanded ? 'Off' : 'On',
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
    this._button.click()
  }
}

test('test #1', t => {
  const elem = Article.render()

  t.is(elem.toString(), '<article class="Article"><button>On</button><section hidden="">Foo</section>Bar</article>')

  elem.toggle()

  t.is(elem.toString(), '<article class="Article"><button>Off</button><section>Foo</section>Bat</article>')

  elem.toggle()

  t.is(elem.toString(), '<article class="Article"><button>On</button><section hidden="">Foo</section>Bar</article>')
})
