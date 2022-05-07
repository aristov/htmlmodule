import window from 'window'
import morphdom from 'morphdom'

const SPECIAL_PROPS = ['node', 'children', 'className']
const { document, CustomEvent, EventTarget } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
export class DomNode
{
  state = {}

  className = undefined

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
      morphdom(this.node, fragment, options)
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
   * @param {boolean} [keepNodes=false]
   */
  destroyChildren(keepNodes = false) {
    if(this.node.hasChildNodes()) {
      for(const child of Array.from(this.node.childNodes)) {
        const elem = child.__instance
        if(elem) {
          elem.destroy(keepNodes)
        }
        else keepNodes || child.remove()
      }
    }
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
      const events = this.constructor.events
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
    morphdom(parentNode, fragment, options)
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
DomNode.events = {
  blur : [window.FocusEvent],
  cancel : [window.Event, false, true],
  change : [window.Event, true],
  click : [window.MouseEvent, true, true],
  close : [window.Event],
  contextmenu : [window.MouseEvent, true, true],
  dblclick : [window.MouseEvent, true, true],
  error : [window.Event],
  focus : [window.FocusEvent],
  focusin : [window.FocusEvent, true],
  focusout : [window.FocusEvent, true],
  input : [window.InputEvent, true],
  invalid : [window.Event, false, true],
  keydown : [window.KeyboardEvent, true, true],
  keyup : [window.KeyboardEvent, true, true],
  load : [window.Event],
  mousedown : [window.MouseEvent, true, true],
  mouseenter : [window.MouseEvent],
  mouseleave : [window.MouseEvent],
  mousemove : [window.MouseEvent, true, true],
  mouseout : [window.MouseEvent, true, true],
  mouseover : [window.MouseEvent, true, true],
  mouseup : [window.MouseEvent, true, true],
  reset : [window.Event, true, true],
  resize : [window.UIEvent],
  scroll : [window.Event, true],
  submit : [window.Event, true, true],
  touchcancel : [window.TouchEvent, true],
  touchend : [window.TouchEvent, true, true],
  touchmove : [window.TouchEvent, true, true],
  touchstart : [window.TouchEvent, true, true],
}

DomNode.defineEvents(Object.keys(DomNode.events))
