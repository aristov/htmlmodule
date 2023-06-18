import test from 'ava'
import { ElemType } from '../index.js'

class App extends ElemType
{
  static class = 'App'
}

class Main extends ElemType
{
  static tagName = 'main'
}

test('test #1', t => {
  const main = new Main({
    innerHTML : '<p><button class="foo">push me</button></p>',
  })
  const app = App.render({
    onclick,
    children : main,
  })
  const button = app.node.querySelector('button')

  t.is(app.toString(), '<div class="App"><main><p><button class="foo">push me</button></p></main></div>')

  button.click()

  function onclick(e) {
    const target = e.target

    t.true(target instanceof Main)
    t.is(target, main)
    t.is(target.closest(App), app)
    t.is(target.closest(Main), main)
    t.is(target.closest(ElemType), main)
  }

  t.is(app.toString(), '<div class="App"><main><p><button class="foo">push me</button></p></main></div>')
})
