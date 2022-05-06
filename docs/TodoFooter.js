import { HtmlFooter, HtmlSpan, HtmlStrong, HtmlUl, HtmlLi, HtmlA, HtmlButton } from '../lib'
import api from './api'

export class TodoFooter extends HtmlFooter
{
  className = 'footer'

  render() {
    const items = this.props.items
    const itemsLeft = items.filter(item => !item.completed)
    return [
      new HtmlSpan({
        class : 'todo-count',
        children : [
          new HtmlStrong(itemsLeft.length),
          itemsLeft.length === 1 ? ' item left' : ' items left',
        ],
      }),
      new HtmlUl({
        class : 'filters',
        children : [
          new HtmlLi(new HtmlA({
            href : '#/',
            class : { selected : location.hash === '#/' },
            children : 'All',
          })),
          new HtmlLi(new HtmlA({
            href : '#/active',
            class : { selected : location.hash === '#/active' },
            children : 'Active',
          })),
          new HtmlLi(new HtmlA({
            href : '#/completed',
            class : { selected : location.hash === '#/completed' },
            children : 'Completed',
          })),
        ],
      }),
      !!(items.length - itemsLeft.length) && new HtmlButton({
        class : 'clear-completed',
        children : 'Clear completed',
        onclick : () => api.deleteItems(
          items.filter(item => item.completed).map(item => item.id),
        ),
      }),
    ]
  }
}
