export default domTransform => {
    domTransform.element('group', function(group, params) {
        var attrs = group.attributes;
        return {
            element : 'span',
            attributes : {
                role : 'group',
                'aria-label' : attrs.label,
                'class' : attrs.view || 'group'
            },
            content : this.apply(group.content, params)
        };
    });
}
