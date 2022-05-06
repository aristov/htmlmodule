import { HtmlLi, HtmlInput, HtmlDiv, HtmlButton, HtmlLabel } from '../lib'
import api from './api'

export class TodoItem extends HtmlLi
{
  state = { busy : false }

  render() {
    const item = this.props.item
    this.node.setAttribute('aria-busy', this.state.busy)
    this.class.completed = item.completed
    return [
      new HtmlDiv({
        class : 'view',
        children : [
          new HtmlInput({
            class : 'toggle',
            type : 'checkbox',
            checked : item.completed,
            disabled : this.state.busy,
            onchange : this.onChange,
          }),
          new HtmlLabel(item.text),
          new HtmlButton({
            class : 'destroy',
            disabled : this.state.busy,
            onclick : this.onRemove,
          }),
        ],
      }),
      new HtmlInput({
        class : 'edit',
        value : 'Create a TodoMVC template',
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
