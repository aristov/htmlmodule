const { NodeInit, htmldom, a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, datalist, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, nav, noscript, object, ol, optgroup, option, p, param, picture, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, track, u, ul, variable, video, wbr } = htmlmodule

const { assign } = Object

const treeitem = ({ checked } = {}) =>
    div({
        tabIndex : 0,
        className : 'treeitem',
        children : [
            input({ type : 'checkbox', checked }),
            input({ type : 'text' }),
            input({ type : 'button', value : '+' }),
            input({ type : 'button', value : '-' }),
        ]
    })

const treesum = ({ accessKey } = {}) =>
    summary({
        className : 'treeitem treesum',
        onfocus : ({ target : { parentNode } }) => parentNode.classList.add('focus'),
        onblur : ({ target : { parentNode } }) => parentNode.classList.remove('focus'),
        onclick : event => {
            if(document.activeElement !== event.target) event.preventDefault()
        },
        children : [
            input({ type : 'checkbox', indeterminate : true }),
            input({ type : 'text', accessKey }),
            input({ type : 'button', value : '+' }),
            input({ type : 'button', value : '-' }),
        ]
    })

const treegroup = (init = {}) =>
    details(assign({
        open : true,
        className : 'treegroup',
    }, NodeInit(init)))

const updateTree = ({ parentNode, checked }) => {
    if(parentNode.tagName === 'SUMMARY') {
        const group = parentNode.parentNode
        const selector = 'input[type=checkbox]'
        const items = Array.from(group.querySelectorAll(selector))
        items.forEach(item => {
            item.checked = checked
            item.indeterminate = false
        })
    }
    let node = parentNode.parentNode
    do {
        if(node.tagName === 'DETAILS') {
            const selector = 'input[type=checkbox]'
            const items = Array.from(node.querySelectorAll(selector))
            const itemsum = items[0]
            const group = items.slice(1)
            if(group.every(({ checked }) => checked)) {
                itemsum.checked = true
                itemsum.indeterminate = false
            }
            else if(group.every(({ checked }) => !checked)) {
                itemsum.checked = false
                itemsum.indeterminate = false
            }
            else {
                itemsum.indeterminate = true
            }
        }
    }
    while(node = node.parentNode)
}

const checktree = ({
    className = 'checktree',
    items,
    children = treegroup({ items }),
}) => {
    const root = article({
        className,
        onkeydown : event => {
            const { key, target } = event
            const { tagName, type } = target
            if(target.classList.contains('treeitem')) {
                const selector = 'details > .treeitem'
                if(['ArrowUp', 'ArrowDown'].includes(key)) {
                    const items = Array.from(root.querySelectorAll(selector))
                    const step = key === 'ArrowUp'? -1 : 1
                    let index = items.indexOf(target)
                    let next
                    while(next = items[index += step]) {
                        next.focus()
                        if(document.activeElement === next) {
                            event.preventDefault()
                            break
                        }
                    }
                }
                if(['ArrowLeft', 'ArrowRight'].includes(key)) {
                    const treegroup = target.parentNode
                    if(key === 'ArrowLeft') {
                        if(tagName === 'DIV') treegroup.firstChild.focus()
                        else if(treegroup.open) treegroup.open = false
                        else treegroup.parentNode.firstChild.focus()
                    }
                    else if(tagName === 'SUMMARY') {
                        if(treegroup.open) {
                            const node = treegroup.querySelector([
                                'summary:focus + div',
                                'summary:focus + details > summary'
                            ])
                            if(node) node.focus()
                        }
                        else treegroup.open = true
                    }
                }
                if(key === ' ') {
                    const checkbox = target.firstChild
                    checkbox.checked = !checkbox.checked
                    updateTree(checkbox)
                    event.preventDefault()
                }
                if(/^(?:[a-zA-Z0-9а-яА-Я]|Enter)$/.test(key)) {
                    target.querySelector('input[type=text]').focus()
                }
                if(0 && key === 'Backspace') {
                    const { parentNode } = target
                    if(tagName === 'SUMMARY') {
                        parentNode.parentNode.firstChild.focus()
                        parentNode.remove()
                    }
                    else {
                        parentNode.firstChild.focus()
                        target.remove()
                    }
                }
            }
            if(['checkbox', 'button', 'text'].includes(type)) {
                const keys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Escape', 'Enter']
                if(keys.includes(key)) {
                    const parentNode = target.parentNode
                    if(['Escape', 'Enter'].includes(key) && type === 'text') {
                        parentNode.focus()
                        event.preventDefault()
                    }
                    else if(type !== 'text') {
                        const sibling = key === 'ArrowLeft'?
                            target.previousSibling :
                            key === 'ArrowRight' && target.nextSibling
                        if(key !== 'Enter') (sibling || target.parentNode).focus()
                        event.preventDefault()
                    }
                }
            }
        },
        onclick : event => {
            const { target, detail, offsetX } = event
            if(target.classList.contains('treeitem')) {
                if(detail && offsetX > 25) event.preventDefault()
            }
        },
        ondblclick : event => {
            const { target } = event
            if(target.tagName === 'SUMMARY') {
                const group = target.parentNode
                group.open = !group.open
            }
        },
        onchange : event => {
            const { target } = event
            const { type } = target
            if(type === 'checkbox') updateTree(target)
        },
        children
    })
    return root
}

document.body = body([
    checktree({
        open : true,
        children : treegroup([
            treesum({ accessKey : '1' }),
            treeitem(),
            treegroup({
                open : true,
                children : [
                    treesum(),
                    treegroup({
                        open : true,
                        children : [
                            treesum(),
                            treeitem(),
                            treeitem({ checked : true })
                        ]
                    }),
                ]
            }),
            treeitem(),
            treegroup({
                open : true,
                children : [
                    treesum(),
                    treeitem(),
                    treegroup({
                        open : true,
                        children : [
                            treesum(),
                            treeitem(),
                            treeitem({ checked : true }),
                            treeitem(),
                        ]
                    }),
                    treeitem({ checked : true }),
                ]
            }),
        ])
    }),
    link({ rel : 'stylesheet', href : 'docs/data/checktree.css' })
])
