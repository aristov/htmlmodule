const {
    a, abbr, body, h1, head, header,
    html, li, nav, p, script, ul
} = htmlmodule

document.body = body([
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
        p([
            'Current HTML document is nested inside iframe window. ',
            'The code editor on the left side of the page controls ',
            'representation of this document.'
        ])
    ]),
    nav([
        h1('Examples'),
        p('Elements by category:'),
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
        ]),
        p('Other examples:'),
        ul([
            li(a({
                href : '#apinav',
                children : 'API index'
            })),
            li(a({
                href : '#eventhandlers',
                children : 'Event handlers'
            })),
            li(a({
                href : '#websearch',
                children : 'Web search'
            })),
            li(a({
                href : '#helloworld',
                children : 'Hello world!'
            })),
            li(a({
                href : '#blank',
                children : 'Blank snippet'
            })),
            li(['Predefined variables: ', a({
                href : '#predef-block',
                children : 'detailed'
            }), ' / ', a({
                href : '#predef-line',
                children : 'short'
            })]),
            li(a({
                href : '#clear',
                children : 'Clear data and document'
            }))
        ])
    ]),
    nav([
        h1('Documentation'),
        ul([
            li(a({
                href : 'dist/api/',
                target : '_blank',
                rel : 'help',
                children : [abbr({
                    title : 'Application programming interface',
                    children : 'API'
                }), ' documentation']
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
        h1('Project'),
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
    script({ src : 'docs/data/metadata.js' })
])
