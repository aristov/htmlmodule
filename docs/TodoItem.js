import { HtmlLi, HtmlInput, HtmlDiv, HtmlButton } from '../lib'
import api from './api'

export class TodoItem extends HtmlLi
{
  state = { busy : false }

  render() {
    const item = this.props.item
    this.node.setAttribute('aria-busy', this.state.busy)
    return [
      new HtmlInput({
        type : 'checkbox',
        checked : item.completed,
        disabled : this.state.busy,
        onchange : this.onChange,
      }),
      new HtmlDiv(item.text),
      new HtmlButton({
        children : 'Delete',
        disabled : this.state.busy,
        onclick : this.onRemove,
      }),
    ]
  }

  onChange = async () => {
    const item = this.props.item
    this.setState({ busy : true })
    await api.updateItem({
      id : item.id,
      completed : !item.completed,
    })
    this.setState({ busy : false })
  }

  onRemove = async () => {
    this.setState({ busy : true })
    await api.removeItem(this.props.item.id)
  }
}
