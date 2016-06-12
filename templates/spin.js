export default domTransform => {
    domTransform.element('spin', function({ attributes }) {
        return {
            element : 'span',
            attributes : {
                'class' : 'spin',
                hidden : attributes.hidden === 'true'? '' : undefined
            }
        }
    });
}
