import { mix } from '../tools/utils';

export default domTransform => {
    domTransform.element('button', function({ attributes : a, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : a.instance || 'Button',
                role : a.role || 'button',
                tabindex : a.disabled === 'true' || ('tabindex' in a? a.tabindex : '0'),
                hidden : a.hidden === 'true'? '' : undefined,
                title : a.title,
                'class' : mix(a.view || 'button', a.mix),
                'aria-disabled' : a.disabled,
                'aria-pressed' : a.pressed,
                'aria-haspopup' : a.haspopup,
                'aria-controls' : a.controls,
                'aria-expanded' : a.expanded,
                'data-type' : a.type,
                'data-value' : a.value
            },
            content : this.apply(content)
        };
    });
    /*domTransform.element('button', function({ attributes : {
        instance = 'Button',
        role = 'button',
        tabindex = '0',
        view = 'true',
        mix,
        hidden,
        title,
        disabled,
        pressed,
        haspopup,
        controls,
        expanded,
        type,
        value
    }, content }) {
        return {
            element : 'span',
            attributes : {
                'data-instance' : instance,
                role,
                tabindex : disabled === 'true' || tabindex,
                hidden : hidden === 'true' && '',
                title,
                'class' : mixes(view, mix),
                'aria-disabled' : disabled,
                'aria-pressed' : pressed,
                'aria-haspopup' : haspopup,
                'aria-controls' : controls,
                'aria-expanded' : expanded,
                'data-type' : type,
                'data-value' : value
            },
            content : this.apply(content)
        };
    });*/
}

/*export const button = ({
    attributes : {
        role = 'button', title, tabindex = '0', hidden,
        disabled, pressed, haspopup, controls, expanded,
        view = 'button', mix,
        instance = 'Button', type, value
    },
    content
}) => ({
    element : 'span',
    attributes : {
        role, title,
        tabindex : disabled !== 'true' && tabindex,
        hidden : hidden === 'true' && ''
    },
    aria : { disabled, pressed, haspopup, controls, expanded },
    data : { instance, type, value },
    classes : [view, mix],
    content
});*/

/*export const button = ({ attributes, content }) => ({
    element : 'span',
    instance : attributes.instance || 'Button',
    role : attributes.role || 'button',
    tabindex : attributes.disabled === 'true'? undefined : '0',
    title : attributes.title,
    classes : [attributes.view || 'button', attributes.mix],
    disabled : attributes.disabled,
    pressed : attributes.pressed,
    haspopup : attributes.haspopup,
    controls : attributes.controls,
    expanded : attributes.expanded,
    action : attributes.action,
    value : attributes.value,
    content
});*/

