import searchbox from './searchbox';
import button from './button';

export default domTransform => {
    searchbox(domTransform);
    button(domTransform);

    domTransform.element('searchgroup', function({ attributes, content }) {
        return {
            element : 'form',
            attributes : {
                role : 'search',
                'class' : 'searchgroup'
            },
            content : this.apply(content.length? content : [
                {
                    element : 'searchbox',
                    attributes : { label : attributes.label }
                },
                {
                    element : 'button',
                    attributes : { type : 'submit' },
                    content : attributes.buttontext || 'Search'
                }
            ])
        };
    });
}
