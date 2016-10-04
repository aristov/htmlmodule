import { HTMLInstance } from './html.instance';
import chai from 'chai';

const { assert } = chai;
const {
    HTMLElement,
    HTMLUnknownElement,
    HTMLInputElement,
    HTMLHtmlElement,
    HTMLFormElement,
    HTMLSelectElement,
    HTMLBodyElement,
    HTMLAnchorElement,
    HTMLButtonElement,
    HTMLDivElement,
    HTMLSpanElement
} = window;

const instance = new HTMLInstance;

describe('HTML Instance', function() {

    describe('createElement', function() {

        describe('built-in global attributes', function() {

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
                it('proper HTMLElement node created', function() {
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

            describe('hidden', function() {
                const element = instance.createElement('input', {
                    hidden : true
                });
                it('proper HTMLInputElement node created', function() {
                    assert.equal(element.constructor, HTMLInputElement);
                    assert.equal(element.tagName, 'INPUT');
                });
                it('proper number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper hidden attribute set', function() {
                    assert.equal(element.hidden, true);
                    assert.equal(element.getAttribute('hidden'), '');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<input hidden="">');
                });
            });

            describe('lang', function() {
                const element = instance.createElement('html', {
                    lang : 'ru'
                });
                it('proper HTMLHtmlElement node created', function() {
                    assert.equal(element.constructor, HTMLHtmlElement);
                    assert.equal(element.tagName, 'HTML');
                });
                it('proper number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper lang attribute set', function() {
                    assert.equal(element.lang, 'ru');
                    assert.equal(element.getAttribute('lang'), 'ru');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<html lang="ru"></html>');
                });
            });

            describe('spellcheck', function() {
                const element = instance.createElement('body', {
                    spellcheck : true
                });
                it('proper HTMLBodyElement node created', function() {
                    assert.equal(element.constructor, HTMLBodyElement);
                    assert.equal(element.tagName, 'BODY');
                });
                it('proper number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper spellcheck attribute set', function() {
                    assert.equal(element.spellcheck, true);
                    assert.equal(element.getAttribute('spellcheck'), 'true');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<body spellcheck="true"></body>');
                });
            });

            describe('tabIndex', function() {
                const element = instance.createElement('form', {
                    tabIndex : 0
                });
                it('proper HTMLFormElement node created', function() {
                    assert.equal(element.constructor, HTMLFormElement);
                    assert.equal(element.tagName, 'FORM');
                });
                it('proper number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper tabIndex attribute set', function() {
                    assert.equal(element.tabIndex, 0);
                    assert.equal(element.getAttribute('tabindex'), '0');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<form tabindex="0"></form>');
                });
            });

            describe('title', function() {
                const element = instance.createElement('select', {
                    title : 'Select without options'
                });
                it('proper HTMLSelectElement node created', function() {
                    assert.equal(element.constructor, HTMLSelectElement);
                    assert.equal(element.tagName, 'SELECT');
                });
                it('proper number of attributes and child nodes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper title attribute set', function() {
                    assert.equal(element.title, 'Select without options');
                    assert.equal(element.getAttribute('title'), 'Select without options');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<select title="Select without options"></select>');
                });
            });
        });

        describe('adapted interface', function() {

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
                    style : { backgroundColor : 'black' }
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
                    assert.equal(element.style.backgroundColor, 'black');
                    assert.equal(element.getAttribute('style'), 'background-color: black;');
                });
                it('proper outerHTML property value', function() {
                    assert.equal(element.outerHTML, '<span style="background-color: black;"></span>');
                });
            });
        });
    });
});
