import { HtmlForm, HtmlInput } from '../lib'
import api from './api'

export class TodoForm extends HtmlForm
{
  state = { text : '', busy : false }

  render() {
    this.onsubmit = this.onSubmit
    return [
      this._input = new HtmlInput({
        disabled : this.state.busy,
        required : true,
        value : this.state.text,
        class : 'new-todo',
        placeholder : 'What needs to be done?',
        autofocus : true,
        oninput : e => this.setState({ text : e.target.value }),
      }),
    ]
  }

  onSubmit = async e => {
    e.preventDefault()
    this.setState({ busy : true })
    await api.createItem({
      text : this.state.text.trim(),
      completed : false,
    })
    this.setState({ text : '', busy : false })
    this._input.focus()
  }
}
