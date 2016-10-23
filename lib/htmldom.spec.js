import {
    fieldset, legend, input,
    header, nav, a, form, button,
    label, select, option,
    div, ul, ol, li, dl, dd, dt,
    main, section, details, summary,
    dfn, sup, sub, i, strong, p, variable,
    htmldom, span,
} from './htmldom';

import chai from 'chai';

const { Node, HTMLSpanElement, HTMLAnchorElement } = window;
const { TEXT_NODE, ELEMENT_NODE } = Node;
const { assert } = chai;

describe('HTMLDOM library', () => {
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
        })
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
        // victim of IE11 todo
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
                    section(dfn('Instance.js — simple and powerfull DOM Element interface')),
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
                        'Instance.js — simple and powerfull DOM Element interface' +
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
                '</main>')
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
        it('a', () => {
            const node = a({
                href : 'html://www.aria.dom/math.svg',
                rel : 'next',
                title : 'om dom dom dom d',
                textContent : 'DOM module'
            });
            assert.equal(node.tagName, 'A');
            assert.equal(node.constructor, HTMLAnchorElement);
            assert.equal(node.href, 'html://www.aria.dom/math.svg');
            assert.equal(node.rel, 'next');
            assert.equal(node.title, 'om dom dom dom d');
            assert.equal(node.textContent, 'DOM module');
        });
    });
});
