import {
    XML_NS_URI,
    xmldom, element, text, comment,
    htmldom, a, div, input, // todo
} from './dist';

import chai from 'chai';

const { assert } = chai;
const { Element, Text, Comment } = window;
const XML_NS_ATTR = `xmlns="${ XML_NS_URI }"`;

describe('DOM module', () => {
    describe('dom', () => {
        const serializer = new XMLSerializer;
        it('xmldom', () => {
            const node = xmldom('pipi7', '+++');
            assert.equal(node.nodeType, Node.ELEMENT_NODE);
            assert.equal(node.tagName, 'pipi7');
            assert.equal(node.constructor, Element);

            const str = `<pipi7 ${ XML_NS_ATTR }>+++</pipi7>`;
            assert.equal(serializer.serializeToString(node), str);
        });
        it('element', () => {
            const node = element('bafi4');
            assert.equal(node.nodeType, Node.ELEMENT_NODE);
            assert.equal(node.tagName, 'element');
            assert.equal(node.constructor, Element);

            const str = `<element ${ XML_NS_ATTR }>bafi4</element>`;
            assert.equal(serializer.serializeToString(node), str);
        });
        it('text', () => {
            const node = text('cuce31');
            assert.equal(node.nodeType, Node.TEXT_NODE);
            assert.equal(node.constructor, Text);
            assert.equal(serializer.serializeToString(node), 'cuce31');
        });
        it('comment', () => {
            const node = comment('tuty5');
            assert.equal(node.nodeType, Node.COMMENT_NODE);
            assert.equal(node.constructor, Comment);
            assert.equal(serializer.serializeToString(node), '<!--tuty5-->');
        });
    })
});
