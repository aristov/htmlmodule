import mix from '../utils/mix';

export default domTransform => {
    domTransform.element('textarea', function({ attributes : a }) {
        return {
            element : 'label',
            attributes : {
                'data-instance' : a.instance || 'TextBox',
                'aria-label' : a.label,
                'class' : mix(a.view || 'textbox', a.disabled === 'true' && 'disabled', a.mix)
            },
            content : {
                element : 'textarea',
                attributes : {
                    autocomplete : 'off',
                    disabled : a.disabled === 'true' && '',
                    placeholder : a.placeholder,
                    'class' : 'box'
                },
                content : a.value
            }
        };
    });
}
