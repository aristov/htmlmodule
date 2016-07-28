import Instance from './Instance';
import Grid from './Grid';
import Row from './Row';
import { ENTER, ESCAPE, SPACE, BACKSPACE, ARROWS, DIGITS, LETTERS } from '../utils/keyCodes';

const { LEFT, UP, RIGHT, DOWN } = ARROWS;
const ARROW_CODES = Object.values(ARROWS);
const DIGIT_CODES = Object.values(DIGITS);
const LETTER_CODES = Object.values(LETTERS);

export default class GridCell extends Instance {
    constructor(element) {
        super(element);

        element.dataset.mode = 'navigation';
        this.grid = this.closest(Grid);
        this.row = this.closest(Row);
        this.text = element.querySelector('.text');
        this.input = this.getInput();
        this.merged = this.getMerged();
        this.span = null;

        this.on('blur', this.onBlur);
        this.on('click', this.onClick);
        this.on('dblclick', this.onDoubleClick);
        this.on('keydown', this.onKeyDown);
    }
    get mode() {
        return this.element.dataset.mode;
    }
    set mode(mode) {
        if(mode !== this.mode && this.readonly !== 'true') {
            const element = this.element;
            const input = this.input;
            const text = this.text;
            if(mode === 'edit') {
                input.value = text.textContent;
                text.hidden = true;
                input.hidden = false;
                input.focus();
                element.classList.add('focus');
            } else {
                text.textContent = input.value;
                input.hidden = true;
                text.hidden = false;
                element.classList.remove('focus');
            }
            element.dataset.mode = mode;
        }
    }
    get readonly() {
        return this.element.getAttribute('aria-readonly') || 'false';
    }
    set readonly(readonly) {
        this.element.setAttribute('aria-readonly', readonly);
    }
    get selected() {
        return this.element.getAttribute('aria-selected') || '';
    }
    set selected(selected) {
        if(this.selected) this.element.setAttribute('aria-selected', selected);
    }
    get disabled() {
        return this.grid.disabled === 'true'?
            'true' :
            this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        const element = this.element;
        element.setAttribute('aria-disabled', disabled);
        if(disabled === 'true') element.removeAttribute('tabindex');
        else element.tabIndex = -1;
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = this.text.textContent = value;
    }
    get active() {
        return String(this.element.tabIndex === 0);
    }
    set active(active) {
        this.element.tabIndex = active === 'true'? 0 : -1;
    }
    get leftSibling() {
        const cell = this.row.cells[this.index - 1];
        return cell? cell.span || cell : null;
    }
    get rightSibling() {
        return this.row.cells[this.index + this.element.colSpan] || null;
    }
    get topSibling() {
        const cell = this.column[this.row.index - 1];
        return cell? cell.span || cell : null;
    }
    get bottomSibling() {
        return this.column[this.row.index + this.element.rowSpan] || null;
    }
    get index() {
        return this.row.cells.indexOf(this);
    }
    get column() {
        return this.grid.cells.filter(cell => cell.index === this.index);
    }
    getMerged() {
        const element = this.element;
        const rowSpan = element.rowSpan;
        const colSpan = element.colSpan;
        const merged = [];
        if(rowSpan > 1 || colSpan > 1) {
            const rows = this.grid.rows;
            const index = this.index;
            const rowIndex = this.row.index;
            for(let i = rowIndex; i < rowIndex + rowSpan; i++) {
                const cells = rows[i].cells;
                for(let j = index; j < index + colSpan; j++) {
                    const cell = cells[j];
                    if(cell !== this) {
                        cell.span = this;
                        merged.push(cell);
                    }
                }
            }
        }
        return merged;
    }
    getInput() {
        const element = this.element;
        let input = element.querySelector('input');
        if(!input) {
            input = document.createElement('input');
            input.hidden = true;
            element.appendChild(input);
        }
        input.addEventListener('blur', this.onInputBlur.bind(this));
        return input;
    }
    onInputBlur() {
        this.mode = 'navigation';
    }
    focus() {
        this.span? this.span.focus() : this.element.focus();
    }
    onClick() {
        if(this.mode === 'navigation' && this.disabled === 'false') {
            this.grid.unselect();
            this.selected = 'true';
        }
    }
    onFocus() {
        this.grid.active = this;
    }
    onBlur() {
        // this.grid.unselect();
    }
    onMouseEnter({ buttons }) {
        const grid = this.grid;
        if(buttons === 1 && grid.multiselectable === 'true') {
            grid.updateSelection(this);
        }
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        if(keyCode === ENTER) this.onEnterKeyDown(event);
        else if(keyCode === ESCAPE) this.onEscapeKeyDown(event);
        else if(ARROW_CODES.includes(keyCode) && this.mode === 'navigation') {
            event.preventDefault();
            this.onArrowKeyDown(event);
        }
        else if(keyCode === BACKSPACE) this.onBackspaceKeyDown(event);
        else if(keyCode === LETTERS.A && (event.metaKey || event.ctrlKey)) {
            if(this.mode === 'navigation' && this.grid.multiselectable === 'true') {
                event.preventDefault();
                this.grid.selectAll();
            }
        }
        else if([SPACE, ...DIGIT_CODES, ...LETTER_CODES].includes(keyCode)) {
            if(keyCode === SPACE && this.readonly === 'true' && this.selected && this.disabled === 'false') {
                event.preventDefault();
                this.grid.unselect();
                this.selected = 'true';
                this.emit('click');
            }
            if(!event.metaKey && !event.ctrlKey) this.mode = 'edit';
        }
    }
    onBackspaceKeyDown(event) {
        if(this.readonly === 'false' && this.mode === 'navigation') {
            event.preventDefault();
            const selected = this.grid.selected;
            if(selected.length) selected.forEach(cell => cell.value = '');
            else this.value = '';
        }
    }
    onEnterKeyDown({ ctrlKey }) {
        if(this.mode === 'navigation') {
            const grid = this.grid;
            if(ctrlKey) {
                const selected = grid.selected;
                if(selected.length) {
                    const merged = selected.filter(cell => Boolean(cell.merged.length));
                    grid.unselect();
                    if(merged.length) merged.forEach(cell => cell.unmerge());
                    else grid.merge(selected);
                } else this.unmerge();
            } else {
                grid.unselect();
                this.mode = 'edit';
            }
        } else {
            this.mode = 'navigation';
            this.element.focus();
        }
    }
    unmerge() {
        const merged = this.merged;
        if(merged.length) {
            let cell;
            while(cell = merged.pop()) {
                cell.span = null;
                cell.hidden = 'false';
            }
            const element = this.element;
            element.rowSpan = 1;
            element.colSpan = 1;
        }
    }
    onEscapeKeyDown() {
        if(this.mode === 'edit') {
            this.mode = 'navigation';
            this.element.focus();
        }
        else this.grid.unselect();
    }
    onDoubleClick() {
        this.mode = 'edit';
    }
    onArrowKeyDown({ keyCode, ctrlKey, shiftKey, metaKey }) {
        const grid = this.grid;
        const current = shiftKey && grid.selection || this;
        let target;
        if(ctrlKey || metaKey) {
            const rowCells = current.row.cells;
            const column = current.column;
            switch(keyCode) {
                case LEFT: target = rowCells[0]; break;
                case UP: target = column[0]; break;
                case RIGHT: target = rowCells[rowCells.length - 1]; break;
                case DOWN: target = column[column.length - 1]; break;
            }
        } else {
            switch(keyCode) {
                case LEFT: target = current.leftSibling; break;
                case UP: target = current.topSibling; break;
                case RIGHT: target = current.rightSibling; break;
                case DOWN: target = current.bottomSibling; break;
            }
        }
        if(target) {
            if(grid.multiselectable === 'true') {
                if(shiftKey) grid.updateSelection(target);
                else {
                    grid.unselect();
                    target.focus();
                }
            } else target.focus();
        }
    }
    static attachTo(node) {
        node.addEventListener('focus', event => {
            const gridcell = this.getInstance(event.target);
            if(gridcell) gridcell.onFocus(event);
        }, true);
        node.addEventListener('mouseenter', event => {
            const gridcell = this.getInstance(event.target);
            if(gridcell) gridcell.onMouseEnter(event);
        }, true);
    }
}
