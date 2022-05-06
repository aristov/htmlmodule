import { HtmlSection, HtmlInput, HtmlLabel } from '../lib'
import { TodoList } from './TodoList'

export class TodoMain extends HtmlSection
{
  render() {
    return [
      new HtmlInput({
        id : 'toggle-all',
        class : 'toggle-all',
        type : 'checkbox',
      }),
      new HtmlLabel({
        htmlFor : 'toggle-all',
      }),
      new TodoList({ items : this.props.items }),
    ]
  }

  setClassName(prefix = 'Html') {
    this.className = 'main'
  }
}
