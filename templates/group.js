export default domTransform => {
    domTransform.element('group', function({ attributes, content }, params) {
        return {
            element : 'span',
            attributes : {
                role : 'group',
                id : attributes.id,
                'aria-label' : attributes.label,
                'class' : attributes.view || 'group'
            },
            content : this.apply(content, params)
        };
    });
}
