export default domTransform => {
    domTransform.node('text', function(text) {
        return /^(\n\s*)+$/.test(text.content)? null : text;
    })
}
