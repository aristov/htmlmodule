(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("window"));
	else if(typeof define === 'function' && define.amd)
		define(["window"], factory);
	else if(typeof exports === 'object')
		exports["htmlmodule"] = factory(require("window"));
	else
		root["htmlmodule"] = factory(root["window"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__5__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttrType": () => (/* binding */ AttrType)
/* harmony export */ });
/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrType
{
  /**
   * @param {constructor} constructor (DomElem)
   * @param {prototype} constructor.prototype
   * @param {string|constructor} [attr]
   * @param {string} [attr.attrName]
   * @override
   */
  static define(constructor, attr = this) {
    const name = typeof attr === 'string'? attr : attr.attrName
    Object.defineProperty(constructor.prototype, name, {
      configurable : true,
      /**
       * @this DomElem
       * @return {*}
       */
      get() {
        return this.getAttr(attr)
      },
      /**
       * @this DomElem
       * @param value
       */
      set(value) {
        this.setAttr(attr, value)
      },
    })
  }

  /**
   * @param {DomElem} elem
   * @returns {string|*}
   */
  static get(elem) {
    return elem.node.getAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return elem.node.hasAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   */
  static remove(elem) {
    elem.node.removeAttribute(this.localName)
  }

  /**
   * @param {DomElem} elem
   * @param {string|*} value
   */
  static set(elem, value) {
    elem.node.setAttribute(this.localName, value)
  }

  /**
   * @param {DomElem} elem
   * @param {*} value
   * @returns {boolean}
   */
  static removeOnValue(elem, value) {
    return value === null && !this.remove(elem)
  }

  /**
   * @returns {string}
   * @override
   */
  static get attrName() {
    return this.name[0].toLowerCase() + this.name.slice(1)
  }

  /**
   * @returns {null|*}
   */
  static get defaultValue() {
    return null
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


let undefined

class Dataset extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  /**
   * @param {DomElem} elem
   * @param {{}} dataset
   */
  static set(elem, dataset) {
    const map = elem.node.dataset
    for(let [name, value] of Object.entries(dataset)) {
      if(value !== undefined) {
        map[name] = dataset[name]
      }
    }
  }

  /**
   * @param {DomElem} elem
   * @returns {DOMStringMap}
   */
  static get(elem) {
    return elem.node.dataset
  }

  /**
   * @param {DomElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'dataset' in elem.node
  }
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Style": () => (/* binding */ Style)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


class Style extends _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType
{
  /**
   * @param {HtmlElem} elem
   * @param {string|{}} style
   */
  static set(elem, style) {
    if(typeof style === 'string') {
      elem.node.style = style
    }
    else Object.assign(elem.node.style, style)
  }

  /**
   * @param {HtmlElem} elem
   * @returns {CSSStyleDeclaration}
   */
  static get(elem) {
    return elem.node.style
  }

  /**
   * @param {HtmlElem} elem
   * @returns {boolean}
   */
  static has(elem) {
    return 'style' in elem.node
  }
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomElem": () => (/* binding */ DomElem)
/* harmony export */ });
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const { document } = (window__WEBPACK_IMPORTED_MODULE_0___default())

let counter = 0

/**
 * @see https://www.w3.org/TR/dom/#interface-element
 */
class DomElem extends _DomNode_js__WEBPACK_IMPORTED_MODULE_2__.DomNode
{
  className = undefined

  static prefix = ''

  static namespace = ''

  /**
   * @return {*|Element}
   */
  createNode() {
    let name, constructor = this.constructor
    const { prefix, namespace } = constructor
    do if(constructor.name.startsWith(prefix)) {
      name = constructor.name.slice(prefix.length)
      return document.createElementNS(namespace, name.toLowerCase())
    }
    while(constructor = Object.getPrototypeOf(constructor))
    return super.createNode()
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    super.init(deep)
    this.setClassName()
  }

  setClassName() {
    if(this.className !== undefined) {
      if(this.className !== null) {
        this.node.className = this.className
      }
      return
    }
    let constructor = this.constructor
    const prefix = constructor.prefix
    const classList = this.node.classList
    do {
      if(constructor.name.startsWith(prefix)) {
        break
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  /**
   * Generate a unique identifier among the document's tree
   * @returns {String}
   */
  generateId() {
    let id, str
    do {
      str = (counter++).toString(36)
      id = 'ID_' + '0'.repeat(Math.max(0, 7 - str.length)) + str
    }
    while(document.getElementById(id))
    return id
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.get]
   * @param {function} [attr.has]
   * @param {*|null} [attr.defaultValue]
   * @returns {string|*|null}
   */
  getAttr(attr) {
    if(typeof attr === 'function') {
      return attr.has(this)? attr.get(this) : attr.defaultValue
    }
    return this.node.getAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.has]
   * @returns {boolean}
   */
  hasAttr(attr) {
    return typeof attr === 'function'?
      attr.has(this) :
      this.node.hasAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.remove]
   */
  removeAttr(attr) {
    if(typeof attr === 'function') {
      attr.remove(this)
    }
    else this.node.removeAttribute(attr)
  }

  /**
   * @param {constructor|string} attr
   * @param {function} [attr.removeOnValue]
   * @param {function} [attr.set]
   * @param {string|null|*} value
   */
  setAttr(attr, value) {
    if(typeof attr === 'function') {
      if(!attr.removeOnValue(this, value)) {
        attr.set(this, value)
      }
    }
    else if(value === null) {
      this.node.removeAttribute(attr)
    }
    else this.node.setAttribute(attr, value)
  }

  /**
   * @param {KeyboardEvent} event
   * @param {DomElem} elem
   */
  onKeyDown(event, elem) {
    const handler = this['onKeyDown_' + event.code]
    if(typeof handler === 'function') {
      handler.apply(this, arguments)
    }
  }

  /**
   * @param {KeyboardEvent} event
   * @param {DomElem} elem
   */
  onKeyUp(event, elem) {
    const handler = this['onKeyUp_' + event.code]
    if(typeof handler === 'function') {
      handler.apply(this, arguments)
    }
  }

  /**
   * @return {string}
   */
  toString() {
    return this.node.outerHTML
  }

  /**
   * Get all attributes of the element as an array
   * @returns {{}}
   */
  get attrs() {
    const attrs = {}
    for(const { name, value } of this.node.attributes) {
      attrs[name] = value
    }
    return attrs
  }

  /**
   * Set content attributes on the element
   * @param {{}} attrs
   */
  set attrs(attrs) {
    for(const [name, value] of Object.entries(attrs)) {
      value === null?
        this.removeAttr(name) :
        this.setAttr(name, value)
    }
  }

  /**
   * @return {DOMTokenList}
   */
  get class() {
    return this.node.classList
  }

  /**
   * @param {*} value {string|string[]|{}}
   */
  set class(value) {
    if(Array.isArray(value)) {
      this.node.classList.add(...value.filter(Boolean))
    }
    else if(value.constructor === Object) {
      for(const token of Object.keys(value)) {
        this.node.classList.toggle(token, value[token])
      }
    }
    else this.node.classList = value
  }

  /**
   * @returns {string}
   */
  get html() {
    return this.node.innerHTML
  }

  /**
   * @param {string} html
   */
  set html(html) {
    this.node.innerHTML = html
  }

  /**
   * @returns {DOMRect}
   */
  get rect() {
    return this.node.getBoundingClientRect()
  }

  /**
   * Get a text content of the node
   * @returns {string}
   */
  get text() {
    return this.node.textContent
  }

  /**
   * Set a text content of the node
   * @param {string} text
   */
  set text(text) {
    this.node.textContent = text
  }

  /**
   * @param {string[]|constructor[]} attrs
   */
  static defineAttrs(attrs) {
    for(const item of attrs) {
      _AttrType_js__WEBPACK_IMPORTED_MODULE_1__.AttrType.define(this, item)
    }
  }
}

DomElem.defineMethods([
  'scrollTo',
  'scrollBy',
])

DomElem.defineAttrs([
  'role',
])

DomElem.defineProps([
  'clientLeft',
  'clientTop',
  'clientWidth',
  'clientHeight',
  'scrollLeft',
  'scrollTop',
  'scrollWidth',
  'scrollHeight',
])

DomElem.defineProps([
  'id',
], true)


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomNode": () => (/* binding */ DomNode)
/* harmony export */ });
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



const SPECIAL_PROPS = ['node', 'children']
const { document, CustomEvent, EventTarget } = (window__WEBPACK_IMPORTED_MODULE_0___default())

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  /**
   * @param {*} props
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = props = this.normalizeProps(props)
    this.props = props
    this.node = props.node || this.createNode()
    this.node.__instance = this
  }

  /**
   * @param {*} props
   * @return {{}}
   */
  normalizeProps(props) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
  }

  /**
   * @returns {EventTarget}
   */
  createNode() {
    return new EventTarget
  }

  /**
   * @param {boolean} deep
   */
  init(deep = false) {
    this.setProps()
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.init(true)
        return child.node
      }
      return child
    }))
  }

  setProps() {
    let name, value
    for(name in this.props) {
      if(!this.props.hasOwnProperty(name)) {
        continue
      }
      value = this.props[name]
      if(SPECIAL_PROPS.includes(name) || value === undefined) {
        continue
      }
      if(name in this) {
        this[name] = value
      }
      else if(name in this.node) {
        this.node[name] = value
      }
    }
  }

  /**
   * @param {*} children
   * @return {(*|DomNode|string)[]}
   */
  normalizeChildren(children) {
    const result = []
    for(const child of [children].flat(Infinity)) {
      if(child === false || child === null || child === undefined) {
        continue
      }
      result.push(child)
    }
    return result
  }

  /**
   * @param {{}} state
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    Object.assign(this.state, state)
    this.props.children = this.normalizeChildren(this.render())
    if(this.props.children.length) {
      const fragment = new DocumentFragment
      fragment.append(...this.props.children.map(child => {
        if(child.node) {
          child.init(true)
          return child.node
        }
        return child
      }))
      ;(0,morphdom__WEBPACK_IMPORTED_MODULE_1__["default"])(this.node, fragment, options)
    }
    this.componentDidUpdate(this.props, prevState)
  }

  /**
   * @return {*}
   */
  render() {
    return this.props.children
  }

  componentDidMount() {
    void null
  }

  componentDidUpdate() {
    void null
  }

  componentWillUnmount() {
    void null
  }

  /**
   * @param {boolean} keepNode
   */
  destroy(keepNode = false) {
    if(!this.node) {
      return
    }
    this.componentWillUnmount()
    for(const child of this.props.children) {
      child.node && child.destroy(true)
    }
    for(const type of this.__handlers.keys()) {
      this.node[type] = null
    }
    keepNode || this.node.remove()
    this.node.__instance = null
    this.node = null
  }

  /**
   * @param {Event|string|*} event
   * @param {CustomEventInit|EventInit|{}} [dict]
   * @param {boolean} [dict.bubbles=false]
   * @param {boolean} [dict.cancelable=false]
   * @param {*} [dict.detail]
   * @returns {boolean}
   */
  emit(event, dict) {
    if(typeof event === 'string') {
      const description = events[event] || [CustomEvent]
      const [constructor, bubbles, cancelable] = description
      if(!dict) {
        dict = {
          bubbles : bubbles || false,
          cancelable : cancelable || false,
        }
      }
      event = new constructor(event, dict)
    }
    return this.node.dispatchEvent(event)
  }

  /**
   * @param {string[]} events
   */
  static defineEvents(events) {
    for(const type of events) {
      const name = 'on' + type
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        set(callback) {
          if(callback) {
            this.node[name] = e => callback(e, e.target.__instance)
            this.__handlers.set(name, callback)
          }
          else this.__handlers.delete(name)
        },
        get() {
          return this.node[name]
        },
      })
    }
  }

  /**
   * @param {string[]} methods
   */
  static defineMethods(methods) {
    for(const name of methods) {
      Object.defineProperty(this.prototype, name, {
        configurable : true,
        writable : true,
        value : function(...args) {
          return this.node[name](...args)
        },
      })
    }
  }

  /**
   * @param {string[]} props
   * @param {boolean} [setters]
   */
  static defineProps(props, setters = false) {
    for(const name of props) {
      const desc = {
        configurable : true,
        get() {
          return this.node[name]
        },
      }
      if(setters) {
        desc.set = function(value) {
          this.node[name] = value
        }
      }
      Object.defineProperty(this.prototype, name, desc)
    }
  }

  /**
   * @param {Node} node
   * @return {*|DomNode}
   */
  static get(node) {
    return node?.__instance || new this({ node })
  }

  /**
   * @param {{}} props
   * @param {Node} parentNode
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props)
    const fragment = new DocumentFragment
    instance.init(true)
    fragment.append(instance.node)
    ;(0,morphdom__WEBPACK_IMPORTED_MODULE_1__["default"])(parentNode, fragment, options)
    return instance
  }
}

const options = {
  childrenOnly : true,
  /**
   * @param {Node} toNode
   */
  onNodeAdded(toNode) {
    if(toNode.hasOwnProperty('__instance')) {
      document.contains(toNode) && toNode.__instance.componentDidMount()
    }
  },
  /**
   * @param {Node} fromNode
   * @param {Node} toNode
   */
  onBeforeElUpdated(fromNode, toNode) {
    if(toNode.hasOwnProperty('__instance') && fromNode.hasOwnProperty('__instance')) {
      toNode.__instance.state = fromNode.__instance.state
    }
  },
  /**
   * @param {Node} fromNode
   * @param {Node} toNode
   */
  onBeforeElChildrenUpdated(fromNode, toNode) {
    if(toNode.hasOwnProperty('__instance') && fromNode.hasOwnProperty('__instance')) {
      for(const type of fromNode.__instance.__handlers.keys()) {
        fromNode[type] = null
      }
      for(const type of toNode.__instance.__handlers.keys()) {
        fromNode[type] = toNode[type]
        toNode[type] = null
      }
      toNode.__instance.node = fromNode
      toNode.__instance.__prevProps = fromNode.__instance.props
      fromNode.__instance = toNode.__instance
      toNode.__instance = null
    }
  },
  /**
   * @param {Node} fromNode
   */
  onElUpdated(fromNode) {
    if(fromNode.hasOwnProperty('__instance')) {
      const instance = fromNode.__instance
      instance.componentDidUpdate(instance.__prevProps, instance.state)
      delete instance.__prevProps
    }
  },
  /**
   * @param {Node} fromNode
   */
  onBeforeNodeDiscarded(fromNode) {
    if(fromNode.hasOwnProperty('__instance')) {
      fromNode.__instance?.destroy(true)
    }
  },
}

