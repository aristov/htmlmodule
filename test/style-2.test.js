const test = require('ava')
const { ElemType } = require('..')

class Input extends ElemType
{
  static tagName = 'input'
}

class Test extends ElemType
{
  state = {
    step : 0,
  }

  render() {
    switch(this.state.step) {
      case 0:
        this.style = {
          color : '#fff',
          backgroundColor : null,
        }
        return new Input({
          style : {
            display : 'none',
            lineHeight : null,
          },
        })
      case 1:
        this.style = {
          color : '#f00',
          backgroundColor : '#00f',
        }
        return new Input({
          style : {
            display : 'block',
            lineHeight : '2',
          },
        })
      case 2:
        this.style = {
          backgroundColor : '#0f0',
        }
        return new Input({
          style : {
            lineHeight : '1.5',
          },
        })
      case 3:
        this.style = {}
        return new Input({
          style : null
        })
    }
  }
}

test('test-1', t => {
  const elem = Test.render()

  t.is(elem.toString(), '<div class="Test" style="color: rgb(255, 255, 255);"><input class="Input" style="display: none;"></div>')

  elem.setState({ step : 1 })

  t.is(elem.toString(), '<div class="Test" style="color: rgb(255, 0, 0); background-color: rgb(0, 0, 255);"><input class="Input" style="display: block; line-height: 2;"></div>')

  elem.setState({ step : 2 })

  t.is(elem.toString(), '<div class="Test" style="background-color: rgb(0, 255, 0);"><input class="Input" style="line-height: 1.5;"></div>')

  elem.setState({ step : 3 })

  t.is(elem.toString(), '<div class="Test"><input class="Input"></div>')
})
