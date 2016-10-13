import testcase from './test/test-testcase.js';
import {
    a, h1, h2, input, code, span, div, pre,
    table, thead, tbody, tr, th, td,
} from '../../lib';
import * as htmlmodule from '../../lib';
import { sitenav } from './sitenav';
import { siteheading } from './siteheading';

import { HTMLSerializer } from '../../util/htmlserializer';

import hljs from 'highlight.js/';
import jsb from './jsbeautify';

import 'highlight.js/styles/agate.css';
import './test.css';

const serializer = new HTMLSerializer;

let rows;

const oninput = ({ target : { value } }) => {
    rows.forEach(row => {
        row.hidden = !row.className.includes(value.toUpperCase());
    });
};

const filterNode = input({
    type : 'search',
    className : 'filterinput',
    placeholder : 'filter...',
    oninput
});

const tag = children => span({ className : 'tag', children });

const exampletable = () => table({
    cellSpacing : 0,
    className : 'exampletable',
    children : [
        thead(tr(th(filterNode))),
        tbody(rows = testcase.map(template => {
            const element = template(htmlmodule);
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

document.body.append(
    siteheading('htmlmodule test'),
    exampletable(),
    sitenav()
);
