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

describe('Instance', function() {
    describe('createElement', function() {
        describe('Should create Element node with proper tagName', function() {
            const instance = new Instance;
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
        describe('Should set initial properties on the created element', function() {
            const instance = new Instance;
            const element = instance.createElement('element', {
                id : 'element_0',
                className : 'element className element_class_name',
                textContent : 'element textContent'
            });
            it('proper Element node created', function() {
                assert.equal(element.constructor, Element);
                assert.equal(element.tagName, 'element');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.hasChildNodes(), true);
                assert.equal(element.childNodes.length, 1);
            });
            it('has proper id and className attributes', function() {
                assert.equal(element.id, 'element_0');
                assert.equal(element.className, 'element className element_class_name');
            });
            it('proper relationship properties assigned', function() {
                assert.equal(element.firstChild.constructor, Text);
                assert.equal(element.textContent, 'element textContent');
                assert.equal(element.innerHTML, 'element textContent');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML,
                    '<element ' +
                        'id="element_0" ' +
                        'class="element className element_class_name">' +
                            'element textContent' +
                    '</element>');
            });
        });
        describe('attrset', function() {
            describe('Should set attributes from the given attrset dictionary object', function() {
                const instance = new Instance;
                const element = instance.createElement('element', {
                    attrset : {
                        id : 'element_attribute_0',
                        'class' : 'class attribute value',
                        attrname : 'attrvalue',
                        __ : '__',
                        DOM : 'Element',
                        accepts : 'any',
                        custom : 'attribute',
                        names : 'and',
                        values : '!'
                    }
                });

                it('proper Element node created', function() {
                    assert.equal(element.constructor, Element);
                    assert.equal(element.tagName, 'element');
                });

                it('has valid number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.hasChildNodes(), false);
                    assert.equal(element.attributes.length, 9);
                    assert.equal(element.childNodes.length, 0);
                });

                it('has proper id and className attributes', function() {
                    assert.equal(element.id, 'element_attribute_0');
                    assert.equal(element.className, 'class attribute value');
                });

                it('has all other custum attributes assigned', function() {
                    assert.equal(element.getAttribute('attrname'), 'attrvalue');
                    assert.equal(element.getAttribute('__'), '__');
                    assert.equal(element.getAttribute('DOM'), 'Element');
                    assert.equal(element.getAttribute('accepts'), 'any');
                    assert.equal(element.getAttribute('custom'), 'attribute');
                    assert.equal(element.getAttribute('names'), 'and');
                    assert.equal(element.getAttribute('values'), '!');
                });

                it('has proper outerHTML property value', function() {
                    // todo use html-differ (attribute order is not guarantied)
                    assert.equal(element.outerHTML,
                        '<element ' +
                            'id="element_attribute_0" ' +
                            'class="class attribute value" ' +
                            'attrname="attrvalue" ' +
                            '__="__" ' +
                            'DOM="Element" ' +
                            'accepts="any" ' +
                            'custom="attribute" ' +
                            'names="and" ' +
                            'values="!"></element>');
                });
            });
        });
        describe('children', function() {
            describe('Should append children from the given mixed content object', function() {
                const instance = new Instance;
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
                it('has proper child nodes count', function() {
                    assert(element.hasChildNodes());
                    assert.equal(element.childNodes.length, 5);
                });

                it('Proper child nodes', function() {
                    assert.equal(element.childNodes[0].constructor, Element);
                    assert.equal(element.childNodes[0].tagName, 'child');
                    assert.equal(element.childNodes[1].constructor, Text);
                    assert.equal(element.childNodes[1].textContent, 'text node as string');
                    assert.equal(element.childNodes[2].constructor, Text);
                    assert.equal(element.childNodes[2].nodeValue, 'created text node');
                    assert.equal(element.childNodes[3].constructor, HTMLHRElement);
                    assert.equal(element.childNodes[3].tagName, 'HR');
                    assert.equal(element.childNodes[4].constructor, Comment);
                    assert.equal(element.childNodes[4].textContent, 'Simple DOM Comment node');
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
});
