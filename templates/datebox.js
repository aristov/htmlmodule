import textbox from './textbox';
import textinput from './textinput';

export default domTransform => {
    textbox(domTransform);
    textinput(domTransform);

    domTransform.element('datebox', function({ attributes }) {
        const disabled = attributes.disabled;
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
                    element : 'div',
                    attributes : {
                        'data-instance' : 'DatePicker',
                        'class' : 'datepicker popup',
                        'data-year' : attributes.year,
                        'data-month' : attributes.month,
                        'data-date' : attributes.date,
                        hidden : ''
                    }
                }
            ]
        });
    });
}
