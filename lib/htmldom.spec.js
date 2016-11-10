import {
    htmldom,
    a, abbr, address, area, article, aside,
    b, base, blockquote, body, br, button,
    caption, cite, code, col, colgroup,
    del, dd, details, dfn, div, dl, dt,
    em, embed,
    fieldset, figcaption, figure, footer, form,
    h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html,
    i, iframe, img, input, ins,
    kbd,
    label, legend, li, link,
    main, map, mark, meta,
    nav, noscript,
    object, ol, option, optgroup, output,
    p, param, pre,
    q,
    s, samp, script, small, style,
    section, select, strong, span, summary, sup, sub,
    table, textarea, tbody, td, tfoot, th, thead, title, tr,
    u, ul,
    variable,
    wbr
} from './htmldom';

import chai from 'chai';

const {
    sinon,
    Node, HTMLElement, HTMLUnknownElement,
    HTMLAnchorElement, HTMLAreaElement,
    HTMLBaseElement, HTMLBodyElement, HTMLButtonElement, HTMLBRElement,
    HTMLDivElement, HTMLDListElement,
    HTMLEmbedElement,
    HTMLFieldSetElement,
    HTMLFormElement,
    HTMLHeadingElement, HTMLHeadElement, HTMLHRElement, HTMLHtmlElement,
    HTMLIFrameElement, HTMLImageElement, HTMLInputElement,
    HTMLLabelElement, HTMLLegendElement, HTMLLIElement, HTMLLinkElement,
    HTMLMapElement, HTMLModElement, HTMLMetaElement,
    HTMLObjectElement, HTMLOListElement, HTMLOptGroupElement, HTMLOptionElement, HTMLOutputElement,
    HTMLParagraphElement, HTMLPreElement,
    HTMLScriptElement, HTMLSelectElement, HTMLSpanElement, HTMLStyleElement,
    HTMLTableCaptionElement, HTMLTableColElement, HTMLTextAreaElement,
    HTMLQuoteElement,
} = window;

const { TEXT_NODE, ELEMENT_NODE } = Node;
const { assert } = chai;

