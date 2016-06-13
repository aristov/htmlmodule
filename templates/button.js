export default domTransform => {
    domTransform.element('button', function({ attributes, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : attributes.instance || 'Button',
                role : attributes.role || 'button',
                tabindex : attributes.disabled === 'true'? undefined : '0',
                title : attributes.title,
                'class' : [attributes.view || 'button', attributes.mix].join(' ').trim(),
                'aria-disabled' : attributes.disabled,
                'aria-pressed' : attributes.pressed,
                'aria-haspopup' : attributes.haspopup,
                'aria-controls' : attributes.controls,
                'aria-expanded' : attributes.expanded,
                'data-action' : attributes.action,
                'data-value' : attributes.value
            },
            content : this.apply(content)
        };
    })
}
