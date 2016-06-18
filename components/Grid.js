import Instance from './Instance';
import Row from './Row';
import GridCell from './GridCell';

export default class Grid extends Instance {
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
        return this.element.getAttribute('aria-disabled') || 'false';
    }
    set disabled(disabled) {
        this.element.setAttribute('aria-disabled', disabled);
        this.cells.forEach((cell, i) => {
            if(disabled === 'true') cell.element.removeAttribute('tabindex');
            else if(cell.disabled !== 'true') cell.element.tabIndex = i? -1 : 0;
        });
    }
    get active() {
        return this.find(GridCell, cell => cell.element.tabIndex > -1);
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
    static attachTo(node) {
        GridCell.attachTo(node);
    }
}
