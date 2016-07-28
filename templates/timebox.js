import numberbox from './numberbox';
import mix from '../utils/mix';

const SEMISPACE = ' ';

export default domTransform => {
    numberbox(domTransform);

    domTransform.element('timebox', function({ attributes : a }) {
        return this.apply({
            element : 'numberbox',
            attributes : Object.assign(a, {
                instance : a.instance || 'TimeBox',
                mix : mix(a.view || 'timebox', a.mix),
                readonly : a.readonly || 'true',
                value : a.value? a.value.replace(/\s/g, SEMISPACE) : '-- : --'
            })
        });
    });
}
