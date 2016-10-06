import '../shim/shim';

import { main, div, textarea } from '../htmldom/htmldom';
import * as HTMLDOM from '../htmldom/htmldom';

const DEFAULT_SRC =
`article([
    a({ 
        href : '//ya.ru', 
        textContent : 'Yandex', 
        target : '_blank' 
    }),
    ul([
        li('first item'), 
        li('second item'),
        li('third item')
    ])
])`;

const codeinput = textarea({
    style : {
        width : '500px',
        height : '700px',
        font : '20px monospace'
    },
    placeholder : 'Type HTMLDOM code here...',
    textContent : DEFAULT_SRC,
    oninput
});

const variables =
    Object
        .keys(HTMLDOM)
        .map((name) => `var ${name}=hd.${name};`)
        .join('');

function evaluate(value) {
    if(value) {
        const src = [variables, `var node=${value};out.append(node);`].join('');
        const fn = new Function('hd', 'out', src);
        console.log(fn);
        try {
            domoutput.textContent = '';
            fn(HTMLDOM, domoutput);
        } catch(error) {
            domoutput.textContent = error;
        }
    } else domoutput.textContent = '';
}

function oninput({ target : { value } }) {
    evaluate(value);
}

const domoutput = div({
    style : {
        padding: '50px',
        border : '5px solid black'
    }
});

const panel = children => div({ className : 'panel', children });

const app = main({
    style : {
        display : 'flex',
        justifyContent : 'space-around'
    },
    children : [
        panel(codeinput),
        panel(domoutput),
        panel()
    ]
})

document.body.append(app);

evaluate(codeinput.value);
