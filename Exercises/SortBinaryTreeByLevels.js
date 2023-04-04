class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
}


function treeByLevels(root){
    if(root === null) return [];

    const values = [];
    const queue = [root];
    
    while(queue.length > 0){
        const current = queue.shift();
        values.push(current.value);
        
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }

    return values;
}

const treeOne =
    new Node(2,
        new Node(8,
            new Node(1),
            new Node(3)
        ),
        new Node(9,
            new Node(4),
            new Node(5)
        )
    );

console.log(treeByLevels(treeOne));