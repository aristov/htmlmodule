import Instance from './Instance';
import Grid from './Grid';
import GridCell from './GridCell';

export default class Row extends Instance {
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
