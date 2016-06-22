import textbox from './textbox';
import textinput from './textinput';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);

    domTransform.element('datebox', function({ attributes }) {
        const disabled = attributes.disabled;
        const [date, month, year] = attributes.value.split('.');
        return this.apply({
            element : 'textbox',
            attributes : {
                instance : 'DateBox',
                label : attributes.label,
                mix : ['datebox', attributes.mix].join(' ').trim(),
                disabled
            },
            content : [
                {
                    element : 'textinput',
                    attributes : {
                        name : attributes.name,
                        value : attributes.value,
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
                    element : 'div',
                    attributes : {
                        'data-instance' : 'DatePicker',
                        'class' : 'datepicker popup',
                        'data-year' : year,
                        'data-month' : month,
                        'data-date' : date,
                        hidden : ''
                    }
                }
            ]
        });
    });
}
