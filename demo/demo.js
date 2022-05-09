{
  const { HtmlDiv, HtmlButton, HtmlInput } = htmlmodule

  class Counter extends HtmlDiv
  {
    state = { counter : 0 }

    render() {
      return [
        new HtmlButton({
          text : '−',
          onclick : () => this.setState({ counter : this.state.counter - 1 }),
        }),
        new HtmlInput({
          size : 4,
          readOnly : true,
          style : { textAlign : 'center' },
          value : this.state.counter,
        }),
        new HtmlButton({
          text : '+',
          onclick : () => this.setState({ counter : this.state.counter + 1 }),
        }),
      ]
    }
  }

  Counter.render({}, document.getElementById('app'))
}
