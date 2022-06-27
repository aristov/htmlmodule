const test = require('ava')
const { ElemType } = require('..')

class Input extends ElemType
{
  static tagName = 'INPUT'
}

class Test extends ElemType
{
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
            'aria-placeholder' : 'Hey'
          }
        })
    }
  }
}

test('test #1', t => {
  const elem = Test.render()

  t.is(elem.attributes['aria-hidden'].value, 'true')
  t.is(elem.attributes['aria-label'], undefined)
  t.is(elem.toString(), '<div class="Test" aria-hidden="true"><input class="Input" aria-disabled="true"></div>')

  elem.setState({ step : 1 })

  t.is(elem.attributes['aria-hidden'].value, 'false')
  t.is(elem.attributes['aria-label'].value, 'Go')
  t.is(elem.toString(), '<div class="Test" aria-hidden="false" aria-label="Go"><input class="Input" aria-disabled="false" aria-placeholder="Wow"></div>')

  elem.setState({ step : 2 })

  t.is(elem.attributes['aria-hidden'], undefined)
  t.is(elem.attributes['aria-label'].value, 'Think')
  t.is(elem.toString(), '<div class="Test" aria-label="Think"><input class="Input" aria-placeholder="Hey"></div>')
})
