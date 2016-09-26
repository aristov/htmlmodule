import Instance from './Instance';
import TabList from './TabList';
import { SPACE, ARROWS } from '../utils/keyCodes';

const ARROW_CODES = Object.values(ARROWS);

export default class Tab extends Instance {
    constructor(element) {
        super(element);
        this.list = this.closest(TabList);
        this.on('click', this.onClick);
        this.on('keydown', this.onKeyDown);
        this.on('keyup', this.onKeyUp);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || 'false';
    }
    set selected(selected) {
        const element = this.element;
        element.setAttribute('aria-selected', selected);
        element.tabIndex = selected === 'true'? 0 : -1;
        this.panels.forEach(panel => panel.expanded = selected);
        if(selected === 'true' && document.activeElement !== element) element.focus();
    }
    get controls() {
        return (this.element.getAttribute('aria-controls') || '').split(' ');
    }
    get panels() {
        return this.controls.map(id => {
            const element = document.getElementById(id);
            return TabPanel.getInstance(element);
        });
    }
    onClick() {
        if(this.selected === 'false') {
            const list = this.list;
            list.select(this);
            list.emit('change');
        }
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(ARROW_CODES.includes(keyCode)) {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        if(keyCode === SPACE && !event.repeat) {
            event.preventDefault();
            this.element.classList.add('active');
        }
    }
    onKeyUp({ keyCode }) {
        if(keyCode === SPACE) {
            this.element.classList.remove('active');
            this.emit('click');
        }
    }
    onArrowKeyDown({ keyCode }) {
        keyCode === ARROWS.LEFT || keyCode === ARROWS.UP? this.list.prev() : this.list.next();
    }
    static attachTo(node) {
        node.addEventListener('focus', ({ target }) => this.getInstance(target), true);
    }
}

export class TabPanel extends Instance {
    get expanded() {
        return this.element.getAttribute('aria-expanded') || 'false';
    }
    set expanded(expanded) {
        this.element.setAttribute('aria-expanded', expanded);
    }
}
