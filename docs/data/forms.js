const {
    // Containers and labels
    form, fieldset, label, legend,
    // Inputs
    input, textarea, select, option,
    // Related
    button, progress
} = htmlmodule

const { a, article, body, br, h1, p, script, section, style } = htmlmodule

const root = article([
    h1([a({ href : '#', children : 'Index' }), ' → Forms']),
    form({
        target : '_blank',
        children : [
            section([
                h1('Button'),
                button('Button')
            ]),
            section([
                h1('Input'),
                p(label([
                    'Text input ',
                    input({ placeholder : 'Fill me' })
                ])),
                p(label([
                    input({ type : 'checkbox' }),
                    ' Simple check box'
                ])),
                p(label([
                    input({
                        type : 'checkbox',
                        checked : true
                    }),
                    ' Checked check box'
                ])),
                p(label([
                    input({
                        type : 'checkbox',
                        defaultChecked : true
                    }),
                    ' Default checked check box'
                ])),
                p(label([
                    input({
                        type : 'checkbox',
                        indeterminate : true
                    }),
                    ' Indeterminate check box'
                ])),
                p([
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
                    ])
                ]),
                p([
                    input({ type : 'reset' }),
                    ' ',
                    input({ type : 'submit' })
                ])
            ]),
            section([
                h1('Text area'),
                p(label([
                    'Multiline text box',
                    br(),
                    textarea({
                        rows : 5,
                        children : [
                            'First line\n',
                            'Second line...\n',
                            '...\n',
                            'More lines!'
                        ]
                    })
                ]))
            ]),
            section([
                h1('Select box'),
                p(label([
                    'Simple ',
                    select([
                        option('XML'),
                        option('HTML'),
                        option({
                            selected : true,
                            children : 'WAI-ARIA'
                        }),
                        option('RDFS'),
                        option('OWL'),
                        option('SGML'),
                        option('CSS')
                    ])
                ])),
                p(label([
                    'Multiple',
                    br(),
                    select({
                        multiple : true,
                        children : [
                            option('XML'),
                            option({
                                selected : true,
                                children : 'OWL'
                            }),
                            option('WAI-ARIA'),
                            option({
                                defaultSelected : true,
                                children : 'HTML'
                            }),
                            option('RDFS'),
                            option('SGML'),
                            option({
                                selected : true,
                                children : 'CSS'
                            })
                        ]
                    })
                ])),
            ]),
            section([
                h1('Field set'),
                fieldset([
                    legend('Authorization'),
                    input({
                        placeholder : 'Login',
                    }),
                    input({
                        type : 'Password',
                        placeholder : 'Password',
                        style : { margin : '0 5px' }
                    }),
                    button('Enter')
                ])
            ]),
            section([
                h1('Progress bar'),
                progress({ max : '100', value : '70' }),
            ]),
        ]
    }),
    script({ src : 'data/metadata.js' }),
    style(['section',
        '{ display: inline-block; margin-right: 50px;',
        'margin-bottom: 10px; vertical-align: top; }'])
])

document.body = body(root).node
