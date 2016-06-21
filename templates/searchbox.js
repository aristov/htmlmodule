import textbox from './textbox';

export default domTransform => {
    textbox(domTransform);
    domTransform.element('searchbox', function({ attributes }) {
        return this.apply({
            element : 'textbox',
            attributes : Object.assign({
                instance : 'SearchBox',
                hasclear : 'true',
                mix : 'searchbox'
            }, attributes)
        });
    })
}