/**
 * type : [constructor, bubbles, cancelable]
 */
const events = {
  blur : [(window__WEBPACK_IMPORTED_MODULE_0___default().FocusEvent)],
  cancel : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), false, true],
  change : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), true],
  click : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  close : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event)],
  contextmenu : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  dblclick : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  error : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event)],
  focus : [(window__WEBPACK_IMPORTED_MODULE_0___default().FocusEvent)],
  focusin : [(window__WEBPACK_IMPORTED_MODULE_0___default().FocusEvent), true],
  focusout : [(window__WEBPACK_IMPORTED_MODULE_0___default().FocusEvent), true],
  input : [(window__WEBPACK_IMPORTED_MODULE_0___default().InputEvent), true],
  invalid : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), false, true],
  keydown : [(window__WEBPACK_IMPORTED_MODULE_0___default().KeyboardEvent), true, true],
  keyup : [(window__WEBPACK_IMPORTED_MODULE_0___default().KeyboardEvent), true, true],
  load : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event)],
  mousedown : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  mouseenter : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent)],
  mouseleave : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent)],
  mousemove : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  mouseout : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  mouseover : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  mouseup : [(window__WEBPACK_IMPORTED_MODULE_0___default().MouseEvent), true, true],
  reset : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), true, true],
  resize : [(window__WEBPACK_IMPORTED_MODULE_0___default().UIEvent)],
  scroll : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), true],
  submit : [(window__WEBPACK_IMPORTED_MODULE_0___default().Event), true, true],
  touchcancel : [(window__WEBPACK_IMPORTED_MODULE_0___default().TouchEvent), true],
  touchend : [(window__WEBPACK_IMPORTED_MODULE_0___default().TouchEvent), true, true],
  touchmove : [(window__WEBPACK_IMPORTED_MODULE_0___default().TouchEvent), true, true],
  touchstart : [(window__WEBPACK_IMPORTED_MODULE_0___default().TouchEvent), true, true],
}

