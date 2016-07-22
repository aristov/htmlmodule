import Instance from './Instance';
import Tree from './Tree';
import { ARROWS, ENTER, SPACE } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export default class TreeItem extends Instance {
    constructor(element) {
        super(element);
        this.tree = this.closest(Tree);
        this.on('dblclick', this.onDoubleClick);
        this.on('keydown', this.onKeyDown);
        if(this.expanded) {
            element
                .querySelector('[role=button]')
                .addEventListener('click', () => this.expanded = String(this.expanded === 'false'));
        }
    }
    get items() {
        return this.findAll(TreeItem);
    }
    get expanded() {
        return this.element.getAttribute('aria-expanded') || '';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || 'false';
    }
    set selected(selected) {
        if(selected === 'true') this.tree.items.forEach(item => item.selected = 'false');
        this.element.setAttribute('aria-selected', selected);
    }
    get parent() {
        return this.closest(TreeItem) || this.tree;
    }
    get hidden() {
        return String(Boolean(this.closest(TreeItem, ({ expanded }) => expanded === 'false')));
    }
    onFocus() {
        this.tree.items.forEach(item => item.element.tabIndex = -1);
        this.element.tabIndex = 0;
        this.selected = 'true';
    }
    onDoubleClick({ target }) {
        if(this.expanded && TreeItem.closestInstance(target) === this) {
            this.expanded = String(this.expanded === 'false');
        }
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if([SPACE, ENTER, ...ARROW_CODES].includes(keyCode)) {
            event.preventDefault();
            event.stopPropagation();
            switch(keyCode) {
                case SPACE:
                case ENTER:
                    if(this.expanded) this.expanded = String(this.expanded === 'false');
                    break;
                case ARROWS.LEFT:
                    this.onLeftArrowKeyDown(event);
                    break;
                case ARROWS.RIGHT:
                    this.onRightArrowKeyDown(event);
                    break;
                case ARROWS.UP:
                    this.onUpArrowKeyDown(event);
                    break;
                case ARROWS.DOWN:
                    this.onDownArrowKeyDown(event);
                    break;
            }
        }
    }
    onLeftArrowKeyDown() {
        if(this.expanded === 'true') this.expanded = 'false';
        else if(this.parent instanceof TreeItem) this.parent.focus();
    }
    onRightArrowKeyDown() {
        if(this.expanded === 'false') this.expanded = 'true';
        else if(this.items.length) this.items[0].focus();
    }
    onUpArrowKeyDown() {
        const parent = this.parent;
        const items = parent.items.filter(({ hidden }) => hidden === 'false');
        const index = items.indexOf(this);
        const prevItem = items[index - 1];
        if(prevItem) prevItem.focus();
        else if(parent instanceof TreeItem) parent.focus();
    }
    onDownArrowKeyDown() {
        if(this.expanded === 'true') this.items[0].focus();
        else {
            let parent = this;
            while(parent = parent.parent) {
                const items = parent.items.filter(({ hidden }) => hidden === 'false');
                const nextItem = items[items.indexOf(this) + 1];
                if(nextItem) {
                    nextItem.focus();
                    break;
                }
            }
        }
    }
    focus() {
        this.element.focus();
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            const target = event.target;
            const treeitem = this.getInstance(target);
            if(treeitem) treeitem.onFocus(event);
        }, true);
    }
}
