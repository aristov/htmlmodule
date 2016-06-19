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
        return String(Boolean(this.closest(TreeItem, item => item.expanded === 'false')));
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
        let keyCode = event.keyCode;
        if([SPACE, ENTER, ...ARROW_CODES].indexOf(keyCode) > -1) {
            event.preventDefault();
            event.stopPropagation();
            switch(keyCode) {
                case SPACE:
                case ENTER:
                    if(this.expanded) this.expanded = String(this.expanded === 'false');
                    break;
                case ARROWS.LEFT:
                    this.onLeftArrowKeyDown();
                    break;
                case ARROWS.RIGHT:
                    this.onRightArrowKeyDown();
                    break;
                case ARROWS.UP:
                    this.onUpArrowKeyDown();
                    break;
                case ARROWS.DOWN:
                    this.onDownArrowKeyDown();
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
        let parent = this.parent,
            items = parent.items.filter(item => item.hidden === 'false'),
            index = items.indexOf(this),
            prevItem = items[index - 1];
        if(prevItem) prevItem.focus();
        else if(parent instanceof TreeItem) parent.focus();
    }
    onDownArrowKeyDown() {
        if(this.expanded === 'true') this.items[0].focus();
        else {
            let parent = this;
            while(parent = parent.parent) {
                let items = parent.items.filter(item => item.hidden === 'false'),
                    index = items.indexOf(this),
                    nextItem = items[index + 1];
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
            let target = event.target,
                treeItem = this.getInstance(target);
            if(treeItem) treeItem.onFocus(event);
        }, true);
    }
}
