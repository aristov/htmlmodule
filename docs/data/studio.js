const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

let layout = pre()

fetch('/htmlmodule/docs/data/studio.txt')
    .then(res => res.text())
    .then(res => layout.textContent = res)

document.body = body([
    header([
        h1({
            title : 'Музыкальная студия',
            children : 'Фьюжн'
        }),
        address({
            title : 'Контактные телефоны',
            className : 'phonecontact dim',
            children : ul([
                li('+7 926 602 2587'),
                li('+7 916 56 808 56')
            ])
        }),
    ]),
    main([
        address([
            p(a({
                href : 'https://yandex.ru/maps/-/CZHMuBJ8',
                title : 'Адрес студии',
                target : '_blank',
                children : 'Москва, 2-я Звенигородская улица, дом 13, строение 17'
            })),
            details({
                open : true,
                style : { padding : '10px 0 20px' },
                children : [
                    summary({
                        className : 'dim',
                        innerHTML : 'Метро &laquo;Улица 1905 года&raquo;'
                    }),
                    div({
                        style : { padding : '10px 0 0' },
                        children : a({
                            href : 'https://yandex.ru/maps/?um=mymaps%3A4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;source=constructorStatic',
                            target : '_blank',
                            children : img({
                                src : 'https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=600&amp;height=450&amp;lang=ru_RU&amp;sourceType=mymaps',
                                alt : 'Путь от метро до студии',
                                style : { border : '0' }
                            })

                        })
                    })
                ]
            }),
        ])
    ]),
    0 && section([
        details({
            open : true,
            style : '',
            children : [
                summary('Пространство студии'),
                div({
                    className : 'layoutart',
                    children : figure(layout)
                }),
            ]
        })
    ]),
    footer({
        className : 'contentinfo',
        children : [
            small({
                title : 'Время работы студии',
                className : 'dim',
                innerHTML : [
                    '&#128338;',
                    '&nbsp;&nbsp;&nbsp;',
                    '<time>07:00</time>',
                    '&nbsp;&mdash;&nbsp;',
                    '<time>02:00</time>'
                ].join('')
            }),
            address(small(a({
                href : 'mailto:vv.aristov@gmail.com',
                className : 'dim',
                innerHTML : '&copy; pypik'
            })))
        ]
    }),
    link({
        rel : 'stylesheet',
        href : '/htmlmodule/docs/data/studio.css'
    })
])
