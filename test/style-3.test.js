import test from 'ava'
import { ElemType } from '../index.js'

class App extends ElemType
{
  static class = 'App'

  assign() {
    this.style = {
      display: 'flex',
    }
  }
}

test('object', t => {
  const elem = App.render({
    style : {
      position : 'absolute',
    },
  })

  t.is(elem.toString(), '<div class="App" style="display: flex; position: absolute;"></div>')
  t.is(elem.node.getAttribute('style'), 'display: flex; position: absolute;')
  t.is(elem.style.display, 'flex')
  t.is(elem.style.position, 'absolute')
})

test('string', t => {
  const elem = App.render({
    style : 'position: fixed;',
  })

  t.is(elem.toString(), '<div class="App" style="position: fixed;"></div>')
  t.is(elem.node.getAttribute('style'), 'position: fixed;')
  t.is(elem.style.display, '')
  t.is(elem.style.position, 'fixed')
})