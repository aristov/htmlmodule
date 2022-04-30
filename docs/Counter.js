import { HtmlDiv, HtmlButton, HtmlSpan } from '../lib'

export class Counter extends HtmlDiv
{
  build() {
    return [
      new HtmlButton({
        text : '−',
        onclick : () => this._span.text--
      }),
      this._span = new HtmlSpan(0),
      new HtmlButton({
        text : '+',
        onclick : () => this._span.text++
      }),
    ]
  }
}
