module.exports = {
  /**
   * @param {Element} node
   * @return {string}
   */
  getNodeKey(node) {
    return node.__instance?.key || node.id
  },
  /**
   * @param {ChildNode} toNode
   */
  onBeforeNodeAdded(toNode) {
    toNode.__instance?.init(true)
  },
  /**
   * @param {ChildNode} toNode
   */
  onNodeAdded(toNode) {
    const instance = toNode.__instance
    if(instance) {
      document.contains(toNode) && instance.componentDidMount()
    }
  },
  /**
   * @param {Element} fromNode
   * @param {Element} toNode
   */
  onBeforeElUpdated(fromNode, toNode) {
    const fromInstance = fromNode.__instance
    const toInstance = toNode.__instance
    if(toInstance && fromInstance) {
      if(fromInstance.constructor === toInstance.constructor) {
        toInstance.state = fromInstance.state
      }
      toInstance.init()
    }
  },
  /**
   * @param {Element} fromNode
   * @param {Element} toNode
   */
  onBeforeElChildrenUpdated(fromNode, toNode) {
    const fromInstance = fromNode.__instance
    const toInstance = toNode.__instance
    if(toInstance && fromInstance) {
      for(const type of fromInstance.__handlers.keys()) {
        fromNode[type] = null
      }
      for(const type of toInstance.__handlers.keys()) {
        fromNode[type] = toNode[type]
        toNode[type] = null
      }
      if(fromInstance.constructor === toInstance.constructor) {
        toInstance.__prevProps = fromInstance.props
      }
      toInstance.node = fromNode
      fromNode.__instance = toInstance
      toNode.__instance = null
    }
    module.exports.onElChildrenUpdated(fromNode) // fixme
  },
  /**
   * @param {ChildNode} fromNode
   */
  onElChildrenUpdated(fromNode) {
    const fromInstance = fromNode.__instance
    if(fromInstance) {
      if(fromInstance.__prevProps) {
        fromInstance.componentDidUpdate(fromInstance.__prevProps, fromInstance.state)
        fromInstance.__prevProps = null
      }
      else fromInstance.componentDidMount()
    }
  },
  /**
   * @param {ChildNode} fromNode
   */
  onBeforeNodeDiscarded(fromNode) {
    fromNode.__instance?.destroy(true)
  },
}
