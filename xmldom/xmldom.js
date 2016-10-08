import { DOMAssembler } from '../dom/dom';

const { document } = window;

const assembler = new DOMAssembler;

export const xmldom = (tagName, init) => assembler.createElement(tagName, init);

export const element = init => xmldom('element', init);

export const text = text => document.createTextNode(text);

export const comment = comment => document.createComment(comment);
