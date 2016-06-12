export default domTransform => {
    domTransform.element('timebox', function({ attributes }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'TimeBox',
                role : 'textbox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox timebox',
                    attributes.disabled === 'true' && 'disabled',
                    attributes.mix
                ].join(' ').trim()
            },
            content : [
                {
                    element : 'input',
                    attributes : {
                        autocomplete : 'off',
                        disabled : attributes.disabled === 'true'? '' : undefined,
                        placeholder : attributes.placeholder,
                        value : attributes.value,
                        'class' : 'box'
                    }
                },
                {
                    element : 'span',
                    attributes : {
                        role : 'button',
                        tabindex : '-1',
                        'class' : 'button',
                        'data-value' : '+1'
                    },
                    content : '▲'
                },
                {
                    element : 'span',
                    attributes : {
                        role : 'button',
                        tabindex : '-1',
                        'class' : 'button',
                        'data-value' : '-1'
                    },
                    content : '▼'
                }
            ]
        };
    });
}
