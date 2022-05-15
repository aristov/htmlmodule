const { indexOf } = Array.prototype

function morph(nodeA, nodeB, options = {}) {
  options.getKey ??= getNodeId
  if(options.childrenOnly) {
    morphKeyList(nodeA, nodeB, options)
    return nodeA
  }
  morphNode(nodeA, nodeB, options)
  return nodeA
}

function morphNode(nodeA, nodeB, options) {
  const {
    nodeWillUpdate,
    nodeDidUpdate,
    childrenWillUpdate,
    childrenDidUpdate,
  } = options
  nodeWillUpdate?.(nodeA, nodeB)
  morphAttrs(nodeA, nodeB, options)
  nodeDidUpdate?.(nodeA)
  childrenWillUpdate?.(nodeA, nodeB)
  morphKeyList(nodeA, nodeB, options)
  childrenDidUpdate?.(nodeA)
}

function morphAttrs(nodeA, nodeB) {
  const names = new Set
  let attr, value
  for(attr of nodeA.attributes) {
    names.add(attr.name)
    value = nodeB.getAttribute(attr.name)
    if(value === null) {
      nodeA.removeAttribute(attr.name)
      continue
    }
    if(attr.value !== value) {
      attr.value = value
    }
  }
  for(attr of nodeB.attributes) {
    if(!names.has(attr.name)) {
      nodeA.setAttribute(attr.name, attr.value)
    }
  }
}

function getKeyIndex(node, getKey) {
  const index = {}
  let child, key
  for(child of node.childNodes) {
    key = getKey(child)
    if(!key) {
      return null
    }
    index[key] = child
  }
  return index
}

function morphKeyList(nodeA, nodeB, options) {
  const {
    getKey,
    nodeWillAppend,
    nodeDidAppend,
    nodeWillRemove,
    nodeDidRemove,
  } = options
  const indexA = getKeyIndex(nodeA, getKey)
  const indexB = getKeyIndex(nodeB, getKey)
  if(!indexA || !indexB) {
    morphChildren(nodeA, nodeB, options)
    return
  }
  const childrenB = Array.from(nodeB.children)
  let childA = nodeA.firstElementChild
  let childB, nextA, i, j
  while(childA) {
    nextA = childA.nextElementSibling
    if(!indexB[getKey(childA)]) {
      nodeWillRemove?.(childA)
      childA.remove()
      deep(childA, nodeDidRemove)
    }
    childA = nextA
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(childA) {
      morphNode(childA, childB, options)
      continue
    }
    nextA = nodeA.children[i]
    nodeWillAppend?.(childB)
    if(nextA) {
      nextA.before(childB)
    }
    else nodeA.append(childB)
    deep(childB, nodeDidAppend)
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = indexA[getKey(childB)]
    if(!childA) {
      continue
    }
    j = indexOf.call(nodeA.children, childA)
    if(i === j) {
      continue
    }
    nextA = nodeA.children[i].nextElementSibling
    if(nextA) {
      if(childA !== nextA && childA.nextElementSibling !== nextA) {
        nextA.before(childA)
      }
    }
    else nodeA.append(childA)
    morphNode(childA, childB, options)
  }
}

function morphChildren(nodeA, nodeB, options) {
  const {
    getKey,
    nodeWillAppend,
    nodeDidAppend,
    nodeWillUpdate,
    nodeDidUpdate,
    nodeWillRemove,
    nodeDidRemove,
  } = options
  const childNodesA = Array.from(nodeA.childNodes)
  const childNodesB = Array.from(nodeB.childNodes)
  const length = Math.max(childNodesA.length, childNodesB.length)
  let i, childA, childB
  for(i = 0; i < length; i++) {
    childA = childNodesA[i]
    childB = childNodesB[i]
    if(!childA) {
      nodeWillAppend?.(childB)
      nodeA.append(childB)
      deep(childB, nodeDidAppend)
      continue
    }
    if(!childB) {
      nodeWillRemove?.(childA)
      childA.remove()
      deep(childA, nodeDidRemove)
      continue
    }
    if(childA.nodeType === Node.TEXT_NODE && childB.nodeType === Node.TEXT_NODE) {
      nodeWillUpdate?.(childA, childB)
      childA.data = childB.data
      nodeDidUpdate?.(childA)
      continue
    }
    if(childA.nodeType === childB.nodeType) {
      if(childA.tagName === childB.tagName) {
        if(getKey(childA) === getKey(childB)) {
          morphNode(childA, childB, options)
          continue
        }
      }
    }
    nodeWillRemove?.(childA)
    nodeWillAppend?.(childB)
    childA.replaceWith(childB)
    deep(childA, nodeDidRemove)
    deep(childB, nodeDidAppend)
  }
}


function getNodeId(node) {
  return node.id
}

function deep(node, handler) {
  if(!handler) {
    return
  }
  handler(node)
  for(const child of node.children) {
    deep(child, handler)
  }
}

if(typeof module !== 'undefined') {
  module.exports = morph
}
else window.morph = morph