import { HtmlDiv } from '../lib'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import api from './api'
import './TodoApp.css'

export class TodoApp extends HtmlDiv
{
  state = { items : null }

  render() {
    if(!this.state.items) {
      return new HtmlDiv('Loading...')
    }
    return [
      new TodoForm,
      new TodoList({ items : this.state.items }),
    ]
  }

  async componentDidMount() {
    api.addEventListener('update', this.onUpdate)
    this.setState({ items : await api.getItems() })
  }

  componentWillUnmount() {
    api.removeEventListener('update', this.onUpdate)
  }

  onUpdate = e => {
    this.setState({ items : e.detail })
  }
}
