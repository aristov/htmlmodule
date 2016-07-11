import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('group', function({ attributes : a, content }, params) {
        return {
            element : 'span',
            attributes : {
                role : a.role || 'group',
                id : a.id,
                'aria-label' : a.label,
                'class' : mix(a.view || 'group', a.mix)
            },
            content : this.apply(content, params)
        };
    });
}
