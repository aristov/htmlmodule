import mix from '../utils/mix';

export default domTransform => {
    domTransform.element('grid', function({ attributes : a, content }) {
        const params = {
            multiselectable : a.multiselectable === 'true',
            disabled : a.disabled === 'true',
            firstCell : null,
            selectedCell : null
        };
        if(a.rows && a.columns) {
            content = Array.from(new Array(Number(a.rows))).map(_ => ({
                element : 'row',
                content : Array.from(new Array(Number(a.columns))).map(_ => ({
                    element : 'gridcell'
                }))
            }))
        }
        const result = {
            element : 'table',
            attributes : {
                'data-instance' : 'Grid',
                role : 'grid',
                'aria-multiselectable' : a.multiselectable,
                'aria-disabled' : a.disabled,
                'aria-label' : a.label,
                'aria-labelledby' : a.labelledby,
                'class' : mix(a.view || 'grid', a.mix),
                cellspacing : '0'
            },
            content : this.apply(content, params)
        };
        if(!params.disabled) (params.selectedCell || params.firstCell).attributes.tabindex = '0';
        return result;
    });
    domTransform.element('row', function({ attributes : a, content }, params) {
        return {
            element : 'tr',
            attributes : {
                'data-instance' : 'Row',
                role : 'row',
                'class' : mix(a.view || 'row', a.mix)
            },
            content : this.apply(content, params)
        }
    });
    domTransform.element('gridcell', function({ attributes : a, content }, params) {
        const result = {
            element : 'td',
            attributes : {
                'data-instance' : 'GridCell',
                role : 'gridcell',
                tabindex : params.disabled || '-1',
                'aria-current' : a.current,
                'aria-selected' : a.selected || (params.multiselectable && 'false'),
                'aria-disabled' : a.disabled,
                'aria-readonly' : a.readonly,
                'data-value' : a.value,
                'data-weekday' : a.weekday,
                'class' : mix(a.view || 'gridcell', a.mix)
            },
            content : {
                element : 'span',
                attributes : { 'class' : 'text' },
                content : content
            }
        };
        if(!params.disabled) {
            if(!params.firstCell) params.firstCell = result;
            if(!params.selectedCell && a.selected === 'true') params.selectedCell = result;
        }
        return result;
    });
}
