export default domTransform => {
    /*domTranform.element('header', function({ content }) {
        return this.apply({
            element : 'div',
            content : [
                { element : 'logolink' },
                content
            ]
        })
    });*/
    domTransform.element('logolink', function() {
        return {
            element : 'a',
            attributes : { href : '//yandex.ru', 'class' : 'logo' },
            content : {
                element : 'img',
                attributes : {
                    alt : 'Яндекс',
                    src : 'https://yastatic.net/islands/_/uBeuL5reE-5D8m89Ky4i6XNh8yo.svg'
                }
            }
        }
    });
}
