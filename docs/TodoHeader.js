import { HtmlHeader, HtmlH1 } from '../lib'
import { TodoForm } from './TodoForm'

export class TodoHeader extends HtmlHeader
{
  render() {
    return [
      new HtmlH1('todos'),
      new TodoForm,
    ]
  }
}
