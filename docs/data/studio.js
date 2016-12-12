const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

const layout = pre()

fetch('/htmlmodule/docs/data/studio.txt')
    .then(res => res.text())
    .then(res => layout.textContent = res)

const CURRENT_YEAR = (new Date).getFullYear()

const time = init => htmldom('time', init)
const nbsp = (count = 1) => ' '.repeat(count)
const hashname = () => location.hash.slice(1)

/*onhashchange = ({ oldURL }) => {
 const url = new URL(oldURL)
 const hash = url.hash.slice(1)
 const oldNode = document.getElementById(hash)
 if(oldNode) oldNode.hidden = true;
 const newNode = document.getElementById(hashname())
 if(newNode) newNode.hidden = false;
 }*/

let pathmap

document.body = body({
    children : [
        div([
            header({
                className : 'siteheader',
                children : [
                    h1({
                        title : 'Музыкальная студия',
                        children : a({
                            // href : 'https://fusion1905.ru',
                            className : 'dim',
                            children : 'Fusion'
                        })
                    }),
                    address({
                        className : 'dim',
                        children : [
                            a({
                                title : 'Наш адрес',
                                className : 'geo dim',
                                onclick : () => pathmap.hidden = !pathmap.hidden,
                                children : pre(['2-я Звенигородская', '\n', 'дом 13, стр 17'])
                            }),
                            a({
                                title : 'Контактные телефоны',
                                className : 'tel dim',
                                children : pre(['+7 926 602 25 87', '\n', '+7 916 56 808 56'])
                            })
                        ]
                    })
                ]
            }),
            main({
                className : 'sitecontent',
                children : [
                    0 && section({
                        id : 'spacemap',
                        children : [
                            h1({
                                className : 'dim',
                                children : 'Студийное пространство'
                            }),
                            div({
                                className : 'spacemap',
                                children : figure(layout)
                            }),
                        ]
                    }),
                    pathmap = article({
                        id : 'pathmap',
                        // hidden : hashname() !== 'pathmap',
                        children : [
                            script({
                                type : 'text/javascript',
                                charset : 'utf-8',
                                async : true,
                                src : 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=1000&amp;height=720&amp;lang=ru_RU&amp;sourceType=mymaps&amp;scroll=true'
                            }),
                            0 && button({
                                className : 'closebutton',
                                title : 'Закрыть карту',
                                onclick : () => pathmap.hidden = true,
                                children : '×'
                            })
                        ]
                    })
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
    script({ src : '/htmlmodule/docs/data/studio-backphoto.js' }))
