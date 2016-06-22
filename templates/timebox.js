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
                    attributes.disabled === 'true'? 'disabled' : undefined,
                    attributes.mix
                ].join(' ').trim()
            },
            content : this.apply([
                {
                    element : 'input',
                    attributes : {
                        autocomplete : 'off',
                        disabled : attributes.disabled === 'true'? '' : undefined,
                        value : attributes.value,
                        readonly : '',
                        'class' : 'box'
                    }
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        type : 'shift',
                        disabled : attributes.disabled,
                        value : '+1'
                    },
                    content : '▲'
                },
                {
                    element : 'button',
                    attributes : {
                        tabindex : '-1',
                        type : 'shift',
                        disabled : attributes.disabled,
                        value : '-1'
                    },
                    content : '▼'
                }
            ])
        };
    });
}
