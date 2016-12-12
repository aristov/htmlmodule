const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

function time(init) {
    return htmldom('time', init)
}

document.body = body([
    h1('Фьюжн'),
    address([
        ul([li('+7 926 602 2587'), li('+7 916 56 808 56')]),
        p(a({
            href : 'https://yandex.ru/maps/-/CZHMuBJ8',
            target : '_blank',
            children : '2-я Звенигородская улица, дом 13, строение 17'
        })),
        p(details({
            open : true,
            children : [
                summary('Станция метро "Улица 1905 года"'),
                span({ innerHTML : '<a href="https://yandex.ru/maps/?um=mymaps%3A4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=600&amp;height=450&amp;lang=ru_RU&amp;sourceType=mymaps" alt="" style="border: 0;" /></a>' })
            ]
        })),
    ]),
    time('07:00 — 02:00'),
    hr(),
    footer(address(small(a({
        href : 'mailto:vv.aristov@gmail.com',
        children : 'vv.aristov@gmail.com'
    })))),
    style(`
        
    `)
])
