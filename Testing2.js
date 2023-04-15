//const pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
const pyramid = [[75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]];


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function longestSlideDown0(pyramid) {
  const root = new Node(pyramid[0][0]);
    
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

  function builder(node, level, index) {

    if (level === pyramid.length - 1){
      return node + ((pyramid[level][index] > pyramid[level][index + 1]) ? pyramid[level][index] : pyramid[level][index + 1]);
    }
    
    const left = builder(pyramid[level][index], level + 1, index);
    const right = builder(pyramid[level][index + 1], level + 1, index + 1);
    return node + ((left > right) ? left : right);
  }

  return builder(root, 1, 0);
}

function longestSlideDownOptimize(pyramid) {
  const root =  pyramid[0][0];

  function builder(node, level, index, memo = {}) {
    
    if (level === pyramid.length - 1){
      const baseKey = node.toString() + pyramid[level][index] + pyramid[level][index + 1];
      
      if(baseKey in memo) return memo[baseKey];
      
      memo[baseKey] = node + ((pyramid[level][index] > pyramid[level][index + 1]) ? pyramid[level][index] : pyramid[level][index + 1]);
      
      return memo[baseKey];
    } 

    const left = builder(pyramid[level][index], level + 1, index, memo);
    const right = builder(pyramid[level][index + 1], level + 1, index + 1, memo);

    const key = node.toString() + left.toString() + right.toString();    

    if(key in memo)  return memo[key];
    
    memo[key] = node + ((left > right) ? left : right);

    return memo[key];
  }

  return builder(root, 1, 0);
}

console.log(longestSlideDownOptimize(pyramid));


// const value = {
//   '123' : 6,
//   '586' : 19
// }

// console.log(('123' in value)); 
