import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('button', function({ attributes : a, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : a.instance || 'Button',
                role : a.role || 'button',
                tabindex : a.disabled === 'true' || ('tabindex' in a? a.tabindex : '0'),
                hidden : a.hidden === 'true'? '' : undefined,
                title : a.title,
                'class' : mix(a.view || 'button', a.mix),
                'aria-disabled' : a.disabled,
                'aria-pressed' : a.pressed,
                'aria-haspopup' : a.haspopup,
                'aria-controls' : a.controls,
                'aria-expanded' : a.expanded,
                'data-type' : a.type,
                'data-value' : a.value
            },
            content : this.apply(content)
        };
    });
}
