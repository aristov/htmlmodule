import { HtmlDiv, HtmlButton, HtmlSpan } from '../lib'

export class Counter extends HtmlDiv
{
  state = { counter : 0 }

  render() {
    return [
      new HtmlButton({
        text : '−',
        onclick : () => this.setState({ counter : this.state.counter - 1 }),
      }),
      new HtmlSpan(this.state.counter),
      new HtmlButton({
        text : '+',
        onclick : () => this.setState({ counter : this.state.counter + 1 }),
      }),
    ]
  }
}
