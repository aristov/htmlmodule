import textbox from './textbox';
import { mix } from '../tools/utils';

export default domTransform => {
    textbox(domTransform);

    domTransform.element('searchbox', function({ attributes : a }) {
        return this.apply({
            element : 'textbox',
            attributes : Object.assign({
                instance : 'SearchBox',
                hasclear : 'true',
                mix : mix('searchbox', a.mix)
            }, a)
        });
    })
}
