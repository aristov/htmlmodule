import chai from 'chai'
import { A, Input, Div, Span } from '../lib'

const { assert } = chai
const {
    Comment,
    HTMLAnchorElement,
    HTMLButtonElement,
    HTMLSpanElement,
    Text,
    document
} = window

describe('A', () => {
    describe('new A', () => {
        const test = new A
        const node = test.node
        it('node', () => {
            assert.instanceOf(node, HTMLAnchorElement)
        })
        it('node.constructor', () => {
            assert.equal(node.constructor, HTMLAnchorElement)
        })
        it('node.tagName', () => {
            assert.equal(node.tagName, 'A')
        })
        it('node.hasAttributes()', () => {
            assert.isFalse(node.hasAttributes())
        })
        it('node.outerHTML', () => {
            assert.equal(node.outerHTML, '<a></a>')
        })
    })
    describe('init', () => {
        const test = new A
        const node = test.node
        test.init({
            attrset : { test : 'example' },
            dataset : { ref : '712-42' },
            style : { color : '#777' },
            id : 'w3-link',
            className : undefined,
            href : 'https://www.w3.org',
            children : 'W3C homepage'
        })
        describe('assembler interfaces', () => {
            it('attrset', () => {
                assert.equal(node.getAttribute('test'), 'example')
            })
            it('dataset', () => {
                assert.equal(node.dataset.ref, '712-42')
            })
            it('style', () => {
                assert.equal(node.style.color, 'rgb(119, 119, 119)')
            })
            it('children', () => {
                assert(node.hasChildNodes(), 'has child nodes')
            })
            it('children', () => {
                assert.equal(node.childNodes.length, 1)
            })
            it('children', () => {
                assert.equal(node.innerHTML, 'W3C homepage')
            })
        })
        describe('known properties', () => {
            it('id', () => {
                assert.equal(node.id, 'w3-link')
                assert.equal(node.getAttribute('id'), 'w3-link')
            })
            it('href', () => {
                assert.equal(node.href, 'https://www.w3.org/')
                assert.equal(node.getAttribute('href'), 'https://www.w3.org')
            })
        })
        describe('undefined', () => {
            it('className', () => {
                assert.equal(node.className, '')
                assert(!node.hasAttribute('class'), 'has no "class" attribute')
            })
        })
    })
    describe('attributes', () => {
        const { node } = new Input({
            attrset : {
                checked : '',
                disabled : '',
                custom_string : 'string',
                custom_boolean : true,
                custom_number : 123,
                class : undefined,
                custom_undef : undefined,
                custom_null : null
            }
        })
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes')
        })
        it('attributes.length', () => {
            assert.equal(node.attributes.length, 8)
        })
        it('checked', () => {
            assert.equal(node.checked, true)
            assert.equal(node.getAttribute('checked'), '')
        })
        it('disabled', () => {
            assert.equal(node.disabled, true)
            assert.equal(node.getAttribute('disabled'), '')
        })
        it('custom_string', () => {
            assert.equal(node.getAttribute('custom_string'), 'string')
            assert.isFalse('custom_string' in node, 'has no string property')
        })
        it('custom_boolean', () => {
            assert(node.hasAttribute('custom_boolean'), 'has boolean attribute')
            assert.equal(node.getAttribute('custom_boolean'), 'true')
        })
        it('custom_number', () => {
            assert(node.hasAttribute('custom_number'), 'has number attribute')
            assert.equal(node.getAttribute('custom_number'), '123')
        })
        it('custom_undef', () => {
            assert(node.hasAttribute('custom_undef'), 'has undefined attribute')
            assert.equal(node.getAttribute('custom_undef'), 'undefined')
        })
        it('class', () => {
            assert(node.hasAttribute('class'), 'has class attribute')
            assert.equal(node.className, 'undefined')
        })
        it('custom_null', () => {
            assert(node.hasAttribute('custom_null'), 'has null attribute')
            assert.equal(node.getAttribute('custom_null'), 'null')
        })
    })
    describe('dataset', () => {
        const { node } = new Div({
            dataset : {
                simple : 'simple data-attribute',
                camelCased : 'camelCased data-attribute'
            }
        })
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes')
            assert.equal(node.attributes.length, 2)
        })
        it('simple', () => {
            assert.equal(node.dataset.simple, 'simple data-attribute')
            assert.equal(node.getAttribute('data-simple'), 'simple data-attribute')
        })
        it('camelCased', () => {
            assert.equal(node.dataset.camelCased, 'camelCased data-attribute')
            assert.equal(node.getAttribute('data-camel-cased'), 'camelCased data-attribute')
        })
    })
    describe('style', () => {
        const { node } = new Span({
            style : {
                color : 'white',
                backgroundColor : 'black'
            }
        })
        it('has attributes', () => {
            assert(node.hasAttributes(), 'has attributes')
            assert.equal(node.attributes.length, 1)
        })
        it('color', () => {
            assert.equal(node.style.color, 'white')
        })
        it('backgroundColor', () => {
            assert.equal(node.style.backgroundColor, 'black')
        })
    })
    describe('children', () => {
        const child = new Span
        const { node } = new Div([
            0, // ignored
            document.createElement('button'),
            '', // ignored
            'text node as string',
            NaN, // ignored
            document.createTextNode('created text node'),
            null, // ignored
            document.createElement('a'),
            false, // ignored
            document.createComment('Simple DOM Comment node'),
            undefined, // ignored
            child
        ])
        const childNodes = node.childNodes
        it(`has ${ childNodes.length } child nodes`, () => {
            assert(node.hasChildNodes(), 'has child nodes')
            assert.equal(childNodes.length, 6)
        })
        it('1: button', () => {
            assert.equal(childNodes[0].constructor, HTMLButtonElement)
            assert.equal(childNodes[0].tagName, 'BUTTON')
        })
        it('2: text node as string', () => {
            assert.equal(childNodes[1].constructor, Text)
            assert.equal(childNodes[1].textContent, 'text node as string')
        })
        it('3: created text node', () => {
            assert.equal(childNodes[2].constructor, Text)
            assert.equal(childNodes[2].nodeValue, 'created text node')
        })
        it('4: a', () => {
            assert.equal(childNodes[3].constructor, HTMLAnchorElement)
            assert.equal(childNodes[3].tagName, 'A')
        })
        it('5: comment', () => {
            assert.equal(childNodes[4].constructor, Comment)
            assert.equal(childNodes[4].textContent, 'Simple DOM Comment node')
        })
        it('6: span', () => {
            assert.equal(childNodes[5].constructor, HTMLSpanElement)
            assert.equal(childNodes[5].tagName, 'SPAN')
        })
    })
})
