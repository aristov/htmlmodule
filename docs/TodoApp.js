import { HtmlDiv, HtmlSection } from '../lib'
import api from './api'
import { TodoHeader } from './TodoHeader'
import { TodoMain } from './TodoMain'
import { TodoFooter } from './TodoFooter'

export class TodoApp extends HtmlSection
{
  state = { items : null }

  render() {
    if(!this.state.items) {
      return new HtmlDiv('Loading...')
    }
    return [
      new TodoHeader,
      new TodoMain({ items : this.state.items }),
      new TodoFooter,
    ]
  }

  setClassName() {
    this.className = 'todoapp'
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
