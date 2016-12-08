const { head, body, p, script } = window.htmlmodule

const metadata = head(script({ src : 'docs/data/sitemenu.js' }))

const root = body(p('Hello world!'))

document.head.replaceWith(metadata)
document.body.replaceWith(root)
