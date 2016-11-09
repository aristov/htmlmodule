import { HTMLDOMAssembler } from './assembler.js';
import chai from 'chai';

const { assert } = chai;
const {
    sinon,
    Text,
    Comment,
    HTMLElement,
    HTMLHRElement,
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

const assembler = new HTMLDOMAssembler;

describe('HTMLDOM assembler', () => {

    describe('assemble', () => {

        describe('built-in global attributes', () => {

            describe('id', () => {
                const id = 'element_0';
                const element = assembler.assemble('span', { id });

                it('proper number of attributes', () => {
                    assert(element.hasAttributes(), 'element has attributes');
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `id` attribute', () => {
                    assert.equal(element.id, id);
                });
                it('document finds it', () => {
                    document.body.appendChild(element);
                    assert.equal(document.getElementById(id), element);
                    document.body.removeChild(element);
                });
            });

            describe('className', () => {
                const className = 'foo bar wiz';
                const element = assembler.assemble('element', { className });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes(), 'element has attributes');
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `className` attribute', () => {
                    assert.equal(element.className, className);
                    assert.equal(element.getAttribute('class'), className);
                });
                it('classList interface works properly', () => {
                    assert(element.classList.contains('foo'), 'contains class `foo`');
                    assert(element.classList.contains('bar'), 'contains class `bar`');
                    assert(element.classList.contains('wiz'), 'contains class `wiz`');
                });
                it('document finds it', () => {
                    document.body.appendChild(element);
                    assert.equal(document.getElementsByClassName('foo')[0], element);
                    assert.equal(document.getElementsByClassName('bar')[0], element);
                    assert.equal(document.getElementsByClassName('wiz')[0], element);
                    document.body.removeChild(element);
                });
            });

            describe('textContent', () => {
                const init = { textContent : 'element textContent' };
                const element = assembler.assemble('element', init);
                it('proper number of child nodes', () => {
                    assert(element.hasChildNodes(), 'element has child nodes');
                    assert.equal(element.childNodes.length, 1);
                });
                it('proper children', () => {
                    assert.equal(element.firstChild.constructor, Text);
                    assert.equal(element.firstChild.textContent, 'element textContent');
                    assert.equal(element.textContent, 'element textContent');
                });
            });

            describe('accessKey', () => {
                const init = { accessKey : 'A' };
                const element = assembler.assemble('a', init);

                it('HTMLAnchorElement node created', () => {
                    assert.equal(element.constructor, HTMLAnchorElement);
                    assert.equal(element.tagName, 'A');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `accessKey` attribute', () => {
                    assert.equal(element.accessKey, 'A');
                    assert.equal(element.getAttribute('accesskey'), 'A');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML.toUpperCase(), '<A ACCESSKEY="A"></A>');
                });
            });

            describe('className', () => {
                const className = 'foo bar wiz';
                const init = { className };
                const element = assembler.assemble('div', init);

                it('HTMLDivElement node created', () => {
                    assert.equal(element.constructor, HTMLDivElement);
                    assert.equal(element.tagName, 'DIV');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `className` attribute', () => {
                    assert.equal(element.className, className);
                    assert.equal(element.getAttribute('class'), className);
                    assert(element.classList.contains('foo'));
                    assert(element.classList.contains('bar'));
                    assert(element.classList.contains('wiz'));
                });
                it('document finds it', () => {
                    document.body.appendChild(element);
                    assert.equal(document.getElementsByClassName('foo')[0], element);
                    assert.equal(document.getElementsByClassName('bar')[0], element);
                    assert.equal(document.getElementsByClassName('wiz')[0], element);
                    document.body.removeChild(element);
                });
                it('proper outerHTML property value', () => {
                    assert.equal(element.outerHTML, '<div class="foo bar wiz"></div>');
                });
            });

            describe('contentEditable', () => {
                const init = { contentEditable : 'true' };
                const element = assembler.assemble('unknown', init);

                it('HTMLUnknownElement node created', () => {
                    assert.equal(element.constructor, HTMLUnknownElement);
                    assert.equal(element.tagName, 'UNKNOWN');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `contentEditable` attribute', () => {
                    assert.equal(element.contentEditable, 'true');
                    assert.equal(element.getAttribute('contenteditable'), 'true');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML.toLowerCase(),
                        '<unknown contenteditable="true"></unknown>');
                });
            });

            describe('dir', () => {
                const init = { dir : 'rtl' };
                const element = assembler.assemble('button', init);

                it('HTMLButtonElement node created', () => {
                    assert.equal(element.constructor, HTMLButtonElement);
                    assert.equal(element.tagName, 'BUTTON');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `dir` attribute', () => {
                    assert.equal(element.dir, 'rtl');
                    assert.equal(element.getAttribute('dir'), 'rtl');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<button dir="rtl"></button>');
                });
            });

            describe('draggable', () => {
                const init = { draggable : true };
                const element = assembler.assemble('header', init);

                it('HTMLElement node created', () => {
                    assert.equal(element.constructor, HTMLElement);
                    assert.equal(element.tagName, 'HEADER');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `draggable` attribute', () => {
                    assert.equal(element.draggable, true);
                    assert.equal(element.getAttribute('draggable'), 'true');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<header draggable="true"></header>');
                });
            });

            describe('hidden', () => {
                const init = { hidden : true };
                const element = assembler.assemble('input', init);

                it('HTMLInputElement node created', () => {
                    assert.equal(element.constructor, HTMLInputElement);
                    assert.equal(element.tagName, 'INPUT');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `hidden` attribute', () => {
                    assert.equal(element.hidden, true);
                    assert.equal(element.getAttribute('hidden'), '');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<input hidden="">');
                });
            });

            describe('id', () => {
                const id = 'element_0';
                const init = { id };
                const element = assembler.assemble('span', init);

                it('HTMLSpanElement node created', () => {
                    assert.equal(element.constructor, HTMLSpanElement);
                    assert.equal(element.tagName, 'SPAN');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `id` attribute', () => {
                    assert.equal(element.id, id);
                });
                it('document finds it', () => {
                    document.body.appendChild(element);
                    assert.equal(document.getElementById(id), element);
                    document.body.removeChild(element);
                });
                it('proper outerHTML property value', () => {
                    assert.equal(element.outerHTML, '<span id="element_0"></span>');
                });
            });

            describe('innerHTML', () => {
                const init = { innerHTML : '<span class="box"></span>' };
                const element = assembler.assemble('body', init);

                it('HTMLBodyElement node created', () => {
                    assert.equal(element.constructor, HTMLBodyElement);
                    assert.equal(element.tagName, 'BODY');
                });
                it('proper number of child nodes', () => {
                    assert(element.hasChildNodes());
                    assert.equal(element.childNodes.length, 1);
                });
                it('proper child node', () => {
                    const child = element.firstChild;
                    assert.equal(child.constructor, HTMLSpanElement);
                    assert.equal(child.outerHTML, '<span class="box"></span>');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<body><span class="box"></span></body>');
                });
            });

            describe('lang', () => {
                const init = { lang : 'ru' };
                const element = assembler.assemble('html', init);

                it('HTMLHtmlElement node created', () => {
                    assert.equal(element.constructor, HTMLHtmlElement);
                    assert.equal(element.tagName, 'HTML');
                });
                it('proper number of attributes and child nodes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('has proper lang attribute set', () => {
                    assert.equal(element.lang, 'ru');
                    assert.equal(element.getAttribute('lang'), 'ru');
                });
                it('proper outerHTML property value', () => {
                    assert.equal(element.outerHTML, '<html lang="ru"></html>');
                });
            });

            describe('tabIndex', () => {
                const init = { tabIndex : 0 };
                const element = assembler.assemble('form', init);

                it('HTMLFormElement node created', () => {
                    assert.equal(element.constructor, HTMLFormElement);
                    assert.equal(element.tagName, 'FORM');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `tabIndex` attribute', () => {
                    assert.equal(element.tabIndex, 0);
                    assert.equal(element.getAttribute('tabindex'), '0');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML.toLowerCase(), '<form tabindex="0"></form>');
                });
            });

            describe('title', () => {
                const init = { title : 'Select without options' };
                const element = assembler.assemble('select', init);

                it('HTMLSelectElement node created', () => {
                    assert.equal(element.constructor, HTMLSelectElement);
                    assert.equal(element.tagName, 'SELECT');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper `title` attribute', () => {
                    assert.equal(element.title, 'Select without options');
                    assert.equal(element.getAttribute('title'), 'Select without options');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<select title="Select without options"></select>');
                });
            });
        });

        describe('built-in global event handlers', () => {
            it('onclick', () => {
                const onclick = sinon.spy();
                const init = { onclick };
                const element = assembler.assemble('button', init);

                assert(onclick.notCalled);
                element.click();
                assert(onclick.calledOnce);
                element.click();
                assert(onclick.calledTwice);
            });
            it('click listener', () => {
                const listener = sinon.spy();
                const element = assembler.assemble('button');

                element.addEventListener('click', listener);
                document.body.appendChild(element);
                assert(listener.notCalled);
                element.click();
                assert(listener.calledOnce);
                element.click();
                assert(listener.calledTwice);
                document.body.removeChild(element);
            });
        });

        describe('adapted interface', () => {

            describe('attrset', () => {
                const init = { attrset : { selected : '' } };
                const element = assembler.assemble('option', init);
                it('proper number of attributes', () => {
                    assert(element.hasAttributes(), 'element has attributes');
                    assert.equal(element.attributes.length, 1);
                });
                it('proper attributes assigned', () => {
                    assert.equal(element.getAttribute('selected'), '');
                });
            });

            describe('children', () => {
                const child = new HTMLDOMAssembler;
                child.assemble('span');
                const element = assembler.assemble('div', {
                    children : [
                        0,
                        assembler.assemble('button'),
                        '',
                        'text node as string',
                        NaN,
                        document.createTextNode('created text node'),
                        null,
                        document.createElement('hr'),
                        false,
                        document.createComment('Simple DOM Comment node'),
                        undefined,
                        child
                    ]
                });
                const childNodes = element.childNodes;
                it('proper number of child nodes', () => {
                    assert(element.hasChildNodes(), 'element has child nodes');
                    assert.equal(childNodes.length, 6);
                });
                it('Proper child nodes', () => {
                    assert.equal(childNodes[0].constructor, HTMLButtonElement);
                    assert.equal(childNodes[0].tagName, 'BUTTON');
                    assert.equal(childNodes[1].constructor, Text);
                    assert.equal(childNodes[1].textContent, 'text node as string');
                    assert.equal(childNodes[2].constructor, Text);
                    assert.equal(childNodes[2].nodeValue, 'created text node');
                    assert.equal(childNodes[3].constructor, HTMLHRElement);
                    assert.equal(childNodes[3].tagName, 'HR');
                    assert.equal(childNodes[4].constructor, Comment);
                    assert.equal(childNodes[4].textContent, 'Simple DOM Comment node');
                    assert.equal(childNodes[5].constructor, HTMLSpanElement);
                    assert.equal(childNodes[5].tagName, 'SPAN');
                });
            });

            describe('dataset', () => {
                const init = { dataset : { camelCased : 'custom attribute' } };
                const element = assembler.assemble('div', init);

                it('HTMLDivElement node created', () => {
                    assert.equal(element.constructor, HTMLDivElement);
                    assert.equal(element.tagName, 'DIV');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper custom `data-` attribute', () => {
                    assert.equal(element.dataset.camelCased, 'custom attribute');
                    assert.equal(element.getAttribute('data-camel-cased'), 'custom attribute');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<div data-camel-cased="custom attribute"></div>');
                });
            });

            describe('style', () => {
                const init = { style : { backgroundColor : 'black' } };
                const element = assembler.assemble('span', init);

                it('HTMLSpanElement node created', () => {
                    assert.equal(element.constructor, HTMLSpanElement);
                    assert.equal(element.tagName, 'SPAN');
                });
                it('proper number of attributes', () => {
                    assert(element.hasAttributes());
                    assert.equal(element.attributes.length, 1);
                });
                it('proper style declaration assigned', () => {
                    assert.equal(element.style.backgroundColor, 'black');
                    assert.equal(element.getAttribute('style'), 'background-color: black;');
                });
                it('proper `outerHTML` property value', () => {
                    assert.equal(element.outerHTML, '<span style="background-color: black;"></span>');
                });
            });
        });
    });
});
