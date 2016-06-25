import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('link', function({ attributes : a, content }) {
        return {
            element : 'a',
            attributes : Object.assign(a, {
                view : undefined,
                mix : undefined,
                hidden : a.hidden === 'true' && '',
                'class' : mix(a.view || 'link', a.mix),
                'aria-disabled' : a.disabled
            }),
            content : this.apply(content)
        };
    });
}
