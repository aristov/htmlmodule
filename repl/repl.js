import '../shim/shim';

import { main, div, textarea } from '../htmldom/htmldom';
import * as HTMLDOM from '../htmldom/htmldom';

const DEFAULT_SRC = require('raw!./repl.value.js.txt');

const HTMLDOM_VARIABLE_SNIPPET =
    Object
        .keys(HTMLDOM)
        .map(name => name + '=hd.' + name)
        .join(',');

const getSrc = value => `var ${HTMLDOM_VARIABLE_SNIPPET};out.append(${value});`;

function evaluate(value) {
    value = String(value).trim();
    app.classList.remove('invalid');
    if(value) {
        try {
            const fn = new Function('hd', 'out', getSrc(value));
            domoutput.textContent = '';
            fn(HTMLDOM, domoutput);
        } catch(error) {
            domoutput.textContent = error;
            app.classList.add('invalid');
            domoutput.invalid = true;
        }
    } else domoutput.textContent = '';
}

const codeinput = textarea({
    className : 'codeinput',
    placeholder : 'Type HTMLDOM code here...',
    textContent : DEFAULT_SRC,
    oninput : ({ target : { value } }) => evaluate(value)
});

const domoutput = div({
    className : 'domoutput'
});

const panel = children => div({
    className : 'panel',
    children
});

const app = main({
    className : 'app',
    children : [
        panel(codeinput),
        panel(domoutput)
    ]
})

document.body.append(app);

evaluate(codeinput.value);
