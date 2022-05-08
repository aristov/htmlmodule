{
  const { htmlmodule } = window
  const { HtmlDiv, HtmlButton, HtmlSpan } = htmlmodule

  class Counter extends HtmlDiv
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

  Counter.render({}, document.getElementById('app'))
}
