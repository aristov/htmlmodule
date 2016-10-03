import { HTMLInstance } from './html.instance';
import chai from 'chai';

const { assert } = chai;
const {
    HTMLElement,
    HTMLUnknownElement,
    HTMLAnchorElement,
    HTMLButtonElement,
    HTMLDivElement,
    HTMLSpanElement
} = window;

const instance = new HTMLInstance;

describe('HTMLInstance', function() {
    describe('createElement', function() {
        describe('accessKey', function() {
            const element = instance.createElement('a', {
                accessKey : 'A'
            });
            it('proper HTMLAnchorElement node created', function() {
                assert.equal(element.constructor, HTMLAnchorElement);
                assert.equal(element.tagName, 'A');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('has proper accessKey attribute', function() {
                assert.equal(element.accessKey, 'A');
                assert.equal(element.getAttribute('accesskey'), 'A');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<a accesskey="A"></a>');
            });
        });
        describe('contentEditable', function() {
            const element = instance.createElement('unknown', {
                contentEditable : 'true'
            });
            it('proper HTMLUnknownElement node created', function() {
                assert.equal(element.constructor, HTMLUnknownElement);
                assert.equal(element.tagName, 'UNKNOWN');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('has proper contentEditable attribute set', function() {
                assert.equal(element.contentEditable, 'true');
                assert.equal(element.getAttribute('contenteditable'), 'true');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<unknown contenteditable="true"></unknown>');
            });
        });
        describe('dir', function() {
            const element = instance.createElement('button', {
                dir : 'rtl'
            });
            it('proper HTMLButtonElement node created', function() {
                assert.equal(element.constructor, HTMLButtonElement);
                assert.equal(element.tagName, 'BUTTON');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('has proper dir attribute set', function() {
                assert.equal(element.dir, 'rtl');
                assert.equal(element.getAttribute('dir'), 'rtl');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<button dir="rtl"></button>');
            });
        });
        describe('draggable', function() {
            const element = instance.createElement('header', {
                draggable : true
            });
            it('proper HTMLButtonElement node created', function() {
                assert.equal(element.constructor, HTMLElement);
                assert.equal(element.tagName, 'HEADER');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('has proper draggable attribute set', function() {
                assert.equal(element.draggable, true);
                assert.equal(element.getAttribute('draggable'), 'true');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<header draggable="true"></header>');
            });
        });
        describe('dataset', function() {
            const element = instance.createElement('div', {
                dataset : { camelCased : 'custom attribute' }
            });
            it('proper HTMLDivElement node created', function() {
                assert.equal(element.constructor, HTMLDivElement);
                assert.equal(element.tagName, 'DIV');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('has proper `data-` attributes', function() {
                assert.equal(element.dataset.camelCased, 'custom attribute');
                assert.equal(element.getAttribute('data-camel-cased'), 'custom attribute');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML, '<div data-camel-cased="custom attribute"></div>');
            });
        });
        describe('style', function() {
            const element = instance.createElement('span', {
                style : {
                    color : 'white',
                    backgroundColor : 'black'
                }
            });
            it('proper HTMLSpanElement node created', function() {
                assert.equal(element.constructor, HTMLSpanElement);
                assert.equal(element.tagName, 'SPAN');
            });
            it('proper number of attributes and child nodes', function() {
                assert.equal(element.hasAttributes(), true);
                assert.equal(element.attributes.length, 1);
            });
            it('proper proper style declaration assigned', function() {
                assert.equal(element.style.color, 'white');
                assert.equal(element.style.backgroundColor, 'black');
                assert.equal(element.getAttribute('style'), 'color: white; background-color: black;');
            });
            it('proper outerHTML property value', function() {
                assert.equal(element.outerHTML,
                    '<span style="color: white; background-color: black;"></span>');
            });
        });
    });
});
