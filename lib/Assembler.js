import morphdom from 'morphdom'
import { document } from 'window'

const SPECIAL_PROPS = ['node', 'children', 'className']

export class Assembler
{
  state = {}

  className = undefined

  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = props = this.normalizeProps(props)
    this.props = props
    this.node = props.node || this.createNode()
    this.node.__instance = this
  }

  normalizeProps(props) {
    if(props.constructor !== Object) {
      props = { children : props }
    }
    else if(!props.children) {
      props.children = []
    }
    return props
  }

  createNode() {
    let constructor = this.constructor
    do if(constructor.name.startsWith('Html')) {
      return document.createElement(constructor.name.slice(4))
    }
    while(constructor = Object.getPrototypeOf(constructor))
  }

  init(deep = false) {
    this.props.hasOwnProperty('className') || this.setClassName()
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

  setClassName(prefix = 'Html') {
    for(const className of [this.props.className, this.className]) {
      if(className !== undefined) {
        if(className !== null) {
          this.node.className = className
        }
        return
      }
    }
    const classList = this.node.classList
    let constructor = this.constructor
    do {
      if(constructor.name.startsWith(prefix)) {
        break
      }
      classList.add(constructor.name)
    }
    while(constructor = Object.getPrototypeOf(constructor))
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

  static render(props, parentNode) {
    const instance = new this(props)
    const fragment = new DocumentFragment
    instance.init(true)
    fragment.append(instance.node)
    morphdom(parentNode, fragment, options)
    return instance
  }

  static get(node) {
    return node?.__instance || new this({ node })
  }
}

/**
 * @type {MorphDomOptions}
 */
const options = {
  childrenOnly : true,
  onNodeAdded(toNode) {
    if(toNode.hasOwnProperty('__instance')) {
      document.contains(toNode) && toNode.__instance.componentDidMount()
    }
  },
  onBeforeElUpdated(fromNode, toNode) {
    if(toNode.hasOwnProperty('__instance') && fromNode.hasOwnProperty('__instance')) {
      toNode.__instance.state = fromNode.__instance.state
    }
  },
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
  onElUpdated(fromNode) {
    if(fromNode.hasOwnProperty('__instance')) {
      const instance = fromNode.__instance
      instance.componentDidUpdate(instance.__prevProps, instance.state)
      delete instance.__prevProps
    }
  },
  onBeforeNodeDiscarded(fromNode) {
    if(fromNode.hasOwnProperty('__instance')) {
      fromNode.__instance?.destroy(true)
    }
  },
}
