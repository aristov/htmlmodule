import Instance from './Instance';
import moment from 'moment';

//import domTransform from

class DatePicker extends Instance {
    constructor(element) {
        super(element);

        const dataset = element.dataset;
        const now = new Date;

        /*if(!dataset.year) dataset.year = now.getFullYear();
        if(!dataset.month) dataset.month = now.getMonth() + 1;
        if(!dataset.date) dataset.date = '';*/

        //this.build();

        //this.on('click', this.onClick);
        this.header = element.querySelector('.header');
        this.heading = element.querySelector('[role=heading]');
        this.grid = element.querySelector('[role=grid]');
        this.gridbody = element.querySelector('tbody');
    }
    get year() {
        return moment(this.value, 'YYYY-MM-DD').year();
    }
    get month() {
        return moment(this.value, 'YYYY-MM-DD').month();
    }
    get date() {
        return moment(this.value, 'YYYY-MM-DD').date();
    }
    get value() {
        return this.dataset.value || moment(Date.now().format('YYYY-MM-DD'));
    }
    build() {
        const element = this.element;

        element.appendChild(this.buildHeader());
        element.appendChild(this.buildGrid());
    }
    buildHeader() {
        const header = document.createElement('div');

        header.classList.add('header');
        header.appendChild(this.buildButton('+1'));
        header.appendChild(this.buildHeading());
        header.appendChild(this.buildButton('-1'));

        return this.header = header;
    }
    buildButton(value) {
        const button = document.createElement('span');

        button.setAttribute('role', 'button');
        button.tabIndex = -1;
        button.classList.add('button');
        button.dataset.instance = 'button';
        button.dataset.value = value;

        return button;
    }
    buildHeading() {
        const heading = document.createElement('span');
        const dataset = this.element.dataset;

        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-live', 'assertive');
        heading.setAttribute('aria-atomic', 'true');
        heading.id = 'heading' + Math.floor(Math.random() * Date.now());
        heading.textContent = DatePicker.MONTH_NAMES[dataset.month - 1] + ' ' + dataset.year;

        return this.heading = heading;
    }
    buildGrid() {
        const grid = document.createElement('table');

        grid.setAttribute('role', 'grid');
        grid.setAttribute('cellspacing', '0');
        grid.setAttribute('aria-labelledby', this.element.querySelector('[role=heading]').id);
        grid.appendChild(this.buildGridHead());
        grid.appendChild(this.buildGridBody());

        return this.grid = grid;
    }
    buildGridHead() {
        const head = document.createElement('thead');
        const row = document.createElement('tr');

        DatePicker.WEEK_DAY_NAMES.forEach(name => {
            const columnheader = document.createElement('th');
            columnheader.setAttribute('role', 'columnheader');
            columnheader.textContent = name;
            row.appendChild(columnheader);
        });
        head.appendChild(row);

        return head;
    }
    buildGridBody() {
        const element = this.element;
        const dataset = element.dataset;
        const selectedYear = dataset.year;
        const selectedMonth = dataset.month - 1;
        const firstDayOfMonth = (new Date(selectedYear, selectedMonth, 1)).getDay() || 7;
        const now = new Date;
        const currentDateString = [now.getFullYear(), now.getMonth(), now.getDate()].join('.');
        const selectedDateString = [selectedYear, selectedMonth, dataset.date].join('.');
        const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
        const weekCount = Math.ceil((daysInMonth + firstDayOfMonth - 1) / 7);
        const body = document.createElement('tbody');

        for(let i = 0; i < weekCount; i++) {
            const row = document.createElement('tr');
            for(let j = 1; j <= 7; j++) {
                const date = (i * 7 + j) - firstDayOfMonth + 1;
                const dateValue = new Date(selectedYear, selectedMonth, date).getDate();
                const dateString = [selectedYear, selectedMonth, date].join('.');
                const cell = document.createElement('td');
                const dataset = cell.dataset;

                cell.setAttribute('role', 'gridcell');
                cell.textContent = dateValue;
                dataset.value = dateValue;
                dataset.weekday = j - 1;

                if(currentDateString === dateString) cell.setAttribute('aria-current', 'date');
                if(selectedDateString === dateString) cell.setAttribute('aria-selected', 'true');
                if(date < 1 || date > daysInMonth) cell.setAttribute('aria-disabled', 'true');

                row.appendChild(cell);
            }
            body.appendChild(row);
        }
        return this.gridbody = body;
    }
    onClick(event) {
        const target = event.target;
        if(target.dataset.instance === 'Button') this.onButtonClick(event);
        if(target.getAttribute('role') === 'gridcell') this.onGridCellClick(event);
    }
    onGridCellClick({ target }) {
        if(target.getAttribute('aria-disabled') !== 'true') {
            const element = this.element;
            const selected = element.querySelector('[role=gridcell][aria-selected=true]');
            if(selected) selected.setAttribute('aria-selected', 'false');
            target.setAttribute('aria-selected', 'true');
            element.dataset.date = target.dataset.value;
            this.emit('change');
        }
    }
    onButtonClick({ target }) {
        const element = this.element;
        const value = target.dataset.value;
        const dataset = element.dataset;

        //value === '+1'? dataset.month++ : dataset.month--;
        dataset.month += Number(value);

        if(dataset.month < 1) {
            dataset.year--;
            dataset.month = 12;
        }
        if(dataset.month > 12) {
            dataset.year++;
            dataset.month = 1;
        }
        dataset.date = '';

        this.rebuild();
    }
    rebuild() {
        const body = this.gridbody;
        const heading = this.heading;
        this.grid.replaceChild(this.buildGridBody(), body);
        this.header.replaceChild(this.buildHeading(), heading);
    }
    static getInstance(node) {
        if(node) return super.getInstance(node);
        /*else domTransform.apply({
            element : 'datepicker',
            attributes : {
                value : this.value

            }
        });*/
    }
    static attachTo(node) {
        node.addEventListener('click', event => {
            const instance = this.closestInstance(event.target);
            if(instance) instance.onClick(event);
        });
    }
}

DatePicker.WEEK_DAY_NAMES = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

DatePicker.MONTH_NAMES = [
    'January',
    'Febrary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export default DatePicker;
