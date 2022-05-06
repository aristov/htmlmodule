import { HtmlUl } from '../lib'
import { TodoItem } from './TodoItem'

export class TodoList extends HtmlUl
{
  render() {
    return this.props.items.map(item => (
      new TodoItem({ item, id : 'ID' + item.id })
    ))
  }
}
