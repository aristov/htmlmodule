import Instance from './Instance';
import Grid from './Grid';
import Row from './Row';
import { ENTER, ESCAPE, SPACE, BACKSPACE, ARROWS, DIGITS, LETTERS } from '../tools/keyCodes';

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
            let element = this.element,
                input = this.input,
                text = this.text;
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
        this.element.setAttribute('aria-selected', selected);
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
        return this.element.tabIndex === 0;
    }
    set active(active) {
        this.element.tabIndex = active? 0 : -1;
    }
    get leftSibling() {
        let cell = this.row.cells[this.index - 1];
        return cell? cell.span || cell : null;
    }
    get rightSibling() {
        return this.row.cells[this.index + this.element.colSpan] || null;
    }
    get topSibling() {
        let cell = this.column[this.row.index - 1];
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
        let element = this.element,
            rowSpan = element.rowSpan,
            colSpan = element.colSpan,
            merged = [];
        if(rowSpan > 1 || colSpan > 1) {
            let grid = this.grid,
                rows = grid.rows,
                index = this.index,
                rowIndex = this.row.index,
                cells, cell, i, j;
            for(i = rowIndex; i < rowIndex + rowSpan; i++) {
                cells = rows[i].cells;
                for(j = index; j < index + colSpan; j++) {
                    cell = cells[j];
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
        let element = this.element,
            input = element.querySelector('input');
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
        if(this.mode === 'navigation') this.grid.unselect();
    }
    onFocus() {
        this.grid.active = this;
    }
    onBlur() {
        this.grid.unselect();
    }
    onMouseEnter({ buttons }) {
        let grid = this.grid;
        if(buttons === 1 && grid.multiselectable === 'true') {
            grid.updateSelection(this);
        }
    }
    onKeyDown(event) {
        let keyCode = event.keyCode;
        if(keyCode === ENTER) this.onEnterKeyDown(event);
        else if(keyCode === ESCAPE) this.onEscapeKeyDown(event);
        else if(ARROW_CODES.indexOf(keyCode) > -1 && this.mode === 'navigation') {
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
        else if([SPACE, ...DIGIT_CODES, ...LETTER_CODES].indexOf(keyCode) > -1) {
            if(!event.metaKey && !event.ctrlKey) this.mode = 'edit';
        }
    }
    onBackspaceKeyDown(event) {
        if(this.mode === 'navigation') {
            let selected = this.grid.selected;
            event.preventDefault();
            if(selected.length) selected.forEach(cell => cell.value = '');
            else this.value = '';
        }
    }
    onEnterKeyDown({ ctrlKey }) {
        if(this.mode === 'navigation') {
            let grid = this.grid,
                selected = grid.selected;
            if(ctrlKey) {
                if(selected.length) {
                    let merged = selected.filter(cell => Boolean(cell.merged.length));
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
        let merged = this.merged;
        if(merged.length) {
            let element = this.element,
                cell;
            while(cell = merged.pop()) {
                cell.span = null;
                cell.hidden = 'false';
            }
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
        let grid = this.grid,
            current = shiftKey? grid.selection || this : this,
            target;
        if(ctrlKey || metaKey) {
            let rowCells = current.row.cells,
                column = current.column;
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
            let gridCell = this.getInstance(event.target);
            if(gridCell) gridCell.onFocus(event);
        }, true);
        node.addEventListener('mouseenter', event => {
            let gridCell = this.getInstance(event.target);
            if(gridCell) gridCell.onMouseEnter(event);
        }, true);
    }
}