DomNode.defineEvents(Object.keys(events))


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOCUMENT_FRAGMENT_NODE = 11;

function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    // document-fragments dont have attributes so lets not do anything
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }

    // update attributes on original DOM element
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
        attr = toNodeAttrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                if (attr.prefix === 'xmlns'){
                    attrName = attr.name; // It's not allowed to set an attribute with the XMLNS namespace without specifying the `xmlns` prefix
                }
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    var fromNodeAttrs = fromNode.attributes;

    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
        attr = fromNodeAttrs[d];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;

            if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
                fromNode.removeAttributeNS(attrNamespaceURI, attrName);
            }
        } else {
            if (!toNode.hasAttribute(attrName)) {
                fromNode.removeAttribute(attrName);
            }
        }
    }
}

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;
var HAS_TEMPLATE_SUPPORT = !!doc && 'content' in doc.createElement('template');
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && 'createContextualFragment' in doc.createRange();

function createFragmentFromTemplate(str) {
    var template = doc.createElement('template');
    template.innerHTML = str;
    return template.content.childNodes[0];
}

function createFragmentFromRange(str) {
    if (!range) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
}

function createFragmentFromWrap(str) {
    var fragment = doc.createElement('body');
    fragment.innerHTML = str;
    return fragment.childNodes[0];
}

/**
 * This is about the same
 * var html = new DOMParser().parseFromString(str, 'text/html');
 * return html.body.firstChild;
 *
 * @method toElement
 * @param {String} str
 */
function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      // avoid restrictions on content for things like `<tr><th>Hi</th></tr>` which
      // createContextualFragment doesn't support
      // <template> support not available in IE
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }

    return createFragmentFromWrap(str);
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;

    if (fromNodeName === toNodeName) {
        return true;
    }

    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);

    // If the target element is a virtual DOM node or SVG node then we may
    // need to normalize the tag name before comparing. Normal HTML elements that are
    // in the "http://www.w3.org/1999/xhtml"
    // are converted to upper case
    if (fromCodeStart <= 90 && toCodeStart >= 97) { // from is upper and to is lower
        return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) { // to is upper and from is lower
        return toNodeName === fromNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name);
        }
    }
}

var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
        var parentNode = fromEl.parentNode;
        if (parentNode) {
            var parentName = parentNode.nodeName.toUpperCase();
            if (parentName === 'OPTGROUP') {
                parentNode = parentNode.parentNode;
                parentName = parentNode && parentNode.nodeName.toUpperCase();
            }
            if (parentName === 'SELECT' && !parentNode.hasAttribute('multiple')) {
                if (fromEl.hasAttribute('selected') && !toEl.selected) {
                    // Workaround for MS Edge bug where the 'selected' attribute can only be
                    // removed if set to a non-empty value:
                    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12087679/
                    fromEl.setAttribute('selected', 'selected');
                    fromEl.removeAttribute('selected');
                }
                // We have to reset select element's selectedIndex to -1, otherwise setting
                // fromEl.selected using the syncBooleanAttrProp below has no effect.
                // The correct selectedIndex will be set in the SELECT special handler below.
                parentNode.selectedIndex = -1;
            }
        }
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!toEl.hasAttribute('value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        var firstChild = fromEl.firstChild;
        if (firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            var oldValue = firstChild.nodeValue;

            if (oldValue == newValue || (!newValue && oldValue == fromEl.placeholder)) {
                return;
            }

            firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!toEl.hasAttribute('multiple')) {
            var selectedIndex = -1;
            var i = 0;
            // We have to loop through children of fromEl, not toEl since nodes can be moved
            // from toEl to fromEl directly when morphing.
            // At the time this special handler is invoked, all children have already been morphed
            // and appended to / removed from fromEl, so using fromEl here is safe and correct.
            var curChild = fromEl.firstChild;
            var optgroup;
            var nodeName;
            while(curChild) {
                nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
                if (nodeName === 'OPTGROUP') {
                    optgroup = curChild;
                    curChild = optgroup.firstChild;
                } else {
                    if (nodeName === 'OPTION') {
                        if (curChild.hasAttribute('selected')) {
                            selectedIndex = i;
                            break;
                        }
                        i++;
                    }
                    curChild = curChild.nextSibling;
                    if (!curChild && optgroup) {
                        curChild = optgroup.nextSibling;
                        optgroup = null;
                    }
                }
            }

            fromEl.selectedIndex = selectedIndex;
        }
    }
};

