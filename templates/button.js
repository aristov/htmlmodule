export default domTransform => {
    domTransform.element('button', function({ attributes, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : attributes.instance || 'Button',
                role : attributes.role || 'button',
                tabindex : attributes.disabled === 'true'? undefined : attributes.tabindex || '0',
                title : attributes.title,
                'class' : [attributes.view || 'button', attributes.mix].join(' ').trim(),
                'aria-disabled' : attributes.disabled,
                'aria-pressed' : attributes.pressed,
                'aria-haspopup' : attributes.haspopup,
                'aria-controls' : attributes.controls,
                'aria-expanded' : attributes.expanded,
                'data-type' : attributes.type,
                'data-value' : attributes.value
            },
            content : this.apply(content)
        };
    })
}


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

