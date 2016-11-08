import {
    a, abbr, address, article, aside,
    b, base, blockquote,
    fieldset, legend, input,
    header, nav, form, button,
    label, select, option,
    div, ul, ol, li, dl, dd, dt,
    main, section, details, summary,
    dfn, sup, sub, i, strong, p, variable,
    htmldom, span
} from './htmldom';

import chai from 'chai';

const {
    Node,
    HTMLElement,
    HTMLAnchorElement,
    HTMLBaseElement,
    HTMLSpanElement,
} = window;
const { TEXT_NODE, ELEMENT_NODE } = Node;
const { assert } = chai;

describe('HTMLDOM library', () => {

    describe('Elements', () => {
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

            assert.equal(node.outerHTML, '<abbr title="Hyper text markup language">HTML</abbr>');
        });
        it('address', () => {
            const node = address('test@example.com');

            assert.equal(node.tagName, 'ADDRESS');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'test@example.com');

            assert(node.hasChildNodes(), 'has child nodes');

            assert.equal(node.outerHTML, '<address>test@example.com</address>');
        });
        it('article', () => {
            const node = article('Hello world!');

            assert.equal(node.tagName, 'ARTICLE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Hello world!');

            assert(node.hasChildNodes(), 'has child nodes');

            assert.equal(node.outerHTML, '<article>Hello world!</article>');
        });
        it('aside', () => {
            const node = aside('Your advert may be here!');

            assert.equal(node.tagName, 'ASIDE');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'Your advert may be here!');

            assert(node.hasChildNodes(), 'has child nodes');

            assert.equal(node.outerHTML, '<aside>Your advert may be here!</aside>');
        });
        it('b', () => {
            const node = b('warning');

            assert.equal(node.tagName, 'B');
            assert.equal(node.constructor, HTMLElement);

            assert(!node.hasAttributes(), 'has no attributes');
            assert.equal(node.textContent, 'warning');

            assert(node.hasChildNodes(), 'has child nodes');

            assert.equal(node.outerHTML, '<b>warning</b>');
        });
        it('base', () => {
            const node = base({ href : 'https://w3.org', target : '_top' });

            assert.equal(node.tagName, 'BASE');
            assert.equal(node.constructor, HTMLBaseElement);

            assert(node.hasAttributes(), 'has attributes');
            assert.equal(node.attributes.length, 2);
            assert(/^https:\/\/w3\.org\/?$/.test(node.href), 'proper href');
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

            assert.equal(node.outerHTML,
                '<blockquote ' +
                    'cite="https://html.spec.whatwg.org/#the-blockquote-element">' +
                    'The blockquote element represents a section that is quoted from another source.' +
                '</blockquote>');
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