var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
  if (node) {
      return (node.getAttribute && node.getAttribute('id')) || node.id;
  }
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML' || fromNode.nodeName === 'BODY') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = Object.create(null);
        var keyedRemovalList = [];

        function addKeyedRemoval(key) {
            keyedRemovalList.push(key);
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    // if we find a duplicate #id node in cache, replace `el` with cache value
                    // and morph it to the child node.
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    } else {
                      handleNodeAdded(curChild);
                    }
                } else {
                  // recursively call for curChild and it's children to see if we find something in
                  // fromNodesLookup
                  handleNodeAdded(curChild);
                }

                curChild = nextSibling;
            }
        }

        function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
            // We have processed all of the "to nodes". If curFromNodeChild is
            // non-null then we still have some from nodes left over that need
            // to be removed
            while (curFromNodeChild) {
                var fromNextSibling = curFromNodeChild.nextSibling;
                if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                    // Since the node is keyed it might be matched up later so we defer
                    // the actual removal to later
                    addKeyedRemoval(curFromNodeKey);
                } else {
                    // NOTE: we skip nested keyed nodes from being removed since there is
                    //       still a chance they will be matched up later
                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                }
                curFromNodeChild = fromNextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);

            if (toElKey) {
                // If an element with an ID is being morphed then it will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (!childrenOnly) {
                // optional
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                // update attributes on original DOM element first
                morphAttrs(fromEl, toEl);
                // optional
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
              morphChildren(fromEl, toEl);
            } else {
              specialElHandlers.TEXTAREA(fromEl, toEl);
            }
        }

        function morphChildren(fromEl, toEl) {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeKey;
            var curFromNodeKey;

            var fromNextSibling;
            var toNextSibling;
            var matchingFromEl;

            // walk the children
            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeKey = getNodeKey(curToNodeChild);

                // walk the fromNode children all the way through
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    curFromNodeKey = getNodeKey(curFromNodeChild);

                    var curFromNodeType = curFromNodeChild.nodeType;

                    // this means if the curFromNodeChild doesnt have a match with the curToNodeChild
                    var isCompatible = undefined;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        if (curFromNodeType === ELEMENT_NODE) {
                            // Both nodes being compared are Element nodes

                            if (curToNodeKey) {
                                // The target node has a key so we want to match it up with the correct element
                                // in the original DOM tree
                                if (curToNodeKey !== curFromNodeKey) {
                                    // The current element in the original DOM tree does not have a matching key so
                                    // let's check our lookup to see if there is a matching element in the original
                                    // DOM tree
                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                        if (fromNextSibling === matchingFromEl) {
                                            // Special case for single element removals. To avoid removing the original
                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
                                            // we will instead discard the current node and wait until the next
                                            // iteration to properly match up the keyed target element with its matching
                                            // element in the original tree
                                            isCompatible = false;
                                        } else {
                                            // We found a matching keyed element somewhere in the original DOM tree.
                                            // Let's move the original DOM node into the current position and morph
                                            // it.

                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                            // the `removeNode()` function for the node that is being discarded so that
                                            // all lifecycle hooks are correctly invoked
                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                            // fromNextSibling = curFromNodeChild.nextSibling;

                                            if (curFromNodeKey) {
                                                // Since the node is keyed it might be matched up later so we defer
                                                // the actual removal to later
                                                addKeyedRemoval(curFromNodeKey);
                                            } else {
                                                // NOTE: we skip nested keyed nodes from being removed since there is
                                                //       still a chance they will be matched up later
                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                            }

                                            curFromNodeChild = matchingFromEl;
                                        }
                                    } else {
                                        // The nodes are not compatible since the "to" node has a key and there
                                        // is no matching keyed node in the source tree
                                        isCompatible = false;
                                    }
                                }
                            } else if (curFromNodeKey) {
                                // The original has a key
                                isCompatible = false;
                            }

                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                            if (isCompatible) {
                                // We found compatible DOM elements so transform
                                // the current "from" node to match the current
                                // target DOM node.
                                // MORPH
                                morphEl(curFromNodeChild, curToNodeChild);
                            }

                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                            // Both nodes being compared are Text or Comment nodes
                            isCompatible = true;
                            // Simply update nodeValue on the original node to
                            // change the text value
                            if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                            }

                        }
                    }

                    if (isCompatible) {
                        // Advance both the "to" child and the "from" child since we found a match
                        // Nothing else to do as we already recursively called morphChildren above
                        curToNodeChild = toNextSibling;
                        curFromNodeChild = fromNextSibling;
                        continue outer;
                    }

                    // No compatible match so remove the old node from the DOM and continue trying to find a
                    // match in the original DOM. However, we only do this if the from node is not keyed
                    // since it is possible that a keyed node might match up with a node somewhere else in the
                    // target tree and we don't want to discard it just yet since it still might find a
                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
                    // that didn't find a home
                    if (curFromNodeKey) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }

                    curFromNodeChild = fromNextSibling;
                } // END: while(curFromNodeChild) {}

                // If we got this far then we did not find a candidate match for
                // our "to node" and we exhausted all of the children "from"
                // nodes. Therefore, we will just append the current "to" node
                // to the end
                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                    fromEl.appendChild(matchingFromEl);
                    // MORPH
                    morphEl(matchingFromEl, curToNodeChild);
                } else {
                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                    if (onBeforeNodeAddedResult !== false) {
                        if (onBeforeNodeAddedResult) {
                            curToNodeChild = onBeforeNodeAddedResult;
                        }

                        if (curToNodeChild.actualize) {
                            curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                        }
                        fromEl.appendChild(curToNodeChild);
                        handleNodeAdded(curToNodeChild);
                    }
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphChildren(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    if (morphedNode.nodeValue !== toNode.nodeValue) {
                        morphedNode.nodeValue = toNode.nodeValue;
                    }

                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
                return;
            }

            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (morphdom);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlA": () => (/* binding */ HtmlA),
/* harmony export */   "HtmlAbbr": () => (/* binding */ HtmlAbbr),
/* harmony export */   "HtmlAddress": () => (/* binding */ HtmlAddress),
/* harmony export */   "HtmlArea": () => (/* binding */ HtmlArea),
/* harmony export */   "HtmlArticle": () => (/* binding */ HtmlArticle),
/* harmony export */   "HtmlAside": () => (/* binding */ HtmlAside),
/* harmony export */   "HtmlAudio": () => (/* binding */ HtmlAudio),
/* harmony export */   "HtmlB": () => (/* binding */ HtmlB),
/* harmony export */   "HtmlBase": () => (/* binding */ HtmlBase),
/* harmony export */   "HtmlBdi": () => (/* binding */ HtmlBdi),
/* harmony export */   "HtmlBdo": () => (/* binding */ HtmlBdo),
/* harmony export */   "HtmlBlockQuote": () => (/* binding */ HtmlBlockQuote),
/* harmony export */   "HtmlBody": () => (/* binding */ HtmlBody),
/* harmony export */   "HtmlBr": () => (/* binding */ HtmlBr),
/* harmony export */   "HtmlButton": () => (/* binding */ HtmlButton),
/* harmony export */   "HtmlCanvas": () => (/* binding */ HtmlCanvas),
/* harmony export */   "HtmlCaption": () => (/* binding */ HtmlCaption),
/* harmony export */   "HtmlCite": () => (/* binding */ HtmlCite),
/* harmony export */   "HtmlCode": () => (/* binding */ HtmlCode),
/* harmony export */   "HtmlCol": () => (/* binding */ HtmlCol),
/* harmony export */   "HtmlColGroup": () => (/* binding */ HtmlColGroup),
/* harmony export */   "HtmlData": () => (/* binding */ HtmlData),
/* harmony export */   "HtmlDataList": () => (/* binding */ HtmlDataList),
/* harmony export */   "HtmlDd": () => (/* binding */ HtmlDd),
/* harmony export */   "HtmlDel": () => (/* binding */ HtmlDel),
/* harmony export */   "HtmlDetails": () => (/* binding */ HtmlDetails),
/* harmony export */   "HtmlDfn": () => (/* binding */ HtmlDfn),
/* harmony export */   "HtmlDialog": () => (/* binding */ HtmlDialog),
/* harmony export */   "HtmlDiv": () => (/* binding */ HtmlDiv),
/* harmony export */   "HtmlDl": () => (/* binding */ HtmlDl),
/* harmony export */   "HtmlDt": () => (/* binding */ HtmlDt),
/* harmony export */   "HtmlEm": () => (/* binding */ HtmlEm),
/* harmony export */   "HtmlEmbed": () => (/* binding */ HtmlEmbed),
/* harmony export */   "HtmlFieldSet": () => (/* binding */ HtmlFieldSet),
/* harmony export */   "HtmlFigCaption": () => (/* binding */ HtmlFigCaption),
/* harmony export */   "HtmlFigure": () => (/* binding */ HtmlFigure),
/* harmony export */   "HtmlFooter": () => (/* binding */ HtmlFooter),
/* harmony export */   "HtmlForm": () => (/* binding */ HtmlForm),
/* harmony export */   "HtmlH1": () => (/* binding */ HtmlH1),
/* harmony export */   "HtmlH2": () => (/* binding */ HtmlH2),
/* harmony export */   "HtmlH3": () => (/* binding */ HtmlH3),
/* harmony export */   "HtmlH4": () => (/* binding */ HtmlH4),
/* harmony export */   "HtmlH5": () => (/* binding */ HtmlH5),
/* harmony export */   "HtmlH6": () => (/* binding */ HtmlH6),
/* harmony export */   "HtmlHGroup": () => (/* binding */ HtmlHGroup),
/* harmony export */   "HtmlHead": () => (/* binding */ HtmlHead),
/* harmony export */   "HtmlHeader": () => (/* binding */ HtmlHeader),
/* harmony export */   "HtmlHr": () => (/* binding */ HtmlHr),
/* harmony export */   "HtmlHtml": () => (/* binding */ HtmlHtml),
/* harmony export */   "HtmlI": () => (/* binding */ HtmlI),
/* harmony export */   "HtmlIFrame": () => (/* binding */ HtmlIFrame),
/* harmony export */   "HtmlImg": () => (/* binding */ HtmlImg),
/* harmony export */   "HtmlInput": () => (/* binding */ HtmlInput),
/* harmony export */   "HtmlIns": () => (/* binding */ HtmlIns),
/* harmony export */   "HtmlKbd": () => (/* binding */ HtmlKbd),
/* harmony export */   "HtmlLabel": () => (/* binding */ HtmlLabel),
/* harmony export */   "HtmlLegend": () => (/* binding */ HtmlLegend),
/* harmony export */   "HtmlLi": () => (/* binding */ HtmlLi),
/* harmony export */   "HtmlLink": () => (/* binding */ HtmlLink),
/* harmony export */   "HtmlMain": () => (/* binding */ HtmlMain),
/* harmony export */   "HtmlMap": () => (/* binding */ HtmlMap),
/* harmony export */   "HtmlMark": () => (/* binding */ HtmlMark),
/* harmony export */   "HtmlMenu": () => (/* binding */ HtmlMenu),
/* harmony export */   "HtmlMeta": () => (/* binding */ HtmlMeta),
/* harmony export */   "HtmlMeter": () => (/* binding */ HtmlMeter),
/* harmony export */   "HtmlNav": () => (/* binding */ HtmlNav),
/* harmony export */   "HtmlNoScript": () => (/* binding */ HtmlNoScript),
/* harmony export */   "HtmlObject": () => (/* binding */ HtmlObject),
/* harmony export */   "HtmlOl": () => (/* binding */ HtmlOl),
/* harmony export */   "HtmlOptGroup": () => (/* binding */ HtmlOptGroup),
/* harmony export */   "HtmlOption": () => (/* binding */ HtmlOption),
/* harmony export */   "HtmlOutput": () => (/* binding */ HtmlOutput),
/* harmony export */   "HtmlP": () => (/* binding */ HtmlP),
/* harmony export */   "HtmlParam": () => (/* binding */ HtmlParam),
/* harmony export */   "HtmlPicture": () => (/* binding */ HtmlPicture),
/* harmony export */   "HtmlPre": () => (/* binding */ HtmlPre),
/* harmony export */   "HtmlProgress": () => (/* binding */ HtmlProgress),
/* harmony export */   "HtmlQ": () => (/* binding */ HtmlQ),
/* harmony export */   "HtmlRp": () => (/* binding */ HtmlRp),
/* harmony export */   "HtmlRt": () => (/* binding */ HtmlRt),
/* harmony export */   "HtmlRuby": () => (/* binding */ HtmlRuby),
/* harmony export */   "HtmlS": () => (/* binding */ HtmlS),
/* harmony export */   "HtmlSamp": () => (/* binding */ HtmlSamp),
/* harmony export */   "HtmlScript": () => (/* binding */ HtmlScript),
/* harmony export */   "HtmlSection": () => (/* binding */ HtmlSection),
/* harmony export */   "HtmlSelect": () => (/* binding */ HtmlSelect),
/* harmony export */   "HtmlSmall": () => (/* binding */ HtmlSmall),
/* harmony export */   "HtmlSource": () => (/* binding */ HtmlSource),
/* harmony export */   "HtmlSpan": () => (/* binding */ HtmlSpan),
/* harmony export */   "HtmlStrong": () => (/* binding */ HtmlStrong),
/* harmony export */   "HtmlStyle": () => (/* binding */ HtmlStyle),
/* harmony export */   "HtmlSub": () => (/* binding */ HtmlSub),
/* harmony export */   "HtmlSummary": () => (/* binding */ HtmlSummary),
/* harmony export */   "HtmlSup": () => (/* binding */ HtmlSup),
/* harmony export */   "HtmlTBody": () => (/* binding */ HtmlTBody),
/* harmony export */   "HtmlTFoot": () => (/* binding */ HtmlTFoot),
/* harmony export */   "HtmlTHead": () => (/* binding */ HtmlTHead),
/* harmony export */   "HtmlTable": () => (/* binding */ HtmlTable),
/* harmony export */   "HtmlTd": () => (/* binding */ HtmlTd),
/* harmony export */   "HtmlTemplate": () => (/* binding */ HtmlTemplate),
/* harmony export */   "HtmlTextArea": () => (/* binding */ HtmlTextArea),
/* harmony export */   "HtmlTh": () => (/* binding */ HtmlTh),
/* harmony export */   "HtmlTime": () => (/* binding */ HtmlTime),
/* harmony export */   "HtmlTitle": () => (/* binding */ HtmlTitle),
/* harmony export */   "HtmlTr": () => (/* binding */ HtmlTr),
/* harmony export */   "HtmlTrack": () => (/* binding */ HtmlTrack),
/* harmony export */   "HtmlU": () => (/* binding */ HtmlU),
/* harmony export */   "HtmlUl": () => (/* binding */ HtmlUl),
/* harmony export */   "HtmlVar": () => (/* binding */ HtmlVar),
/* harmony export */   "HtmlVideo": () => (/* binding */ HtmlVideo),
/* harmony export */   "HtmlWbr": () => (/* binding */ HtmlWbr)
/* harmony export */ });
/* harmony import */ var _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


