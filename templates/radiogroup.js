export default domTransform => {
    domTransform.element('radiogroup', function(radiogroup) {
        let attrs = radiogroup.attributes,
            params = {
                disabled : attrs.disabled === 'true',
                first : null,
                checked : null
            },
            content = this.apply(radiogroup.content, params),
            checked = params.checked;

        if(!params.disabled) (checked || params.first).attributes.tabindex = '0';

        return {
            element : 'span',
            attributes : {
                role : 'radiogroup',
                'aria-label' : attrs.label,
                'aria-disabled' : attrs.disabled,
                'class' : attrs.view || 'radiogroup'
            },
            content : [
                {
                    element : 'input',
                    attributes : {
                        type : 'hidden',
                        autocomplete : 'off',
                        disabled : attrs.disabled === 'true' ? '' : undefined,
                        name : attrs.name,
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
                    role : 'radio',
                    tabindex : disabled? undefined : attrs.tabindex || '-1',
                    'data-instance' : 'radio',
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
