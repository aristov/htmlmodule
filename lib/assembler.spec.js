import { HTMLDOMAssembler } from './assembler.js';
import chai from 'chai';

const { assert } = chai;
const {
    Text,
    Comment,
    HTMLHRElement,
    HTMLButtonElement,
    HTMLDivElement,
    HTMLSpanElement
} = window;

const assembler = new HTMLDOMAssembler;

describe('HTMLDOM assembler', () => {
    describe('attrset', () => {
        const init = { attrset : { selected : '' } };
        const element = assembler.assemble('option', init);
        it('proper number of attributes', () => {
            assert(element.hasAttributes(), 'element has attributes');
            assert.equal(element.attributes.length, 1);
        });
        it('proper attributes assigned', () => {
            assert.equal(element.getAttribute('selected'), '');
        });
    });
    describe('dataset', () => {
        const init = { dataset : { camelCased : 'custom attribute' } };
        const element = assembler.assemble('div', init);

        it('HTMLDivElement node created', () => {
            assert.equal(element.constructor, HTMLDivElement);
            assert.equal(element.tagName, 'DIV');
        });
        it('proper number of attributes', () => {
            assert(element.hasAttributes());
            assert.equal(element.attributes.length, 1);
        });
        it('proper custom `data-` attribute', () => {
            assert.equal(element.dataset.camelCased, 'custom attribute');
            assert.equal(element.getAttribute('data-camel-cased'), 'custom attribute');
        });
        it('proper `outerHTML` property value', () => {
            assert.equal(element.outerHTML, '<div data-camel-cased="custom attribute"></div>');
        });
    });
    describe('style', () => {
        const init = { style : { backgroundColor : 'black' } };
        const element = assembler.assemble('span', init);

        it('HTMLSpanElement node created', () => {
            assert.equal(element.constructor, HTMLSpanElement);
            assert.equal(element.tagName, 'SPAN');
        });
        it('proper number of attributes', () => {
            assert(element.hasAttributes());
            assert.equal(element.attributes.length, 1);
        });
        it('proper style declaration assigned', () => {
            assert.equal(element.style.backgroundColor, 'black');
            assert.equal(element.getAttribute('style'), 'background-color: black;');
        });
        it('proper `outerHTML` property value', () => {
            assert.equal(element.outerHTML, '<span style="background-color: black;"></span>');
        });
    });
    describe('children', () => {
        const child = new HTMLDOMAssembler;
        child.assemble('span');
        const element = assembler.assemble('div', {
            children : [
                0,
                assembler.assemble('button'),
                '',
                'text node as string',
                NaN,
                document.createTextNode('created text node'),
                null,
                document.createElement('hr'),
                false,
                document.createComment('Simple DOM Comment node'),
                undefined,
                child
            ]
        });
        const childNodes = element.childNodes;
        it('proper number of child nodes', () => {
            assert(element.hasChildNodes(), 'element has child nodes');
            assert.equal(childNodes.length, 6);
        });
        it('proper child nodes', () => {
            assert.equal(childNodes[0].constructor, HTMLButtonElement);
            assert.equal(childNodes[0].tagName, 'BUTTON');
            assert.equal(childNodes[1].constructor, Text);
            assert.equal(childNodes[1].textContent, 'text node as string');
            assert.equal(childNodes[2].constructor, Text);
            assert.equal(childNodes[2].nodeValue, 'created text node');
            assert.equal(childNodes[3].constructor, HTMLHRElement);
            assert.equal(childNodes[3].tagName, 'HR');
            assert.equal(childNodes[4].constructor, Comment);
            assert.equal(childNodes[4].textContent, 'Simple DOM Comment node');
            assert.equal(childNodes[5].constructor, HTMLSpanElement);
            assert.equal(childNodes[5].tagName, 'SPAN');
        });
    });
});
