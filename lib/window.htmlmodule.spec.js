import './window.htmlmodule';
import chai from 'chai';

const { assert } = chai;
const {
    htmlmodule : { a, span, div, article, input, fieldset },
    HTMLAnchorElement,
    HTMLSpanElement,
    HTMLDivElement,
    HTMLElement,
    HTMLInputElement,
    HTMLFieldSetElement
} = window;

describe('window.htmlmodule', function() {
    it('module contains element assemblers', () => {
        assert(a() instanceof HTMLAnchorElement, 'the a element works wrongly');
        assert(span() instanceof HTMLSpanElement, 'the a element works wrongly');
        assert(div() instanceof HTMLDivElement, 'the a element works wrongly');
        assert(article() instanceof HTMLElement, 'the a element works wrongly');
        assert(input() instanceof HTMLInputElement, 'the a element works wrongly');
        assert(fieldset() instanceof HTMLFieldSetElement, 'the a element works wrongly');
    });
});
