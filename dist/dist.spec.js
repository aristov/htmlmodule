import { XML_NS_URI, xmldom, htmldom, element, text, comment, a } from './dist';

import chai from 'chai';

const { assert } = chai;
const { Element, Text, Comment, HTMLSpanElement, HTMLAnchorElement } = window;
const { ELEMENT_NODE, TEXT_NODE, COMMENT_NODE } = Node;

const XML_NS_ATTR = `xmlns="${ XML_NS_URI }"`;

const serializer = new XMLSerializer;

describe('DOM module', () => {
    describe('dom', () => {
        it('xmldom', () => {
            const node = xmldom('pipi7', '+++');
            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'pipi7');
            assert.equal(node.constructor, Element);

            const str = `<pipi7 ${ XML_NS_ATTR }>+++</pipi7>`;
            assert.equal(serializer.serializeToString(node), str);
        });
        it('element', () => {
            const node = element('bafi4');
            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'element');
            assert.equal(node.constructor, Element);

            const str = `<element ${ XML_NS_ATTR }>bafi4</element>`;
            assert.equal(serializer.serializeToString(node), str);
        });
        it('text', () => {
            const node = text('cuce31');
            assert.equal(node.nodeType, TEXT_NODE);
            assert.equal(node.constructor, Text);
            assert.equal(serializer.serializeToString(node), 'cuce31');
        });
        it('comment', () => {
            const node = comment('tuty5');
            assert.equal(node.nodeType, COMMENT_NODE);
            assert.equal(node.constructor, Comment);
            assert.equal(serializer.serializeToString(node), '<!--tuty5-->');
        });
    });
    describe('html', () => {
        it('htmldom', () => {
            const node = htmldom('span', {
                id : '00101',
                className :'fa fi fu',
                children : ['a', comment('a b'), 'b']
            });
            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'SPAN');
            assert.equal(node.constructor, HTMLSpanElement);
            assert.equal(node.id, '00101');
            assert.equal(node.className, 'fa fi fu');
            assert.equal(node.children.length, 0);
            assert.equal(node.childNodes.length, 3);
            assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
            assert.equal(node.childNodes[1].constructor, Comment);
            assert.equal(node.childNodes[2].textContent, 'b');
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
