export default domTransform => {
    domTransform.element('datebox', function({ attributes }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'DateBox',
                role : 'datebox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox datebox',
                    attributes.disabled === 'true'? 'disabled' : '',
                    attributes.mix
                ].join(' ').trim()
            },
            content : [{
                element : 'input',
                attributes : {
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true'? '' : undefined,
                    placeholder : attributes.placeholder,
                    value : attributes.value,
                    'class' : 'box'
                }
            }, {
                element : 'div',
                attributes : {
                    'data-instance' : 'DatePicker',
                    'class' : 'datepicker popup',
                    'data-year' : attributes.year,
                    'data-month' : attributes.month,
                    'data-date' : attributes.date,
                    hidden : ''
                }
            }]
        };
    });
}
