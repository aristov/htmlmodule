export default domTransform => {
    domTransform.element('group', function({ attributes, content }, params) {
        return {
            element : 'span',
            attributes : {
                role : attributes.role || 'group',
                id : attributes.id,
                'aria-label' : attributes.label,
                'class' : [attributes.view || 'group', attributes.mix].join(' ').trim()
            },
            content : this.apply(content, params)
        };
    });
}
