import { Instance } from './dom.instance';
import chai from 'chai';

const { assert } = chai;
const {
    document,
    Text,
    Comment,
    Element,
    HTMLHRElement
} = window;

const instance = new Instance;

describe('DOMInstance', function() {
    describe('createElement', function() {
        describe('tagName', function() {
            const element = instance.createElement('element');
            it('proper Element node created', function() {
                assert.equal(element.constructor, Element);
                assert.equal(element.tagName, 'element');
            });
            it('proper attributes and child nodes number', function() {
                assert.equal(element.hasAttributes(), false);
                assert.equal(element.hasChildNodes(), false);
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<element></element>');
            });
        });
        describe('id', function() {
            const element = instance.createElement('element', {
                id : 'element_0'
            });
            it('proper number of attributes', function() {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('has proper id attribute value', function() {
                assert.equal(element.id, 'element_0');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML,
                    '<element id="element_0"></element>');
            });
        });
        describe('className', function() {
            const element = instance.createElement('element', {
                className : 'element className element_class_name'
            });
            it('proper number of attributes', function() {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('has proper className attribute value', function() {
                assert.equal(element.className, 'element className element_class_name');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML,
                    '<element class="element className element_class_name"></element>');
            });
        });
        describe('textContent', function() {
            const element = instance.createElement('element', {
                textContent : 'element textContent'
            });
            it('proper number of child nodes', function() {
                assert(element.hasChildNodes());
                assert.equal(element.childNodes.length, 1);
            });
            it('proper children', function() {
                assert.equal(element.firstChild.constructor, Text);
                assert.equal(element.textContent, 'element textContent');
                assert.equal(element.innerHTML, 'element textContent');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<element>element textContent</element>');
            });
        });
        describe('innerHTML', function() {
            const element = instance.createElement('element', {
                innerHTML : '<child foo="bar"/>'
            });
            it('proper number of child nodes', function() {
                assert(element.hasChildNodes());
                assert.equal(element.childNodes.length, 1);
            });
            it('proper children', function() {
                const child = element.firstChild;
                assert.equal(child.constructor, Element);
                assert.equal(child.getAttribute('foo'), 'bar');
                assert.equal(child.outerHTML, '<child foo="bar"></child>');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<element><child foo="bar"></child></element>');
            });
        });
        describe('attrset', function() {
            const element = instance.createElement('element', {
                attrset : { attrname : 'attribute value' }
            });
            it('proper Element node created', function() {
                assert.equal(element.constructor, Element);
                assert.equal(element.tagName, 'element');
            });
            it('has valid number of attributes', function() {
                assert(element.hasAttributes());
                assert.equal(element.attributes.length, 1);
            });
            it('has all other custum attributes assigned', function() {
                assert.equal(element.getAttribute('attrname'), 'attribute value');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<element attrname="attribute value"></element>');
            });
        });
        describe('children', function() {
            const element = instance.createElement('element', {
                children : [
                    instance.createElement('child'),
                    'text node as string',
                    new Text('created text node'),
                    document.createElement('hr'),
                    document.createComment('Simple DOM Comment node'),
                ]
            });
            it('proper Element node created', function() {
                assert.equal(element.constructor, Element);
                assert.equal(element.tagName, 'element');
            });
            const childNodes = element.childNodes;
            it('has proper child nodes count', function() {
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
            it('proper outerHTML attribute value', function() {
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
