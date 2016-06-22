import numberbox from './numberbox';

export default domTransform => {
    numberbox(domTransform);

    domTransform.element('timebox', function({ attributes }) {
        return this.apply({
            element : 'numberbox',
            attributes : Object.assign(attributes, {
                instance : attributes.instance || 'TimeBox',
                mix : ['timebox', attributes.mix].join(' ').trim(),
                readonly : 'true'
            })
        });
    });
}
