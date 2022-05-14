const { default : morphdom } = require('morphdom')
const window = require('./window')
const events = require('./events')
const {
  getNodeKey,
  onBeforeNodeAdded,
  onNodeAdded,
  onBeforeElUpdated,
  onBeforeElChildrenUpdated,
  // onElChildrenUpdated,
  onBeforeNodeDiscarded,
} = require('./morphdom')

const SPECIAL_PROPS = ['node', 'children']
const { CustomEvent, DocumentFragment, EventTarget, Node } = window

/**
 * @see https://dom.spec.whatwg.org/#interface-node
 * @abstract
 */
class DomNode
{
  state = {}

  /**
   * @param {*} [props]
   */
  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = null
    this.props = props = this.normalizeProps(props)
    this.node = props.node || this.createNode()
    this.node.__instance = this
    this.setProps()
  }

  /**
   * @param {*} props
   * @return {{}}
   */
  normalizeProps(props) {
    if(props?.constructor !== Object) {
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
   * @param {{}|function} [state]
   */
  setState(state) {
    const prevState = Object.assign({}, this.state)
    Object.assign(this.state, typeof state === 'function' ? state(this.state) : state)
    this.props.children = this.normalizeChildren(this.render())
    if(this.props.children.length) {
      const fragment = new DocumentFragment
      fragment.append(...this.props.children.map(child => child.node || child))
      morphdom(this.node, fragment, {
        childrenOnly : true,
        getNodeKey,
        onBeforeNodeAdded,
        onNodeAdded,
        onBeforeElUpdated,
        onBeforeElChildrenUpdated,
        // onElChildrenUpdated,
        onBeforeNodeDiscarded,
      })
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
   * @param {{}} props
   * @param {Node} [parentNode]
   * @return {*|DomNode}
   */
  static render(props, parentNode) {
    const instance = new this(props)
    const fragment = new DocumentFragment
    instance.init()
    if(parentNode) {
      fragment.append(instance.node)
      morphdom(parentNode, fragment, {
        childrenOnly : true,
        getNodeKey,
        onBeforeNodeAdded,
        onNodeAdded,
      })
    }
    return instance
  }
}

DomNode.defineEvents(Object.keys(events))

Object.defineProperty(DomNode.prototype, 'key', {
  writable : true,
  value : null,
})

Object.defineProperty(Node.prototype, '__instance', {
  writable : true,
  value : null,
})

module.exports = DomNode
