// todo => .spec.js

// import mocha from 'mocha';
// import assert from 'assert';
import chai from 'chai';
import { Instance } from './dom.instance';

// const { describe, it } = mocha;
const { assert, expect, should } = chai;

describe('Instance', function() {
  describe('createElement', function() {
    it('Should create Element node with proper tagName', function() {
        const instance = new Instance;
        const element = instance.createElement('element');

        assert.equal(element.constructor, Element);
        assert.equal(element.tagName, 'element');

        assert.equal(element.hasAttributes(), false);
        assert.equal(element.hasChildNodes(), false);

        assert.equal(element.outerHTML, '<element></element>');
    });
    it('Should set initial properties on the created element', function() {
        const instance = new Instance;
        const element = instance.createElement('element', {
            id : 'element_0',
            className : 'element className element_class_name',
            textContent : 'element textContent'
        });
        assert.equal(element.constructor, Element);
        assert.equal(element.tagName, 'element');

        assert.equal(element.hasAttributes(), true);
        assert.equal(element.hasChildNodes(), true);
        assert.equal(element.childNodes.length, 1);

        assert.equal(element.id, 'element_0');
        assert.equal(element.className, 'element className element_class_name');

        assert.equal(element.firstChild.constructor, Text);
        assert.equal(element.textContent, 'element textContent');
        assert.equal(element.innerHTML, 'element textContent');
        assert.equal(element.outerHTML,
            '<element ' +
                'id="element_0" ' +
                'class="element className element_class_name">' +
                    'element textContent' +
            '</element>');
    });
    describe('attrset', function() {
        it('Should set attributes from the given attrset dictionary object', function() {
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

            assert.equal(element.constructor, Element);
            assert.equal(element.tagName, 'element');

            assert.equal(element.hasAttributes(), true);
            assert.equal(element.hasChildNodes(), false);
            assert.equal(element.attributes.length, 9);

            assert.equal(element.id, 'element_attribute_0');
            assert.equal(element.className, 'class attribute value');

            assert.equal(element.getAttribute('attrname'), 'attrvalue');
            assert.equal(element.getAttribute('__'), '__');
            assert.equal(element.getAttribute('DOM'), 'Element');
            assert.equal(element.getAttribute('accepts'), 'any');
            assert.equal(element.getAttribute('custom'), 'attribute');
            assert.equal(element.getAttribute('names'), 'and');
            assert.equal(element.getAttribute('values'), '!');

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
    describe('children', function() {
        it('Should append children from the given mixed content object', function() {
            const instance = new Instance;
            const element = instance.createElement('element', {
                children : [
                    instance.createElement('child'),
                    'text node as string',
                    document.createTextNode('created text node'),
                    document.createElement('hr'),
                    document.createComment('Simple DOM Comment node'),
                ]
            });
            assert.equal(element.constructor, Element);
            assert.equal(element.tagName, 'element');

            assert(element.hasChildNodes());
            assert.equal(element.childNodes.length, 5);

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
