// tenemos el árbol en forma de objeto
const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}


/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(bigTree)

function countDecorations(bigTree) {
  if(!bigTree) return 0;
  
  let value = bigTree.value;
  let left = bigTree.left;
  let right = bigTree.right;
  
  return value + countDecorations(left) + countDecorations(right)
}