/**
 * @see https://www.w3.org/TR/html/single-page.html#the-a-element
 */
class HtmlA extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-abbr-element
 */
class HtmlAbbr extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-address-element
 */
class HtmlAddress extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-area-element
 */
class HtmlArea extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-article-element
 */
class HtmlArticle extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-aside-element
 */
class HtmlAside extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-audio-element
 */
class HtmlAudio extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-b-element
 */
class HtmlB extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-base-element
 */
class HtmlBase extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdi-element
 */
class HtmlBdi extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-bdo-element
 */
class HtmlBdo extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-blockquote-element
 */
class HtmlBlockQuote extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-body-element
 */
class HtmlBody extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-br-element
 */
class HtmlBr extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-button-element
 */
class HtmlButton extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-canvas-element
 */
class HtmlCanvas extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-caption-element
 */
class HtmlCaption extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-cite-element
 */
class HtmlCite extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-code-element
 */
class HtmlCode extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-col-element
 */
class HtmlCol extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-colgroup-element
 */
class HtmlColGroup extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-data-element
 */
class HtmlData extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-datalist-element
 */
class HtmlDataList extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dd-element
 */
class HtmlDd extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-del-element
 */
class HtmlDel extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-details-element
 */
