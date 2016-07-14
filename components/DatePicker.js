import Instance from './Instance';
import Button from './Button';
import GridCell from './GridCell';
import moment from 'moment';

import DOMTransform from 'DOMTransform';
import DON from 'DON';
import datepicker from '../templates/datepicker';

const template = new DOMTransform;

datepicker(template);

export default class DatePicker extends Instance {
    constructor(element) {
        super(element);
        this.heading = element.querySelector('[role=heading]');
        this.grid = element.querySelector('[role=grid]');
    }
    get value() {
        return this.element.dataset.value || moment(Date.now().format('YYYY-MM-DD'));
    }
    set value(value) {
        this.element.dataset.value = value;
    }
    onClick(event) {
        const target = event.target;
        if(target.dataset.instance === 'Button') this.onButtonClick(event);
        const gridcell = GridCell.closestInstance(target);
        if(gridcell && gridcell.disabled === 'false') this.onGridCellClick(event);
    }
    onGridCellClick({ target }) {
        this.value = moment(this.value, 'YYYY-MM-DD').date(target.dataset.value).format('YYYY-MM-DD');
        this.emit('change');
    }
    onButtonClick({ target }) {
        const button = Button.getInstance(target);
        const time = moment(this.value, 'YYYY-MM-DD');
        this.value = time.month(time.month() + Number(button.value)).format('YYYY-MM-DD');
        this.rebuild(this.value);
    }
    rebuild(value) {
        this.heading.textContent = moment(value, 'YYYY-MM-DD').format('MMMM YYYY');
        const grid = this.grid;
        grid.parentElement.replaceChild(this.grid = DON.toDOM(template.apply({
            element : 'dategrid',
            attributes : { value : value }
        })), grid);
    }
    static attachTo(node) {
        node.addEventListener('click', event => {
            const instance = this.closestInstance(event.target);
            if(instance) instance.onClick(event);
        });
    }
}
