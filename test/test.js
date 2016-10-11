import { test } from '../htmldom/htmldom.test';
import { a, h2, input, code, table, thead, tbody, tr, th, td, span, pre, div } from '../htmldom';
import * as HTMLDOM from '../htmldom';

import { HTMLSerializer } from '../html/html.serializer';

// import victorica from 'victorica';
import hljs from 'highlight.js/';
import jsb from '../jsb/jsb';

import './test.css';
import 'highlight.js/styles/agate.css';

if(!window.HTMLDOM) window.HTMLDOM = HTMLDOM;

const serializer = new HTMLSerializer;

// const victoricaConfig = { space: '    ' };

let rows;

const oninput = ({ target : { value } }) => {
    rows.forEach(row => {
        row.hidden = !row.className.includes(value.toUpperCase());
    });
};

const filterinput = input({
    type : 'search',
    className : 'filterinput',
    placeholder : 'filter...',
    oninput
});

const tag = children => span({ className : 'tag', children });

const exampletable = table({
    cellSpacing : 0,
    className : 'exampletable',
    children : [
        thead([
            tr([th(filterinput)])
        ]),
        tbody(rows = test.map(template => {
            const element = template(HTMLDOM);
            const tagNames = [element.tagName];
            const collection = element.querySelectorAll('*');
            const elements = Array.from(collection);

            elements.forEach(({ tagName }) => {
                if(!tagNames.includes(tagName)) tagNames.push(tagName);
            });

            let srcjscode, resulthtmlcode;

            const id = tagNames.join('+');
            const row = tr({
                className : tagNames.join(' '),
                children : td([
                    h2(code(a({
                        id,
                        href : '#' + id,
                        children : tagNames.join(', ')
                    }))),
                    tag('Source JS:'),
                    div(srcjscode = pre({
                        className : 'javascript',
                        children : code(jsb(template.toString()))
                    })),
                    tag('Result DOM:'),
                    div({ className : 'dom', children : element }),
                    tag('Result HTML:'),
                    div({
                        className : '',
                        children : resulthtmlcode = pre({
                            className : 'html',
                            // children : code(victorica(element.outerHTML, victoricaConfig))
                            children : code(serializer.serializeToString(element))
                        })
                    })
                ])
            });

            hljs.highlightBlock(srcjscode);
            hljs.highlightBlock(resulthtmlcode);

            return row;
        }))
    ]
});

document.body.appendChild(exampletable);
