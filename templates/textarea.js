export default domTransform => {
    domTransform.element('textarea', function({ attributes }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'TextBox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.disabled === 'true'? 'disabled' : '',
                    attributes.mix
                ].join(' ').trim()
            },
            content : {
                element : 'textarea',
                attributes : {
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true'? '' : undefined,
                    placeholder : attributes.placeholder,
                    'class' : 'box'
                },
                content : attributes.value
            }
        };
    });
}
