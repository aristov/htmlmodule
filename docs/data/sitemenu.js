if(!document.getElementById('sitemenu')) {
    fetch('docs/data/sitemenu.html')
        .then(response => response.text())
        .then(response => {
            const result = response.replace(/\n\s*/mg, '')
            document.body.insertAdjacentHTML('beforeend', result)
            document.documentElement.appendChild(document.body.lastChild)
        })
}
