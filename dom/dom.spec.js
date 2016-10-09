import { NodeInit, DOMAssembler, XML_NS_URI } from './dom';
import chai from 'chai';

const { assert } = chai;
const {
    document,
    Text,
    Comment,
    Element,
    HTMLHRElement,
    JSON
} = window;

describe('Node init', function() {
    const init = { id : 'random-id' };
    it('return the same object', () => {
        assert.equal(NodeInit(init), init);
    });
    it('properly strigified to JSON', () => {
        assert.equal(JSON.stringify(NodeInit(init)), '{"id":"random-id"}');
    });
    it('properly assign string as children', () => {
        const string = 'string as textContent';
        const init = NodeInit(string);
        assert.equal(init.children, string);
    });
    it('properly assign array as children', () => {
        const children = ['a', 'b', 'c'];
        const init = NodeInit(children);
        assert.equal(init.children, children);
    });
    it('properly assign element as children', () => {
        const child = document.createElement('a');
        const init = NodeInit(child);
        assert.equal(init.children, child);
    });
    it('passes through undefined', () => {
        const init = NodeInit(undefined);
        assert.equal(init, undefined);
    });
});

const assembler = new DOMAssembler;

describe('DOM assembler', function() {

    describe('createElement', function() {

        describe('general', function() {
            const element = assembler.createElement('element');

            it('Element created', () => {
                assert.equal(element.constructor, Element);
            });
            it('proper tagName', () => {
                assert.equal(element.tagName, 'element')
            });
            it('proper namespace URI', () => {
                assert.equal(element.namespaceURI, XML_NS_URI)
            });
            it('has no attributes and no child nodes', () => {
                assert(!element.hasAttributes());
                assert(!element.hasChildNodes());
            });
        });

        describe('build-in attributes', function() {

            describe('id', function() {
                const id = 'element_0';
                const element = assembler.createElement('element', { id });

                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `id` attribute', function() {
                    assert.equal(element.id, id);
                });
                it('document finds it', function() {
                    document.body.appendChild(element);
                    assert.equal(document.getElementById(id), element);
                    document.body.removeChild(element);
                });
            });

            describe('className', function() {
                const className = 'foo bar wiz';
                const element = assembler.createElement('element', { className });
                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `className` attribute', function() {
                    assert.equal(element.className, className);
                    assert.equal(element.getAttribute('class'), className);
                });
                it('classList interface works properly', function() {
                    assert(element.classList.contains('foo'));
                    assert(element.classList.contains('bar'));
                    assert(element.classList.contains('wiz'));
                });
                it('document finds it', function() {
                    document.body.appendChild(element);
                    assert.equal(document.getElementsByClassName('foo')[0], element);
                    assert.equal(document.getElementsByClassName('bar')[0], element);
                    assert.equal(document.getElementsByClassName('wiz')[0], element);
                    document.body.removeChild(element);
                });
            });

            describe('textContent', function() {
                const element = assembler.createElement('element', {
                    textContent : 'element textContent'
                });
                it('proper number of child nodes', function() {
                    assert(element.hasChildNodes());
                    assert.equal(element.childNodes.length, 1);
                });
                it('proper children', function() {
                    assert.equal(element.firstChild.constructor, Text);
                    assert.equal(element.firstChild.textContent, 'element textContent');
                    assert.equal(element.textContent, 'element textContent');
                });
            });
        });

        describe('adapted interface', function() {

            describe('attrset', function() {
                const element = assembler.createElement('element', {
                    attrset : { attrname : 'attribute value' }
                });
                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper attributes assigned', function() {
                    assert.equal(element.getAttribute('attrname'), 'attribute value');
                });
            });

            describe('children', function() {
                const element = assembler.createElement('element', {
                    children : [
                        0,
                        assembler.createElement('child'),
                        '',
                        'text node as string',
                        NaN,
                        document.createTextNode('created text node'),
                        null,
                        document.createElement('hr'),
                        false,
                        document.createComment('Simple DOM Comment node'),
                        undefined
                    ]
                });
                const childNodes = element.childNodes;
                it('proper number of child nodes', function() {
                    assert(element.hasChildNodes());
                    assert.equal(childNodes.length, 5);
                });
                it('Proper child nodes', function() {
                    assert.equal(childNodes[0].constructor, Element);
                    assert.equal(childNodes[0].tagName, 'child');
                    assert.equal(childNodes[1].constructor, Text);
                    assert.equal(childNodes[1].textContent, 'text node as string');
                    assert.equal(childNodes[2].constructor, Text);
                    assert.equal(childNodes[2].nodeValue, 'created text node');
                    assert.equal(childNodes[3].constructor, HTMLHRElement);
                    assert.equal(childNodes[3].tagName, 'HR');
                    assert.equal(childNodes[4].constructor, Comment);
                    assert.equal(childNodes[4].textContent, 'Simple DOM Comment node');
                });
            });
        });
    });
});
