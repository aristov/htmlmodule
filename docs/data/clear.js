{
    const root = document.documentElement
    if(root) root.remove()
    window.postMessage({ type : 'clear' }, '*')
}
