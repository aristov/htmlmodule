import { test } from '../html/html.lib.test';
import { h3, input, code, table, thead, tbody, tr, th, td, span, pre, div } from '../html/html.lib';
import * as HTMLDOM from '../html/html.lib';

import beautify from 'js-beautify';
import victorica from 'victorica';
import hljs from 'highlight.js/';

import './test.css';
import 'highlight.js/styles/agate.css';

const jsb = beautify.js_beautify;
const jsbConfig = {
    indent_size: 4,
    wrap_line_length: 100,
};

const victoricaConfig = {
    space: '    ',
    // ignore: ['script','style','title','a','abbr','acronym','b','bdo','big','button','cite','code','dfn','em','i','img','kbd','label','map','object','pre','q','samp','small','span','strong','sub','sup','textarea','tt','var'],
    removeSelfClose: true,
};

let rows;

const filterinput = input({
    type : 'search',
    className : 'filterinput',
    placeholder : 'filter...',
    oninput : ({ target : { value } }) => {
        rows.forEach(row => {
            row.hidden = !row.className.includes(value.toUpperCase());
        });
    }
});

const tag = children => span({ className : 'tag', children });

const exampletable = table({
    cellSpacing : 0,
    className : 'exampletable',
    children : [
        thead([
            // tr([th(code('tagName')), th(code('outerHTML')), th(code('DOM'))]),
            tr([th({
                colSpan : 3,
                children : filterinput
            })])
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

            const row = tr({
                className : tagNames.join(' '),
                children : td({
                    colSpan : 3,
                    children : [
                        h3(code(tagNames.join(', '))),
                        tag('Source JS:'),
                        div(srcjscode = pre({
                            className : 'javascript',
                            children : code(jsb(template.toString(), jsbConfig))
                        })),
                        tag('Result HTML:'),
                        div(resulthtmlcode = pre({
                            className : 'html',
                            children : code(victorica(element.outerHTML, victoricaConfig))
                        })),
                        tag('Result DOM:'),
                        div(element)
                    ]
                })
            });

            hljs.highlightBlock(srcjscode);
            hljs.highlightBlock(resulthtmlcode);

            return row;
        }))
    ]
});

document.body.appendChild(exampletable);
