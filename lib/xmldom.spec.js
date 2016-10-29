import { xmldom, element, text, comment } from './index';

import chai from 'chai';

const { assert } = chai;
const {
    Node,
    Element,
    Text,
    Comment,
    XMLSerializer
} = window;
const { ELEMENT_NODE, TEXT_NODE, COMMENT_NODE } = Node;

const serializer = new XMLSerializer;

describe('XMLDOM library', () => {
    describe('dom', () => {
        it('xmldom', () => {
            const init = { attrset : { g : '+++', j : '---', w : '!!!' } };
            const node = xmldom('pipi7', init);

            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'pipi7');
            assert.equal(node.constructor, Element);
            assert.equal(node.getAttribute('g'), '+++');
            assert.equal(node.getAttribute('j'), '---');
            assert.equal(node.getAttribute('w'), '!!!');
        });
        it('element', () => {
            const node = element('bafi4');

            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'element');
            assert.equal(node.constructor, Element);
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
    describe('try to use html semantics', () => {
        it('xmldom span', () => {
            const init = {
                id : '00101',
                className :'fa fi fu',
                tabIndex : 0,
                children : ['a', comment('a b'), 'b']
            };
            const node = xmldom('span', init);

            assert.equal(node.nodeType, ELEMENT_NODE);
            assert.equal(node.tagName, 'span');
            assert.equal(node.constructor, Element);
            assert.equal(node.attributes.length, 2);
            assert.equal(node.id, '00101');
            assert.equal(node.className, 'fa fi fu');
            assert.equal(node.tabIndex, undefined);
            assert.equal(node.childNodes.length, 3);
            assert.equal(node.childNodes[0].nodeType, TEXT_NODE);
            assert.equal(node.childNodes[1].constructor, Comment);
            assert.equal(node.childNodes[2].textContent, 'b');
        });
        it('xmldom a', () => {
            const init = {
                href : 'html://www.aria.dom/math.svg',
                rel : 'next',
                title : 'om dom dom dom d',
                textContent : 'DOM module'
            };
            const node = xmldom('a', init);
            assert.equal(node.tagName, 'a');
            assert.equal(node.constructor, Element);
            assert.equal(node.href, undefined);
            assert.equal(node.rel, undefined);
            assert.equal(node.title, undefined);
            assert.equal(node.textContent, 'DOM module');
        });
    });
});
