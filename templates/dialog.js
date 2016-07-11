import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('dialog', function({ attributes : a, content }) {
        return {
            element : 'div',
            attributes : {
                'data-instance' : a.instance || 'Dialog',
                role : 'dialog',
                id : a.id,
                hidden : '',
                'class' : mix(a.view || 'dialog popup', a.mix),
                'aria-modal' : a.modal,
                'data-assertive' : a.assertive
            },
            content : this.apply(content)
        }
    });
}
