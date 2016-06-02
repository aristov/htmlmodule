class DatePicker {
    constructor(element) {
        element.instance = this;
        this.element = element;

        let dataset = element.dataset,
            now = new Date;

        if(!dataset.year) dataset.year = now.getFullYear();
        if(!dataset.month) dataset.month = now.getMonth() + 1;
        if(!dataset.date) dataset.date = '';

        this.build();

        this.on('click', this.onClick);
    }
    get hidden() {
        return String(this.element.hidden);
    }
    set hidden(hidden) {
        this.element.hidden = hidden === 'true';
    }
    build() {
        let element = this.element;

        element.appendChild(this.buildHeader());
        element.appendChild(this.buildGrid());
    }
    buildHeader() {
        let header = document.createElement('div');

        header.classList.add('header');
        header.appendChild(this.buildButton('prev'));
        header.appendChild(this.buildHeading());
        header.appendChild(this.buildButton('next'));

        return this.header = header;
    }
    buildButton(direction) {
        let button = document.createElement('span');

        button.setAttribute('role', 'button');
        button.tabIndex = -1;
        button.classList.add('button');
        button.dataset.instance = 'button';
        button.dataset.direction = direction;

        return button;
    }
    buildHeading() {
        let heading = document.createElement('span'),
            dataset = this.element.dataset;

        heading.setAttribute('role', 'heading');
        heading.setAttribute('aria-live', 'assertive');
        heading.setAttribute('aria-atomic', 'true');
        heading.id = 'heading' + Math.floor(Math.random() * Date.now());
        heading.textContent = DatePicker.MONTH_NAMES[dataset.month - 1] + ' ' + dataset.year;

        return this.heading = heading;
    }
    buildGrid() {
        let grid = document.createElement('table');

        grid.setAttribute('role', 'grid');
        grid.setAttribute('cellspacing', '0');
        grid.setAttribute('aria-labelledby', this.element.querySelector('[role=heading]').id);
        grid.appendChild(this.buildGridHead());
        grid.appendChild(this.buildGridBody());

        return this.grid = grid;
    }
    buildGridHead() {
        let gridHead = document.createElement('thead'),
            row = document.createElement('tr');

        DatePicker.WEEK_DAY_NAMES.forEach(name => {
            let columnHeader = document.createElement('th');
            columnHeader.setAttribute('role', 'columnheader');
            columnHeader.textContent = name;
            row.appendChild(columnHeader);
        });
        gridHead.appendChild(row);

        return gridHead;
    }
    buildGridBody() {
        let element = this.element,
            dataset = element.dataset,
            selectedYear = dataset.year,
            selectedMonth = dataset.month - 1,
            firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay(),
            now = new Date,
            currentDateString = [now.getFullYear(), now.getMonth(), now.getDate()].join('.'),
            selectedDateString = [selectedYear, selectedMonth, dataset.date].join('.');

        if(firstDayOfMonth === 0) firstDayOfMonth = 7;

        let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(),
            weekCount = Math.ceil((daysInMonth + firstDayOfMonth - 1) / 7),
            gridBody = document.createElement('tbody');

        for(let i = 0; i < weekCount; i++) {
            let row = document.createElement('tr');
            for(let j = 1; j <= 7; j++) {
                let date = (i * 7 + j) - firstDayOfMonth + 1,
                    dateValue = new Date(selectedYear, selectedMonth, date).getDate(),
                    dateString = [selectedYear, selectedMonth, date].join('.'),
                    cell = document.createElement('td'),
                    dataset = cell.dataset;

                dataset.isWeekend = j > 5;
                dataset.isToday = currentDateString === dateString;
                dataset.value = dateValue;
                cell.setAttribute('role', 'gridcell');
                cell.setAttribute('aria-selected', String(selectedDateString === dateString));
                if(date < 1 || date > daysInMonth) cell.setAttribute('aria-disabled', 'true');
                cell.textContent = dateValue;

                row.appendChild(cell);
            }
            gridBody.appendChild(row);
        }
        return this.gridBody = gridBody;
    }
    onClick(event) {
        let target = event.target;
        if(target.dataset.instance === 'button') this.onButtonClick(event);
        if(target.getAttribute('role') === 'gridcell') this.onGridCellClick(event);
    }
    onGridCellClick({ target }) {
        if(target.getAttribute('aria-disabled') !== 'true') {
            let element = this.element,
                selected = element.querySelector('[role=gridcell][aria-selected=true]');
            if(selected) selected.setAttribute('aria-selected', 'false');
            target.setAttribute('aria-selected', 'true');
            element.dataset.date = target.dataset.value;
            element.dispatchEvent(new Event('change'));
        }
    }
    onButtonClick({ target }) {
        let element = this.element,
            direction = target.dataset.direction,
            dataset = element.dataset;

        direction === 'next'? dataset.month++ : dataset.month--;

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
        let gridBody = this.gridBody,
            heading = this.heading;
        this.grid.replaceChild(this.buildGridBody(), gridBody);
        this.header.replaceChild(this.buildHeading(), heading);
    }
    on(type, listener, context) {
        this.element.addEventListener(type, listener.bind(context || this));
    }
    static getInstance(element) {
        return element.dataset && element.dataset.instance === 'datepicker'?
            element.instance || new this(element) :
            null;
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
