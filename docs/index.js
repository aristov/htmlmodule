import { Counter } from './Counter'

const render = app => {
  app?.destroy()
  return Counter.render({}, document.body)
}

let app = render()

if(module.hot) {
  module.hot.accept(['./Counter'], () => app = render(app))
}
