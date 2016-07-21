import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('listbox', function({ attributes : a, content }, params = { value : undefined }) {
        content = [{
            element : 'span',
            attributes : { 'class' : 'box' },
            content : this.apply(content, params)
        }];
        content.push({
            element : 'input',
            attributes : {
                type : 'hidden',
                autocomplete : 'off',
                disabled : a.disabled === 'true' && '',
                name : a.name,
                value : params.value
            }
        });
        /*content.push({
            element : 'hiddeninput',
            attributes : {
                disabled : attributes.disabled,
                name : attributes.name,
                value : params.value
            }
        });*/
        return {
            element : 'span',
            attributes : {
                'data-instance': 'ListBox',
                role : 'listbox',
                tabindex : 'tabindex' in a? a.tabindex : a.disabled === 'true' || '0',
                'aria-label' : a.label,
                'aria-disabled' : a.disabled,
                'aria-multiselectable' : a.multiselectable,
                'class' : mix(a.view || 'listbox', a.mix)
            },
            content
        };
    });
    domTransform.element('option', function({ attributes : a, content }, params) {
        let result = {
                element : 'span',
                attributes : {
                    'data-instance' : 'Option',
                    role : 'option',
                    'aria-selected' : a.selected,
                    'aria-checked' : a.checked,
                    'data-value' : a.value,
                    'class' : mix(a.view || 'option', a.mix)
                },
                content
            };
        if(a.checked === 'true') {
            params.value = a.value;
            params.text = content;
        }
        return result;
    });
}
