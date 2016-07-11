import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('radiogroup', function({ attributes : a, content }) {
        const params = {
            disabled : a.disabled === 'true',
            first : null,
            checked : null,
            value : undefined
        };
        content = this.apply(content, params);

        if(!params.disabled) (params.checked || params.first).attributes.tabindex = '0';

        return {
            element : 'span',
            attributes : {
                'data-instance' : 'RadioGroup',
                role : 'radiogroup',
                'aria-label' : a.label,
                'aria-disabled' : a.disabled,
                'class' : mix(a.view || 'radiogroup', a.mix)
            },
            content : [
                {
                    element : 'input',
                    attributes : {
                        type : 'hidden',
                        autocomplete : 'off',
                        disabled : a.disabled === 'true' && '',
                        name : a.name,
                        value : params.value
                    }
                },
                content
            ]
        };
    });
    domTransform.element('radio', function({ attributes : a, content }, params) {
        let view = a.view || 'radio',
            disabled = params.disabled || a.disabled === 'true',
            result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Radio',
                    role : 'radio',
                    tabindex : disabled || a.tabindex || '-1',
                    'data-value' : a.value,
                    'aria-checked' : a.checked,
                    'aria-disabled' : a.disabled,
                    'class' : mix(view, a.mix)
                },
                content : this.apply(view === 'radio'? [{
                        element : 'span',
                        attributes : { 'class' : 'box' }
                    }, content] :
                    content)
            };
        if(!params.first) params.first = result;
        if(a.checked === 'true') {
            params.checked = result;
            params.value = a.value;
        }
        return result;
    });
}
