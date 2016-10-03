import { HTMLInstance } from './html.instance';
import chai from 'chai';

const { assert } = chai;
const {
    HTMLDivElement,
    HTMLSpanElement
} = window;

const instance = new HTMLInstance;

describe('HTMLInstance', function() {
    describe('createElement', function() {
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
