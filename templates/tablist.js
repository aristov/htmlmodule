import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('tablist', function({ attributes : a, content }) {
        const view = a.view || 'tablist';
        return {
            element : 'div',
            attributes : {
                'data-instance' : 'TabList',
                role : 'tablist',
                'class' : mix(view || 'tablist', a.mix),
                'aria-controls' : a.controls,
                'aria-orientation' : view === 'tabmenu' && 'vertical'
            },
            content: this.apply(content)
        }
    });
    domTransform.element('tab', function({ attributes : a, content }) {
        return {
            element: 'span',
            attributes : {
                'data-instance' : 'Tab',
                role : 'tab',
                tabindex : a.selected === 'true'? '0' : '-1',
                'aria-controls' : a.controls,
                'aria-selected' : a.selected,
                'class' : mix(a.view || 'tab', a.mix)
            },
            content : { element : 'span', content }
        }
    });
    domTransform.element('tabpanel', function({ attributes : a, content }) {
        return {
            element : 'div',
            attributes : {
                role : 'tabpanel',
                id : a.id,
                hidden : a.hidden === 'true' && '',
                'class' : mix(a.view || 'tabpanel', a.mix)
            },
            content : this.apply(content)
        }
    });
}
