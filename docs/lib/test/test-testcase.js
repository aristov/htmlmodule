export default [

    ({ fieldset, legend, input }) => fieldset([
        legend('Authorization'),
        input({ placeholder : 'login', style : { marginRight : '5px' } }),
        input({ type : 'password', placeholder : 'password' })
    ]),

    ({ article, h4, img, audio, video }) => article({
        title : 'Media',
        children : [
            h4('Image media'),
            img({
                src : 'https://ru.gravatar.com/userimage/52340111/ab1960afc0c60ebb85f9c7ea8ab66514.jpg?size=200',
                alt : 'Crazy PiPi!'
            }),
            h4('Audio media'),
            audio({
                controls : true,
                src : 'https://upload.wikimedia.org/wikipedia/commons/0/05/Beep-09.ogg'
            }),
            h4('Video media'),
            video({
                controls : true,
                width : '200',
                src : 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Video_Vortex_-_Open_Beelden_-_70605.ogv'
            })
        ]
    }),

    ({ header, nav, a, ul, li }) => header(nav(ul([
        li(a({
            href : '/home.html',
            textContent : 'Go home'
        })),
        li(a({
            href : 'http://github.com/aristov',
            textContent : 'Github page'
        })),
        li(a({
            href : 'mailto:vv.aristov@gmail.com',
            textContent : 'Contact me'
        }))
    ]))),

    ({ div, ul, li, bdi }) => div({
        children : ul([
            li(['User ', bdi('jcranmer'), ': 12 posts.']),
            li(['User ', bdi('hober'), ': 5 posts.']),
            li(['User ', bdi('إيان'), ': 3 posts.'])
        ])
    }),

    ({ div, bdo }) => {
        const children = 'АРОЗАУПАЛА';
        return div({
            children: [
                children,
                'Н',
                bdo({
                    dir: 'rtl',
                    children
                })
            ]
        })
    },

    ({ fieldset, legend, button, br, input, output }) => fieldset([
        legend('Event handlers'),
        button({
            style : { marginRight : '10px' },
            onclick : ({
                type,
                target : { tagName },
                constructor : { name }
            }) => alert([tagName, type, name, 'handler!'].join(' ')),
            textContent : 'Show me alert, please...'
        }),
        button({
            style : { marginRight : '10px' },
            onfocus : ({ target }) => target.textContent = 'Focused!',
            onblur : ({ target }) => target.textContent = 'Focus wait...',
            textContent : 'Focus wait...'
        }),
        input({
            style : { marginRight : '10px' },
            placeholder : 'text input char counter',
            oninput : ({ target }) => {
                target.nextElementSibling.value = target.value.length;
            }
        }),
        output({ value : '0' })
    ]),

    ({ footer, address, small }) => footer([
        address('vv.aristov@gmail.com'),
        small('@ All rights free')
    ]),

    ({ main, sup, sub, i, strong }) => main([
        'Here comes ',
        sup('supertext'),
        ' and ',
        sub('subtext'),
        '. Later they are followed by ',
        i('alternative voice'),
        ' and ',
        strong('important!')
    ]),

    ({ dl, dt, dd, abbr, ins, del, b, s, em }) => dl([
        dt('abbreviations'),
        dd(abbr('XML, HTML, DOM, WAI-ARIA, RDF, OWL')),
        dt('edits'),
        dd([ins('inserted'), ' and ', del('deleted'), ' text']),
        dt('reywords'),
        dd(b('var, function, export, const')),
        dt('other'),
        dd([s('don\'t stroke me!'), ' + ', em('emphasize!')])
    ]),

    ({ aside }) => aside('Your advert may be here!'),

    ({ article, h2, address }) => article({
        className : 'vcard',
        children : [
            h2({ className : 'fn', textContent : 'Vyacheslav Aristov' }),
            address({ className : 'email', textContent : 'vv.aristov@gmail.com' })
        ]
    }),

    ({ style }) => style({
        id : 'greenstyle',
        textContent : '#greenstyle { display: inline-block; color: green; font-family: monospace }'
    }),

    ({ script }) => script(
        'Object.assign(' +
            'document.currentScript.style, ' +
            '{ display: "block", color: "blue", fontFamily : "monospace" ' +
        '})'),

    ({ pre }) => pre(
`preformatted text
line break 
    — yet another line break with tab
  
  <>&`
    ),

    ({ blockquote }) => blockquote({
        cite : 'https://html.spec.whatwg.org/multipage/semantics.html#the-blockquote-element',
        textContent : 'The blockquote element represents a section that is quoted from another source.'
    }),

    ({ span }) => span('span — the base html element; text wrapper; no semantics, no default style'),

    ({ div }) => div([
        'div — like span has no semantics, but',
        div('div has default `display: block` style')
    ]),

    ({ p, br }) => p(['b', br(), 'r']),

    ({ p, hr }) => p([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        hr(),
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]),

    ({ button }) => button('Push my button'),

    ({ form, label, input, textarea, span }) => form({
        style : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'space-between',
            height: '200px'
        },
        children : [
            label([
                'Text input ',
                input({ placeholder : 'Fill me' })
            ]),
            label([
                input({ type : 'checkbox' }),
                ' Simple checkbox'
            ]),
            label([
                input({ type : 'checkbox', checked : true }),
                ' Checked checkbox'
            ]),
            label([
                input({ type : 'checkbox', attrset : { checked : '' } }),
                ' Initially checked checkbox'
            ]),
            label([
                input({ type : 'checkbox', indeterminate : true }),
                ' Indeterminate checkbox'
            ]),
            span([
                label([
                    input({
                        type : 'radio',
                        name : 'chooseproglangradio',
                        value : 'html'
                    }),
                    ' HTML '
                ]),
                label([
                    input({
                        type : 'radio',
                        name : 'chooseproglangradio',
                        value : 'xml'
                    }),
                    ' XML'
                ])
            ]),
            input({ type : 'reset', style : { margin : '0 auto 0 0' } })
        ]
    }),

    ({ form, label, select, option, br }) => form([
        label([
            'Select technology ',
            select([
                option('XML'),
                option('HTML'),
                option({ selected : true, textContent : 'WAI-ARIA' }),
                option('RDFS'),
                option('OWL'),
                option('SGML'),
                option('CSS')
            ])
        ]),
        br(),
        label([
            'Select technology stack',
            br(),
            select({
                multiple : true,
                children : [
                    option('XML'),
                    option({
                        attrset : { selected : '' },
                        textContent : 'HTML'
                    }),
                    option('WAI-ARIA'),
                    option('RDFS'),
                    option('OWL'),
                    option('SGML'),
                    option('CSS')
                ]})
        ]),
        br()
    ]),

    ({ form, input, button }) => form({
        style : { whiteSpace : 'nowrap' },
        children : [
            input({
                name : 'query',
                placeholder : 'type your request',
                type : 'search',
                style : { marginRight : '5px' }
            }),
            button('search')
        ]
    }),

    ({ dialog }) => dialog({
        open : true,
        style : { position : 'relative', display: 'block' },
        textContent : 'Hello world!'
    }),

    ({ iframe, dialog, p, button, script }) => {
        const onclick = 'event.target.parentElement.close()';
        const srcdom = dialog([
            p('Close dialog?'),
            button({
                attrset : { onclick },
                children : 'Ok'
            }),
            ' ',
            button('Cancel')
        ]);
        const context = iframe({
            width: '100%',
            height: '50%',
            style : { boxSizing : 'border-box' },
            onmouseover : () => {
                context.contentDocument.querySelector('dialog').showModal()
            },
            srcdoc : srcdom.outerHTML
        });
        return context;
    },

    ({ table, caption, thead, tr, th, abbr, tbody, code, td }) => table([
        caption('Web technology comparison'),
        thead(tr([ th(abbr('HTML')), th(abbr('ARIA')) ])),
        tbody([
            [code('tagName'), code('role')],
            [code('hidden'), code('aria-hidden')],
            [code('title'), code('aria-label')]
        ].map(([xml, html]) => tr([ td(xml), td(html) ])))
    ]),

    ({ hgroup, h1, h2, h3, h4, h5, h6 }) => hgroup([
        h1('First level heading'),
        h2('Second level heading'),
        h3('Third level heading'),
        h4('Fourth level heding'),
        h5('Fifth level heding'),
        h6('Sixth level heding in group')
    ]),

    ({ details, summary, code, em, del, dfn }) => details([
        summary('Show details'),
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        code('export const code = init => instance.createElement(\'code\', init);'),
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dfn('Instance.js — simple and powerfull DOM Element interface')
    ]),

    ({ article, section, ruby, rt, rp }) => article({
        title : 'Ruby annotations',
        children : [
            section([
                ruby(['君', rt('くん')]),
                ruby(['子', rt('し')]),
                'は',
                ruby(['和', rt('わ')]),
                'して',
                ruby(['同', rt('どう')]),
                'ぜず。'
            ]),
            section(ruby(['漢', rp(' ('), rt('かん'), rp(')'), '字', rp(' ('), rt('じ'), rp(')')]))
        ]
    }),

    ({ article, ul, li, ol, dl, dt, dd }) => article({
        title : 'Various lists',
        children : [
            ul([
                li('Ampeg'),
                li('Fender'),
                li('SMB Effects')
            ]),
            ol([
                li('Amsterdam'),
                li('New York'),
                li('Moscow')
            ]),
            dl([
                dt('DOM'),
                dd('Document object model'),
                dt('XML'),
                dd('Extensible markup language'),
                dt('HTML'),
                dd('Hyper text markup language'),
                dt('ARIAML'),
                dd('Accessible rich internet applications markup language')
            ])
        ]
    }),

    ({ progress }) => progress({ max : '100', value : '70' })
];
