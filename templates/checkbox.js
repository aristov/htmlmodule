import mix from '../utils/mix';

export default domTransform => {
    domTransform.element('checkbox', function({ attributes : a, content }) {
        const view = a.view || 'checkbox';

        content = this.apply(view === 'checkbox'? [{
            element : 'span',
            attributes : { 'class' : 'box' }
        }, content] : content);

        if(a.checked === 'true') {
            content.push({
                element : 'input',
                attributes : {
                    type : 'hidden',
                    autocomplete : 'off',
                    disabled : a.disabled === 'true' ? '' : undefined,
                    name : a.name,
                    value : a.value
                }
            });
        }
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'CheckBox',
                role : 'checkbox',
                tabindex : a.disabled === 'true'? undefined : '0',
                id : a.id,
                title : a.title,
                'aria-disabled' : a.disabled,
                'aria-checked' : a.checked,
                'aria-controls' : a.controls,
                'class' : mix(view, a.mix)
            },
            content
        };
    });
}
