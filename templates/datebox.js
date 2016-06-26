import textbox from './textbox';
import button from './button';
import textinput from './textinput';

export default domTransform => {
    textbox(domTransform);
    button(domTransform);
    textinput(domTransform);

    domTransform.element('datebox', function({ attributes : a }) {
        const disabled = a.disabled;
        const [date, month, year] = a.value.split('.');
        return this.apply({
            element : 'textbox',
            attributes : {
                instance : 'DateBox',
                label : a.label,
                mix : ['datebox', a.mix].join(' ').trim(),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        name : a.name,
                        value : a.value,
                        readonly : 'true',
                        disabled
                    }
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        view : 'datebutton',
                        disabled
                    }
                },
                {
                    element : 'datepicker',
                    attributes : { mix : 'popup', value : a.value, hidden : 'true' }
                }
                /*{
                    element : 'div',
                    attributes : {
                        'data-instance' : 'DatePicker',
                        'class' : 'datepicker popup',
                        'data-year' : year,
                        'data-month' : Number(month),
                        'data-date' : Number(date),
                        hidden : ''
                    }
                }*/
            ]
        });
    });
}
