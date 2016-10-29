import { NodeInit } from './nodeinit';
import chai from 'chai';

const { assert } = chai;
const { document, JSON } = window;

describe('Node init', () => {
    it('return the same object', () => {
        const init = { id : 'random-id' };
        assert.equal(NodeInit(init), init);
    });
    it('properly strigified to JSON', () => {
        const init = { id : 'random-id' };
        assert.equal(JSON.stringify(NodeInit(init)), '{"id":"random-id"}');
    });
    it('properly assign string as children', () => {
        const string = 'string as textContent';
        const init = NodeInit(string);
        assert.equal(init.children, string);
    });
    it('properly assign array as children', () => {
        const children = ['a', 'b', 'c'];
        const init = NodeInit(children);
        assert.equal(init.children, children);
    });
    it('properly assign element as children', () => {
        const child = document.createElement('a');
        const init = NodeInit(child);
        assert.equal(init.children, child);
    });
    it('passes through undefined', () => {
        const init = NodeInit(undefined);
        assert.equal(init, undefined);
    });
});
