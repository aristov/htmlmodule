export default domTransform => {
    domTransform.element('numberbox', function({ attributes }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'NumberBox',
                role : 'textbox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox numberbox',
                    attributes.disabled === 'true'? 'disabled' : undefined,
                    attributes.mix,
                    'timebox' // FIXME
                ].join(' ').trim()
            },
            content : this.apply([
                { element : 'textinput', attributes },
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
