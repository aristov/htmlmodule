export default (domTransform) => {
    domTransform.element('textbox', function({ attributes }) {
        return {
            element : 'span',
            attributes : {
                role : 'textbox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.disabled === 'true' && 'disabled'
                ].join(' ').trim()
            },
            content : attributes.multiline === 'true'? {
                element : 'textarea',
                attributes : {
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true'? '' : undefined,
                    placeholder : attributes.placeholder,
                    'class' : 'box'
                },
                content : attributes.value
            } : {
                element : 'input',
                attributes : {
                    autocomplete : 'off',
                    disabled : attributes.disabled === 'true'? '' : undefined,
                    placeholder : attributes.placeholder,
                    value : attributes.value,
                    'class' : 'box'
                }
            }
        };
    })
}
