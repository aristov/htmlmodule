import { HTMLDOMAssembler } from './assembler.js';
import chai from 'chai';

const { assert } = chai;
const {
    Text,
    Comment,
    HTMLHtmlElement,
    HTMLHRElement,
    HTMLButtonElement,
    HTMLSpanElement,
} = window;

const assembler = new HTMLDOMAssembler;

describe('HTMLDOM assembler', () => {
    describe('create', () => {
        const node = assembler.create('html');
        it('proper inheritance', () => {
            assert(node instanceof HTMLElement, node + ' instance of ' + HTMLElement);
        });
        it('proper constructor', () => {
            assert.equal(node.constructor, HTMLHtmlElement);
        });
        it('proper tagName', () => {
            assert.equal(node.tagName, 'HTML');
        });
        it('proper number of attributes', () => {
            assert(!node.hasAttributes(), 'has no attributes');
        });
        it('proper outerHTML', () => {
            assert.equal(node.outerHTML, '<html></html>');
        });
    });
    describe('init', () => {
        const node = assembler.create('a');
        assembler.init({
            attrset : { rel : 'external' },
            dataset : { ref : '712-42' },
            style : { color : '#777' },
            children : 'W3C homepage',
            id : 'w3-link',
            href : 'https://www.w3.org',
            ferh : 'gro.3w.www//:sptth',
            '123' : '0987654321',
            className : undefined,
            undef : undefined
        });
        describe('assembler interfaces', () => {
            it('attrset', () => {
                assert.equal(node.getAttribute('rel'), 'external');
                assert.equal(node.rel, 'external');
            });
            it('dataset', () => {
                assert.equal(node.dataset.ref, '712-42');
                assert.equal(node.getAttribute('data-ref'), '712-42');
            });
            it('style', () => {
                assert.equal(node.style.color, 'rgb(119, 119, 119)');
                assert.equal(node.getAttribute('style'), 'color: rgb(119, 119, 119);');
            });
            it('children', () => {
                assert(node.hasChildNodes(), 'has child nodes');
                assert.equal(node.childNodes.length, 1);
                assert.equal(node.innerHTML, 'W3C homepage');
            });
        });
        describe('known properties', () => {
            it('id', () => {
                assert.equal(node.id, 'w3-link');
                assert.equal(node.getAttribute('id'), 'w3-link');
            });
            it('href', () => {
                assert.equal(node.href, 'https://www.w3.org/');
                assert.equal(node.getAttribute('href'), 'https://www.w3.org');
            });
        });
        describe('unknown properties', () => {
            it('ferh', () => {
                assert(!('ferh' in node), 'ignore "ferh" property');
                assert(!node.hasAttribute('ferh'), 'has no "ferh" attribute');
            });
            it('123', () => {
                assert(!('123' in node), 'ignore "123" property');
                assert(!node.hasAttribute('123'), 'has no "123" attribute');
            });
        });
        describe('undefined', () => {
            it('className', () => {
                assert.equal(node.className, '');
                assert(!node.hasAttribute('class'), 'has no "class" attribute');
            });
            it('undef', () => {
                assert(!('undef' in node), 'ignore undefined property');
                assert(!node.hasAttribute('undef'), 'has no "undef" attribute');
            });
        });
    });
    describe('attrset', () => {
        const node = assembler.create('input');
        assembler.attrset = {
            checked : '',
            disabled : '',
            custom_string : 'string',
            custom_boolean : true,
            custom_number : 123,
            custom_undef : undefined,
            custom_null : null
        };
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 3);
        });
        it('checked', () => {
            assert.equal(node.checked, true);
            assert.equal(node.getAttribute('checked'), '');
        });
        it('disabled', () => {
            assert.equal(node.disabled, true);
            assert.equal(node.getAttribute('disabled'), '');
        });
        it('custom_string', () => {
            assert.equal(node.getAttribute('custom_string'), 'string');
            assert(!('custom_string' in node), 'has no such property');
        });
        it('custom_boolean', () => {
            assert(!node.hasAttribute('custom_boolean'), 'has no such attribute');
            assert(!('custom_boolean' in node), 'has no such property');
        });
        it('custom_number', () => {
            assert(!node.hasAttribute('custom_number'), 'has no such attribute');
            assert(!('custom_number' in node), 'has no such property');
        });
        it('custom_undef', () => {
            assert(!node.hasAttribute('custom_undef'), 'has no such attribute');
            assert(!('custom_undef' in node), 'has no such property');
        });
        it('custom_null', () => {
            assert(!node.hasAttribute('custom_null'), 'has no such attribute');
            assert(!('custom_null' in node), 'has no such property');
        });
    });
    describe('dataset', () => {
        const node = assembler.create('div');
        assembler.dataset = {
            simple : 'simple data-attribute',
            camelCased : 'camelCased data-attribute'
        };
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
        });
        it('simple', () => {
            assert.equal(node.dataset.simple, 'simple data-attribute');
            assert.equal(node.getAttribute('data-simple'), 'simple data-attribute');
        });
        it('camelCased', () => {
            assert.equal(node.dataset.camelCased, 'camelCased data-attribute');
            assert.equal(node.getAttribute('data-camel-cased'), 'camelCased data-attribute');
        });
    });
    describe('style', () => {
        const node = assembler.create('span');
        assembler.style = {
            color : 'white',
            backgroundColor : 'black'
        };
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
        });
        it('color', () => {
            assert.equal(node.style.color, 'white');
        });
        it('backgroundColor', () => {
            assert.equal(node.style.backgroundColor, 'black');
        });
    });
    describe('children', () => {
        const child = new HTMLDOMAssembler;
        child.create('span');
        const node = assembler.create('div');
        assembler.children = [
            0, // ignored
            document.createElement('button'),
            '', // ignored
            'text node as string',
            NaN, // ignored
            document.createTextNode('created text node'),
            null, // ignored
            document.createElement('hr'),
            false, // ignored
            document.createComment('Simple DOM Comment node'),
            undefined, // ignored
            child
        ];
        const childNodes = node.childNodes;
        it(`has ${ childNodes.length } child nodes`, () => {
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(childNodes.length, 6);
        });
        it('1: button', () => {
            assert.equal(childNodes[0].constructor, HTMLButtonElement);
            assert.equal(childNodes[0].tagName, 'BUTTON');
        });
        it('2: text node as string', () => {
            assert.equal(childNodes[1].constructor, Text);
            assert.equal(childNodes[1].textContent, 'text node as string');
        });
        it('3: created text node', () => {
            assert.equal(childNodes[2].constructor, Text);
            assert.equal(childNodes[2].nodeValue, 'created text node');
        });
        it('4: hr', () => {
            assert.equal(childNodes[3].constructor, HTMLHRElement);
            assert.equal(childNodes[3].tagName, 'HR');
        });
        it('5: comment', () => {
            assert.equal(childNodes[4].constructor, Comment);
            assert.equal(childNodes[4].textContent, 'Simple DOM Comment node');
        });
        it('6: span', () => {
            assert.equal(childNodes[5].constructor, HTMLSpanElement);
            assert.equal(childNodes[5].tagName, 'SPAN');
        });
    });
});
