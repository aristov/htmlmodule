{
    const SITEMENU_ID = 'sitemenu'
    let sitemenu = document.getElementById(SITEMENU_ID)

    if(!sitemenu) {
        const { details, summary, nav, p, a, ul, li, abbr, link } = htmlmodule;

        sitemenu = details({
            id : SITEMENU_ID,
            children : [
                summary('menu'),
                nav([
                    p(a({ href : '#index', children : 'Index' })),
                    ul([
                        li(a({
                            href : '#sections',
                            target : '_top',
                            children : 'Sections'
                        })),
                        li(a({
                            href : '#grouping',
                            target : '_top',
                            children : 'Grouping content'
                        })),
                        li(a({
                            href : '#textlevel',
                            target : '_top',
                            children : 'Text level semantics'
                        })),
                        li(a({
                            href : '#forms',
                            target : '_top',
                            children : 'Forms'
                        })),
                        li(a({
                            href : '#tabulardata',
                            target : '_top',
                            children : 'Tabular data'
                        })),
                        li(a({
                            href : '#embedded',
                            target : '_top',
                            children : 'Embedded content'
                        })),
                    ]),
                    ul([
                        li(a({
                            href : '#apinav',
                            target : '_top',
                            children : 'API index'
                        })),
                        li(a({
                            href : '#eventhandlers',
                            target : '_top',
                            children : 'Event handlers'
                        })),
                    ]),
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
                    ]),
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
                ])
            ]
        })

        const stylesheet = link({ rel : 'stylesheet', href : 'docs/data/sitemenu.css' })

        document.body.append(sitemenu, stylesheet)
    }
}
