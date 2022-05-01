import morphdom from 'morphdom'
import { HtmlDiv, HtmlButton, HtmlSpan, DomFragment } from '../lib'

export class Counter extends HtmlDiv
{
  constructor(init) {
    super(init)
    this.state = {}
    this.setState({ counter : 0 })
  }

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

  setState(state) {
    Object.assign(this.state, state)
    const fragment = new DomFragment(this.render())
    morphdom(this.node, fragment.node, {
      childrenOnly : true,
      onBeforeNodeAdded : (toNode) => console.log('onBeforeNodeAdded', toNode),
      onNodeAdded : (toNode) => console.log('onNodeAdded', toNode),
      onBeforeElUpdated : (fromEl, toEl) => console.log('onBeforeElUpdated', fromEl, toEl),
      onElUpdated : (fromEl) => console.log('onElUpdated', fromEl),
      onBeforeNodeDiscarded : (fromNode) => console.log('onBeforeNodeDiscarded', fromNode),
      onNodeDiscarded : (fromNode) => console.log('onNodeDiscarded', fromNode),
      onBeforeElChildrenUpdated : (fromEl, toEl) => console.log('onBeforeElChildrenUpdated', fromEl, toEl),
    })
  }
}
