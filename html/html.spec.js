import { HTMLAssembler } from './html.js';
import chai from 'chai';

const { assert } = chai;
const {
    HTMLElement,
    HTMLUnknownElement,
    HTMLInputElement,
    HTMLHtmlElement,
    HTMLFormElement,
    HTMLSelectElement,
    HTMLAnchorElement,
    HTMLBodyElement,
    HTMLButtonElement,
    HTMLDivElement,
    HTMLSpanElement
} = window;

const assembler = new HTMLAssembler;

describe('HTML assembler', function() {

    describe('createElement', function() {

        describe('built-in global attributes', function() {

            describe('accessKey', function() {
                const element = assembler.createElement('a', { accessKey : 'A' });

                it('HTMLAnchorElement node created', function() {
                    assert.equal(element.constructor, HTMLAnchorElement);
                    assert.equal(element.tagName, 'A');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `accessKey` attribute', function() {
                    assert.equal(element.accessKey, 'A');
                    assert.equal(element.getAttribute('accesskey'), 'A');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML.toUpperCase(), '<A ACCESSKEY="A"></A>');
                });
            });

            // from dom/dom.spec (victims of IE11)
            describe('className', function() {
                const element = assembler.createElement('div', {
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
            });

            describe('contentEditable', function() {
                const element = assembler.createElement('unknown', { contentEditable : 'true' });

                it('HTMLUnknownElement node created', function() {
                    assert.equal(element.constructor, HTMLUnknownElement);
                    assert.equal(element.tagName, 'UNKNOWN');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `contentEditable` attribute', function() {
                    assert.equal(element.contentEditable, 'true');
                    assert.equal(element.getAttribute('contenteditable'), 'true');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML.toLowerCase(),
                        '<unknown contenteditable="true"></unknown>');
                });
            });

            describe('dir', function() {
                const element = assembler.createElement('button', { dir : 'rtl' });

                it('HTMLButtonElement node created', function() {
                    assert.equal(element.constructor, HTMLButtonElement);
                    assert.equal(element.tagName, 'BUTTON');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `dir` attribute', function() {
                    assert.equal(element.dir, 'rtl');
                    assert.equal(element.getAttribute('dir'), 'rtl');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<button dir="rtl"></button>');
                });
            });

            describe('draggable', function() {
                const element = assembler.createElement('header', { draggable : true });

                it.skip('HTMLElement node created', function() {
                    assert.equal(element.constructor, HTMLElement);
                    assert.equal(element.tagName, 'HEADER');
                });
                it.skip('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it.skip('proper `draggable` attribute', function() {
                    assert.equal(element.draggable, true);
                    assert.equal(element.getAttribute('draggable'), 'true');
                });
                it.skip('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<header draggable="true"></header>');
                });
            });

            describe('hidden', function() {
                const element = assembler.createElement('input', { hidden : true });

                it('HTMLInputElement node created', function() {
                    assert.equal(element.constructor, HTMLInputElement);
                    assert.equal(element.tagName, 'INPUT');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `hidden` attribute', function() {
                    assert.equal(element.hidden, true);
                    assert.equal(element.getAttribute('hidden'), '');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<input hidden="">');
                });
            });

            // from dom/dom.spec (victims of IE11)
            describe('id', function() {
                const element = assembler.createElement('span', { id : 'element_0' });

                it('proper number of attributes', function() {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `id` attribute', function() {
                    assert.equal(element.id, 'element_0');
                });
            });

            describe('innerHTML', function() {
                const element = assembler.createElement('body', {
                    innerHTML : '<span class="box"></span>'
                });
                it('HTMLBodyElement node created', function() {
                    assert.equal(element.constructor, HTMLBodyElement);
                    assert.equal(element.tagName, 'BODY');
                });
                it('proper number of child nodes', function() {
                    assert(element.hasChildNodes());
                    assert.equal(element.childNodes.length, 1);
                });
                it('proper child node', function() {
                    const child = element.firstChild;
                    assert.equal(child.constructor, HTMLSpanElement);
                    assert.equal(child.outerHTML, '<span class="box"></span>');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<body><span class="box"></span></body>');
                });
            });

            describe('lang', function() {
                const element = assembler.createElement('html', { lang : 'ru' });

                it('HTMLHtmlElement node created', function() {
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

            describe('tabIndex', function() {
                const element = assembler.createElement('form', { tabIndex : 0 });

                it('HTMLFormElement node created', function() {
                    assert.equal(element.constructor, HTMLFormElement);
                    assert.equal(element.tagName, 'FORM');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `tabIndex` attribute', function() {
                    assert.equal(element.tabIndex, 0);
                    assert.equal(element.getAttribute('tabindex'), '0');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML.toLowerCase(), '<form tabindex="0"></form>');
                });
            });

            describe('title', function() {
                const element = assembler.createElement('select', { title : 'Select without options' });

                it('HTMLSelectElement node created', function() {
                    assert.equal(element.constructor, HTMLSelectElement);
                    assert.equal(element.tagName, 'SELECT');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `title` attribute', function() {
                    assert.equal(element.title, 'Select without options');
                    assert.equal(element.getAttribute('title'), 'Select without options');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<select title="Select without options"></select>');
                });
            });
        });

        /*describe('built-in global event handlers', function() {
            const onclick = sinon.spy();
            const element = assembler.createElement('button', { onclick });
            it('onclick', () => {
                assert(!onclick.called);
                element.click();
                assert(onclick.calledOnce);
                element.click();
                assert(onclick.calledTwice);
            });
        });*/

        describe('adapted interface', function() {

            describe('dataset', function() {
                const element = assembler.createElement('div', {
                    dataset : { camelCased : 'custom attribute' }
                });
                it('HTMLDivElement node created', function() {
                    assert.equal(element.constructor, HTMLDivElement);
                    assert.equal(element.tagName, 'DIV');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper custom `data-` attribute', function() {
                    assert.equal(element.dataset.camelCased, 'custom attribute');
                    assert.equal(element.getAttribute('data-camel-cased'), 'custom attribute');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<div data-camel-cased="custom attribute"></div>');
                });
            });

            describe('style', function() {
                const element = assembler.createElement('span', {
                    style : { backgroundColor : 'black' }
                });
                it('HTMLSpanElement node created', function() {
                    assert.equal(element.constructor, HTMLSpanElement);
                    assert.equal(element.tagName, 'SPAN');
                });
                it('proper number of attributes', function() {
                    assert.equal(element.hasAttributes(), true);
                    assert.equal(element.attributes.length, 1);
                });
                it('proper proper style declaration assigned', function() {
                    assert.equal(element.style.backgroundColor, 'black');
                    assert.equal(element.getAttribute('style'), 'background-color: black;');
                });
                it('proper `outerHTML` property value', function() {
                    assert.equal(element.outerHTML, '<span style="background-color: black;"></span>');
                });
            });
        });
    });
});
