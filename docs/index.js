import { Counter } from './Counter'

function run() {
  Counter.__storage.get(document.body.querySelector('div'))?.destroy()
  new Counter({ parent : document.body })
}

run()

if(module.hot) {
  module.hot.accept(['./Counter'], run)
}
