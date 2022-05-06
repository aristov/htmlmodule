import morphdom from 'morphdom'

export class Assembler
{
  state = {}

  constructor(props = {}) {
    this.__handlers = new Map
    this.__prevProps = props = this.normalizeProps(props)
    this.props = props
    this.node = props.node || this.createNode()
    this.node.__instance = this
    props.className || this.setClassName()
    this.setProps(props)
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

  setClassName(prefix = 'Html') {
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

  setProps(props) {
    let name, value
    for(name in props) {
      if(!props.hasOwnProperty(name)) {
        continue
      }
      value = props[name]
      if(name === 'node' || name === 'children' || value === undefined) {
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
    this.updateChildren()
    this.componentDidUpdate(this.props, prevState)
  }

  updateChildren() {
    this.props.children = this.normalizeChildren(this.render())
    if(this.props.children.length) {
      const fragment = new DocumentFragment
      fragment.append(...this.props.children.map(child => child.node || child))
      morphdom(this.node, fragment, options)
    }
  }

  setChildren(deep = false) {
    this.props.children = this.normalizeChildren(this.render())
    this.node.append(...this.props.children.map(child => {
      if(child.node) {
        deep && child.setChildren(true)
        return child.node
      }
      return child
    }))
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

  static get(node) {
    return node.__instance
  }

  static render(props, parentNode) {
    const instance = new this(props)
    parentNode?.append(instance.node)
    document.contains(instance.node) && instance.componentDidMount()
    instance.updateChildren()
    return instance
  }
}

/**
 * @type {MorphDomOptions}
 */
const options = {
  childrenOnly : true,
  onBeforeNodeAdded(toNode) {
    if(toNode.hasOwnProperty('__instance')) {
      toNode.__instance.setChildren(true)
    }
  },
  onNodeAdded(toNode) {
    if(toNode.hasOwnProperty('__instance')) {
      document.contains(toNode) && toNode.__instance.componentDidMount()
    }
  },
  onBeforeElUpdated(fromNode, toNode) {
    if(toNode.hasOwnProperty('__instance') && fromNode.hasOwnProperty('__instance')) {
      toNode.__instance.state = fromNode.__instance.state
      toNode.__instance.setChildren()
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
    }
  },
  onBeforeNodeDiscarded(fromNode) {
    if(fromNode.hasOwnProperty('__instance')) {
      fromNode.__instance?.destroy(true)
    }
  },
}
