const {
    // Document root and metadata
    html, head, base, title, link, style, meta,

    // Sections
    article, section, header, footer,
    address, aside, body, nav,
    h1, h2, h3, h4, h5, h6, hgroup,

    // Grouping
    blockquote, main, p,
    figure, figcaption,
    ul, ol, li, dl, dt, dd,
    pre,
    hr, div,

    // Text-level semantics
    a, abbr, cite, dfn, q, s, small, u, mark,
    b, em, i, strong,
    code, kbd, samp, variable,
    sub, sup,
    bdi, bdo,
    ruby, rt, rp,
    span,
    br, wbr,

    // Edits
    ins, del,

    // Embedded content
    img, audio, video, embed, iframe,
    map, area, object, param, picture, source, track,

    // Tabular data
    table, caption, col, colgroup,
    thead, tbody, tfoot, tr, th, td,

    // Forms
    form, fieldset, label, legend,
    input, textarea, select, option,
    button, progress,

    // Interactive content
    details, summary,

    // Scripting
    script, noscript, canvas,

    // Any element
    htmldom,
} = htmlmodule

document.body = body(/* your code */)
