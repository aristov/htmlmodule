const map = Array.prototype.map;
const assign = Object.assign;

const epmtyTagList = 'area base br embed hr img input keygen link meta param source track wbr';
const emptyTagSet = epmtyTagList.split(' ').reduce((res, tag) => (res[tag] = true, res), {});

const isEmptyTag = node => {
    if(node.constructor === Element && !node.hasChildNodes()) return true;
    return Boolean(emptyTagSet[node.tagName]);
}

// todo refactoring => DOMSerializer
export class HTMLSerializer {
    constructor(options = {
        indent : '    ',
        lineBreak : '\n',
        level : 0
    }) {
        assign(this, options);
    }
    serializeToString(node) {
        let {
            tagName,
            attributes,
            childNodes,
            innerHTML,
            textContent
        } = node;
        const lineBreak = this.lineBreak;
        let indent = this.indent.repeat(this.level);
        let result = indent;
        if(tagName) {
            tagName = tagName.toLowerCase();
            result += '<' + tagName;
            const hasAttributes = node.hasAttributes();
            if(hasAttributes) {
                const attrset = map.call(attributes,
                    ({ name, value }) => ` ${name}="${value.replace(/\"/g, '&quot;')}"`);
                result += attrset.join('');
            }
            result += '>';
            const hasEndTag = isEmptyTag(node);
            if(hasEndTag && node.hasChildNodes()) {
                const isSingleText = childNodes.length === 1 && childNodes[0].nodeType === Node.TEXT_NODE;
                if(!hasAttributes && isSingleText) {
                    result += node.innerHTML;
                    indent = '';
                } else {
                    this.level++;
                    const children = map.call(childNodes, this.serializeToString, this);
                    this.level--;
                    result += lineBreak + children.join('');
                }
            } else indent = '';
            if(hasEndTag) result += indent + `</${tagName}>`;
        } else {
            result += innerHTML || textContent;
        }
        result += lineBreak;
        return result;
    }
}
