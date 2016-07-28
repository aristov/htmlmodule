import button from './button';
import grid from './grid';
import moment from 'moment';
import mix from '../utils/mix';

const WEEK_DAY_NAMES = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

export default domTransform => {
    button(domTransform);
    grid(domTransform);

    domTransform.element('datepicker', function({ attributes : a }) {
        const now = Date.now();
        const id = Math.floor(Math.random() * now);
        const value = a.value || moment(now).format('YYYY-MM-DD');

        return {
            element : 'div',
            attributes : {
                'data-instance' : 'DatePicker',
                'class' : mix('datepicker', a.mix),
                'aria-label' : a.label,
                'data-value' : value,
                hidden : a.hidden === 'true' && ''
            },
            content : {
                element : 'div',
                attributes : { 'class' : 'box' },
                content : [
                    {
                        element : 'div',
                        attributes : { 'class' : 'header' },
                        content : [
                            this.apply({
                                element : 'button',
                                attributes : { value : '-1' }
                            }),
                            {
                                element : 'span',
                                attributes : {
                                    role : 'heading',
                                    id : 'heading' + id,
                                    'aria-live' : 'assertive',
                                    'aria-atomic' : 'true'
                                },
                                content : moment(value, 'YYYY-MM-DD').format('MMMM YYYY')
                            },
                            this.apply({
                                element : 'button',
                                attributes : { value : '+1' }
                            })
                        ]
                    },
                    this.apply({
                        element : 'dategrid',
                        attributes : { labelledby : 'heading' + id, value }
                    })
                ]
            }
        }
    });
    domTransform.element('dategrid', function({ attributes }) {
        let [year, month, date] = attributes.value.split('-');
        month = Number(month) - 1;
        const firstDayOfMonth = (new Date(year, month, 1)).getDay() || 7;
        const now = new Date;
        const currentDateString = [now.getFullYear(), now.getMonth(), now.getDate()].join('-');
        const selectedDateString = [year, month, Number(date)].join('-');
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const weekCount = Math.ceil((daysInMonth + firstDayOfMonth - 1) / 7);
        const rows = [];

        for(let i = 0; i < weekCount; i++) {
            const row = [];
            for(let j = 1; j <= 7; j++) {
                const date = (i * 7 + j) - firstDayOfMonth + 1;
                const dateValue = new Date(year, month, date).getDate();
                const dateString = [year, month, date].join('-');

                row.push({
                    element : 'gridcell',
                    attributes : {
                        value : String(dateValue),
                        current : dateString === currentDateString && 'date',
                        selected : String(dateString === selectedDateString),
                        disabled : (date < 1 || date > daysInMonth) && 'true',
                        readonly : 'true',
                        weekday : String(j - 1)
                    },
                    content : String(dateValue)
                });
            }
            rows.push({ element : 'row', content : row });
        }
        return this.apply({
            element : 'grid',
            attributes : attributes,
            content : [
                {
                    element : 'thead',
                    content : {
                        element : 'tr',
                        content : WEEK_DAY_NAMES.map(name => ({
                            element : 'th',
                            attributes : { role : 'columnheader' },
                            content : name
                        }))
                    }
                },
                { element : 'tbody', content : rows }
            ]
        })
    });
}
