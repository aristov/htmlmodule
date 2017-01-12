const { a, abbr, body, h1, head, header,
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
                ' to update the nested document. ',
                'Document structure is placed behind the ',
                a({ href : '#markuptoggle', children : 'markup button' }),
                '.'
            ]))
        ]),
        nav([
            h1('Examples'),
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
            section([
                h1('Snippets'),
                ul([
                    li(a({
                        href : '#helloworld',
                        onclick,
                        children : 'Hello world!'
                    })),
                    li(a({
                        href : '#websearch',
                        onclick,
                        children : 'Web search'
                    })),
                ]),
            ]),
            section([
                h1('Templates'),
                ul([
                    li(a({
                        href : '#blank',
                        onclick,
                        children : 'Blank snippet'
                    })),
                    li([
                        'Predefined variables: ',
                        a({
                            href : '#predefline',
                            onclick,
                            children : 'short'
                        }),
                        ', ',
                        a({
                            href : '#predef',
                            onclick,
                            children : 'detailed'
                        }),
                    ])
                ])
            ]),
        ]),
        nav([
            h1('Documentation'),
            ul([
                li(a({
                    href : 'dist/api/identifiers.html',
                    target : '_blank',
                    rel : 'help',
                    children : [abbr({
                        title : 'Application programming interface',
                        children : 'API'
                    }), ' reference']
                })),
                li(a({
                    href : 'dist/docs/spec.html',
                    target : '_blank',
                    children : 'Spec suite'
                })),
                li(a({
                    href : 'dist/coverage/chrome/lcov-report/',
                    target : '_blank',
                    children : 'Coverage report'
                })),
            ])
        ]),
        nav([
            h1('Source'),
            ul([
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
        script({ src : 'docs/data/metadata.js' }),
        link({ rel : 'stylesheet', href : 'docs/data/index.css' })
    ]
})

function onclick() {
    setTimeout(() => parent.location.reload(), 10)
}
