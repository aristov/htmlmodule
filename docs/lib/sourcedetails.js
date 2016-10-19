({ article, code, pre, style }) => {
    Promise.all(['index.html', 'lib/index.js', 'lib/index.css']
        .map(file => window.fetch(file).then(res => res.text())))
        .then(function([html, js, css]) {
            node.append(
                code({
                    className : 'sourcetitle',
                    children : 'index.html'
                }),
                pre(code(html)),
                code({
                    className : 'sourcetitle',
                    children : 'lib/index.js => build/build.js (babel transpiled)'
                }),
                pre(code(js)),
                code({
                    className : 'sourcetitle',
                    children : 'lib/index.css'
                }),
                pre(code(css)));
        });
    const node = article(style(`
        pre { margin-top: 1px; }
        pre > code {
            display: block;
            background: #333;
            color: white;
            padding: 12px;
            margin-bottom: 20px;
        }
    `));
    return node;
}
