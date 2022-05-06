import { HtmlSection, HtmlInput, HtmlLabel } from '../lib'
import { TodoList } from './TodoList'
import api from './api'

export class TodoMain extends HtmlSection
{
  className = 'main'

  render() {
    return [
      new HtmlInput({
        id : 'toggle-all',
        class : 'toggle-all',
        type : 'checkbox',
        checked : this.props.items.every(item => item.completed),
        onclick : e => api.updateItems({ completed : e.target.checked }),
      }),
      new HtmlLabel({ htmlFor : 'toggle-all' }),
      new TodoList({ items : this.props.items }),
    ]
  }
}
