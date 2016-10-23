const map = Array.prototype.map;
const { TEXT_NODE, COMMENT_NODE, ELEMENT_NODE } = window.Node;

const DEFAULT_INDENT = '    ';
const DEFAULT_LINE_BREAK = '\n';
const DEFAULT_LEVEL = 0;

const EMPTY_TAG_LIST = 'AREA BASE BR EMBED HR IMG INPUT KEYGEN LINK META PARAM SOURCE TRACK WBR';
const EMPTY_TAG_SET = EMPTY_TAG_LIST.split(' ').reduce((res, tag) => (res[tag] = true, res), {});

const isEmptyTag = node => {
    if(node.constructor === Element && !node.hasChildNodes()) return true;
    return Boolean(EMPTY_TAG_SET[node.tagName]);
}

export class DOMSerializer {
    constructor(options = {}) {
        for(let opt in options) if(opt in this) this[opt] = options[opt];
    }
    serializeToString(node) {
        let {
            nodeType,
            tagName,
            attributes,
            childNodes,
            innerHTML,
            data
        } = node;
        const linebreak = this.linebreak;
        let indent = this.indent.repeat(this.level);
        let result = indent;
        switch(nodeType) {
            case ELEMENT_NODE:
                tagName = tagName.toLowerCase();
                result += '<' + tagName;
                const hasAttributes = node.hasAttributes();
                if(hasAttributes) {
                    const attrset = map.call(
                        attributes,
                        ({ name, value }) => {
                            return ` ${name}="${value.replace(/\"/g, '&quot;')}"`;
                        })
                    result += attrset.join('');
                }
                const hasEndTag = !isEmptyTag(node);
                const selfClose = node.constructor === Element? '/>' : '>';
                result += hasEndTag? '>' : selfClose;
                if(hasEndTag && node.hasChildNodes()) {
                    const isSingleText = childNodes.length === 1
                        && childNodes[0].nodeType === Node.TEXT_NODE;
                    if(!hasAttributes && isSingleText) {
                        result += node.innerHTML;
                        indent = '';
                    } else {
                        this.level++;
                        const children = map.call(childNodes, this.serializeToString, this);
                        this.level--;
                        result += linebreak + children.join('');
                    }
                } else indent = '';
                if(hasEndTag) result += indent + `</${tagName}>`;
                break;
            case TEXT_NODE:
                result += innerHTML || data;
                break;
            case COMMENT_NODE:
                result += `<!--${ data }-->`;
                break;
        }
        result += linebreak;
        return result;
    }
}

const define = Object.defineProperty;
const proto = DOMSerializer.prototype;
define(proto, 'indent', { writable : true, value : DEFAULT_INDENT });
define(proto, 'linebreak', { writable : true, value : DEFAULT_LINE_BREAK });
define(proto, 'level', { writable : true, value : DEFAULT_LEVEL });
