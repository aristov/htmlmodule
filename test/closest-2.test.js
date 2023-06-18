import test from 'ava'
import { ElemType, HtmlA, HtmlB } from '../index.js'

class A extends HtmlA
{
  static class = 'A'
}

class B extends HtmlB
{
  static class = 'B'
}

class App extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        return new HtmlA(new HtmlB(this.props.children))
      case 1:
        return new HtmlB(new HtmlA(this.props.children))
      case 2:
        return new B(new A(this.props.children))
    }
  }
}

test('test #2', t => {
  const child = new ElemType('test')
  const app = App.render(child)

  t.is(app.toString(), '<div><a><b><div>test</div></b></a></div>')
  t.is(child.closest(HtmlA), app.children[0])
  t.is(child.closest(HtmlB), app.children[0].children[0])
  t.is(child.closest(B), null)
  t.is(child.closest(App), app)

  app.setState({ step : 1 })

  t.is(app.toString(), '<div><b><a><div>test</div></a></b></div>')
  t.is(child.closest(HtmlA), app.children[0].children[0])
  t.is(child.closest(HtmlB), app.children[0])
  t.is(child.closest(B), null)
  t.is(child.closest(App), app)

  app.setState({ step : 2 })

  t.is(app.toString(), '<div><b class="B"><a class="A"><div>test</div></a></b></div>')
  t.is(child.closest(HtmlA), app.children[0].children[0])
  t.is(child.closest(HtmlB), app.children[0])
  t.is(child.closest(B), app.children[0])
  t.is(child.closest(App), app)
})
