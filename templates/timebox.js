import numberbox from './numberbox';

const SEMISPACE = ' ';
const mix = (...mix) => mix.filter(mix => mix).join(' ');

export default domTransform => {
    domTransform.element('timebox', function({ attributes : a }) {
        return this.apply({
            element : 'numberbox',
            attributes : Object.assign(a, {
                instance : a.instance || 'TimeBox',
                mix : mix('timebox', a.mix),
                readonly : a.readonly || 'true',
                value : a.value? a.value.replace(/\s/g, SEMISPACE) : '-- : --'
            })
        });
    });
}
