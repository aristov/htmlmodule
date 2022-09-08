const test = require('ava')
const { ElemType } = require('..')

class Input extends ElemType
{
  static tagName = 'input'

  static class = 'Input'
}

class App extends ElemType
{
  static role = 'form'

  static class = 'App'

  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        this.attributes = {
          'aria-hidden' : 'true',
          'aria-label' : null,
        }
        return new Input({
          attributes : {
            'aria-disabled' : 'true',
            'aria-placeholder' : null,
          },
        })
      case 1:
        this.attributes = {
          'aria-hidden' : 'false',
          'aria-label' : 'Go',
        }
        return new Input({
          attributes : {
            'aria-disabled' : 'false',
            'aria-placeholder' : 'Wow',
          },
        })
      case 2:
        this.attributes = {
          'aria-label' : 'Think',
        }
        return new Input({
          attributes : {
            'aria-placeholder' : 'Hey',
          },
        })
      case 3:
        this.id = 'id1'
        this.dataset = { id : '123' }
        this.style = { display : 'inline' }
        this.attributes = null
        return new Input({
          id : 'id2',
          dataset : { id : '456' },
          style : { display : 'block' },
        })
    }
  }
}

test('test #1', t => {
  const elem = App.render()

  t.is(elem.toString(), '<div role="form" class="App" aria-hidden="true"><input class="Input" aria-disabled="true"></div>')
  t.deepEqual(elem.attributes, {
    'aria-hidden' : 'true',
    'aria-label' : null,
  })

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div role="form" class="App" aria-hidden="false" aria-label="Go"><input class="Input" aria-disabled="false" aria-placeholder="Wow"></div>')
  t.deepEqual(elem.attributes, {
    'aria-hidden' : 'false',
    'aria-label' : 'Go',
  })

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div role="form" class="App" aria-label="Think"><input class="Input" aria-placeholder="Hey"></div>')
  t.deepEqual(elem.attributes, {
    'aria-label' : 'Think',
  })

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div role="form" class="App" id="id1" data-id="123" style="display: inline;"><input class="Input" id="id2" data-id="456" style="display: block;"></div>')
  t.is(elem.attributes, null)
})
