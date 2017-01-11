const { body, form, label, img, br, input, button } = htmlmodule

const websearch = form({
    action : 'https://google.com/search',
    target : '_blank',
    children : [
        label([
            img({
                src : '//www.google.com/images/branding/' +
                'googlelogo/1x/googlelogo_color_150x54dp.png',
                alt : 'Google',
                width : 60
            }),
            br(),
            input({
                type : 'search',
                name : 'q'
            }),
            ' '
        ]),
        button('Go!')
    ]
})

document.body = body(websearch)
