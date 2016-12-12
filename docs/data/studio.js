const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

document.body = body([
    h1({
        title : 'Музыкальная студия',
        children : 'Фьюжн'
    }),
    address({
        style : { textAlign: 'right' },
        children : [
            ul({
                style : {
                    fontSize : '17px',
                    listStyle : 'none',
                    margin : '-20px 0'
                },
                children : [li('+7 926 602 2587'), li('+7 916 56 808 56')]
            }),
        ]
    }),
    main(p([
        details({
            open : true,
            style : '',
            children : [
                summary('Пространство студии'),
                div({
                    style : {
                        font : '10px monospace',
                        color : 'white',
                        background : '#307',
                        width : '600px',
                        textAlign : 'center'
                    },
                    children : figure(pre({
                        style : {
                            display : 'inline-block',
                            textAlign : 'left'
                        },
                        children : `
|_________________________________________________|
|                                                 |
|                                                 |
|          -=o                                    |
|          /                                      |
|         /|                                     
|          |                                       
|         /|\\                                      
|                                                 |
|                                                 |
|________________________    _____________________|
|                                                 |
|                                                 |
|       ____________________     _________________|
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|      |                  ||                      |
|                         ||                      |
|                         ||                      |
|__   _|__________________||______________________|
|      |                    ||                    |
|      |                    ||                    |
|      |                    ||                    |
|      |                    ||                    |
|      |                    ||--------------------|
|      |                    ||                    |
|      |                    ||                    |
|      |                    ||                    |
|      |_   _____________   ||                    |
|      |          |||||||   ||                    |
|                 ------|   |                     |
|__   _|________________|___|_____________________|
|                                                 |

`
                }))
                }),
            ]
        }),
        section([
            h1(span('Наш адрес:')),
            address([
                p(a({
                    href : 'https://yandex.ru/maps/-/CZHMuBJ8',
                    target : '_blank',
                    children : 'Москва, 2-я Звенигородская улица, дом 13, строение 17'
                })),
                p(details({
                    // open : true,
                    children : [
                        summary('Метро "Улица 1905 года"'),
                        div({
                            style : { margin : '10px 0' },
                            innerHTML : '<a href="https://yandex.ru/maps/?um=mymaps%3A4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=600&amp;height=450&amp;lang=ru_RU&amp;sourceType=mymaps" alt="" style="border: 0;" /></a>'
                        })
                    ]
                })),
            ])
        ]),
    ])),
    hr(),
    footer({
        style : {
            display : 'flex',
            justifyContent : 'space-between',
            paddingBottom : '30px',
        },
        children : [
            small(htmldom('time', {
                innerHTML : '&#x1f550;&nbsp;&nbsp;&nbsp;07:00 — 02:00'
            })),
            address(small(a({
                href : 'mailto:vv.aristov@gmail.com',
                innerHTML : '&copy; pypik'
            })))
        ]
    }),
    style([
        'body {' +
            'font: 20px Arial;' +
            'color: #555;' +
            'padding: 0 10px;' +
            'max-width: 600px;' +
            'margin: auto;' +
            'background: #fcfcfc }'
    ])
])
