const { indexOf } = Array.prototype

function morph(nodeA, nodeB, options = {}) {
  if(options.childrenOnly) {
    morphList(nodeA, nodeB, options)
    return nodeA
  }
  morphNode(nodeA, nodeB, options)
  return nodeA
}

function morphNode(nodeA, nodeB, options) {
  morphAttrs(nodeA, nodeB, options)
  morphList(nodeA, nodeB, options)
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
    if(names.has(attr.name)) {
      continue
    }
    nodeA.setAttribute(attr.name, attr.value)
  }
}

function getKeys(node) {
  const keys = {}
  let child
  for(child of node.childNodes) {
    if(!child.id) {
      return null
    }
    keys[child.id] = child
  }
  return keys
}

function morphList(nodeA, nodeB, options) {
  const keysA = getKeys(nodeA)
  const keysB = getKeys(nodeB)
  if(!keysA || !keysB) {
    morphChildren(nodeA, nodeB, options)
    return
  }
  const childrenB = Array.from(nodeB.children)
  let childA = nodeA.firstElementChild
  let childB, nextA, i, j
  while(childA) {
    nextA = childA.nextElementSibling
    if(!keysB[childA.id]) {
      childA.remove()
    }
    childA = nextA
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = keysA[childB.id]
    if(childA) {
      continue
    }
    nextA = nodeA.children[i]
    if(nextA) {
      nextA.before(childB)
    }
    else nodeA.append(childB)
  }
  for(i = 0; i < childrenB.length; i++) {
    childB = childrenB[i]
    childA = keysA[childB.id]
    if(!childA) {
      continue
    }
    j = indexOf.call(nodeA.children, childA)
    if(i === j) {
      continue
    }
    nextA = nodeA.children[i].nextElementSibling
    if(nextA === childA) {
      continue
    }
    if(nextA) {
      nextA.before(childA)
    }
    else nodeA.append(childA)
  }
}

function morphChildren(nodeA, nodeB, options) {
  const childNodesA = Array.from(nodeA.childNodes)
  const childNodesB = Array.from(nodeB.childNodes)
  const length = Math.max(childNodesA.length, childNodesB.length)
  let i, childA, childB
  for(i = 0; i < length; i++) {
    childA = childNodesA[i]
    childB = childNodesB[i]
    if(!childA) {
      nodeA.append(childB)
      continue
    }
    if(!childB) {
      childA.remove()
      continue
    }
    if(childA.nodeType !== childB.nodeType) {
      childA.replaceWith(childB)
      continue
    }
    if(childA.nodeType === Node.TEXT_NODE) {
      childA.data = childB.data
      continue
    }
    morphNode(childA, childB, options)
  }
}

window.morph = morph
