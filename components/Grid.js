import Instance from './Instance';

export class Grid extends Instance {
    constructor(element) {
        super(element);
        this.selection = null;
    }
    get rows() {
        return this.findAll(Row);
    }
    get cells() {
        return this.findAll(GridCell);
    }
    get multiselectable() {
        return this.element.getAttribute('aria-multiselectable') || 'false';
    }
    set multiselectable(multiselectable) {
        this.element.setAttribute('aria-multiselectable', multiselectable);
    }
    get selected() {
        return this.cells.filter(cell => cell.selected === 'true');
    }
    get disabled() {
        return this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
        this.cells.forEach((cell, i) => {
            if(disabled === 'true') cell.element.removeAttribute('tabindex');
            else if(cell.disabled !== 'true') cell.element.tabIndex = i? -1 : 0;
        });
    }
    get active() {
        let element = this.element.querySelector('[role=gridcell][tabindex="0"]');
        return GridCell.getInstance(element);
    }
    set active(cell) {
        this.active.active = false;
        cell.active = true;
    }
    unselect() {
        this.selected.forEach(cell => cell.selected = 'false');
        this.selection = null;
    }
    merge(cells) {
        let first = cells[0],
            last = cells[cells.length - 1];
        first.merged = [];
        cells.forEach(cell => {
            cell.selected = 'false';
            if(cell !== first) {
                first.merged.push(cell);
                cell.span = first;
                cell.value = '';
                cell.hidden = 'true';
            }
        });
        first.element.colSpan = last.index - first.index + 1;
        first.element.rowSpan = last.row.index - first.row.index + 1;
        first.mode = 'edit';
    }
    selectAll() {
        let rows = this.rows,
            firstRowCells = rows[0].cells,
            lastRowCells = rows[rows.length - 1].cells,
            topLeftCell = firstRowCells[0],
            topRightCell = firstRowCells[firstRowCells.length - 1],
            bottomLeftCell = lastRowCells[0],
            bottomRightCell = lastRowCells[lastRowCells.length - 1],
            active = this.active,
            selection;
        this.cells.forEach(cell => cell.selected = 'true');
        switch(active) {
            case topLeftCell : selection = bottomRightCell; break;
            case topRightCell : selection = bottomLeftCell; break;
            case bottomLeftCell : selection = topRightCell; break;
            case bottomRightCell : selection = topLeftCell; break;
            default : selection = active;
        }
        this.selection = selection;
    }
    updateSelection(target) {
        let active = this.active;
        this.unselect();
        if(active && target !== active) {
            let rowStart = Math.min(active.row.index, target.row.index),
                rowEnd = Math.max(active.row.index, target.row.index),
                colStart = Math.min(active.index, target.index),
                colEnd = Math.max(active.index, target.index),
                rows = this.rows,
                merged = false,
                cells, cell, i, j;
            for(i = rowStart; i <= rowEnd; i++) {
                cells = rows[i].cells;
                for(j = colStart; j <= colEnd; j++) {
                    cell = cells[j];
                    if(cell.span || cell.merged.length) {
                        merged = true;
                        break;
                    } else cell.selected = 'true';
                }
                if(merged) break;
            }
            if(merged) this.selectAll();
            else this.selection = target;
        }
    }
    static attachToDocument() {
        GridCell.attachToDocument();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export class Row extends Instance {
    constructor(element) {
        super(element);
        this.grid = this.closest(Grid);
    }
    get cells() {
        return this.findAll(GridCell);
    }
    get next() {
        return this.grid.rows[this.index + 1];
    }
    get prev() {
        return this.grid.rows[this.index - 1];
    }
    get index() {
        return this.grid.rows.indexOf(this);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

export class GridCell extends Instance {
    constructor(element) {
        super(element);
        element.dataset.mode = 'navigation';
        this.grid = this.closest(Grid);
        this.row = this.closest(Row);
        this.text = element.querySelector('.text');
        this.input = this.getInput();
        this.merged = this.getMerged();
        this.on('blur', this.onBlur);
        this.on('click', this.onClick);
        this.on('dblclick', this.onDoubleClick);
        this.on('keydown', this.onKeyDown);
        this.span = null;
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
            this.element.getAttribute('aria-disabled') || '';
    }
    set disabled(disabled) {
        let element = this.element;
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
            input.setAttribute('role', 'presentation');
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
        if(keyCode === 13) this.onEnterKeyDown(event);
        else if(keyCode === 27) this.onEscapeKeyDown(event);
        else if(keyCode >= 37 && keyCode <= 40) {
            if(this.mode === 'navigation') {
                event.preventDefault();
                this.onArrowKeyDown(event);
            }
        }
        else if(keyCode === 8) this.onBackspaceKeyDown(event);
        else if(keyCode === 65 && (event.metaKey || event.ctrlKey)) {
            if(this.mode === 'navigation') {
                event.preventDefault();
                this.grid.selectAll();
            }
        }
        else if(keyCode === 32 ||
            (keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 65 && keyCode <= 90) &&
            !event.metaKey && !event.ctrlKey) {
                this.onCharacterKeyDown(event);
        }
    }
    onCharacterKeyDown() {
        this.mode = 'edit';
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
                case 37: target = rowCells[0]; break;
                case 38: target = column[0]; break;
                case 39: target = rowCells[rowCells.length - 1]; break;
                case 40: target = column[column.length - 1]; break;
            }
        } else {
            switch(keyCode) {
                case 37: target = current.leftSibling; break;
                case 38: target = current.topSibling; break;
                case 39: target = current.rightSibling; break;
                case 40: target = current.bottomSibling; break;
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
    static attachToDocument() {
        document.addEventListener('focus', function(event) {
            let gridCell = this.getInstance(event.target);
            if(gridCell) gridCell.onFocus(event);
        }.bind(this), true);
        document.addEventListener('mouseenter', function(event) {
            let gridCell = this.getInstance(event.target);
            if(gridCell) gridCell.onMouseEnter(event);
        }.bind(this), true);
    }
}
