import { DOMAssembler } from '../dom/dom';

const assembler = DOMAssembler();

const xmldom = (tagName, init) => assembler.createElement(tagName, init);

export default xmldom;

export const element = init => xmldom('element', init);

export const text = text => document.createTextNode(text);

export const comment = comment => document.createComment(comment);
