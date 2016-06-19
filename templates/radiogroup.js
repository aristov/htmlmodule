export default domTransform => {
    domTransform.element('radiogroup', function({ attributes, content }) {
        let params = {
            disabled : attributes.disabled === 'true',
            first : null,
            checked : null,
            value : undefined
        };
        content = this.apply(content, params);

        let checked = params.checked;
        if(!params.disabled) (checked || params.first).attributes.tabindex = '0';

        return {
            element : 'span',
            attributes : {
                'data-instance' : 'RadioGroup',
                role : 'radiogroup',
                'aria-label' : attributes.label,
                'aria-disabled' : attributes.disabled,
                'class' : attributes.view || 'radiogroup'
            },
            content : [
                {
                    element : 'input',
                    attributes : {
                        type : 'hidden',
                        autocomplete : 'off',
                        disabled : attributes.disabled === 'true' ? '' : undefined,
                        name : attributes.name,
                        value : params.value
                    }
                },
                content
            ]
        };
    });
    domTransform.element('radio', function({ attributes, content }, params) {
        let view = attributes.view || 'radio',
            disabled = params.disabled || attributes.disabled === 'true',
            result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Radio',
                    role : 'radio',
                    tabindex : disabled? undefined : attributes.tabindex || '-1',
                    'data-value' : attributes.value,
                    'aria-checked' : attributes.checked,
                    'aria-disabled' : attributes.disabled,
                    'class' : view
                },
                content : this.apply(view === 'radio'? [{
                        element : 'span',
                        attributes : { 'class' : 'box' }
                    }, content] :
                    content)
            };
        if(!params.first) params.first = result;
        if(attributes.checked === 'true') {
            params.checked = result;
            params.value = attributes.value;
        }
        return result;
    });
}
