const pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function longestSlideDown0(pyramid) {
  const root = new Node(pyramid[0][0]);
  
  pyramid.push(pyramid[pyramid.length - 1]) //esto agregue yo, quitar jajaja
  
  function buildTree(node, level, index) {

    if (level === pyramid.length - 1) {
      return new Node(pyramid[level][index]);
    }

    const left = buildTree(new Node(pyramid[level][index]), level + 1, index);
    const right = buildTree(new Node(pyramid[level][index + 1]), level + 1, index + 1);
    node.left = left;
    node.right = right;

    return node;
  }

  function maxRoute (root) {

    if(root === null) return -Infinity;
  
    if(root.right === null && root.left === null) return root.val;
    
    return Math.max(root.val + maxRoute(root.left), root.val + maxRoute(root.right));
  }

  return maxRoute(buildTree(root, 1, 0));
}


function longestSlideDown(pyramid) {
  const root =  pyramid[0][0];

  //pyramid.push(pyramid[pyramid.length - 1])

  function builder(node, level, index) {
    console.log(`node => ${node}, level => ${level}, index => ${index} `);
  
    if (level === pyramid.length - 1) {
      return pyramid[level][index];
    }

    const left = builder(pyramid[level][index], level + 1, index);
    const right = builder(pyramid[level][index + 1], level + 1, index + 1);
    
    return Math.max(node + left, node + right);
  }

  return builder(root, 1, 0);
}

//console.log(longestSlideDown(pyramid));
console.log(Math.ceil(3/2));
