import { XML_NS_URI, DOMAssembler, NodeInit } from './dom';
import chai from 'chai';

const { assert } = chai;
const {
    document,
    Text,
    Comment,
    Element,
    HTMLHRElement,
    HTMLSpanElement,
    JSON
} = window;

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
            it.skip('proper `outerHTML` property value', () => {
                document.body.appendChild(element);
                assert.equal(element.outerHTML, '<element></element>');
            });
        });

        describe('build-in attributes', function() {

            describe('id', function() {
                const element = assembler.createElement('element', { id : 'element_0' });

                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `id` attribute', function() {
                    assert.equal(element.id, 'element_0');
                });
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML,
                        '<element id="element_0"></element>');
                });
            });

            describe('className', function() {
                const element = assembler.createElement('element', {
                    className : 'element className element_class_name'
                });
                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `className` attribute', function() {
                    assert.equal(element.className, 'element className element_class_name');
                    assert.equal(element.getAttribute('class'), 'element className element_class_name');
                    assert(element.classList.contains('element'));
                    assert(element.classList.contains('className'));
                    assert(element.classList.contains('element_class_name'));
                });
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML,
                        '<element class="element className element_class_name"></element>');
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
                    /*assert.equal(element.innerHTML, 'element textContent');*/
                });
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<element>element textContent</element>');
                });
            });

            describe.skip('innerHTML', function() {
                const element = assembler.createElement('element', {
                    innerHTML : '<span class="box"></span>'
                });
                it('proper number of child nodes', function() {
                    assert(element.hasChildNodes());
                    assert.equal(element.childNodes.length, 1);
                });
                describe('proper child node', function() {
                    const child = element.firstChild;
                    assert.equal(child.constructor, HTMLSpanElement);
                    assert.equal(child.outerHTML, '<span class="box"></span>');
                });
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<element><span class="box"></span></element>');
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
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<element attrname="attribute value"></element>');
                });
            });

            describe('children', function() {
                const element = assembler.createElement('element', {
                    children : [
                        assembler.createElement('child'),
                        'text node as string',
                        document.createTextNode('created text node'),
                        document.createElement('hr'),
                        document.createComment('Simple DOM Comment node'),
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
                it.skip('proper `outerHTML` attribute value', function() {
                    assert.equal(element.outerHTML,
                        '<element>' +
                            '<child></child>' +
                            'text node as string' +
                            'created text node' +
                            '<hr>' +
                            '<!--Simple DOM Comment node-->' +
                        '</element>');
                });
            });
        });
    });
});

describe('Node init', function() {
    const init = { id : 'random-id' };
    it('return the same object', () => {
        assert.equal(NodeInit(init), init);
    });
    it('proper strigified to JSON', () => {
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
