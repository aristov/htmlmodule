const test = require('ava')

test('htmlmodule.js', t => {
  const { HtmlDiv } = require('../dist/htmlmodule.js')
  const result = HtmlDiv.render('test')

  t.is(result.toString(), '<div>test</div>')
})

test('htmlmodule.min.js', t => {
  const { HtmlDiv } = require('../dist/htmlmodule.min.js')
  const result = HtmlDiv.render('test')

  t.is(result.toString(), '<div>test</div>')
})