class HtmlDetails extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dfn-element
 */
class HtmlDfn extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dialog-element
 */
class HtmlDialog extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-div-element
 */
class HtmlDiv extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dl-element
 */
class HtmlDl extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-dt-element
 */
class HtmlDt extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-em-element
 */
class HtmlEm extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-embed-element
 */
class HtmlEmbed extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-fieldset-element
 */
class HtmlFieldSet extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figcaption-element
 */
class HtmlFigCaption extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-figure-element
 */
class HtmlFigure extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-footer-element
 */
class HtmlFooter extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-form-element
 */
class HtmlForm extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h1-element
 */
class HtmlH1 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h2-element
 */
class HtmlH2 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h3-element
 */
class HtmlH3 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h4-element
 */
class HtmlH4 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h5-element
 */
class HtmlH5 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-h6-element
 */
class HtmlH6 extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hgroup-element
 */
class HtmlHGroup extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-head-element
 */
class HtmlHead extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-header-element
 */
class HtmlHeader extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-hr-element
 */
class HtmlHr extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-html-element
 */
class HtmlHtml extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-i-element
 */
class HtmlI extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-iframe-element
 */
class HtmlIFrame extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-img-element
 */
class HtmlImg extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-input-element
 */
class HtmlInput extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ins-element
 */
class HtmlIns extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-kbd-element
 */
class HtmlKbd extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-label-element
 */
class HtmlLabel extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-legend-element
 */
class HtmlLegend extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-li-element
 */
class HtmlLi extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-link-element
 */
class HtmlLink extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-main-element
 */
class HtmlMain extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-map-element
 */
class HtmlMap extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-mark-element
 */
class HtmlMark extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-menu-element
 */
class HtmlMenu extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meta-element
 */
class HtmlMeta extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-meter-element
 */
class HtmlMeter extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-nav-element
 */
class HtmlNav extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-noscript-element
 */
class HtmlNoScript extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-object-element
 */
class HtmlObject extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ol-element
 */
class HtmlOl extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-optgroup-element
 */
class HtmlOptGroup extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-option-element
 */
class HtmlOption extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-output-element
 */
class HtmlOutput extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-p-element
 */
class HtmlP extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-param-element
 */
class HtmlParam extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-picture-element
 */
class HtmlPicture extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-pre-element
 */
class HtmlPre extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-progress-element
 */
class HtmlProgress extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-q-element
 */
class HtmlQ extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rp-element
 */
class HtmlRp extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-rt-element
 */
class HtmlRt extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ruby-element
 */
class HtmlRuby extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-s-element
 */
class HtmlS extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-samp-element
 */
class HtmlSamp extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-script-element
 */
class HtmlScript extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-section-element
 */
class HtmlSection extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-select-element
 */
class HtmlSelect extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-small-element
 */
class HtmlSmall extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-source-element
 */
class HtmlSource extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-span-element
 */
class HtmlSpan extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-strong-element
 */
class HtmlStrong extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-style-element
 */
class HtmlStyle extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sub-element
 */
class HtmlSub extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-summary-element
 */
class HtmlSummary extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-sup-element
 */
class HtmlSup extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tbody-element
 */
class HtmlTBody extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tfoot-element
 */
class HtmlTFoot extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-thead-element
 */
class HtmlTHead extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-table-element
 */
class HtmlTable extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-td-element
 */
class HtmlTd extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-template-element
 */
class HtmlTemplate extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-textarea-element
 */
class HtmlTextArea extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-th-element
 */
class HtmlTh extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-time-element
 */
class HtmlTime extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-title-element
 */
class HtmlTitle extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-tr-element
 */
class HtmlTr extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-track-element
 */
class HtmlTrack extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-u-element
 */
class HtmlU extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-ul-element
 */
class HtmlUl extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-var-element
 */
class HtmlVar extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-video-element
 */
class HtmlVideo extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

/**
 * @see https://www.w3.org/TR/html/single-page.html#the-wbr-element
 */
class HtmlWbr extends _HtmlElem_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElem {}

HtmlA.defineProps([
  'origin',
])

HtmlA.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'target',
  'download',
  'rel',
  'rev',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

HtmlArea.defineProps([
  'origin',
  'relList',
])

HtmlArea.defineProps([
  'href',
  'protocol',
  'username',
  'password',
  'host',
  'hostname',
  'port',
  'pathname',
  'search',
  'hash',
  'alt',
  'coords',
  'shape',
  'target',
  'download',
  'rel',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

HtmlAudio.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

HtmlAudio.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
])

HtmlAudio.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
], true)

HtmlBase.defineProps([
  'href',
  'target',
], true)

HtmlBlockQuote.defineProps([
  'cite',
], true)

HtmlButton.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

HtmlButton.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlButton.defineProps([
  'autofocus',
  'disabled',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'type',
  'value',
], true)

HtmlCanvas.defineMethods([
  'getContext',
  'probablySupportsContext',
  'toDataURL',
  'toBlob',
])

HtmlCanvas.defineProps([
  'width',
  'height',
], true)

HtmlCol.defineProps([
  'span',
], true)

HtmlColGroup.defineProps([
  'span',
], true)

HtmlData.defineProps([
  'value',
], true)

HtmlDel.defineProps([
  'cite',
  'dateTime',
], true)

HtmlDetails.defineProps([
  'open',
], true)

HtmlDialog.defineMethods([
  'show',
  'showModal',
  'close',
])

HtmlDialog.defineProps([
  'open',
  'returnValue',
], true)

HtmlEmbed.defineProps([
  'src',
  'type',
  'width',
  'height',
], true)

HtmlFieldSet.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

HtmlFieldSet.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlFieldSet.defineProps([
  'disabled',
  'name',
], true)

HtmlForm.defineMethods([
  'checkValidity',
  'reportValidity',
  'reset',
  'submit',
])

HtmlForm.defineProps([
  'acceptCharset',
  'action',
  'autocomplete',
  'enctype',
  'method',
  'name',
  'noValidate',
  'target',
], true)

