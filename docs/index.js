import { TodoApp } from './TodoApp'

const render = app => {
  app?.destroy()
  return TodoApp.render({}, document.getElementById('app'))
}

let app = render()

if(module.hot) {
  module.hot.accept(['./TodoApp'], () => app = render(app))
}
