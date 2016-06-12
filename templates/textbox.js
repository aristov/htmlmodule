export default domTransform => {
    domTransform.element('textbox', function({ attributes }) {
        let content = [attributes.multiline === 'true'? {
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
        }];
        if(attributes.hasclear === 'true') {
            content.push({
                element : 'span',
                attributes : {
                    role : 'button',
                    tabindex : attributes.disabled === 'true'? undefined : '-1',
                    'aria-disabled' : String(attributes.disabled === 'true'),
                    'class' : 'clear',
                    hidden : attributes.value? undefined : ''
                }
            })
        }
        return {
            element : 'label',
            attributes : {
                'data-instance' : 'TextBox',
                role : 'textbox',
                'aria-label' : attributes.label,
                'class' : [
                    attributes.view || 'textbox',
                    attributes.hasclear === 'true'? 'hasclear' : '',
                    attributes.disabled === 'true'? 'disabled' : '',
                    attributes.mix
                ].filter(s => s).join(' ').trim()
            },
            content
        };
    });
}
