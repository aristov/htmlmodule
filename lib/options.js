/**
 * @param {DomElem|string} child
 */
const componentDidMount = child => {
  if(child.node) {
    child.componentDidMount()
    child.props.children.forEach(componentDidMount)
  }
}

module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getKey(node) {
    return node.__instance?.key || node.id
  },

  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeWillMount(nodeB) {
    nodeB.__instance?.init(true)
  },

  /**
   * @param {ChildNode|Element} nodeB
   */
  nodeDidMount(nodeB) {
    nodeB.__instance && componentDidMount(nodeB.__instance)
  },

  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.state = instanceA.state
    }
    instanceB.init()
  },

  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    instanceA.removeAllListeners()
    for(const [eventName, listeners] of instanceB.__handlers.entries()) {
      if(typeof listeners === 'function') {
        nodeA[eventName] = nodeB[eventName]
        nodeB[eventName] = null
        continue
      }
      for(const listener of listeners.values()) {
        nodeA.addEventListener(eventName, listener, listener.__options)
        listener.__target.removeEventListener(eventName, listener, {
          capture : listener.__options.capture,
        })
        listener.__target = nodeA
      }
    }
  },

  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  childrenDidUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(!instanceA || !instanceB) {
      return
    }
    instanceB.node = nodeA
    instanceA.node = null
    nodeA.__instance = instanceB
    nodeB.__instance = null
    if(instanceA.constructor === instanceB.constructor) {
      instanceB.componentDidUpdate(instanceA.props, instanceB.state)
    }
    else instanceB.componentDidMount()
  },

  /**
   * @param {ChildNode|Element} nodeA
   */
  nodeWillUnmount(nodeA) {
    nodeA.__instance?.destroy(true)
  },
}
