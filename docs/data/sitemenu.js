if(!document.getElementById('sitemenu')) {
    const { details, summary, nav, p, a, ul, li, abbr } = htmlmodule

    const sitemenu = details({
        id : 'sitemenu',
        onclick : ({ target }) => {
            if(target.href) sitemenu.open = false
        },
        children : [
            summary('menu'),
            nav([
                p(a({ href : '#index', children : 'Index' })),
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
            ])
        ]
    })
    const fragment = document.createDocumentFragment()
    fragment.append(
        document.createComment('-------------------- sitemenu.js [start] --------------------'),
        sitemenu.node,
        document.createComment('-------------------- sitemenu.js [end] ----------------------'))
    document.documentElement.append(fragment)
}
