export default domTransform => {
    domTransform.element('radiogroup', function({ attributes, content }) {
        let params = {
                disabled : attributes.disabled === 'true',
                first : null,
                checked : null
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
                        value : checked? checked.attributes['data-value'] : undefined
                    }
                },
                content
            ]
        };
    });
    domTransform.element('radio', function(radio, params) {
        let attrs = radio.attributes,
            view = attrs.view || 'radio',
            disabled = params.disabled || attrs.disabled === 'true',
            result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Radio',
                    role : 'radio',
                    tabindex : disabled? undefined : attrs.tabindex || '-1',
                    'data-value' : attrs.value,
                    'aria-checked' : attrs.checked,
                    'aria-disabled' : attrs.disabled,
                    'class' : view
                },
                content : this.apply(view === 'radio'? [{
                        element : 'span',
                        attributes : { 'class' : 'box' }
                    }, radio.content] :
                    radio.content)
            };
        if(!params.first) params.first = result;
        if(attrs.checked === 'true') params.checked = result;
        return result;
    });
}
