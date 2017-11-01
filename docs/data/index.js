const { a, abbr, body, footer, h1, head, header,
    li, link, nav, p, script, section, ul } = htmlmodule

document.body = body({
    id : 'index',
    children : [
        header([
            h1('Welcome!'),
            p([
                'You are inside the ',
                abbr({
                    title : 'read-eval-print-loop',
                    children : 'REPL'
                }),
                '-machine. It was assembled instantly by ',
                a({
                    href : 'https://npmjs.org/package/htmlmodule',
                    rel : 'external',
                    target : '_blank',
                    title : 'DOM assembler library',
                    children : 'htmlmodule'
                }),
                ' on the page load.'
            ]),
            nav(p([
                a({ href : '#codeinput', children : 'Edit the code' }),
                ' to update the nested document,',
                ' which structure is placed behind the ',
                a({ href : '#markuptoggle', children : 'markup button' }),
                '.'
            ])),
            p(['This simple website lives inside the iframe window.',
                ' It is written on JavaScript and htmlmodule.',
                ' Use this page or the sitemenu to navigate the subsections.',
                ' Those represent almost all kinds of HTML content' +
                ' and therefore htmlmodule APIs.']),
        ]),
        nav([
            section([
                h1('Elements by category'),
                ul([
                    li(a({
                        href : '#sections',
                        children : 'Sections'
                    })),
                    li(a({
                        href : '#grouping',
                        children : 'Grouping content'
                    })),
                    li(a({
                        href : '#textlevel',
                        children : 'Text level semantics'
                    })),
                    li(a({
                        href : '#forms',
                        children : 'Forms'
                    })),
                    li(a({
                        href : '#tabulardata',
                        children : 'Tabular data'
                    })),
                    li(a({
                        href : '#embedded',
                        children : 'Embedded content'
                    })),
                    li(a({
                        href : '#interscript',
                        children : 'Interactive and scripting'
                    })),
                    li(a({
                        href : '#metadata',
                        children : 'Metadata'
                    })),
                ]),
            ]),
            section([
                h1('Other examples'),
                ul([
                    li(a({
                        href : '#apinav',
                        children : 'API index'
                    })),
                    li(a({
                        href : '#eventhandlers',
                        children : 'Event handlers'
                    })),
                ]),
            ]),
            p('The following snippets start from a blank document.'),
            section([
                h1('Snippets'),
                ul([
                    li(a({
                        href : '#helloworld',
                        target : '_blank',
                        children : 'Hello world!'
                    })),
                    li(a({
                        href : '#websearch',
                        target : '_blank',
                        children : 'Web search'
                    })),
                ]),
            ]),
            section([
                h1('Templates'),
                ul([
                    li(a({
                        href : '#blank',
                        target : '_blank',
                        children : 'Blank snippet'
                    })),
                    li([
                        'Predefined variables: ',
                        a({
                            href : '#predefline',
                            target : '_blank',
                            children : 'short'
                        }),
                        ', ',
                        a({
                            href : '#predef',
                            target : '_blank',
                            children : 'detailed'
                        }),
                    ])
                ]),
            ]),
            p('That\'s all. If you know HTML DOM — you know htmlmodule.'),
        ]),
        footer([
            ul([
                li(a({
                    href : '../dist/api/identifiers.html',
                    target : '_blank',
                    rel : 'help',
                    children : [abbr({
                        title : 'Application programming interface',
                        children : 'API'
                    }), ' reference']
                })),
                li(a({
                    href : 'spec.html',
                    target : '_blank',
                    children : 'Spec suite'
                })),
                li(a({
                    href : 'https://npmjs.com/package/htmlmodule',
                    target : '_blank',
                    rel : 'external',
                    children : 'NPM module'
                })),
                li(a({
                    href : 'https://github.com/aristov/htmlmodule',
                    target : '_blank',
                    rel : 'external',
                    children : 'Github repo'
                })),
            ])
        ]),
        script({ src : 'data/metadata.js' })
    ]
}).node
