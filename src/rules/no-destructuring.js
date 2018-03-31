'use strict';


function isSimpleAssignmentRight(node) {
  if (!node) {
    return false
  }
  if (node.type === 'Identifier' || node.type === 'Literal' || node.type === 'ThisExpression') {
    return true
  }
  if (node.type === 'MemberExpression') {
    return isSimpleAssignmentRight(node.object) && isSimpleAssignmentRight(node.property)
  }
  return false
}

function isSimpleAssignmentLeft(node) {
  return !!getMapping(node)
}

function joinMember(object, property) {
  if (!/^\[/.test(property)) {
    return `${object}.${property}`
  } else {
    return `${object}${property}`
  }
}

function getMapping(node) {
  function putValues(map, name, valueNode) {
    if (valueNode.type === 'Identifier') {
      map[name] = valueNode.name
    } else if (valueNode.type === 'ObjectPattern' || valueNode.type === 'ArrayPattern') {
      const subMap = getMapping(valueNode)
      if (!subMap) {
        return false
      }
      for (let k in subMap) {
        map[joinMember(name, k)] = subMap[k]
      }
    } else {
      return false
    }
    return true

  }
  if (node.type === 'ObjectPattern') {
    if (!node.properties.length) {
      return null
    }
    const map = {}
    for (let p of node.properties) {
      const name = (p.key.type === 'Identifier' && !p.computed) ? p.key.name
        : p.key.type === 'Literal' ? `[${p.key.raw}]`
        : null
      if (!name) {
        return null
      }
      if (!putValues(map, name, p.value)) {
        return null
      }
    }
    return map
  } else  if (node.type === 'ArrayPattern') {
    if (!node.elements.length) {
      return null
    }
    const map = {}
    for (let i = 0; i < node.elements.length; i++) {
      const e = node.elements[i]
      if (!e) {
        continue
      }
      const name = `[${i}]`
      if (!putValues(map, name, e)) {
        return null
      }
    }
    return Object.keys(map).length ? map : null
  }
  return null
}

function isSimpleDestructuringAssignment(node) {
  if (!node) {
    return false
  }
  if (node.type === 'VariableDeclarator') {
    if (!isSimpleAssignmentRight(node.init)) {
      return false
    }
    if (!isSimpleAssignmentLeft(node.id)) {
      return false
    }
    return true
  } else if (node.type === 'AssignmentExpression') {
    if (!isSimpleAssignmentRight(node.right)) {
      return false
    }
    if (!isSimpleAssignmentLeft(node.left)) {
      return false
    }
    return true
  }
  return false
}

function destructuringAssignmentToAssignments(node, sourceCode) {
  let right
  let map
  if (node.type === 'VariableDeclarator') {
    right = sourceCode.getText(node.init)
    map = getMapping(node.id)
  } else if (node.type === 'AssignmentExpression') {
    right = sourceCode.getText(node.right)
    map = getMapping(node.left)
  }
  const variableDeclarators = []
  for (let k in map) {
    variableDeclarators.push(`${map[k]}=${joinMember(right, k)}`)
  }
  return variableDeclarators.join(',')
}

module.exports = {
  meta: {
    docs: {
      description: 'Forbid destructuring'
    },
    fixable: 'code',
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    function report(node) {
      context.report({
        node,
        message: 'Unexpected destructuring.',
        fix: (fixer) => {
          const parent = node.parent
          if (isSimpleDestructuringAssignment(parent)) {
            return fixer.replaceText(parent, destructuringAssignmentToAssignments(parent, sourceCode))
          }
          return undefined
        }
      });
    }

    return {
      ArrayPattern(node) {
        report(node);
      },
      ObjectPattern(node) {
        report(node);
      }
    };
  }
};
