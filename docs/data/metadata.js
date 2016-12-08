{
    const { head, base, title, link, script, style, meta } = htmlmodule

    const metadata = head([
        meta({ attrset : { charset : 'utf-8' } }),
        title('htmlmodule homepage'),
        base({ target : '_top' }),
        script({ src : 'docs/data/sitemenu.js' }),
        link({ rel : 'stylesheet', href : 'docs/data/common.css' }),
        style([
            'abbr { cursor: help }',
            'a[href][rel~=external]:not(:active) { color: #050 }'
        ]),
    ])
    document.head.replaceWith(metadata)
}
