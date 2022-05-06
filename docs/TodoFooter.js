import { HtmlFooter, HtmlSpan, HtmlStrong, HtmlUl, HtmlLi, HtmlA, HtmlButton } from '../lib'

export class TodoFooter extends HtmlFooter
{
  setClassName() {
    this.className = 'footer'
  }

  render() {
    return [
      new HtmlSpan({
        class : 'todo-count',
        children : [
          new HtmlStrong(0),
          ' item left',
        ],
      }),
      new HtmlUl({
        class : 'filters',
        children : [
          new HtmlLi(new HtmlA({
            href : '#/',
            class : { selected : true },
            children : 'All',
          })),
          new HtmlLi(new HtmlA({
            href : '#/active',
            class : { selected : false },
            children : 'Active',
          })),
          new HtmlLi(new HtmlA({
            href : '#/completed',
            class : { selected : false },
            children : 'Completed',
          })),
        ],
      }),
      new HtmlButton({
        class : 'clear-completed',
        children : 'Clear completed',
      }),
    ]
  }
}
