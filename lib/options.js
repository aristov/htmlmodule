module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode} nodeB
   */
  nodeWillAppend(nodeB) {
    nodeB.__instance?.init(true)
  },
  /**
   * @param {ChildNode} nodeB
   */
  nodeDidAppend(nodeB) {
    nodeB.__instance?.componentDidMount()
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  nodeWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(instanceB && instanceA) {
      if(instanceA.constructor === instanceB.constructor) {
        instanceB.state = instanceA.state
      }
      instanceB.init()
    }
  },
  /**
   * @param {Element} nodeA
   * @param {Element} nodeB
   */
  childrenWillUpdate(nodeA, nodeB) {
    const instanceA = nodeA.__instance
    const instanceB = nodeB.__instance
    if(instanceB && instanceA) {
      for(const type of instanceA.__handlers.keys()) {
        nodeA[type] = null
      }
      for(const type of instanceB.__handlers.keys()) {
        nodeA[type] = nodeB[type]
        nodeB[type] = null
      }
      if(instanceA.constructor === instanceB.constructor) {
        instanceB.__prevProps = instanceA.props
      }
      instanceB.node = nodeA
      nodeA.__instance = instanceB
      nodeB.__instance = null
    }
  },
  /**
   * @param {ChildNode} nodeA
   */
  childrenDidUpdate(nodeA) {
    const instanceA = nodeA.__instance
    if(instanceA) {
      if(instanceA.__prevProps) {
        instanceA.componentDidUpdate(instanceA.__prevProps, instanceA.state)
        instanceA.__prevProps = null
      }
      else instanceA.componentDidMount()
    }
  },
  /**
   * @param {ChildNode} nodeA
   */
  nodeWillRemove(nodeA) {
    nodeA.__instance?.destroy(true)
  },
}
