import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('textinput', function({ attributes : a }) {
        return {
            element : 'input',
            attributes : {
                autocomplete : 'off',
                type : a.type,
                name : a.name,
                value : a.value,
                placeholder : a.placeholder,
                readonly : a.readonly === 'true' && 'readonly',
                disabled : a.disabled === 'true' && 'disabled',
                'class' : mix(a.view || 'textinput box', a.mix)
            }
        };
    });
}
