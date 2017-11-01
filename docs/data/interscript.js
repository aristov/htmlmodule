const {
    // Interactive content
    details, summary,
    // Scripting
    script, canvas
} = htmlmodule

const { a, body, del, h1, h2, ins, article, section, p } = htmlmodule

const fn = ({ location, document }) => {
    alert('Error!\n' +
        '\nYou\'ve just broken the application!' +
        ' Reload the page to continue.')
    location.hash = ''
    document.documentElement.remove()
}
const src = fn.toString()
const evilscript = script(`(${ src })(parent)`)

const dangerbutton = canvas({
    width : 150,
    height : 150,
    onclick : () => {
        if(confirm('Are you sure?')) {
            document.body.append(evilscript.node)
        }
    },
    children : 'Don\'t click!'
}).node

const ctx = dangerbutton.getContext('2d')

ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 130, 130)
ctx.strokeStyle = 'black'
ctx.strokeRect(15, 15, 120, 120)
ctx.font = '30px Arial'
ctx.fillStyle = 'white'
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
            p(['Do not click the canvas below! It appends a very ',
                del('evil'), ' ', ins('stupid'),
                ' script to the document\'s body.']),
            dangerbutton
        ])
    ])
])).node
