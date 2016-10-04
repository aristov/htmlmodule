import {
    a, abbr, address, area, article, aside, audio,
    b, base, bdi, bdo, blockquote, body, br, button,
    canvas, caption, cite, code, col, colgroup,
    data, datalist, dd, del, details, dfn, dialog, div, dl, dt,
    em, embed,
    fieldset, figcaption, figure, footer, form,
    h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
    i, iframe, img, input, ins,
    kbd, keygen,
    label, legend, li, link,
    main, map, mark, menu, menuitem, meta, meter,
    nav, noscript,
    object, ol, optgroup, option, output,
    p, param, picture, pre, progress,
    q,
    rp, rt, ruby,
    s, samp, script, section, select, slot, small, source,
    span, strong, style, sub, summary, sup,
    table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track,
    u, ul,
    variable, video,
    wbr
} from './html.lib';

export const test = [

    fieldset([
        legend('Authorization'),
        input({ placeholder : 'login', style : { marginRight : '5px' } }),
        input({ type : 'password', placeholder : 'password' })
    ]),

    iframe({
        srcdoc : html({
            lang : 'ru',
            children : [
                head([
                    meta({ attrset : { charset : 'utf-8' } }),
                    title('iframe title')
                ]),
                body('document inside iframe')
            ]
        }).outerHTML
    }),

    header(nav(a({ href : '/home.html', textContent : 'Go home' }))),

    footer([
        small('@ All rights free'),
    ]),

    main([
        'Here comes ',
        sup('supertext'),
        ' and ',
        sub('subtext'),
        '. Later they are followed by ',
        i('alternative voice'),
        ' and ',
        strong('important!')
    ]),

    a({ href : 'http://github.com/aristov', textContent : 'Github page' }),

    abbr('XML, HTML, DOM, WAI-ARIA, RDF, OWL'),

    article({
        className : 'vcard',
        content : [
            h2({ className : 'fn', textContent : 'Vyacheslav Aristov' }),
            address({ className : 'email', textContent : 'vv.aristov@gmail.com' })
        ]
    }),

    aside('Your advert may be here!'),

    audio({
        controls : true,
        src : 'https://upload.wikimedia.org/wikipedia/commons/0/05/Beep-09.ogg'
    }),

    b('var, function, export, const'),

    style({
        id : 'greenstyle',
        textContent : '#greenstyle { display: inline-block; color: green; font-family: monospace }'
    }),

    script('Object.assign(document.currentScript.style, { display: "block", color: "blue", fontFamily : "monospace" })'),

    pre(`preformatted text
line break 
    yet another line break with tab
  
  <>&`),

    ins('The ins element'),

    blockquote({
        cite : 'https://html.spec.whatwg.org/multipage/semantics.html#the-blockquote-element',
        textContent : 'The blockquote element represents a section that is quoted from another source.'
    }),

    span('span — the base html element; text wrapper; no semantics, no default style'),

    div([
        'div — like span has no semantics, but',
        div('div has default `display: block` style')
    ]),

    p(['b', br(), 'r']),

    p([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        hr(),
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]),

    button('Push my button'),

    label([
        'Text input ',
        input({ placeholder : 'Fill me' })
    ]),

    label([
        input({ type : 'checkbox' }),
        ' Simple checkbox'
    ]),

    label([
        input({ type : 'checkbox', checked : true }),
        ' Checked checkbox'
    ]),

    label([
        input({ type : 'checkbox', attrset : { checked : '' } }),
        ' Initially checked checkbox'
    ]),

    label([
        input({ type : 'checkbox', indeterminate : true }),
        ' Indeterminate checkbox'
    ]),

    label([
        'Simple textarea', br(),
        textarea({
            title : 'multiline',
            content : 'First line\nSecond line'
        })
    ]),

    label([
        'Select technology ',
        select([
            option('XML'),
            option('HTML'),
            option('WAI-ARIA'),
            option('RDFS'),
            option('OWL'),
            option('SGML'),
            option('CSS'),
        ])
    ]),

    label([
        'Select technology stack',
        br(),
        select({
            multiple : true,
            children : [
                option('XML'),
                option({
                    attrset : { selected : '' },
                    textContent : 'HTML'
                }),
                option('WAI-ARIA'),
                option('RDFS'),
                option('OWL'),
                option('SGML'),
                option('CSS'),
            ]})
    ]),

    form({
        style : { whiteSpace : 'nowrap' },
        children : [
            input({
                name : 'query',
                placeholder : 'type your request',
                type : 'search',
                style : { marginRight : '5px' }
            }),
            button('search')
        ]
    }),

    span([
        label([
            input({
                type : 'radio',
                name : 'chooseproglangradio',
                value : 'html'
            }),
            ' HTML '
        ]),
        label([
            input({
                type : 'radio',
                name : 'chooseproglangradio',
                value : 'xml'
            }),
            ' XML'
        ]),
    ]),

    code('export const code = init => instance.createElement(\'code\', init);'),

    dialog({
        open : true,
        style : { position : 'relative', display: 'block' },
        textContent : 'Hello world!'
    }),

    em('Emphasize!'),

    table([
        caption('Web technology comparison'),
        thead(tr([ th(abbr('HTML')), th(abbr('ARIA')) ])),
        tbody([
            [code('tagName'), code('role')],
            [code('hidden'), code('aria-hidden')],
            [code('title'), code('aria-label')]
        ].map(([xml, html]) => tr([ td(xml), td(html) ])))
    ]),

    img({
        src : 'https://ru.gravatar.com/userimage/52340111/ab1960afc0c60ebb85f9c7ea8ab66514.jpg?size=200',
        alt : 'Crazy PiPi!'
    }),

    hgroup([
        h1('First level heading'),
        h2('Second level heading'),
        h3('Third level heading'),
        h4('Fourth level heding'),
        h5('Fifth level heding'),
        h6('Sixth level heding in group')
    ]),

    del('Don\'t stroke me!'),

    dfn('Instance.js — simple and powerfull DOM Element interface'),

    details([
        summary('Show details'),
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ]),

    ul([
        li('Ampeg'),
        li('Fender'),
        li('SMB Effects')
    ]),

    ol([
        li('Amsterdam'),
        li('New York'),
        li('Moscow')
    ]),

    dl([
        dt('DOM'),
        dd('Document object model'),
        dt('XML'),
        dd('Extensible markup language'),
        dt('HTML'),
        dd('Hyper text markup language'),
        dt('ARIAML'),
        dd('Accessible rich internet applications markup language'),
    ]),

    progress({ max : '100', value : '70' }),
];
