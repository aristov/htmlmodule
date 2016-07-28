import textbox from './textbox';
import mix from '../utils/mix';

export default domTransform => {
    textbox(domTransform);

    domTransform.element('searchbox', function({ attributes : a }) {
        return this.apply({
            element : 'textbox',
            attributes : Object.assign({
                instance : 'SearchBox',
                hasclear : 'true',
                role : 'searchbox',
                mix : mix('searchbox', a.mix)
            }, a)
        });
    })
}
