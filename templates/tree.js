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
    domTransform.element('treeitem', function({ attributes : a, content }, params) {
        let tabindex = '-1';
        let children = {
            element : 'span',
            attributes : { 'class' : 'label' },
            content : a.label
        };
        if(!params.first) {
            params.first = this;
            tabindex = '0';
        }
        if(a.expanded && content) children = [
            {
                element : 'span',
                attributes : { role : 'button' }
            },
            children,
            this.apply({ element : 'group', content }, params)
        ];
        return {
            element : 'span',
            attributes : {
                'data-instance' : 'TreeItem',
                role : 'treeitem',
                tabindex,
                'aria-expanded' : a.expanded,
                'class' : a.view || 'treeitem'
            },
            content : children
        }
    });
}
