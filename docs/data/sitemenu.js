fetch('docs/data/sitemenu.html')
    .then(response => response.text())
    .then(response => {
        document.body.insertAdjacentHTML('beforeend', response)
    })
