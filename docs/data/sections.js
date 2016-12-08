const {
    // Generic
    article, section, header, footer,
    // Specialized
    address, aside, nav,
    // Headings
    h1, h2, h3, h4, h5, h6, hgroup,
} = htmlmodule

const { a, body, hr, p, script } = htmlmodule

/**
 * @param event
 */
function onclick(event) {
    event.preventDefault()
    const target = event.target
    if(target.hash) {
        const name = target.hash.slice(1)
        const document = target.ownerDocument
        const node = document.querySelector(name)
        if(node) {
            node.tabIndex = -1
            node.focus()
            if(!node.onblur) node.onblur = () => {
                node.removeAttribute('tabindex')
            }
        }
    }
}

const text = [
    'This [article] element contains ' +
    'the [header], [section], [aside] and [footer] elements.',

    'The [header] element contains the main [h1] heading ' +
    'and the [nav] with this introductional hypertext paragraph.',

    'The [section] element contains just a self explanation ' +
    'with a heading.',

    'The [aside] element contains the [hgroup] with various headings.',

    'The [footer] element contains the [address] ' +
    'and a modification date of the page.'
].join(' ')

const ELEMENT_RE = /\[(\w+)]/g
const anchor = a({ href : '#$1', children : '$1' })

const root = article([
    header([
        h1([
            a({ href : '#', children : 'Index' }),
            ' → Sections'
        ]),
        nav({
            onclick,
            children : p({
                innerHTML : text.replace(ELEMENT_RE, anchor.outerHTML)
            })
        })
    ]),
    hr(),
    section([
        h1('Section'),
        p('Generic document or application section.')
    ]),
    hr(),
    aside(((...hh) => {
        const group = [...hh.slice(1).reverse(), ...hh]
        return hgroup(group.map(hx => hx('HTML is amazing')))
    })(h2, h3, h4, h5, h6)),
    hr(),
    footer([
        p('Last modified: ' + new Date),
        address([
            'Author: ',
            a({
                href : 'mailto:vv.aristov@gmail.com',
                rel : 'author',
                children : 'vv.aristov@gmail.com'
            })
        ])
    ]),
    script({ src : 'docs/data/metadata.js' })
])

document.body.replaceWith(body(root))
