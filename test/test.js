import { test } from '../html/html.lib.test';
import { input, code, table, thead, tbody, tr, th, td, br } from '../html/html.lib';
import './test.css';

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

const filtertable = table({
    cellSpacing : 0,
    className : 'exampletable',
    id : 'exampletable',
    children : [
        thead([
            tr([th('tagName'), th('outerHTML'), th('DOM element')]),
            tr([th({
                colSpan : 3,
                children : filterinput
            })])
        ]),
        tbody(rows = test.map(element => {
            const tagNameList = [element.tagName];
            const tagNames = [element.tagName];
            const collection = element.querySelectorAll('*');
            const elements = Array.from(collection);

            elements.forEach(({ tagName }) => {
                if(!tagNameList.includes(tagName)) {
                    tagNameList.push(br(), tagName);
                    tagNames.push(tagName);
                }
            });

            return tr({
                className : tagNames.join(' '),
                children : [
                    th(tagNameList),
                    td(code(element.outerHTML)),
                    td(element)
                ]
            })
        }))
    ]
});

document.body.appendChild(filtertable);
