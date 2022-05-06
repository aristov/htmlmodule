import { HtmlSection } from '../lib'
import { TodoMain } from './TodoMain'
import { TodoFooter } from './TodoFooter'
import { TodoHeader } from './TodoHeader'
import api from './api'

export class TodoApp extends HtmlSection
{
  state = { items : [] }

  className = 'todoapp'

  render() {
    const items = this.state.items
    return [
      new TodoHeader,
      !!items.length && [
        new TodoMain({ items }),
        new TodoFooter({ items }),
      ],
    ]
  }

  async componentDidMount() {
    window.onhashchange = () => this.setState()
    api.addEventListener('update', this.onUpdate)
    this.setState({ items : await api.getItems() })
  }

  componentWillUnmount() {
    window.onhashchange = null
    api.removeEventListener('update', this.onUpdate)
  }

  onUpdate = e => {
    this.setState({ items : e.detail })
  }
}
