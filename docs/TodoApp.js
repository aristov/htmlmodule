import { HtmlDiv, HtmlSection, HtmlHeader, HtmlH1 } from '../lib'
import { TodoMain } from './TodoMain'
import { TodoFooter } from './TodoFooter'
import { TodoForm } from './TodoForm'
import api from './api'

export class TodoApp extends HtmlSection
{
  state = { items : null }

  render() {
    const items = this.state.items
    if(!items) {
      return new HtmlDiv('Loading...')
    }
    return [
      new HtmlHeader({
        class : 'header',
        children : [
          new HtmlH1('todos'),
          new TodoForm,
        ],
      }),
      !!items.length && [
        new TodoMain({ items }),
        new TodoFooter({ items }),
      ],
    ]
  }

  setClassName() {
    this.className = 'todoapp'
  }

  async componentDidMount() {
    window.onhashchange = () => this.setState({ items : this.state.items })
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
