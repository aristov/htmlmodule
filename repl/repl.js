import '../shim/shim';

import { output, main, div, textarea, pre, code } from '../htmldom/htmldom';
import * as HTMLDOM from '../htmldom/htmldom';

import hljs from 'highlight.js/';
import 'highlight.js/styles/agate.css';

import value from 'raw!./repl.value.rawjs';
import { HTMLSerializer } from '../html/html.serializer';

const vars = Object.keys(HTMLDOM).map(name => name + '=hd.' + name).join(',');

const fnbody = value => `var ${vars};${value};out.append(dom);`;

const panel = children => div({ className : 'panel', children });

const codeinput = textarea({
    className : 'codeinput',
    placeholder : 'Type HTMLDOM code here...',
    textContent : value,
    oninput : ({ target : { value } }) => evaluate(value)
});

const domoutput = output({ className : 'domoutput' });

const codepre = pre({ className : 'codeoutput html', children : code() });

const app = main({
    className : 'app',
    children : [
        panel(codeinput),
        panel(domoutput),
        panel(codepre)
    ]
});

const serializer = new HTMLSerializer;

function evaluate(value) {
    value = String(value).trim();
    app.classList.remove('invalid');
    if(value) {
        try {
            const fn = new Function('hd', 'out', fnbody(value));
            domoutput.textContent = '';
            fn(HTMLDOM, domoutput);

            const htmlcode = code(serializer.serializeToString(domoutput.firstChild));
            codepre.firstChild.replaceWith(htmlcode);
            hljs.highlightBlock(codepre);
        } catch(error) {
            domoutput.textContent = error;
            codepre.textContent = 'Error!';
            app.classList.add('invalid');
        }
    } else domoutput.textContent = '';
}

evaluate(codeinput.value);

document.body.append(app);
