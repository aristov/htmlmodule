import button from './button';
import moment from 'moment';

const WEEK_DAY_NAMES = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
const MONTH_NAMES = [
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

export default domTransform => {
    button(domTransform);

    domTransform.element('datepicker', function({ attributes }) {
        const now = Date.now();
        const id = Math.floor(Math.random() * now);
        const value = attributes.value || moment(now).format('YYYY-MM-DD');
        let [year, month, date] = value.split('-');

        return {
            element : 'div',
            attributes : {
                'data-instance' : 'DatePicker',
                'class' : 'datepicker',
                'aria-label' : attributes.label,
                'data-year' : year,
                'data-month' : month,
                'data-date' : date
            },
            content : {
                element : 'span',
                attributes : { 'class' : 'box' },
                content : [
                    {
                        element : 'div',
                        attributes : { 'class' : 'header' },
                        content : [
                            this.apply({
                                element : 'button',
                                attributes : { tabindex : '-1', value : '-1' }
                            }),
                            {
                                element : 'span',
                                attributes : {
                                    role : 'heading',
                                    id : 'heading' + id,
                                    'aria-live' : 'assertive',
                                    'aria-atomic' : 'true'
                                },
                                //content : MONTH_NAMES[month - 1] + ' ' + year
                                content : moment(value, 'YYYY-MM-DD').format('MMMM YYYY')
                            },
                            this.apply({
                                element : 'button',
                                attributes : { tabindex : '-1', value : '+1' }
                            })
                        ]
                    },
                    {
                        element : 'table',
                        attributes : { role : 'grid', cellspacing : '0', 'aria-labelledby' : 'heading' + id },
                        content : [
                            {
                                element : 'thead',
                                content : {
                                    element : 'tr',
                                    content : WEEK_DAY_NAMES.forEach(name => ({
                                        element : 'th',
                                        attributes : { role : 'columnheader' },
                                        content : name
                                    }))
                                }
                            },
                            (function() {
                                month = Number(month);
                                date = Number(date);
                                const selectedYear = year;
                                const selectedMonth = month - 1;
                                const firstDayOfMonth = (new Date(selectedYear, selectedMonth, 1)).getDay() || 7;
                                const now = new Date;
                                const currentDateString = [now.getFullYear(), now.getMonth(), now.getDate()].join('.');
                                const selectedDateString = [selectedYear, selectedMonth, date].join('.');
                                const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
                                const weekCount = Math.ceil((daysInMonth + firstDayOfMonth - 1) / 7);
                                const rows = [];

                                for(let i = 0; i < weekCount; i++) {
                                    const row = [];
                                    for(let j = 1; j <= 7; j++) {
                                        const date = (i * 7 + j) - firstDayOfMonth + 1;
                                        const dateValue = new Date(selectedYear, selectedMonth, date).getDate();
                                        const dateString = [selectedYear, selectedMonth, date].join('.');

                                        row.push({
                                            element : 'td',
                                            attributes : {
                                                role : 'gridcell',
                                                'data-value' : dateValue,
                                                'data-weekday' : j - 1,
                                                'aria-current' : currentDateString === dateString? 'date' : undefined,
                                                'aria-selected' : selectedDateString === dateString? 'true' : undefined,
                                                'aria-disabled' : date < 1 || date > daysInMonth? 'true' : undefined
                                            },
                                            content : String(dateValue)
                                        });
                                    }
                                    rows.push({ element : 'tr', content : row });
                                }
                                return { element : 'tbody', content : rows };
                            })()
                        ]
                    }
                ]
            }
        }
    });
}
