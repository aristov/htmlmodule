import { createRequire } from 'node:module'
import fs from 'node:fs'
import test from 'ava'

const require = createRequire(import.meta.url)
const _require = filename => {
  const pathname = require.resolve(filename)
  const content = fs.readFileSync(pathname, 'utf-8')
  const exports = {}
  const module = { exports }
  eval(content)
  return module.exports
}

test('htmlmodule.js', t => {
  const { HtmlDiv } = _require('../dist/htmlmodule.js')
  const result = HtmlDiv.render('test')

  t.is(result.toString(), '<div>test</div>')
})

test('htmlmodule.min.js', t => {
  const { HtmlDiv } = _require('../dist/htmlmodule.min.js')
  const result = HtmlDiv.render('test')

  t.is(result.toString(), '<div>test</div>')
})
