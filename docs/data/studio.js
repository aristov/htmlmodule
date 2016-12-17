{
    'use strict'

    const { htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

    const CURRENT_YEAR = String((new Date).getFullYear())

    const time = init => htmldom('time', init)
    const nbsp = (count = 1) => ' '.repeat(count)
    const hashname = (hash = location.hash) => hash.slice(1)
    const hash = hashname()

    const paragraph = (...children) => p(children.join(' ').replace(/(\sиз|в|по|и|до|со?|на)\s/gi, '$1 '))

    const pathinfo = article({
        // className : 'pathinfo',
        // draggable : true,
        /*ondragend : ({ target : { style, clientHeight, clientWidth }, x, y }) => {
         const { innerWidth, innerHeight } = window
         const { scrollTop } = document.body
         Object.assign(style, {
         margin : '0',
         left : Math.min(Math.max(0, x), innerWidth - clientWidth) + 'px',
         top : Math.min(
         Math.max(0, scrollTop + y - clientHeight),
         scrollTop + innerHeight - clientHeight) + 'px'
         })
         },*/
        className : 'text',
        children : [
            // h1('Как добраться'),
            /*paragraph('Станция метро «Улица 1905 года», последний вагон из центра,',
             'из выхода в подземный переход, перейти перекресток по диагонали и идти вдоль',
             'Звенигородского шоссе в сторону области до 2-й Звенигородской улицы,',
             'перейти догогу, затем свернуть налево, пройти ~100м, рядом с магазином «Пятерочка»',
             'металлические ворота со шлагбаумом и калиткой — зайти в нее,',
             'обойти 15-е строение слева, и снова в калитку —',
             'слева будет вход в кафе с вывеской «PH & B».',
             'Студия находится на втором этаже здания в конце коридора.'),*/
            p({
                innerHTML : ['Мы располагаемся в <b>Москве</b>, недалеко от станции <b>метро «Улица 1905 года»</b>.',
                    'Удобнее выходить у последнего вагона из центра.',
                    'Из выхода в подземный переход, перейти перекресток по диагонали и идти вдоль',
                    'Звенигородского шоссе в сторону области до <b>2-й Звенигородской улицы</b>,',
                    'перейти догогу, затем свернуть налево, пройти ~100м, рядом с магазином «Пятерочка»',
                    'металлические ворота со шлагбаумом и калиткой — зайти в нее,',
                    'обойти 15-е строение слева, и снова в калитку —',
                    'слева будет <b>вход в кафе с вывеской «PH & B»</b>.',
                    'Студия находится на втором этаже здания в конце коридора.'].join(' ')
            }),
            /*button({
             title : 'Закрыть',
             className : 'closebutton',
             onclick : ({ target }) => target.parentNode.hidden = true,
             children : '×'
             })*/
        ]
    })

    const pathmap = address({
        className : 'pathmap',
        children : [
            script({
                type : 'text/javascript',
                charset : 'utf-8',
                async : true,
                src : 'https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=4L2HMAQC2mYDutWIKsc2LAD98hZTzzSe&amp;width=1000&amp;height=720&amp;lang=ru_RU&amp;sourceType=mymaps&amp;scroll=true'
            })
        ]
    })

    const addresspage = article({
        id : 'adr',
        children : [
            h1('Путь'),
            pathinfo,
            address([
                figure([
                    figcaption(a({
                        href : 'https://yandex.ru/maps/-/CZHeYA0i',
                        className : 'adr',
                        rel : 'external',
                        target : 'blank',
                        innerHTML : 'Москва, 2-я Звенигородская <b>13</b> <sup>строение <b>17</b></sup>'
                    })),
                    pathmap,
                ])
            ]),
        ]
    })

    const mainphoto_urlmap = [
        /*'https://pp.vk.me/c627625/v627625762/44563/1gumGbIJ5c4.jpg',*/
        /*'https://pp.vk.me/c636029/v636029762/2b81b/4ml_9R8SF80.jpg',*/
        /*'https://pp.vk.me/c624430/v624430762/43f26/BXS1VOryu6g.jpg',*/
        'https://pp.vk.me/c624430/v624430762/43f1d/lHoUGQxGtz8.jpg',
        'https://pp.vk.me/c624430/v624430762/43f49/-B37c4K48AM.jpg',
        'https://pp.vk.me/c624430/v624430762/43f40/2KwdVlkPIYQ.jpg',
        'https://pp.vk.me/c624430/v624430762/43f38/0C1MjVTpaPA.jpg',
        'https://pp.vk.me/c626927/v626927762/24f57/03-W9xjtNso.jpg',
        'https://pp.vk.me/c630431/v630431762/4d8d8/JB5gWRX5C4o.jpg',
        'https://pp.vk.me/c636029/v636029762/2b824/KFj5cLrwWqg.jpg',
        'https://pp.vk.me/c624430/v624430762/43f5b/1F2tOhwr82Y.jpg',
    ]

    const pricetitle = 'Это базовая стоимость аренды зала. Точная стоимость репетиций — по телефону +7 916 56-808-56 или +7 926 602-2587'

    const indexpage = article({
        id : 'index',
        className : 'text',
        children : [
            h1('Пространство для музыки'),
            img({
                src : mainphoto_urlmap[Math.floor(Math.random() * 100 % mainphoto_urlmap.length)],
                id : 'mainphoto',
                alt : 'Случайное фото',
                title : 'Жизнь студии',
                width : 500,
                height : 500
            }),
            p(['Уютная студия на втором этаже заводского лофта, недалеко от станции ',
                strong('метро «Улица 1905 года»')]),
            section([
                h1('Место'),
                ul([
                    li(['3 зала для репетиций ',
                        b(['25-30 м', sup('2')])]),
                    li(['Концертный зал с окном ',
                        b(['50 м', sup('2')])]),
                    li(['Малый зал для занятий ',
                        b(['20 м', sup('2')])])
                ]),
            ]),
            section([
                h1('Возможности'),
                ul([
                    li('Репетиции музыкальных коллективов'),
                    li('Небольшие концерты'),
                    li('Индивидуальные занятия'),
                    li('Занятия с преподавателем'),
                    li('Фотосессии'),
                    li('Частные вечеринки')
                ])
            ]),
            section([
                h1('Условия'),
                ul([
                    li({
                        innerHTML : `репетиции <strong title="${ pricetitle }">` +
                        'от 200 до 400 рублей / час</strong>'
                    }),
                    li('Почасовое бронирование'),
                    li('Аренда инструментов'),
                    li('Платная парковка у входа'),
                    li('Вода, чай, кофе, снеки'),
                    li('Кондиционер, wi-fi'),
                    li('Ланч-кафе рядом')
                ])
            ]),
            section([
                h1('Аппарат'),
                p({
                    className : 'brandlist',
                    children : [
                        'У нас есть оборудование ',
                        ...'Ampeg, EBS, Fender, JBL, Kustom, Mackie, Peavey, Randall, Roland, Sabian, Shure, Sonor, Soundcraft, VOX, Yamaha'
                            .split(', ').map(name => [b(name), ', ']),
                        ' и всякие другие классные штуки!'
                    ]
                })
            ]),
        ]
    })

    /*const keys = Object.keys
     const classList = list =>
     keys(list)
     .map(item => list[item]? item : '')
     .filter(item => item)
     .join(' ')*/

    const content = main([
        indexpage,
        article({
            id : 'tel',
            className : 'text',
            children : [
                h1('Связь'),
                address({
                    className : 'tel nowrap',
                    title : 'Свяжитесь с нами по одному из этих номеров и узнайте больше о студии',
                    children : ul([
                        li(strong('+7 916 56 808 56')),
                        li(strong('+7 926 602 25 87')),
                    ])
                }),
            ]
        }),
        addresspage
    ])

    document.body = body({
        className : 'vcard',
        children : [
            div([
                header({
                    className : 'siteheader',
                    children : [
                        h1({
                            id : 'logo',
                            title : 'Музыкальная студия',
                            children : a({
                                href : '',
                                children : img({
                                    alt : 'Fusion studio',
                                    src : 'studio.png',
                                    width : 138,
                                    height : 60,
                                })
                            })
                        }),
                        address([
                            a({
                                title : 'Контактные телефоны',
                                href : '#tel',
                                // className : hash !== 'tel'? 'dim' : undefined,
                                className : 'dim',
                                children : [
                                    span({ className : 'fa fa-phone dim' }),
                                    pre(['+7 926 602 25 87', '\n', '+7 916 56 808 56'])
                                ]
                            }),
                            a({
                                title : 'Наш адрес',
                                href : '#adr',
                                // className : classList({ 'addressbutton' : true, 'dim' : hash !== 'adr' }),
                                className : 'addressbutton dim',
                                onclick : () => { // do not return false
                                    pathinfo.hidden = false
                                },
                                children : [
                                    span({ className : 'fa fa-map dim' }),
                                    pre(['2-я Звенигородская', '\n', 'дом 13, стр 17'])
                                ]
                            }),
                            a({
                                title : 'Наши друзья на vk.com',
                                href : 'https://vk.com/bazafusion',
                                rel : 'external',
                                target : '_blank',
                                className : 'dim',
                                children : [
                                    span({ className : 'fa fa-vk dim', target : '_blank' }),
                                    pre('Сообщество\nмузыкантов')
                                ]
                            }),
                        ])
                    ]
                }),
                content
            ]),
            footer({
                className : 'contentinfo',
                children : [
                    small({
                        title : 'Мы работаем ежедневно с девяти утра до двенадцати ночи',
                        className : 'worktime dim',
                        children : [
                            span({ className : 'fa fa-calendar' }),
                            time('7'),
                            span({ className : 'dim', children : ' / ' }),
                            time('7'),
                            span({ className : 'fa fa-clock-o' }),
                            time('9'),
                            span({ className : 'dim', children : ' — ' }),
                            time('24'),
                            sup({ className : 'dim', children : '±' }),
                        ]
                    }),
                    address(small({
                        className : 'dim',
                        children : ['© ', time(CURRENT_YEAR), ' ', a({
                            href : 'mailto:vv.aristov@gmail.com',
                            rel : 'author',
                            children : 'студия «Фьюжн»'
                        })]
                    }))
                ]
            }),
        ]
    })

    document.head.append(script({
        src : '/htmlmodule/docs/data/studio-backphoto.js'
    }))

    window.onscroll = () => {
        const half = window.innerHeight / 2
        pathmap.style.opacity = Number(addresspage.offsetTop < window.scrollY + half) || null
    }
}

/*================================================================*/

/**
 ## Идейка
 Музыканты обмен аппаратом
 Каждый несет свой аппарат на студию и получает проценты от аренды
 Можно настроить на сайте
 */
