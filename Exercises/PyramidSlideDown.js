const pyramid1 = [[3], 
                  [7, 4], 
                  [2, 4, 6], 
                  [8, 5, 9, 3]];

const pyramid2 = [[3],
                  [7, 4],
                  [2, 4, 6],
                  [8, 5, 9, 3],
                  [1, 7, 6, 4, 8]];

const pyramid3 = [[75],
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


function longestSlideDownOp(pyramid) {
  const root = pyramid[0][0];

  function builder(node, level, index, memo = new Map()) {
    const left = pyramid[level][index];
    const right = pyramid[level][index + 1];

    const okey = {
      node: node,
      level: level,
      index: index
    };
    
    const key = JSON.stringify(okey);

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (level === pyramid.length - 1) { 
      memo.set(key, node + ((left > right) ? left : right));
      return memo.get(key);
    }
    
    const leftSum = builder(left, level + 1, index, memo);
    const rightSum = builder(right, level + 1, index + 1, memo);
   
    memo.set(key, node + ((leftSum > rightSum) ? leftSum : rightSum));
  
    return memo.get(key);
  }

  return builder(root, 1, 0);
}

function longestSlideDown (pyramid) {
  
  let i = pyramid.length - 1;
  
  while (--i >= 0) {
    for (let j = 0; j < pyramid[i].length; j++) {
      const left = pyramid[i + 1][j];
      const right =  pyramid[i + 1][j + 1];     
      pyramid[i][j] += (left > right) ? left : right;
    }
  }

  return pyramid[0][0];
}

console.log(longestSlideDown(pyramid1));

