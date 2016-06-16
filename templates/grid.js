export default domTransform => {
    domTransform.element('grid', function({ attributes, content }) {
        return {
            element : 'table',
            attributes : {
                'data-instance' : 'Grid',
                role : 'grid',
                'aria-multiselectable' : attributes.multiselectable,
                'aria-disabled' : attributes.disabled,
                'aria-label' : attributes.label,
                'class' : attributes.view || 'grid'
            },
            content : this.apply(content, {
                multiselectable : attributes.multiselectable === 'true',
                disabled : attributes.disabled === 'true',
                firstCell : null
            })
        }
    });
    domTransform.element('row', function({ content }, params) {
        return {
            element : 'tr',
            attributes : { 'data-instance' : 'Row', role : 'row' },
            content : this.apply(content, params)
        }
    });
    domTransform.element('gridcell', function({ attributes, content }, params) {
        let result = {
                element : 'td',
                attributes : {
                    'data-instance' : 'GridCell',
                    role : 'gridcell',
                    tabindex : params.disabled? undefined : '-1',
                    'aria-selected' : attributes.selected ||
                        (params.multiselectable? 'false' : undefined),
                    'class' : attributes.view || 'gridcell'
                },
                content : {
                    element : 'span',
                    attributes : { 'class' : 'text' },
                    content : content
                }
            };
        if(!params.disabled && !params.firstCell) {
            (params.firstCell = result).attributes.tabindex = '0';
        }
        return result;
    });
}
