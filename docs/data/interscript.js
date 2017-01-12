const {
    // Interactive content
    details, summary,
    // Scripting
    script, canvas
} = htmlmodule

const { a, body, del, h1, h2, ins, article, section, p } = htmlmodule

const evilscript = script(`(${(() => {
    alert('Error!\n' +
        '\nThe application is broken by user.' +
        ' Do not report an issue, please.' +
        ' Reload the page and follow the "Index" reference to continue.')
    parent.document.documentElement.remove()
}).toString()})()`)

const dangerbutton = canvas({
    width : 150,
    height : 150,
    onclick : () => {
        if(confirm('Are you sure?')) {
            document.body.append(evilscript)
        }
    },
    children : 'Don\'t click!'
})

const ctx = dangerbutton.getContext('2d')

ctx.strokeStyle = '#000'
ctx.strokeRect(10, 10, 130, 130)
ctx.fillStyle = '#f00'
ctx.fillRect(10, 10, 130, 130)
ctx.font = '30px Arial'
ctx.fillStyle = '#fff'
ctx.fillText('DON\'T!', 24, 85)

document.body = body(article([
    h1([a({
        href : '#',
        target : '_top',
        children : 'Index'
    }), ' → Interactive and scripting']),
    section([
        h1('Details and summary'),
        details([
            summary('Danger! Don\'t open!'),
            h1('Canvas and script'),
            p(['Do not click the canvas below! ',
                'It appends a very ',
                del('evil'), ' ', ins('stupid'),
                ' script to the document\'s body!']),
            dangerbutton
        ])
    ])
]))
