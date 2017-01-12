const {
    // Special meaning
    a, abbr, cite, dfn, q, s, small, u,
    // todo: mark
    // Emphasis
    b, em, i, strong,
    // Computers
    code, kbd, samp, variable,
    // Subscript and superscript
    sub, sup,
    // Bidirectional
    bdi, bdo,
    // Ruby annotations
    ruby, rt, rp,
    // Generic phrasing container
    span,
    // Line break
    br, wbr,
    // Edits
    ins, del,
} = htmlmodule

const { article, div, body, h1,
    li, p, script, section, style, ul } = htmlmodule

const children = 'АРОЗАУПАЛА'

const abbrlist = {
    DOM : 'Document object model',
    XML : 'Extensible markup language',
    SVG : 'Scalable vector graphics',
    IDL : 'Interface definition language',
    HTML : 'Hyper text markup language',
    'WAI-ARIA' : 'Web accessibility initiative — ' +
    'Accessible rich internet applications',
    HTTP : 'Hyper text trasform protocol',
}

const root = article([
    h1([
        a({ href : '#', children : 'Index' }),
        ' → Text-level semantics'
    ]),
    section([
        h1('Special meaning'),
        section([
            h1('Hyperlinks'),
            p(a({
                href : '//html.spec.whatwg.org',
                children : 'HTML Standard'
            })),
            p(a({
                href : '//dom.spec.whatwg.org',
                children : 'DOM Standard'
            })),
            p(a({
                href : '//www.w3.org/TR/wai-aria-1.1',
                children : 'WAI-ARIA specification'
            })),
        ]),
        section([
            h1('Abbreviations'),
            p([
                abbr({
                    title : 'World wide web',
                    children : 'WWW'
                }),
                ' is full of abbreviations: ',
                Object.keys(abbrlist).map((key, i) => [
                    Boolean(i) && ', ',
                    abbr({
                        title : abbrlist[key],
                        children : key
                    })
                ])
            ])
        ]),
        section([
            h1('Cite and quotations'),
            p([
                'The ', cite('HTML Standard'), ' says: ',
                q({
                    cite : 'https://html.spec.whatwg.org/#the-q-element',
                    children : ['the use of ', b('q'), ' elements to mark up ' +
                    'quotations is entirely optional']
                }),
                ' therefore "using explicit quotation punctuation ' +
                'without ', b('q'), ' elements is just as correct".'
            ])
        ]),
        section([
            h1('Inaccurate text'),
            p(['Normal text ', s('inaccurate text'), ' normal text'])
        ]),
        section([
            h1('Defining instance'),
            p([
                'The ', dfn('dfn'), ' element represents ' +
                'the defining instance of a term. ' +
                'The paragraph, description list group, ' +
                'Or section that is the nearest ancestor ' +
                'Of the ', dfn('dfn'), ' element must also contain ' +
                'the definition(s) for the term given ' +
                'by the ', dfn('dfn'), ' element.'
            ])
        ]),
        section([
            h1('Side comment'),
            p(small([
                'The MIT License (MIT) ',
                span({
                    style : {
                        display : 'inline-block',
                        transform : 'scaleX(-1)'
                    },
                    children : '©'
                }),
                ' 2016 Vyacheslav Aristov'
            ]))
        ]),
        section([
            h1('Misspelt text'),
            p(['Normal text ', u('mispselt tetx'), ' normal text'])
        ])
    ]),
    section([
        h1('Emphasis'),
        section([
            h1('High importance'),
            p(['Normal text ', strong('important text'), ' normal text.'])
        ]),
        section([
            h1('Keywords'),
            p(['Normal text ', b('keyword'), ' normal text'])
        ]),
        section([
            h1('Alternative voice'),
            p(['Normal text ', i('alternative voice'), ' normal text'])
        ]),
        section([
            h1('Stress emphasis'),
            p(['Normal text ', em('stress emphasis'), ' normal text'])
        ]),
    ]),
    section([
        h1('Math and computers'),
        section([
            h1('Variables, subscript and superscript'),
            p([variable('E'), ' = ', variable('m'), variable('c'), sup('2')]),
            p([
                'f(', variable('x'), ', ', variable('n'), ')',
                ' = ',
                'log', sub('4'), variable('x'), sup(variable('n'))
            ]),
        ]),
        section([
            h1('Variables and computer code'),
            p(code([
                'import { ', variable('code'), ' } from \'htmlmodule\''
            ]))
        ]),
        section([
            h1('User input'),
            p([
                'Type ', kbd('npm test'),
                ' and press the ', kbd('Enter'), ' key.'
            ])
        ]),
        section([
            h1('Computer output'),
            p(samp('Done. Your build exited with 0.'))
        ])
    ]),
    section([
        h1('Bidirectional'),
        section([
            h1('Isolation'),
            ul([
                li(['User ',
                    bdi('jcranmer'),
                    ': 12 posts.']),
                li(['User ',
                    bdi('hober'),
                    ': 5 posts.']),
                li(['User ',
                    bdi('إيان'),
                    ': 3 posts.'])
            ])
        ]),
        section([
            h1('Formatting'),
            p([
                children,
                'Н',
                bdo({ dir : 'rtl', children })
            ]),
        ]),
    ]),
    section([
        h1('Ruby annotations'),
        p([
            ruby(['君', rt('くん')]),
            ruby(['子', rt('し')]), 'は',
            ruby(['和', rt('わ')]), 'して',
            ruby(['同', rt('どう')]), 'ぜず。'
        ]),
        p([
            ruby([
                '漢', rp(' ('), rt('かん'), rp(')'),
                '字', rp(' ('), rt('じ'), rp(')')
            ]),
        ]),
        p([
            ruby([
                '♥',
                rp(': '), rt('Heart'),
                rt({ lang : 'ru', children : 'Сердце' }), rp('.'),
                '☘',
                rp(': '), rt('Shamrock'),
                rt({ lang : 'ru', children : 'Клевер' }), rp('.'),
                '✶',
                rp(': '), rt('Star'),
                rt({ lang : 'ru', children : 'Звезда' }), rp('.'),
            ])
        ]),
    ]),
    section([
        h1('Generic phrasing container'),
        p(['Normal text ', span({
            style : { color : 'cyan', fontFamily : 'sans-serif' },
            children : 'styled text'
        }), ' normal text']),
        p(['Normal text ', span({
            lang : 'ru',
            children : 'текст на русском языке'
        }), ' normal text']),
        p(['Normal text ', span({
            tabIndex : 0,
            children : 'focusable text'
        }), ' normal text'])
    ]),
    section([
        h1('Line break'),
        p(['b', br(), 'r']),
        section([
            h1('Line breaking opportunity'),
            p(Array.from(Array(15)).map(() => [
                'Line', wbr(),
                'Breaking', wbr(),
                'Opportunity', wbr()
            ]))
        ])
    ]),
    div([
        h1('Edits'),
        p([
            del('DOM is slow and complicated.'),
            ' ',
            ins('DOM is instant and clear.'),
        ]),
    ]),
    script({ src : 'docs/data/metadata.js' }),
    style('article > section { border-top : 1px solid #ccc }')
])

document.body = body(root)
