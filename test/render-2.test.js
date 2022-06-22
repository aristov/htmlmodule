const test = require('ava')
const { document } = require('xwindow')
const { HtmlBody, HtmlDiv } = require('..')

class App extends HtmlBody
{
}

test('test #1', t => {
  const doc = document.implementation.createHTMLDocument('test')
  doc.body.innerHTML = '<script></script>'

  t.is(doc.body.outerHTML, '<body><script></script></body>')

  const elem = App.render({
    node : doc.body,
    children : new HtmlDiv('Hello world!'),
  })

  t.is(elem.node, doc.body)
  t.is(elem.toString(), '<body class="App"><div>Hello world!</div></body>')
})
