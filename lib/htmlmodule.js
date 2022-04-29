// import window from 'window'

const { document, XMLSerializer } = window
let serializer

class DomNode
{
  /**
   * Create and initialize target by specified initialing object
   * @param {{}} [init]
   */
  constructor(init) {
    if(!init || init.constructor !== Object) {
      init = { children : init }
    }
    this.create(init)
    this.init(init)
    this.assign(init)
  }

  /**
   * Create a target and associate it with an assembler instance
   * @param {{}} init
   */
  create(init) {
    this.node = init.node
  }

  /**
   * @param {{}} init
   */
  init(init) {
    this.setProperty('children', this.build(init))
  }

  /**
   * @param {{}} init
   * @return {any}
   */
  build(init) {
    return init.children
  }

  /**
   * Initialize target by specified initializing object
   * @param {{}} init
   */
  assign(init) {
    for(const name in init) {
      if(init.hasOwnProperty(name)) {
        this.setProperty(name, init[name])
      }
    }
  }

  /**
   * Set a single property if it is in this and is not undefined or fallback otherwise
   * @param {string} name
   * @param {*} value
   */
  setProperty(name, value) {
    if(value === undefined) {
      return
    }
    if(name in this) {
      this[name] = value
    }
    else if(name in this.node) {
      this.node[name] = value
    }
  }

  /**
   * @param {array} items
   * @returns {array}
   */
  flatChildren(items) {
    const result = []
    for(const item of items.flat(Infinity)) {
      if(item === null || item === false || item === undefined) {
        continue
      }
      result.push(item.node || item)
    }
    return result
  }

  /**
   * Append children to the element
   * @param {*} children
   */
  set children(children) {
    for(const child of Array.from(this.node.childNodes)) {
      child.remove()
    }
    this.node.append(...this.flatChildren(children))
  }
}

class HtmlElem extends DomNode
{
  /**
   * @param {{}} init
   * @param {Element} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = document.createElement(this.constructor.localName)
    }
    super.create(init)
    const classList = this.constructor.classList
    if(classList.length) {
      this.classList = classList.join(' ')
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null?
        this.node.removeAttribute(name, value) :
        this.node.setAttribute(name, value)
    }
  }

  /**
   * Set the class list of the element
   * @param {*} classList token / token list / token-boolean dict {string|string[]|{}}
   */
  set classList(classList) {
    const node = this.node
    if(Array.isArray(classList)) {
      classList.forEach(token => node.classList.add(token))
    }
    else if(classList.constructor === Object) {
      Object.keys(classList).forEach(token => {
        node.classList.toggle(token, classList[token])
      })
    }
    else node.classList = classList
  }

  /**
   * @returns {string[]}
   */
  static get classList() {
    const classList = []
    let object = this
    let proto
    if(this !== HtmlElem) {
      while(proto = Object.getPrototypeOf(object)) {
        if(proto !== HtmlElem) {
          const classToken = object.classToken
          classToken && !classList.includes(classToken) && classList.push(classToken)
          object = proto
        }
        else break
      }
    }
    return classList
  }

  /**
   * @returns {string}
   */
  static get classToken() {
    return Object.getPrototypeOf(this) === HtmlElem? '' : this.name
  }

  /**
   * @returns {string}
   * @override
   */
  static get localName() {
    let object = this
    let proto
    if(this === HtmlElem) {
      return ''
    }
    while(proto = Object.getPrototypeOf(object)) {
      if(proto === HtmlElem) {
        break
      }
      object = proto
    }
    return object.name.slice(4).toLowerCase()
  }
}

class HtmlDoc extends DomNode
{
  /**
   * @param {{}} init
   * @param {Document} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = document.implementation.createHTMLDocument()
    }
    super.create(init)
  }

  /**
   * @return {string}
   */
  toString() {
    const { documentElement, doctype } = this.node
    const html = documentElement? documentElement.outerHTML : ''
    if(!doctype) {
      return html
    }
    serializer ||= new XMLSerializer
    return serializer.serializeToString(doctype) + html
  }

  /**
   * @param {*} head {HtmlHead|*}
   */
  set head(head) {
    if(head instanceof HtmlHead) {
      this.node.head.replaceWith(head.node)
    }
    else this.node.head.append(...this.flatChildren(head))
  }

  /**
   * @param {*} body {HtmlBody|*}
   */
  set body(body) {
    if(body instanceof HtmlBody) {
      this.node.body = body.node
    }
    else this.node.body.append(...this.flatChildren(body))
  }

  /**
   * @param {string} lang
   */
  set lang(lang) {
    const node = this.node.documentElement
    node && (node.lang = lang)
  }
}

class HtmlDoctype extends DomNode
{
  /**
   * @param {{}} init
   * @param {DocumentType} [init.node]
   */
  create(init) {
    if(!init.node) {
      init.node = document.implementation.createDocumentType('html', '', '')
    }
    super.create(init)
  }
}

class HtmlBody extends HtmlElem
{
}

class HtmlHead extends HtmlElem
{
}
