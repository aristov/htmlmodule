import Instance from './Instance';
import { ARROWS, ENTER, SPACE } from '../tools/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export class Tree extends Instance {
    get items() {
        return this.findAll(TreeItem);
    }
    unselect() {
        this.items.forEach(item => item.selected = 'false');
    }
}

export class TreeItem extends Instance {
    constructor(element) {
        super(element);
        this.tree = Tree.getInstance(element.closest('[data-instance=Tree]'));
        this.on('click', this.onClick);
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
        return this.element.getAttribute('aria-expanded');
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || 'false';
    }
    set selected(selected) {
        if(selected === 'true') this.tree.unselect();
        this.element.setAttribute('aria-selected', selected);
    }
    get parent() {
        let element = this.element.parentElement.closest('[data-instance=TreeItem]');
        return element? TreeItem.getInstance(element) : this.tree;
    }
    get hidden() {
        return String(Boolean(this.element.parentElement.closest('[data-instance=TreeItem][aria-expanded=false]')));
    }
    onClick({ target }) {
        if(target.closest('[data-instance=TreeItem]') === this.element) this.selected = 'true';
    }
    onFocus() {
        this.tree.items.forEach(item => item.element.tabIndex = -1);
        this.element.tabIndex = 0;
        this.selected = 'true';
    }
    onDoubleClick({ target }) {
        if(target.closest('[data-instance=TreeItem]') === this.element && this.expanded) {
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
    static attachToDocument() {
        document.addEventListener('focus', event => {
            let target = event.target,
                treeItem = this.getInstance(target);
            if(treeItem) treeItem.onFocus(event);
        }, true);
    }
}
