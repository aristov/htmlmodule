const { a, body, ul, li, nav, h1, abbr, section, style, script } = htmlmodule

// Generate a simple hyperlink to use it,
// as a pattern for a regular expression replacement
const apilink = a({
    href : 'dist/api/function/#static-function-$1',
    target : '_blank',
    children : '$1' // simple and well-known regexp magic
})

/**
 * Gefine a template function that builds a list
 * of links from the given list of short descriptions
 * @param items
 * @returns {*}
 */
function apilist(items) {
    return ul(items.map(item => li({
        // use innerHTML to generate nested links
        innerHTML : item.replace(/(\w+)/g, apilink.outerHTML)
    })))
}

// Assemble the API reference, using just defined function
const root = nav([
    h1([
        a({ href : '#', children : 'Index' }),
        ' → The ',
        abbr({
            title : 'Application programming interface',
            children : 'API'
        }),
        ' of htmlmodule'
    ]),
    section([
        h1('Core'),
        apilist([
            'htmldom'
        ]),
    ]),
    section([
        h1('Document root and metadata'),
        apilist([
            'html + head + body',
            'head + title + [base] + [link] + [meta] + ' +
            '[style] + [script] + [noscript]',
            'link',
            'style',
        ]),
    ]),
    section([
        h1('Sections'),
        apilist([
            'body',
            'article',
            'section',
            'nav + [a] + [area]',
            'aside',
            'h1, h2, h3, h4, h5, h6',
            'hgroup + [h1] + [h2] + [h3] + [h4] + [h5] + [h6]',
            'header',
            'footer',
            'address',
        ]),
    ]),
    section([
        h1('Grouping content'),
        apilist([
            'p',
            'hr',
            'pre',
            'blockquote',
            'ol + li',
            'ul + li',
            'dl + dt + dd',
            'figure + [figcaption]',
            'main',
            'div',
        ]),
    ]),
    section([
        h1('Text-level semantics'),
        apilist([
            'a, em, strong, small, s, cite, q, dfn, abbr',
            'ruby + rt + [rp]',
            'code, variable, samp, kbd',
            'sub, sup',
            'i, b, u, mark',
            'bdi, bdo',
            'span',
            'br, wbr',
        ]),
    ]),
    section([
        h1('Edits'),
        apilist([
            'ins, del'
        ]),
    ]),
    section([
        h1('Embedded content'),
        apilist([
            'img',
            'picture + [source] + img',
            'iframe',
            'embed',
            'object + [param]',
            'video + [source] + [track]',
            'audio + [source] + [track]',
            'map + area',
        ]),
    ]),
    section([
        h1('Tabular data'),
        apilist([
            'table + [caption] + [colgroup] + [col] + ' +
            '[tbody] + [thead] + [tfoot] + tr + td + [th]'
        ]),
    ]),
    section([
        h1('Forms'),
        apilist([
            'form + [fieldset] + [input] + ' +
            '[select] + [textarea] + [button]',
            'label + [input] + [select] + [textarea]',
            'input',
            'button',
            'select + [optgroup] + option',
            'datalist + option',
            'textarea',
            'progress',
            'fieldset + [legend] + [input] + ' +
            '[select] + [textarea] + [button]',
        ]),
    ]),
    section([
        h1('Interactive elements'),
        apilist([
            'details + [summary]'
        ]),
    ]),
    section([
        h1('Scripting'),
        apilist([
            'script',
            'noscript',
            'canvas',
        ]),
    ]),
    style([
        ':link:not(:hover):not(:focus) { text-decoration: none }'
    ]),
    script({ src : 'docs/data/metadata.js' })
])

document.body.replaceWith(body(root))
