{
    const { head, base, title, link, script, style, meta } = htmlmodule

    const METADATA_ID = 'metadata'
    let metadata = document.getElementById(METADATA_ID)

    if(!metadata) {
        metadata = document.createDocumentFragment()
        metadata.append(
            document.createComment('-------------------- metadata.js [start] --------------------'),
            head({
                id : METADATA_ID,
                children : [
                    meta({ attrset : { charset : 'utf-8' } }),
                    title('htmlmodule homepage'),
                    base({ target : '_top' }),
                    link({ rel : 'stylesheet', href : 'docs/data/sitemenu.css' }),
                    style([
                        'abbr { cursor: help }',
                        'a[href][rel~=external]:not(:active) { color: #050 }'
                    ]),
                ]
            }),
            document.createComment('-------------------- metadata.js [end] ----------------------'))
        document.head.replaceWith(metadata)
    }

    const SITEMENUJS_ID = 'sitemenu_js'
    let sitemenujs = document.getElementById(SITEMENUJS_ID)

    if(!sitemenujs) sitemenujs = script({
        id : SITEMENUJS_ID,
        src : 'docs/data/sitemenu.js'
    })
    document.body.append(sitemenujs)

    document.currentScript.remove()
}
