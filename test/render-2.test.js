const test = require('ava')
const { document } = require('xwindow')
const { HtmlBody, HtmlH1 } = require('..')

test('test #1', t => {
  class App extends HtmlBody
  {
    static class = 'App'
  }

  const doc = document.implementation.createHTMLDocument('test')
  doc.body.innerHTML = '<script></script>'

  t.is(doc.body.outerHTML, '<body><script></script></body>')

  const elem = App.render({
    node : doc.body,
    children : new HtmlH1('Hello world!'),
  })

  t.is(elem.node, doc.body)
  t.is(elem.toString(), '<body class="App"><h1>Hello world!</h1></body>')
})

test('test #2', t => {
  class App extends HtmlBody
  {
    static class = 'App'

    render() {
      this.innerHTML = '<h1>Hello world!</h1>'
    }
  }

  const doc = document.implementation.createHTMLDocument('test')
  const elem = App.render({ node : doc.body })

  t.is(elem.node, doc.body)
  t.is(elem.toString(), '<body class="App"><h1>Hello world!</h1></body>')
})
