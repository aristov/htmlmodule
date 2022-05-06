import { HtmlUl } from '../lib'
import { TodoItem } from './TodoItem'

export class TodoList extends HtmlUl
{
  setClassName() {
    this.className = 'todo-list'
  }

  render() {
    return this.props.items.map(item => {
      if(location.hash === '#/active' && item.completed) {
        return null
      }
      if(location.hash === '#/completed' && !item.completed) {
        return null
      }
      return new TodoItem({ item, id : 'ID' + item.id })
    })
  }
}
