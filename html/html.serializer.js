const map = Array.prototype.map;
const assign = Object.assign;

const noEndTagList = 'area base br embed hr img input keygen link meta param source track wbr';
const noEndTagSet = noEndTagList.split(' ').reduce((res, tag) => (res[tag] = true, res), {});

export class HTMLSerializer {
    constructor(options = {
        indent : '    ',
        lineBreak : '\n',
        level : 0
    }) {
        assign(this, options);
    }
    serializeToString({ tagName, attributes, childNodes, innerHTML, textContent }) {
        const lineBreak = this.lineBreak;
        let indent = this.indent.repeat(this.level);
        let result = indent;
        if(tagName) {
            tagName = tagName.toLowerCase();
            result += '<' + tagName;
            if(attributes && attributes.length) {
                const attrset = map.call(attributes,
                    ({ name, value }) => ` ${name}="${value.replace(/\"/g, '&quot;')}"`);
                result += attrset.join('');
            }
            result += '>';
            const hasEndTag = !noEndTagSet[tagName];
            if(childNodes && childNodes.length && hasEndTag) {
                this.level++;
                const children = map.call(childNodes, this.serializeToString, this);
                this.level--;
                result += lineBreak + children.join('');
            } else indent = '';
            if(hasEndTag) result += indent + `</${tagName}>`;
        } else {
            result += innerHTML || textContent;
        }
        result += lineBreak;
        return result;
    }
}