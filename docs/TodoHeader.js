import { HtmlInput, HtmlH1, HtmlHeader } from '../lib'
import api from './api'

export class TodoHeader extends HtmlHeader
{
  state = { text : '', busy : false }

  className = 'header'

  render() {
    return [
      new HtmlH1('todos'),
      this._input = new HtmlInput({
        disabled : this.state.busy,
        required : true,
        value : this.state.text,
        class : 'new-todo',
        placeholder : 'What needs to be done?',
        autofocus : true,
        oninput : e => this.setState({ text : e.target.value }),
        onkeydown : e => {
          e.code === 'Enter' && this.onSubmit(e)
        },
      }),
    ]
  }

  onSubmit = async () => {
    const text = this.state.text.trim()
    if(!text) {
      return
    }
    this.setState({ busy : true })
    await api.createItem({
      text,
      completed : false,
    })
    this.setState({ text : '', busy : false })
    this._input.focus()
  }
}
