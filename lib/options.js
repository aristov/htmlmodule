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
    const instanceB = nodeB.__instance
    if(!instanceB) {
      return
    }
    instanceB.componentDidMount()
    let node = nodeB.firstElementChild
    if(!node) {
      return
    }
    while(node = node.nextElementSibling || node.firstElementChild) {
      node.__instance?.componentDidMount()
    }
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
    for(const type of instanceA.__handlers.keys()) {
      nodeA[type] = null
    }
    for(const type of instanceB.__handlers.keys()) {
      nodeA[type] = nodeB[type]
      nodeB[type] = null
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
