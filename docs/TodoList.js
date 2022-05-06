import { HtmlUl } from '../lib'
import { TodoItem } from './TodoItem'

export class TodoList extends HtmlUl
{
  setClassName() {
    this.className = 'todo-list'
  }

  render() {
    return this.props.items.map(item => (
      new TodoItem({ item, id : 'ID' + item.id })
    ))
  }
}