HtmlIFrame.defineProps([
  'sandbox',
])

HtmlIFrame.defineProps([
  'src',
  'srcdoc',
  'allowFullScreen',
  'allowPaymentRequest',
  'width',
  'height',
  'referrerPolicy',
], true)

HtmlImg.defineMethods([
  'decode',
])

HtmlImg.defineProps([
  'complete',
  'currentSrc',
  'naturalWidth',
  'naturalHeight',
])

HtmlImg.defineProps([
  'alt',
  'referrerPolicy',
  'src',
  'srcset',
  'sizes',
  'crossOrigin',
  'useMap',
  'isMap',
  'height',
  'width',
], true)

HtmlInput.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
  'stepDown',
  'stepUp',
])

HtmlInput.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlInput.defineProps([
  'accept',
  'alt',
  'autocomplete',
  'autofocus',
  'defaultChecked',
  'checked',
  'dirName',
  'disabled',
  'files',
  'formAction',
  'formEnctype',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'indeterminate',
  'inputMode',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'defaultValue',
  'value',
  'valueAsDate',
  'valueAsNumber',
  'width',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

HtmlIns.defineProps([
  'cite',
  'dateTime',
], true)

HtmlLabel.defineProps([
  'htmlFor',
], true)

HtmlLi.defineProps([
  'value',
], true)

HtmlLink.defineProps([
  'relList',
  'sizes',
])

HtmlLink.defineProps([
  'href',
  'crossOrigin',
  'rel',
  'rev',
  'media',
  'nonce',
  'hreflang',
  'type',
  'referrerPolicy',
], true)

HtmlMap.defineProps([
  'name',
], true)

HtmlMeta.defineAttrs([
  'charset',
])

HtmlMeta.defineProps([
  'httpEquiv',
  'name',
  'content',
], true)

HtmlMeter.defineProps([
  'value',
  'min',
  'max',
  'low',
  'high',
  'optimum',
], true)

HtmlObject.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

HtmlObject.defineProps([
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlObject.defineProps([
  'name',
  'data',
  'type',
  'typeMustMatch',
  'useMap',
  'width',
  'height',
], true)

HtmlOl.defineProps([
  'reversed',
  'start',
  'type',
], true)

HtmlOptGroup.defineProps([
  'disabled',
  'label',
], true)

HtmlOption.defineProps([
  'index',
])

HtmlOption.defineProps([
  'disabled',
  'label',
  'defaultSelected',
  'selected',
  'value',
  'text',
], true)

HtmlOutput.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

HtmlOutput.defineProps([
  'type',
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlOutput.defineProps([
  'htmlFor',
  'defaultValue',
  'name',
  'value',
], true)

HtmlParam.defineProps([
  'name',
  'value',
], true)

HtmlProgress.defineProps([
  'position',
])

HtmlProgress.defineProps([
  'value',
  'max',
], true)

HtmlQ.defineProps([
  'cite',
], true)

HtmlScript.defineProps([
  'src',
  'type',
  'noModule',
  'charset',
  'async',
  'defer',
  'crossOrigin',
  'integrity',
  'referrerPolicy',
  'text',
  'nonce',
], true)

HtmlSelect.defineMethods([
  'checkValidity',
  'reportValidity',
  'setCustomValidity',
])

HtmlSelect.defineProps([
  'type',
  'length',
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlSelect.defineProps([
  'autocomplete',
  'autofocus',
  'disabled',
  'multiple',
  'name',
  'required',
  'size',
  'selectedIndex',
  'value',
], true)

HtmlSource.defineProps([
  'src',
  'type',
  'srcset',
  'sizes',
  'media',
], true)

HtmlStyle.defineProps([
  'media',
  'nonce',
  'type',
], true)

HtmlTd.defineProps([
  'cellIndex',
])

HtmlTd.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
], true)

HtmlTextArea.defineMethods([
  'checkValidity',
  'reportValidity',
  'select',
  'setCustomValidity',
  'setRangeText',
  'setSelectionRange',
])

HtmlTextArea.defineProps([
  'type',
  'textLength',
  'willValidate',
  'validity',
  'validationMessage',
])

HtmlTextArea.defineProps([
  'autocomplete',
  'autofocus',
  'cols',
  'dirName',
  'disabled',
  'inputMode',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'wrap',
  'step',
  'defaultValue',
  'value',
  'selectionStart',
  'selectionEnd',
  'selectionDirection',
], true)

HtmlTh.defineProps([
  'cellIndex',
])

HtmlTh.defineProps([
  'colSpan',
  'rowSpan',
  'headers',
  'scope',
  'abbr',
], true)

HtmlTime.defineProps([
  'dateTime',
], true)

HtmlTitle.defineProps([
  'text',
], true)

HtmlTr.defineProps([
  'rowIndex',
  'sectionRowIndex',
])

HtmlTrack.defineProps([
  'readyState',
  'track',
])

HtmlTrack.defineProps([
  'kind',
  'src',
  'srclang',
  'label',
  'default',
], true)

HtmlVideo.defineMethods([
  'load',
  'canPlayType',
  'fastSeek',
  'getStartDate',
  'play',
  'pause',
  'addTextTrack',
])

HtmlVideo.defineProps([
  'error',
  'currentSrc',
  'networkState',
  'buffered',
  'readyState',
  'seeking',
  'duration',
  'paused',
  'played',
  'seekable',
  'ended',
  'audioTracks',
  'videoTracks',
  'textTracks',
  'videoWidth',
  'videoHeight',
])

HtmlVideo.defineProps([
  'src',
  'srcObject',
  'crossOrigin',
  'preload',
  'currentTime',
  'defaultPlaybackRate',
  'playbackRate',
  'autoplay',
  'loop',
  'controls',
  'volume',
  'muted',
  'defaultMuted',
  'width',
  'height',
  'poster',
], true)


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlElem": () => (/* binding */ HtmlElem)
/* harmony export */ });
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _DomElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




/**
 * @see https://www.w3.org/TR/html/single-page.html#htmlelement
 * @abstract
 */
class HtmlElem extends _DomElem_js__WEBPACK_IMPORTED_MODULE_1__.DomElem
{
  static prefix = 'Html'

  static namespace = 'http://www.w3.org/1999/xhtml'

  /**
   * @returns {string}
   */
  get innerText() {
    return this.node.innerText
  }

  /**
   * @param {string} innerText
   */
  set innerText(innerText) {
    this.node.innerText = innerText
  }

  /**
   * @returns {number|null}
   */
  get tabIndex() {
    return this.hasAttr('tabindex') ? this.node.tabIndex : null
  }

  /**
   * @param {number|null} tabIndex
   */
  set tabIndex(tabIndex) {
    if(tabIndex === null) {
      this.removeAttr('tabindex')
    }
    else this.node.tabIndex = tabIndex
  }
}

HtmlElem.defineMethods([
  'blur',
  'click',
  'focus',
])

HtmlElem.defineAttrs([
  _Dataset_js__WEBPACK_IMPORTED_MODULE_0__.Dataset,
  _Style_js__WEBPACK_IMPORTED_MODULE_2__.Style,
])

HtmlElem.defineProps([
  'isContentEditable',
  'offsetHeight',
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
])

HtmlElem.defineProps([
  'accessKey',
  'autofocus',
  'contentEditable',
  'dir',
  'hidden',
  'inputMode',
  'lang',
  'title',
  'translate',
], true)


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttrType": () => (/* reexport safe */ _AttrType_js__WEBPACK_IMPORTED_MODULE_0__.AttrType),
/* harmony export */   "Dataset": () => (/* reexport safe */ _Dataset_js__WEBPACK_IMPORTED_MODULE_1__.Dataset),
/* harmony export */   "DomElem": () => (/* reexport safe */ _DomElem_js__WEBPACK_IMPORTED_MODULE_3__.DomElem),
/* harmony export */   "DomNode": () => (/* reexport safe */ _DomNode_js__WEBPACK_IMPORTED_MODULE_4__.DomNode),
/* harmony export */   "HtmlA": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlA),
/* harmony export */   "HtmlAbbr": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlAbbr),
/* harmony export */   "HtmlAddress": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlAddress),
/* harmony export */   "HtmlArea": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlArea),
/* harmony export */   "HtmlArticle": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlArticle),
/* harmony export */   "HtmlAside": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlAside),
/* harmony export */   "HtmlAudio": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlAudio),
/* harmony export */   "HtmlB": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlB),
/* harmony export */   "HtmlBase": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBase),
/* harmony export */   "HtmlBdi": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBdi),
/* harmony export */   "HtmlBdo": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBdo),
/* harmony export */   "HtmlBlockQuote": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBlockQuote),
/* harmony export */   "HtmlBody": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBody),
/* harmony export */   "HtmlBr": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlBr),
/* harmony export */   "HtmlButton": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlButton),
/* harmony export */   "HtmlCanvas": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlCanvas),
/* harmony export */   "HtmlCaption": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlCaption),
/* harmony export */   "HtmlCite": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlCite),
/* harmony export */   "HtmlCode": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlCode),
/* harmony export */   "HtmlCol": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlCol),
/* harmony export */   "HtmlColGroup": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlColGroup),
/* harmony export */   "HtmlData": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlData),
/* harmony export */   "HtmlDataList": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDataList),
/* harmony export */   "HtmlDd": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDd),
/* harmony export */   "HtmlDel": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDel),
/* harmony export */   "HtmlDetails": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDetails),
/* harmony export */   "HtmlDfn": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDfn),
/* harmony export */   "HtmlDialog": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDialog),
/* harmony export */   "HtmlDiv": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDiv),
/* harmony export */   "HtmlDl": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDl),
/* harmony export */   "HtmlDt": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlDt),
/* harmony export */   "HtmlEm": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlEm),
/* harmony export */   "HtmlEmbed": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlEmbed),
/* harmony export */   "HtmlFieldSet": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlFieldSet),
/* harmony export */   "HtmlFigCaption": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlFigCaption),
/* harmony export */   "HtmlFigure": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlFigure),
/* harmony export */   "HtmlFooter": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlFooter),
/* harmony export */   "HtmlForm": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlForm),
/* harmony export */   "HtmlH1": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH1),
/* harmony export */   "HtmlH2": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH2),
/* harmony export */   "HtmlH3": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH3),
/* harmony export */   "HtmlH4": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH4),
/* harmony export */   "HtmlH5": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH5),
/* harmony export */   "HtmlH6": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlH6),
/* harmony export */   "HtmlHGroup": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlHGroup),
/* harmony export */   "HtmlHead": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlHead),
/* harmony export */   "HtmlHeader": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlHeader),
/* harmony export */   "HtmlHr": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlHr),
/* harmony export */   "HtmlHtml": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlHtml),
/* harmony export */   "HtmlI": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlI),
/* harmony export */   "HtmlIFrame": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlIFrame),
/* harmony export */   "HtmlImg": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlImg),
/* harmony export */   "HtmlInput": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlInput),
/* harmony export */   "HtmlIns": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlIns),
/* harmony export */   "HtmlKbd": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlKbd),
/* harmony export */   "HtmlLabel": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlLabel),
/* harmony export */   "HtmlLegend": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlLegend),
/* harmony export */   "HtmlLi": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlLi),
/* harmony export */   "HtmlLink": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlLink),
/* harmony export */   "HtmlMain": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMain),
/* harmony export */   "HtmlMap": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMap),
/* harmony export */   "HtmlMark": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMark),
/* harmony export */   "HtmlMenu": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMenu),
/* harmony export */   "HtmlMeta": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMeta),
/* harmony export */   "HtmlMeter": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlMeter),
/* harmony export */   "HtmlNav": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlNav),
/* harmony export */   "HtmlNoScript": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlNoScript),
/* harmony export */   "HtmlObject": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlObject),
/* harmony export */   "HtmlOl": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlOl),
/* harmony export */   "HtmlOptGroup": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlOptGroup),
/* harmony export */   "HtmlOption": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlOption),
/* harmony export */   "HtmlOutput": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlOutput),
/* harmony export */   "HtmlP": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlP),
/* harmony export */   "HtmlParam": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlParam),
/* harmony export */   "HtmlPicture": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlPicture),
/* harmony export */   "HtmlPre": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlPre),
/* harmony export */   "HtmlProgress": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlProgress),
/* harmony export */   "HtmlQ": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlQ),
/* harmony export */   "HtmlRp": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlRp),
/* harmony export */   "HtmlRt": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlRt),
/* harmony export */   "HtmlRuby": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlRuby),
/* harmony export */   "HtmlS": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlS),
/* harmony export */   "HtmlSamp": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSamp),
/* harmony export */   "HtmlScript": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlScript),
/* harmony export */   "HtmlSection": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSection),
/* harmony export */   "HtmlSelect": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSelect),
/* harmony export */   "HtmlSmall": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSmall),
/* harmony export */   "HtmlSource": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSource),
/* harmony export */   "HtmlSpan": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSpan),
/* harmony export */   "HtmlStrong": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlStrong),
/* harmony export */   "HtmlStyle": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlStyle),
/* harmony export */   "HtmlSub": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSub),
/* harmony export */   "HtmlSummary": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSummary),
/* harmony export */   "HtmlSup": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlSup),
/* harmony export */   "HtmlTBody": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTBody),
/* harmony export */   "HtmlTFoot": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTFoot),
/* harmony export */   "HtmlTHead": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTHead),
/* harmony export */   "HtmlTable": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTable),
/* harmony export */   "HtmlTd": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTd),
/* harmony export */   "HtmlTemplate": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTemplate),
/* harmony export */   "HtmlTextArea": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTextArea),
/* harmony export */   "HtmlTh": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTh),
/* harmony export */   "HtmlTime": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTime),
/* harmony export */   "HtmlTitle": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTitle),
/* harmony export */   "HtmlTr": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTr),
/* harmony export */   "HtmlTrack": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlTrack),
/* harmony export */   "HtmlU": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlU),
/* harmony export */   "HtmlUl": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlUl),
/* harmony export */   "HtmlVar": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlVar),
/* harmony export */   "HtmlVideo": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlVideo),
/* harmony export */   "HtmlWbr": () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_5__.HtmlWbr),
/* harmony export */   "Style": () => (/* reexport safe */ _Style_js__WEBPACK_IMPORTED_MODULE_2__.Style)
/* harmony export */ });
/* harmony import */ var _AttrType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Dataset_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _DomElem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @see {@link https://www.w3.org/TR/html}
 * @see {@link https://html.spec.whatwg.org}
 */









})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});