const {
    // Semantic groups
    blockquote, main, p,
    // Figure
    figure, figcaption,
    // Lists
    ul, ol, li, dl, dt, dd,
    // Preformatted text
    pre,
    // Dividers
    hr, div,
} = htmlmodule

const { a, article, b, body, h1, script, section } = htmlmodule

const root = article([
    h1([
        a({ href : '#', children : 'Index' }),
        ' → Grouping content'
    ]),
    section([
        h1('Blockquote'),
        blockquote({
            cite : 'https://html.spec.whatwg.org/' +
            'multipage/semantics.html#the-blockquote-element',
            children : ['The ', b('blockquote'), ' element represents ' +
            'a section that is quoted from another source.']
        }),
    ]),
    section([
        h1('Main content'),
        main('Container for the dominant contents of another element.'),
    ]),
    section([
        h1('Figure'),
        figure([
            figcaption('Image 1. Red square'),
            div({
                style : {
                    width : '200px',
                    height : '200px',
                    background : 'red'
                }
            })
        ]),
    ]),
    section([
        h1('Paragraph'),
        p(['The ', b('p'), ' element should not be used when a more ' +
        'specific element is more appropriate.']),
    ]),
    section([
        h1('Unordered list'),
        ul([
            li('Node'),
            li('Document'),
            li('DocumentFragment'),
            li('DocumentType'),
            li('CharacterData'),
            li('Text'),
            li('Comment'),
            li('CDATASection'),
            li('Element'),
        ])
    ]),
    section([
        h1('Ordered list'),
        ol([
            li('null'),
            li('Object'),
            li('EventTarget'),
            li('Node'),
            li('Element'),
            li('HTMLElement'),
            li('HTMLLIElement'),
        ]),
    ]),
    section([
        h1('Description list'),
        dl([
            dt(['The ', b('dl'), ' element']),
            dd('Association list consisting ' +
                'of zero or more name-value groups'),
            dt(['The ', b('dt'), ' element']),
            dd(['Legend for corresponding ', b('dd'), ' element(s)']),
            dt(['The ', b('dd'), ' element']),
            dd(['Content for corresponding ', b('dt'), ' element(s)']),
        ]),
    ]),
    section([
        h1('Preformatted text'),
        pre(
`_________________________________________________________
____________/          _/                      _/________
___________/_/_/    _/_/_/_/  _/_/_/  _/_/    _/_________
__________/    _/    _/      _/    _/    _/  _/__________
_________/    _/    _/      _/    _/    _/  _/___________
________/    _/      _/_/  _/    _/    _/  _/____________
_________________________________________________________`)
    ]),
    section([
        h1('Separator'),
        p('Paragraph before the separator.'),
        hr(),
        p('Paragraph after the separator.')
    ]),
    section([
        h1('Generic flow container'),
        div('Has no special meaning at all'),
        div({
            style : {
                display : 'flex',
                justifyContent : 'space-around',
                margin : '10px',
                padding : '5px',
                boxShadow : '0 0 1px 1px #bababa',
            },
            children : [
                div('Represents'),
                div('its'),
                div('children')
            ]
        }),
        div('Can be used to mark up semantics ' +
            'common to a group of consecutive elements'),
        dl([
            div([
                dt([b('div'), ' + ', b('dl')]),
                dd(['Can also be used in a ', b('dl'), ' element, ' +
                'wrapping groups of ', b('dt'), ' and ', b('dd'),
                    ' element'])
            ])
        ]),
        div({
            style : { marginBottom : '20px' },
            children : 'An element of last resort, ' +
            'for when no other element is suitable'
        })
    ]),
    script({ src : 'docs/data/metadata.js' })
])

document.body.replaceWith(body(root))
