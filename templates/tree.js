export default domTransform => {
    domTransform.element('tree', function({ attributes, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'Tree',
                role : 'tree',
                'class' : attributes.view || 'tree'
            },
            content : this.apply(content, { first : null })
        }
    });
    domTransform.element('treeitem', function({ attributes, content }, params) {
        let tabindex,
            children = {
                element : 'span',
                attributes : { 'class' : 'label' },
                content : attributes.label
            };
        if(attributes.expanded) {
            children = [
                {
                    element : 'span',
                    attributes : { role : 'button' }
                },
                children,
                this.apply({ element : 'group', content }, params)
            ];
        }
        if(!params.first) {
            tabindex = '0';
            params.first = this;
        }
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'TreeItem',
                role : 'treeitem',
                tabindex : tabindex || '-1',
                'aria-expanded' : attributes.expanded,
                'class' : attributes.view || 'treeitem'
            },
            content : children
        }
    });
}
