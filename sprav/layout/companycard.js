export default domTransform => {
    domTransform.element('companycard', function({ element, attributes : a }) {
        return this.apply({
            element : 'article',
            attributes : { 'class' : element },
            content : [
                {
                    element : 'h1',
                    content : {
                        element : 'link',
                        attributes : { href : a.href },
                        content : a.name
                    }
                },
                {
                    element : 'div',
                    attributes : { 'class' : 'cardinfo' },
                    content : [
                        {
                            element : 'div',
                            attributes : { 'class' : 'address' },
                            content : a.address
                        },
                        {
                            element : 'div',
                            attributes : { 'class' : 'phone' },
                            content : a.phone
                        },
                        a.website && {
                            element : 'div',
                            attributes : { 'class' : 'website' },
                            content : {
                                element : 'link',
                                attributes : { href : '//' + a.website, rel : 'external' },
                                content : a.website
                            }
                        },
                        {
                            element : 'div',
                            attributes : { 'class' : 'category' },
                            content : a.category
                        }
                    ]
                }
            ]
        })
    });
}