describe('HTMLDOM library', () => {

    describe('Global attributes', () => {

        describe('accessKey', () => {
            const element = htmldom('a', { accessKey : 'A' });

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
            const element = htmldom('div', { className });

            it('proper number of attributes', () => {
                assert(element.hasAttributes(), 'has attributes');
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
            it('proper outerHTML property value', () => {
                assert.equal(element.outerHTML, '<div class="foo bar wiz"></div>');
            });
        });

        describe('contentEditable', () => {
            const element = htmldom('unknown', { contentEditable : 'true' });

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
            const element = htmldom('button', { dir : 'rtl' });

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
            const element = htmldom('header', { draggable : true });

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
            const element = htmldom('input', { hidden : true });

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
            const element = htmldom('span', { id });

            it('proper number of attributes', () => {
                assert(element.hasAttributes(), 'has attributes');
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
            const element = htmldom('body', { innerHTML : '<span class="box"></span>' });

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
            const element = htmldom('html', { lang : 'ru' });

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
            const element = htmldom('form', { tabIndex : 0 });

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

        describe('textContent', () => {
            const element = htmldom('span', { textContent : 'element textContent' });
            it('proper number of child nodes', () => {
                assert(element.hasChildNodes(), 'has child nodes');
                assert.equal(element.childNodes.length, 1);
            });
            it('proper children', () => {
                assert.equal(element.firstChild.constructor, Text);
                assert.equal(element.firstChild.textContent, 'element textContent');
                assert.equal(element.textContent, 'element textContent');
            });
        });

        describe('title', () => {
            const element = htmldom('select', { title : 'Select without options' });

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

    describe('Global event handlers', () => {
        it('onclick', () => {
            const onclick = sinon.spy();
            const element = htmldom('button', { onclick });

            assert(onclick.notCalled);
            element.click();
            assert(onclick.calledOnce);
            element.click();
            assert(onclick.calledTwice);
        });
        it('click listener', () => {
            const listener = sinon.spy();
            const element = htmldom('button');

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

    describe('Single elements', () => {
        it('a', () => {
            const node = a({
                href : 'https://www.w3.org/TR/html',
                target : '_parent',
                download : 'spec.html',
                ping : 'https://www.w3.org',
                rel : 'external help',
                hreflang : 'en',
                type : 'text/html',
                referrerPolicy : 'no-referrer',
                children : 'HTML5 specification'
            });
            assert.equal(node.tagName, 'A');
            assert.equal(node.constructor, HTMLAnchorElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 8);

            assert.equal(node.href, 'https://www.w3.org/TR/html');
            assert.equal(node.target, '_parent');
            assert.equal(node.download, 'spec.html');
            assert.equal(node.ping, 'https://www.w3.org');
            assert.equal(node.rel, 'external help');
            assert.equal(node.hreflang, 'en');
            assert.equal(node.type, 'text/html');
            assert.equal(node.referrerPolicy, 'no-referrer');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.textContent, 'HTML5 specification');
        });
        it('abbr', () => {
            const node = abbr({
                title : 'Hyper text markup language',
                children : 'HTML'
            });
            assert.equal(node.tagName, 'ABBR');
            assert.equal(node.constructor, HTMLElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.title, 'Hyper text markup language');
            assert.equal(node.textContent, 'HTML');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<abbr title="Hyper text markup language">HTML</abbr>');
        });
        it('address', () => {
            const node = address('test@example.com');

            assert.equal(node.tagName, 'ADDRESS');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'test@example.com');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<address>test@example.com</address>');
        });
        it('area', () => {
            const node = area({
                alt : 'Alternative text',
                coords : '50,50,100,100',
                shape : 'rect',
                href : 'https://www.w3.org/TR/html',
                target : '_parent',
                download : 'spec.txt',
                ping : 'https://www.w3.org',
                rel : 'external help',
            });
            assert.equal(node.tagName, 'AREA');
            assert.equal(node.constructor, HTMLAreaElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 8);

            assert.equal(node.alt, 'Alternative text');
            assert.equal(node.coords, '50,50,100,100');
            assert.equal(node.shape, 'rect');
            assert.equal(node.href, 'https://www.w3.org/TR/html');
            assert.equal(node.target, '_parent');
            assert.equal(node.download, 'spec.txt');
            assert.equal(node.ping, 'https://www.w3.org');
            assert.equal(node.rel, 'external help');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('article', () => {
            const node = article('Hello world!');

            assert.equal(node.tagName, 'ARTICLE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Hello world!');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<article>Hello world!</article>');
        });
        it('aside', () => {
            const node = aside('Your advert may be here!');

            assert.equal(node.tagName, 'ASIDE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Your advert may be here!');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<aside>Your advert may be here!</aside>');
        });
        it('b', () => {
            const node = b('warning');

            assert.equal(node.tagName, 'B');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'warning');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML, '<b>warning</b>');
        });
        it('base', () => {
            const node = base({ href : 'https://w3.org', target : '_top' });

            assert.equal(node.tagName, 'BASE');
            assert.equal(node.constructor, HTMLBaseElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(node.href.startsWith('https://w3.org'), 'proper href');
            assert.equal(node.target, '_top');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('blockquote', () => {
            const node = blockquote({
                cite : 'https://html.spec.whatwg.org/#the-blockquote-element',
                children : 'The blockquote element represents a section that is quoted from another source.'
            });
            assert.equal(node.tagName, 'BLOCKQUOTE');
            assert.equal(node.constructor, HTMLQuoteElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.cite, 'https://html.spec.whatwg.org/#the-blockquote-element');
            assert.equal(node.textContent, 'The blockquote element represents a section that is quoted from another source.');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.outerHTML,
                '<blockquote ' +
                    'cite="https://html.spec.whatwg.org/#the-blockquote-element">' +
                    'The blockquote element represents a section that is quoted from another source.' +
                '</blockquote>');
        });
        it('body', () => {
            const node = body('Test');
            assert.equal(node.tagName, 'BODY');
            assert.equal(node.constructor, HTMLBodyElement);

            assert(!node.hasAttributes(), 'has no attributes');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Test');

            assert.equal(node.outerHTML, '<body>Test</body>');
        });
        it('br', () => {
            const node = br();
            assert.equal(node.tagName, 'BR');
            assert.equal(node.constructor, HTMLBRElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert(/^<br\/?>$/.test(node.outerHTML), 'proper outerHTML');
        });
        it('button', () => {
            const node = button({
                autofocus : true,
                disabled : true,
                formAction : '/api/save',
                formEnctype : 'multipart/form-data',
                formMethod : 'POST',
                formNoValidate : true,
                formTarget : '_top',
                name : 'savebutton',
                type : 'button',
                value : 'OK',
                // menu : '???', // todo
                children : 'Save'
            });
            assert.equal(node.tagName, 'BUTTON');
            assert.equal(node.constructor, HTMLButtonElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 10);
            assert.equal(node.autofocus, true);
            assert.equal(node.disabled, true);
            assert(node.formAction.endsWith('/api/save'), 'proper formAction');
            assert.equal(node.formEnctype, 'multipart/form-data');
            assert.equal(node.formMethod, 'post');
            assert.equal(node.formNoValidate, true);
            assert.equal(node.formTarget, '_top');
            assert.equal(node.name, 'savebutton');
            assert.equal(node.type, 'button');
            assert.equal(node.value, 'OK');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Save');
        });
        it('caption', () => {
            const node = caption('Table 1. Total score obtained from rolling two six-sided dice.');
            assert.equal(node.tagName, 'CAPTION');
            assert.equal(node.constructor, HTMLTableCaptionElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Table 1. Total score obtained from rolling two six-sided dice.');

            assert.equal(node.outerHTML, '<caption>Table 1. Total score obtained from rolling two six-sided dice.</caption>');
        });
        it('cite', () => {
            const node = cite('Fight club');
            assert.equal(node.tagName, 'CITE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Fight club');

            assert.equal(node.outerHTML, '<cite>Fight club</cite>');
        });
        it('code', () => {
            const node = code('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
            assert.equal(node.tagName, 'CODE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');

            assert.equal(node.outerHTML, '<code>++++++++++[&gt;+++++++&gt;++++++++++&gt;+++&gt;+&lt;&lt;&lt;&lt;-]&gt;++.&gt;+.+++++++..+++.&gt;++.&lt;&lt;+++++++++++++++.&gt;.+++.------.--------.&gt;+.&gt;.</code>');
        });
        it('col', () => {
            const node = col({ span : 3 });
            assert.equal(node.tagName, 'COL');
            assert.equal(node.constructor, HTMLTableColElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.span, 3);

            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<col span="3">');
        });
        it('colgroup', () => {
            const node = colgroup({ span : 5 });
            assert.equal(node.tagName, 'COLGROUP');
            assert.equal(node.constructor, HTMLTableColElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.span, 5);

            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<colgroup span="5"></colgroup>');
        });
        it('dd', () => {
            const node = dd('part of a term-description group in a description list');
            assert.equal(node.tagName, 'DD');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'part of a term-description group in a description list');

            assert.equal(node.outerHTML, '<dd>part of a term-description group in a description list</dd>');
        });
        it('del', () => {
            const node = del({
                cite : '/edits/r192',
                dateTime : '2011-05-02 14:23Z',
                children : '10/10'
            });
            assert.equal(node.tagName, 'DEL');
            assert.equal(node.constructor, HTMLModElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(node.cite.endsWith('/edits/r192'), 'proper cite');
            assert.equal(node.dateTime, '2011-05-02 14:23Z');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '10/10');
        });
        it('div', () => {
            const node = div('Abstract grouping block-level container');
            assert.equal(node.tagName, 'DIV');
            assert.equal(node.constructor, HTMLDivElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Abstract grouping block-level container');

            assert.equal(node.outerHTML, '<div>Abstract grouping block-level container</div>');
        });
        it('dl', () => {
            const node = dl();
            assert.equal(node.tagName, 'DL');
            assert.equal(node.constructor, HTMLDListElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<dl></dl>');
        });
        it('dt', () => {
            const node = dt('the dt element');
            assert.equal(node.tagName, 'DT');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'the dt element');

            assert.equal(node.outerHTML, '<dt>the dt element</dt>');
        });
        it('em', () => {
            const node = em('Amazing!');
            assert.equal(node.tagName, 'EM');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Amazing!');

            assert.equal(node.outerHTML, '<em>Amazing!</em>');
        });
        it('embed', () => {
            const node = embed({
                src : '/data/app.swf',
                type : 'application/x-shockwave-flash',
                width : '100%',
                height : '50%'
            });
            assert.equal(node.tagName, 'EMBED');
            assert.equal(node.constructor, HTMLEmbedElement);

            assert(node.hasAttributes(), 'has attributes');
            assert(node.src.endsWith('/data/app.swf'), 'proper src');
            assert.equal(node.type, 'application/x-shockwave-flash');
            assert.equal(node.width, '100%');
            assert.equal(node.height, '50%');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('fieldset', () => {
            const node = fieldset({
                disabled : true,
                // form : '???', // todo
                name : 'geolocation',
                children : 'Field set'
            });
            assert.equal(node.tagName, 'FIELDSET');
            assert.equal(node.constructor, HTMLFieldSetElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.disabled, true);
            assert.equal(node.name, 'geolocation');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Field set');
        });
        it('figcaption', () => {
            const node = figcaption('Image 1.1');
            assert.equal(node.tagName, 'FIGCAPTION');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Image 1.1');

            assert.equal(node.outerHTML, '<figcaption>Image 1.1</figcaption>');
        });
        it('figure', () => {
            const node = figure('`Twas brillig, and the slithy toves');

            assert.equal(node.tagName, 'FIGURE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '`Twas brillig, and the slithy toves');

            assert.equal(node.outerHTML, '<figure>`Twas brillig, and the slithy toves</figure>');
        });
        it('footer', () => {
            const node = footer('Navigation menu, small text, copyright and contact information');

            assert.equal(node.tagName, 'FOOTER');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Navigation menu, small text, copyright and contact information');

            assert.equal(node.outerHTML, '<footer>Navigation menu, small text, copyright and contact information</footer>');
        });
        it('form', () => {
            const node = form({
                acceptCharset : 'utf-8',
                action : '/app/save',
                autocomplete : 'off',
                enctype : 'text/plain',
                method : 'POST',
                name : 'saveform',
                noValidate : true,
                target : '_top',
                children : 'Form controls here'
            });
            assert.equal(node.tagName, 'FORM');
            assert.equal(node.constructor, HTMLFormElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 8);
            assert.equal(node.acceptCharset, 'utf-8');
            assert(node.action.endsWith('/app/save'), 'proper action');
            assert.equal(node.autocomplete, 'off');
            assert.equal(node.enctype, 'text/plain');
            assert.equal(node.method, 'post');
            assert.equal(node.name, 'saveform');
            assert.equal(node.noValidate, true);
            assert.equal(node.target, '_top');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Form controls here');
        });
        it('h1', () => {
            const node = h1('HTML Standard');

            assert.equal(node.tagName, 'H1');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'HTML Standard');

            assert.equal(node.outerHTML, '<h1>HTML Standard</h1>');
        });
        it('h2', () => {
            const node = h2('Full table of contents');

            assert.equal(node.tagName, 'H2');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Full table of contents');

            assert.equal(node.outerHTML, '<h2>Full table of contents</h2>');
        });
        it('h3', () => {
            const node = h3('Introduction');

            assert.equal(node.tagName, 'H3');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Introduction');

            assert.equal(node.outerHTML, '<h3>Introduction</h3>');
        });
        it('h4', () => {
            const node = h4('2.4 Common microsyntaxes');

            assert.equal(node.tagName, 'H4');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '2.4 Common microsyntaxes');

            assert.equal(node.outerHTML, '<h4>2.4 Common microsyntaxes</h4>');
        });
        it('h5', () => {
            const node = h5('2.4.4 Numbers');

            assert.equal(node.tagName, 'H5');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '2.4.4 Numbers');

            assert.equal(node.outerHTML, '<h5>2.4.4 Numbers</h5>');
        });
        it('h6', () => {
            const node = h6('2.4.4.4 Percentages and lengths');

            assert.equal(node.tagName, 'H6');
            assert.equal(node.constructor, HTMLHeadingElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '2.4.4.4 Percentages and lengths');

            assert.equal(node.outerHTML, '<h6>2.4.4.4 Percentages and lengths</h6>');
        });
        it('head', () => {
            const node = head();

            assert.equal(node.tagName, 'HEAD');
            assert.equal(node.constructor, HTMLHeadElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<head></head>');
        });
        it('header', () => {
            const node = header('The main heading, site navigation and search');

            assert.equal(node.tagName, 'HEADER');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'The main heading, site navigation and search');

            assert.equal(node.outerHTML, '<header>The main heading, site navigation and search</header>');
        });
        it('hgroup', () => {
            const node = hgroup();

            assert.equal(node.tagName, 'HGROUP');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<hgroup></hgroup>');
        });
        it('hr', () => {
            const node = hr();

            assert.equal(node.tagName, 'HR');
            assert.equal(node.constructor, HTMLHRElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<hr>');
        });
        it('html', () => {
            const node = html({ attrset : { manifest : 'https://example.com/manifest' } });

            assert.equal(node.tagName, 'HTML');
            assert.equal(node.constructor, HTMLHtmlElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.getAttribute('manifest'), 'https://example.com/manifest');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<html manifest="https://example.com/manifest"></html>');
        });
        it('i', () => {
            const node = i('Alternative voice');

            assert.equal(node.tagName, 'I');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Alternative voice');

            assert.equal(node.outerHTML, '<i>Alternative voice</i>');
        });
        it('iframe', () => {
            const node = iframe({
                allowFullscreen : true,
                // allowUserMedia : true, // todo
                height : '70%',
                name : 'nested-window',
                referrerPolicy : 'origin',
                src : '/nested.html',
                srcdoc : '<html><head><title>Nested document</title></head><body></body></html>',
                width : '200px',
                attrset : { sandbox : 'allow-forms' }
            });
            assert.equal(node.tagName, 'IFRAME');
            assert.equal(node.constructor, HTMLIFrameElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 8);
            assert.equal(node.allowFullscreen, true);
            assert.equal(node.height, '70%');
            assert.equal(node.name, 'nested-window');
            assert.equal(node.referrerPolicy, 'origin');
            assert(node.src.endsWith('/nested.html'), 'proper src');
            assert.equal(node.srcdoc, '<html><head><title>Nested document</title></head><body></body></html>');
            assert.equal(node.width, '200px');
            assert.equal(node.sandbox, 'allow-forms');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('img', () => {
            const node = img({
                alt : 'HTML logo',
                src : '/logo.svg',
                srcset : '/data/150-logo.png 1.5x, /data/200-logo.png 2x',
                sizes : '1.5x, 2x',
                crossOrigin : 'use-credentials',
                useMap : '#logomap',
                isMap : true,
                width : '150',
                height : '150',
                referrerPolicy : 'no-referrer-when-downgrade',
            });
            assert.equal(node.tagName, 'IMG');
            assert.equal(node.constructor, HTMLImageElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 10);
            assert.equal(node.alt, 'HTML logo');
            assert(node.src.endsWith('/logo.svg'), 'proper src');
            assert.equal(node.srcset, '/data/150-logo.png 1.5x, /data/200-logo.png 2x');
            assert.equal(node.sizes, '1.5x, 2x');
            assert.equal(node.crossOrigin, 'use-credentials');
            assert.equal(node.useMap, '#logomap');
            assert.equal(node.isMap, true);
            assert.equal(node.width, '150');
            assert.equal(node.height, '150');
            assert.equal(node.referrerPolicy, 'no-referrer-when-downgrade');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('input', () => {
            const node = input({
                alt : 'alternative input text',
                accept : 'SVG, PNG, PDF',
                autocomplete : 'off',
                autofocus : true,
                checked : true,
                defaultChecked : true,
                dirName : 'comment.dir',
                disabled : true,
                formAction : '/app/save',
                formEnctype : 'multipart/form-data',
                formMethod : 'POST',
                formNoValidate : true,
                formTarget : '_top',
                indeterminate : true,
                // inputMode : 'tel', // todo
                max : '100',
                maxLength : 99,
                min : '0',
                minLength : 1,
                multiple : true,
                name : 'input_name',
                pattern : '[0-9][A-Z]{3}',
                placeholder : 'Paste',
                readOnly : true,
                required : true,
                size : 5,
                src : '/data/input.js',
                step : '2',
                value : 'User input value',
                defaultValue : 'Default value',
                title : 'A part number is a digit followed by three uppercase letters.',
                attrset : {
                    form : 'saveform',
                    list : 'suggestlist'
                }
            });
            assert.equal(node.tagName, 'INPUT');
            assert.equal(node.constructor, HTMLInputElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 29);
            assert.equal(node.alt, 'alternative input text');
            assert.equal(node.accept, 'SVG, PNG, PDF');
            assert.equal(node.autocomplete, 'off');
            assert.equal(node.autofocus, true);
            assert.equal(node.checked, true);
            assert.equal(node.defaultChecked, true);
            assert.equal(node.dirName, 'comment.dir');
            assert.equal(node.disabled, true);
            assert(node.formAction.endsWith('/app/save'), 'proper action');
            assert.equal(node.formEnctype, 'multipart/form-data');
            assert.equal(node.formMethod, 'post');
            assert.equal(node.formNoValidate, true);
            assert.equal(node.formTarget, '_top');
            assert.equal(node.indeterminate, true);
            assert.equal(node.max, '100');
            assert.equal(node.maxLength, 99);
            assert.equal(node.min, '0');
            assert.equal(node.minLength, 1);
            assert.equal(node.multiple, true);
            assert.equal(node.name, 'input_name');
            assert.equal(node.pattern, '[0-9][A-Z]{3}');
            assert.equal(node.placeholder, 'Paste');
            assert.equal(node.readOnly, true);
            assert.equal(node.required, true);
            assert.equal(node.size, 5);
            assert(node.src.endsWith('/data/input.js'), 'proper src');
            assert.equal(node.step, '2');
            assert.equal(node.value, 'User input value');
            assert.equal(node.defaultValue, 'Default value');
            assert.equal(node.title, 'A part number is a digit followed by three uppercase letters.');
            assert.equal(node.getAttribute('form'), 'saveform');
            assert.equal(node.getAttribute('list'), 'suggestlist');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('ins', () => {
            const node = ins({
                cite : '/edits/r193',
                dateTime : '2011-05-02 14:32Z',
                children : '11/10'
            });
            assert.equal(node.tagName, 'INS');
            assert.equal(node.constructor, HTMLModElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(node.cite.endsWith('/edits/r193'), 'proper cite');
            assert.equal(node.dateTime, '2011-05-02 14:32Z');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '11/10');
        });
        it('kbd', () => {
            const node = kbd('Ctrl + Z');

            assert.equal(node.tagName, 'KBD');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Ctrl + Z');

            assert.equal(node.outerHTML, '<kbd>Ctrl + Z</kbd>');
        });
        it('label', () => {
            const node = label({
                htmlFor : 'userinput',
                children : 'Input label'
            });

            assert.equal(node.tagName, 'LABEL');
            assert.equal(node.constructor, HTMLLabelElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.htmlFor, 'userinput');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Input label');

            assert.equal(node.outerHTML, '<label for="userinput">Input label</label>');
        });
        it('legend', () => {
            const node = legend('Authorization');

            assert.equal(node.tagName, 'LEGEND');
            assert.equal(node.constructor, HTMLLegendElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Authorization');

            assert.equal(node.outerHTML, '<legend>Authorization</legend>');
        });
        it('li', () => {
            const node = li({
                value : 4,
                children : '4-th list item'
            });

            assert.equal(node.tagName, 'LI');
            assert.equal(node.constructor, HTMLLIElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.value, 4);

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '4-th list item');

            assert.equal(node.outerHTML, '<li value="4">4-th list item</li>');
        });
        it('link', () => {
            const node = link({
                href : '/icon.svg',
                crossOrigin : 'use-credentials',
                rel : 'preload icon',
                as : 'media',
                media : 'screen',
                hreflang : 'fr',
                type : 'application/svg',
                sizes : '32x32 48x48',
                title : 'Application icon',
                // referrerPolicy : 'no-referrer', // todo
                // nonce : 'abc', // todo
            });
            assert.equal(node.tagName, 'LINK');
            assert.equal(node.constructor, HTMLLinkElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 9);
            assert(node.href.endsWith('/icon.svg'), 'proper href');
            assert.equal(node.rel, 'preload icon');
            assert.equal(node.crossOrigin, 'use-credentials');
            assert.equal(node.as, 'media');
            assert.equal(node.media, 'screen');
            assert.equal(node.hreflang, 'fr');
            assert.equal(node.type, 'application/svg');
            assert.equal(node.sizes, '32x32 48x48');
            assert.equal(node.title, 'Application icon');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('main', () => {
            const node = main('The main application content');

            assert.equal(node.tagName, 'MAIN');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'The main application content');

            assert.equal(node.outerHTML, '<main>The main application content</main>');
        });
        it('map', () => {
            const node = map({
                name : 'app-image-map',
                children : '<img> and <area> elements'
            });

            assert.equal(node.tagName, 'MAP');
            assert.equal(node.constructor, HTMLMapElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 1);
            assert.equal(node.name, 'app-image-map');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, '<img> and <area> elements');

            assert.equal(node.outerHTML, '<map name="app-image-map">&lt;img&gt; and &lt;area&gt; elements</map>');
        });
        it('mark', () => {
            const node = mark('Highlighted');

            assert.equal(node.tagName, 'MARK');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Highlighted');

            assert.equal(node.outerHTML, '<mark>Highlighted</mark>');
        });
        it('meta', () => {
            const node = meta({
                name : 'keywords',
                content : 'specification,html,dom,web,application,standard,api',
                httpEquiv : 'x-ua-compatible',
                attrset : { charset : 'utf-8' },
            });
            assert.equal(node.tagName, 'META');
            assert.equal(node.constructor, HTMLMetaElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 4);
            assert.equal(node.name, 'keywords');
            assert.equal(node.content, 'specification,html,dom,web,application,standard,api');
            assert.equal(node.httpEquiv, 'x-ua-compatible');
            assert.equal(node.getAttribute('charset'), 'utf-8');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('nav', () => {
            const node = nav('Navigation area');

            assert.equal(node.tagName, 'NAV');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Navigation area');

            assert.equal(node.outerHTML, '<nav>Navigation area</nav>');
        });
        it('noscript', () => {
            const node = noscript('Alternative content');

            assert.equal(node.tagName, 'NOSCRIPT');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Alternative content');

            assert.equal(node.outerHTML, '<noscript>Alternative content</noscript>');
        });
        it('object', () => {
            const node = object({
                data : '/app.swf',
                type : 'application/x-shockwave-flash',
                // typeMustMatch : true, // todo
                name : 'app-swf-object',
                useMap : 'app-map',
                width : '123',
                height : '321',
                attrset : { form : 'saveform' },
                innerHTML : '<param><param><param>'
            });
            assert.equal(node.tagName, 'OBJECT');
            assert.equal(node.constructor, HTMLObjectElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 7);
            assert(node.data.endsWith('app.swf'), 'proper data');
            assert.equal(node.type, 'application/x-shockwave-flash');
            assert.equal(node.name, 'app-swf-object');
            assert.equal(node.useMap, 'app-map');
            assert.equal(node.width, '123');
            assert.equal(node.height, '321');
            assert.equal(node.getAttribute('form'), 'saveform');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 3);
            assert.equal(node.innerHTML, '<param><param><param>');
        });
        it('ol', () => {
            const node = ol({
                reversed : true,
                start : 1,
                type : 'A',
                innerHTML : '<li>1<li>2<li>3'
            });
            assert.equal(node.tagName, 'OL');
            assert.equal(node.constructor, HTMLOListElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 3);
            assert.equal(node.reversed, true);
            assert.equal(node.start, 1);
            assert.equal(node.type, 'A');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 3);

            assert.equal(node.innerHTML, '<li>1</li><li>2</li><li>3</li>');
        });
        it('optgroup', () => {
            const node = optgroup({
                disabled : true,
                label : 'Select option group',
                innerHTML : '<option>1<option>2<option>3'
            });
            assert.equal(node.tagName, 'OPTGROUP');
            assert.equal(node.constructor, HTMLOptGroupElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert.equal(node.disabled, true);
            assert.equal(node.label, 'Select option group');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 3);

            assert.equal(node.innerHTML, '<option>1</option><option>2</option><option>3</option>');
        });
        it('option', () => {
            const node = option({
                disabled : true,
                label : 'Select option label',
                selected : true,
                value : 'option-1',
                innerHTML : 'Select option text'
            });
            assert.equal(node.tagName, 'OPTION');
            assert.equal(node.constructor, HTMLOptionElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 3);
            assert.equal(node.disabled, true);
            assert.equal(node.label, 'Select option label');
            assert.equal(node.selected, true);
            assert.equal(node.value, 'option-1');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);

            assert.equal(node.textContent, 'Select option text');
        });
        it('output', () => {
            const node = output({
                htmlFor : 'user-input',
                name : 'program-output',
                attrset : { form : 'saveform' },
                children : 'Output widget'
            });
            assert.equal(node.tagName, 'OUTPUT');
            assert.equal(node.constructor, HTMLOutputElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 3);
            assert.equal(node.htmlFor, 'user-input');
            assert.equal(node.name, 'program-output');
            assert.equal(node.getAttribute('form'), 'saveform');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Output widget');
        });
        it('p', () => {
            const node = p('Paragraph');

            assert.equal(node.tagName, 'P');
            assert.equal(node.constructor, HTMLParagraphElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Paragraph');

            assert.equal(node.outerHTML, '<p>Paragraph</p>');
        });
        it('param', () => {
            const node = param({ name : 'ratio', value : '3' });
            assert.equal(node.tagName, 'PARAM');
            assert.equal(node.constructor, HTMLParamElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert.equal(node.name, 'ratio');
            assert.equal(node.value, '3');

            assert(!node.hasChildNodes(), 'has no child nodes');
        });
        it('pre', () => {
            const node = pre('Pre >< formatted >< text');

            assert.equal(node.tagName, 'PRE');
            assert.equal(node.constructor, HTMLPreElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Pre >< formatted >< text');

            assert.equal(node.outerHTML, '<pre>Pre &gt;&lt; formatted &gt;&lt; text</pre>');
        });
        it('q', () => {
            const node = q({
                cite : 'https://html.spec.whatwg.org/#the-q-element',
                children : 'The q element represents some phrasing content quoted from another source'
            });

            assert.equal(node.tagName, 'Q');
            assert.equal(node.constructor, HTMLQuoteElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.cite, 'https://html.spec.whatwg.org/#the-q-element');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'The q element represents some phrasing content quoted from another source');

            assert.equal(node.outerHTML,
                '<q cite="https://html.spec.whatwg.org/#the-q-element">' +
                'The q element represents some phrasing content quoted from another source' +
                '</q>');
        });
        it('s', () => {
            const node = s('Not accurate');

            assert.equal(node.tagName, 'S');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Not accurate');

            assert.equal(node.outerHTML, '<s>Not accurate</s>');
        });
        it('samp', () => {
            const node = samp('example');

            assert.equal(node.tagName, 'SAMP');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'example');

            assert.equal(node.outerHTML, '<samp>example</samp>');
        });
        it('script', () => {
            const node = script({
                src : '/script.js',
                type : 'javascript',
                charset : 'utf-8',
                async : true,
                defer : true,
                crossOrigin : 'use-credentials',
                // nonce : 'abc', // todo
                children : script.toString(),
            });
            assert.equal(node.tagName, 'SCRIPT');
            assert.equal(node.constructor, HTMLScriptElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 6);
            assert(node.src.endsWith('/script.js'), 'proper src');
            assert.equal(node.type, 'javascript');
            assert.equal(node.charset, 'utf-8');
            assert.equal(node.async, true);
            assert.equal(node.defer, true);
            assert.equal(node.crossOrigin, 'use-credentials');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, script.toString());
        });
        it('section', () => {
            const node = section('Application section');

            assert.equal(node.tagName, 'SECTION');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Application section');

            assert.equal(node.outerHTML, '<section>Application section</section>');
        });
        it('select', () => {
            const node = select({
                // autocomplete : 'off', // todo
                autofocus : true,
                disabled : true,
                name : 'select-9',
                required : true,
                size : 10,
                attrset : { form : 'saveform' },
                innerHTML : '<option>opt1<option>opt2<optgroup><option>opt3</optgroup>',
            });
            assert.equal(node.tagName, 'SELECT');
            assert.equal(node.constructor, HTMLSelectElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 6);
            assert.equal(node.autofocus, true);
            assert.equal(node.disabled, true);
            assert.equal(node.name, 'select-9');
            assert.equal(node.required, true);
            assert.equal(node.size, 10);
            assert.equal(node.getAttribute('form'), 'saveform');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 3);
            assert.equal(node.innerHTML,
                '<option>opt1</option>' +
                '<option>opt2</option>' +
                '<optgroup><option>opt3</option></optgroup>');
        });
        it('small', () => {
            const node = small('Copyright © Viacheslav Aritov');

            assert.equal(node.tagName, 'SMALL');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Copyright © Viacheslav Aritov');

            assert.equal(node.outerHTML, '<small>Copyright © Viacheslav Aritov</small>');
        });
        it('style', () => {
            const node = style({
                media : 'screen',
                type : 'text/css',
                // defer : true, // todo
                title : 'Application style sheet',
                // nonce : 'abc', // todo
                children : 'style { display: block }',
            });
            assert.equal(node.tagName, 'STYLE');
            assert.equal(node.constructor, HTMLStyleElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 3);
            assert.equal(node.media, 'screen');
            assert.equal(node.type, 'text/css');
            assert.equal(node.title, 'Application style sheet');

            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'style { display: block }');
        });
        it('table', () => {
            const node = table({ innerHTML : '<tr><td>A1<td>A2<td>A3</tr><tr><td>B1<td>B2<td>B3</tr>' });
            assert.equal(node.tagName, 'TABLE');
            assert.equal(node.constructor, HTMLTableElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.firstChild.tagName, 'TBODY');
            assert.equal(node.outerHTML,
                '<table><tbody><tr><td>A1</td><td>A2</td><td>A3</td></tr>' +
                '<tr><td>B1</td><td>B2</td><td>B3</td></tr></tbody></table>');
        });
        it('textarea', () => {
            const node = textarea({
                // autocomplete : 'off', // todo
                autofocus : true,
                cols : 15,
                dirName : 'comment.dir',
                disabled : true,
                // inputMode : '???', // todo
                maxLength : 99,
                minLength : 1,
                name : 'input_name',
                placeholder : 'Paste',
                readOnly : true,
                required : true,
                rows : 20,
                wrap : 'hard',
                value : 'User multiline input value',
                defaultValue : 'Default multiline value',
                attrset : { form : 'saveform' }
            });
            assert.equal(node.tagName, 'TEXTAREA');
            assert.equal(node.constructor, HTMLTextAreaElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 13);
            assert.equal(node.autofocus, true);
            assert.equal(node.cols, 15);
            assert.equal(node.dirName, 'comment.dir');
            assert.equal(node.disabled, true);
            assert.equal(node.name, 'input_name');
            assert.equal(node.placeholder, 'Paste');
            assert.equal(node.readOnly, true);
            assert.equal(node.required, true);
            assert.equal(node.rows, 20);
            assert.equal(node.wrap, 'hard');
            assert.equal(node.value, 'User multiline input value');
            assert.equal(node.defaultValue, 'Default multiline value');
            assert.equal(node.getAttribute('form'), 'saveform');

            assert(node.hasChildNodes(), 'has child nodes');
            assert(node.childNodes.length, 1);
            assert(node.textContent, 'Multiline user input');
        });
        it('title', () => {
            const node = title('Application title');

            assert.equal(node.tagName, 'TITLE');
            assert.equal(node.constructor, HTMLTitleElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Application title');

            assert.equal(node.outerHTML, '<title>Application title</title>');
        });
        it('u', () => {
            const node = u('Misspelt text');

            assert.equal(node.tagName, 'U');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(node.hasChildNodes(), 'has child nodes');
            assert.equal(node.childNodes.length, 1);
            assert.equal(node.textContent, 'Misspelt text');

            assert.equal(node.outerHTML, '<u>Misspelt text</u>');
        });
        it('wbr', () => {
            const node = wbr();

            assert.equal(node.tagName, 'WBR');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert(!node.hasChildNodes(), 'has no child nodes');

            assert.equal(node.outerHTML, '<wbr>');
        });
    });

    describe('Various structures', () => {
        describe('Authorization fieldset', () => {
            it('properly build form authorization fieldset', () => {
                const element =
                    fieldset([
                        legend('Authorization'),
                        input({ type : 'email' }),
                        input({ type : 'password' })
                    ]);
                assert.equal(element.outerHTML,
                    '<fieldset>' +
                        '<legend>Authorization</legend>' +
                        '<input type="email">' +
                        '<input type="password">' +
                    '</fieldset>');
            });
        });
        describe('Header with navigation', () => {
            it('properly build header with navigational links inside', () => {
                const element =
                    header(nav([
                        a({ href : '/lib.html', textContent : 'Library' }),
                        a({ href : '/spec.html', textContent : 'Specifications' }),
                        a({ href : '/home.html', textContent : 'Go home' })
                    ]));
                assert.equal(element.outerHTML,
                    '<header><nav>' +
                        '<a href="/lib.html">Library</a>' +
                        '<a href="/spec.html">Specifications</a>' +
                        '<a href="/home.html">Go home</a>' +
                    '</nav></header>');
            });
        });
        describe('Select box widget', () => {
            let widget, selected;
            const element =
                label([
                    'Select technology ',
                    widget = select([
                        option('DOM'),
                        option('XML'),
                        selected = option({ selected : true, textContent : 'HTML' }),
                        option('SVG'),
                        option('MathML'),
                        option('WAI-ARIA')
                    ])
                ]);
            it('properly build label with select box option list inside', () => {
                assert.equal(element.outerHTML,
                    '<label>' +
                        'Select technology ' +
                        '<select>' +
                            '<option>DOM</option>' +
                            '<option>XML</option>' +
                            '<option>HTML</option>' +
                            '<option>SVG</option>' +
                            '<option>MathML</option>' +
                            '<option>WAI-ARIA</option>' +
                        '</select>' +
                    '</label>');
            });
            it('proper selected option reference', () => {
                assert.equal(widget.selectedOptions.length, 1);
                assert.equal(widget.selectedOptions[0], selected);
            });
        });
        describe('Search form', () => {
            it('properly build form with search input and submit button inside', () => {
                const element =
                    form({
                        attrset : { role : 'search' },
                        children : [
                            input({ type : 'search' }),
                            button('Search')
                        ]
                    });
                assert.equal(element.outerHTML,
                    '<form role="search">' +
                        '<input type="search">' +
                        '<button>Search</button>' +
                    '</form>');
            });
        });
        describe('Checkboxes', () => {
            let simple, checked, indeterminate;
            const element =
                div([
                    simple = input({ type : 'checkbox' }),
                    checked = input({ type : 'checkbox', checked : true }),
                    indeterminate = input({ type : 'checkbox', indeterminate : true })
                ]);
            it('proper HTML rendered', () => {
                assert.equal(element.outerHTML,
                    '<div>' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                        '<input type="checkbox">' +
                    '</div>');
            });
            it('check current state of widgets', () => {
                assert(!simple.checked);
                assert(checked.checked);
                assert(indeterminate.indeterminate);
            });
            it('proper initial state assignment', () => {
                const sample = input({ type : 'checkbox', attrset : { checked : '' } });
                const container = div({ innerHTML : '<input type=checkbox checked>' });
                assert(sample.isEqualNode(container.firstChild));
            });
        });
        describe('Various list examples', () => {
            it('properly build ul + li', () => {
                assert.equal(
                    ul([
                        li('Ampeg'),
                        li('Fender'),
                        li('Warwick')
                    ]).outerHTML,
                    '<ul>' +
                        '<li>Ampeg</li>' +
                        '<li>Fender</li>' +
                        '<li>Warwick</li>' +
                    '</ul>'
                );
            });
            it('properly build ol + li', () => {
                assert.equal(
                    ol([
                        li('Moscow'),
                        li('Amsterdam'),
                        li('New York')
                    ]).outerHTML,
                    '<ol>' +
                        '<li>Moscow</li>' +
                        '<li>Amsterdam</li>' +
                        '<li>New York</li>' +
                    '</ol>'
                );
            });
            it('properly build dl + dt + dd', () => {
                assert.equal(
                    dl([
                        dt('DOM'),
                        dd('Document object model'),
                        dt('XML'),
                        dd('Extensible markup language'),
                        dt('HTML'),
                        dd('Hyper text markup language')
                    ]).outerHTML,
                    '<dl>' +
                        '<dt>DOM</dt>' +
                        '<dd>Document object model</dd>' +
                        '<dt>XML</dt>' +
                        '<dd>Extensible markup language</dd>' +
                        '<dt>HTML</dt>' +
                        '<dd>Hyper text markup language</dd>' +
                    '</dl>'
                );
            });
        });
        describe('Details with summary', () => {
            it('properly build widget', () => {
                const element =
                    details([
                        summary('Show details'),
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    ]);
                assert.equal(element.outerHTML,
                    '<details>' +
                        '<summary>Show details</summary>' +
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                    '</details>');
            });
        });
        describe('Table', () => {
            it('properly build widget', () => {
                const element =
                    table([
                        caption('Related semantics'),
                        thead(tr([th(abbr('HTML')), th(abbr('WAI-ARIA'))])),
                        tbody([
                            ['button', 'button'],
                            ['a, link, area', 'link'],
                            ['input', 'textbox'],
                            ['select', 'combobox'],
                            ['table', 'table, grid'],
                            ['ul, ol', 'list'],
                        ].map(([xmlterm, htmlterm]) =>
                            tr([td(code(xmlterm)), td(code(htmlterm))]))),
                        tfoot([tr([th('9'), th('7')])])
                    ]);
                assert.equal(element.outerHTML,
                    '<table><caption>Related semantics</caption>' +
                    '<thead><tr><th><abbr>HTML</abbr></th><th><abbr>WAI-ARIA</abbr></th></tr></thead>' +
                    '<tbody><tr><td><code>button</code></td><td><code>button</code></td></tr>' +
                    '<tr><td><code>a, link, area</code></td><td><code>link</code></td></tr>' +
                    '<tr><td><code>input</code></td><td><code>textbox</code></td></tr>' +
                    '<tr><td><code>select</code></td><td><code>combobox</code></td></tr>' +
                    '<tr><td><code>table</code></td><td><code>table, grid</code></td></tr>' +
                    '<tr><td><code>ul, ol</code></td><td><code>list</code></td></tr></tbody>' +
                    '<tfoot><tr><th>9</th><th>7</th></tr></tfoot></table>');
            });
        });
        describe('Other', () => {
            it('property build DOM fragment', () => {
                const element =
                    main([
                        section(dfn('htmlmodule — DOM assembler library')),
                        section(p([
                            variable('var'),
                            ' — is reserved JavaScript keyword, ',
                            'so we use `variable` function name instead.'
                        ])),
                        section([
                            sup('supertext'),
                            sub('subtext'),
                            i('alternative voice'),
                            strong('important!')
                        ])
                    ]);
                assert.equal(element.outerHTML,
                    '<main>' +
                        '<section><dfn>' +
                            'htmlmodule — DOM assembler library' +
                        '</dfn></section>' +
                        '<section><p>' +
                            '<var>var</var>' +
                            ' — is reserved JavaScript keyword, ' +
                            'so we use `variable` function name instead.' +
                        '</p></section>' +
                        '<section>' +
                            '<sup>supertext</sup>' +
                            '<sub>subtext</sub>' +
                            '<i>alternative voice</i>' +
                            '<strong>important!</strong>' +
                        '</section>' +
                    '</main>');
            });
            it('htmldom, span', () => {
                const node1 = htmldom('span', {
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                });
                const node2 = span({
                    id : '00101',
                    className :'fa fi fu',
                    tabIndex : 0,
                    children : ['a', span('a b'), 'b']
                });
                [node1, node2].forEach(node => {
                    assert.equal(node.nodeType, ELEMENT_NODE);
                    assert.equal(node.tagName, 'SPAN');
                    assert.equal(node.constructor, HTMLSpanElement);
                    assert.equal(node.attributes.length, 3);
                    assert.equal(node.id, '00101');
                    assert.equal(node.className, 'fa fi fu');
                    assert.equal(node.tabIndex, 0);
                    assert.equal(node.children.length, 1);
                    assert.equal(node.childNodes.length, 3);
                    assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
                    assert.equal(node.childNodes[1].constructor, HTMLSpanElement);
                    assert.equal(node.childNodes[2].textContent, 'b');
                });
                assert(node1.isEqualNode(node2), 'htmldom() and span() work differently');
            });
        });
    });

});
