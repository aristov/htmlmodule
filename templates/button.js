export default domTransform => {
    domTransform.element('button', function({ attributes : a, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : a.instance || 'Button',
                role : a.role || 'button',
                tabindex : a.disabled === 'true'? undefined : a.tabindex || '0',
                hidden : a.hidden === 'true'? '' : undefined,
                title : a.title,
                'class' : [a.view || 'button', a.mix].join(' ').trim(),
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
    })
}

/*export const button = ({
    attributes : {
        role = 'button', title, tabindex = '0', hidden,
        disabled, pressed, haspopup, controls, expanded,
        view = 'button', mix,
        instance = 'Button', type, value
    },
    content
}) => ({
    element : 'span',
    attributes : {
        role, title,
        tabindex : disabled !== 'true' && tabindex,
        hidden : hidden === 'true' && ''
    },
    aria : { disabled, pressed, haspopup, controls, expanded },
    data : { instance, type, value },
    classes : [view, mix],
    content
});*/

/*export const button = ({ attributes, content }) => ({
    element : 'span',
    instance : attributes.instance || 'Button',
    role : attributes.role || 'button',
    tabindex : attributes.disabled === 'true'? undefined : '0',
    title : attributes.title,
    classes : [attributes.view || 'button', attributes.mix],
    disabled : attributes.disabled,
    pressed : attributes.pressed,
    haspopup : attributes.haspopup,
    controls : attributes.controls,
    expanded : attributes.expanded,
    action : attributes.action,
    value : attributes.value,
    content
});*/

