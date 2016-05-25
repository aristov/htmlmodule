export default domTransform => {
    domTransform.element('button', function({ attributes, content }) {
        return {
            element : 'span',
            attributes : {
                role : 'button',
                tabindex : attributes.disabled === 'true'? undefined : '0',
                'aria-disabled' : attributes.disabled,
                'aria-pressed' : attributes.pressed,
                'aria-haspopup' : attributes.haspopup,
                'aria-controls' : attributes.controls,
                'aria-expanded' : attributes.expanded,
                'class' : [attributes.view || 'button', attributes.mix].join(' ').trim(),
                'data-action' : attributes.action
            },
            content : this.apply(content)
        };
    })
}
