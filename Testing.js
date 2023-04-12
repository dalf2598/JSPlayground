const pyramid = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];


class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function longestSlideDown(pyramid){
    let nodes = [];
    let nodesPivot = 0;

    for (let i = 0; i < pyramid.length; i++) { 
        if (i !== 0) nodesPivot += i - 1;
        let pivot = nodesPivot;
        
        for (let j = 0; j < pyramid[i].length; j++) {
                     
            if(i === 0){
                nodes.push(new Node(pyramid[i][j]));
                continue;
            }
            
            let currentNode = new Node(pyramid[i][j]);
            if( j == 0 ){
                nodes[pivot].left = currentNode;
            }else{
                nodes[pivot - 1].right = currentNode;    
                if(j < pyramid[i].length - 1) nodes[pivot].left = currentNode;
            }
            nodes.push(currentNode);
            pivot++;
        }
    }

    return maxRoute(nodes[0]);
}   

function maxRoute (root) {

    if(root === null) return -Infinity;

    if(root.right === null && root.left === null) return root.val;
    
    return Math.max(root.val + maxRoute(root.left), root.val + maxRoute(root.right));
}

console.log(longestSlideDown(pyramid));