const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

const layout = pre()

fetch('/htmlmodule/docs/data/studio.txt')
    .then(res => res.text())
    .then(res => layout.textContent = res)

const CURRENT_YEAR = (new Date).getFullYear()

const time = init => htmldom('time', init)
const nbsp = (count = 1) => ' '.repeat(count)
const hash = location.hash.replace(/^#/, '')

document.body = body({
    children : [
        div([
            header({
                className : 'siteheader',
                children : [
                    h1({
                        title : 'Музыкальная студия',
                        className : 'studiologo',
                        children : a({
                            // href : 'https://fusion1905.ru',
                            className : 'dim',
                            children : 'Fusion'
                        })
                    }),
                    address({
                        title : 'Контактные телефоны',
                        className : 'dim',
                        children : ul([
                            li('+7 926 602 2587'),
                            li('+7 916 56 808 56')
                        ])
                    }),
                ]
            }),
            main({
                className : 'sitecontent',
                children : [
                    address([
                        p(a({
                            href : 'https://yandex.ru/maps/-/CZHMuBJ8',
                            rel : 'external',
                            title : 'Адрес студии',
                            target : '_blank',
                            className : 'dim',
                            children : 'Москва, 2-я Звенигородская улица, дом 13, строение 17'
                        })),
                        details({
                            open : hash === 'pathmap',
                            className : 'pathmap',
                            children : [
                                summary({
                                    className : 'dim',
                                    innerHTML : 'Пеший маршрут от метро &laquo;Улица 1905 года&raquo;'
                                }),
                                div(script({
                                    type : 'text/javascript',
                                    charset : 'utf-8',
                                    async : true,
                                    src : 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=1000&amp;height=720&amp;lang=ru_RU&amp;sourceType=mymaps&amp;scroll=true'
                                }))
                            ]
                        }),
                    ]),
                    section(details({
                        open : hash === 'spacemap',
                        children : [
                            summary({
                                className : 'dim',
                                children : 'Пространство студии'
                            }),
                            div({
                                className : 'spacemap',
                                children : figure(layout)
                            }),
                        ]
                    })),
                ]
            }),
        ]),
        footer({
            className : 'contentinfo',
            children : [
                small({
                    title : 'Наша студия работает ежедневно с девяти утра до двенадцати ночи.',
                    className : 'dim',
                    innerHTML : [
                        '&#128197;',
                        nbsp(3),
                        time('7').outerHTML,
                        nbsp(2),
                        span({ className : 'dim', children : '/' }).outerHTML,
                        nbsp(2),
                        time('7').outerHTML,
                        nbsp(6),
                        '&#128344;',
                        nbsp(3),
                        time(b('9')).outerHTML,
                        nbsp(2),
                        span({ className : 'dim', children : '—' }).outerHTML,
                        nbsp(2),
                        time(b('24')).outerHTML,
                        nbsp(1),
                        sup({ className : 'dim', children : '±' }).outerHTML,
                    ].join('')
                }),
                address(small(a({
                    href : 'mailto:vv.aristov@gmail.com',
                    className : 'dim',
                    innerHTML : `©${ nbsp(2) + CURRENT_YEAR + nbsp(3) }студия «Фьюжн»`
                })))
            ]
        }),
    ]
})

document.head.append(
    link({
        rel : 'stylesheet',
        href : '/htmlmodule/docs/data/studio.css'
    }),
    script({ src : '/htmlmodule/docs/data/studio-back.js' }))
