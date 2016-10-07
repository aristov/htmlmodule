import '../shim/shim';

import { main, div, textarea, pre, code } from '../htmldom/htmldom';
import * as HTMLDOM from '../htmldom/htmldom';

import victorica from 'victorica';
import hljs from 'highlight.js/';
import 'highlight.js/styles/agate.css';

const victoricaConfig = { space: '    ' };

const src = require('raw!./repl.value.rawjs');

const vars = Object.keys(HTMLDOM).map(name => name + '=hd.' + name).join(',');

const fnbody = value => `var ${vars};out.append(${value});`;

function evaluate(value) {
    value = String(value).trim();
    app.classList.remove('invalid');
    if(value) {
        try {
            const fn = new Function('hd', 'out', fnbody(value));
            domoutput.textContent = '';
            fn(HTMLDOM, domoutput);
            codepre.firstChild.replaceWith(code(victorica(domoutput.innerHTML, victoricaConfig)));
            hljs.highlightBlock(codepre);
        } catch(error) {
            domoutput.textContent = error;
            codepre.textContent = 'Error!';
            app.classList.add('invalid');
        }
    } else domoutput.textContent = '';
}

const codeinput = textarea({
    className : 'codeinput',
    placeholder : 'Type HTMLDOM code here...',
    textContent : src,
    oninput : ({ target : { value } }) => evaluate(value)
});

const domoutput = div({ className : 'domoutput' });

const panel = children => div({ className : 'panel', children });

const codepre = pre({ className : 'codeoutput html', children : code() });

const app = main({
    className : 'app',
    children : [
        panel(codeinput),
        panel(domoutput),
        panel(codepre)
    ]
})

document.body.append(app);

evaluate(codeinput.value);
