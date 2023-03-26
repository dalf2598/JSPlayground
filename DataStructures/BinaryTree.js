class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(2);
const d = new Node(6);
const e = new Node(5);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirstValuesIterative = (root) =>{
    if(root === null) return [];
    
    const values = [];
    const stack = [root];
    while(stack.length > 0){
        const current = stack.pop();
        values.push(current.val);
        
        if(current.right !== null) stack.push(current.right);

        if(current.left !== null) stack.push(current.left);
    }

    return values;
};

const depthFirstValuesRecursive = (root) =>{
    if(root === null) return[];

    const leftValue = depthFirstValuesRecursive(root.left);
    const rightValue = depthFirstValuesRecursive(root.right);

    return [ root.val, ...leftValue, ...rightValue];
};

const depthFirstSearchRecursive = (root, target) =>{
    if(root === null) return false;

    if(root.val === target) return true;
    
    return depthFirstSearchRecursive(root.left, target) || depthFirstSearchRecursive(root.right, target);
}

const depthFirstAddition = (root) =>{
    if (root === null){
        return 0;
    } 

    return root.val + depthFirstAddition(root.left) + depthFirstAddition(root.right);
}


const depthFirstMinimun = (root) =>{
    if (root === null) return Infinity;

    return Math.min(root.val, depthFirstMinimun(root.left), depthFirstMinimun(root.right))
}

const depthMaxRouteAddition = (root) =>{
    if(root === null) return -Infinity;

    if(root.right === null && root.left === null) return root.val;
    
    return Math.max(root.val + depthMaxRouteAddition(root.left), root.val + depthMaxRouteAddition(root.right));
}

const height = (root) =>{
    if (root === null) return 0;

    return Math.max(height(root.left),height(root.right)) + 1;
}


const breadthFirstValue = (root) =>{
    if(root === null) return [];

    const values = [];
    const queue = [root];
    
    while(queue.length > 0){
        const current = queue.shift();
        values.push(current.val);
        
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }

    return values;
};

const breadthFirstSearch = (root, target) =>{
    if(root === null) false;

    const queue = [root];
    
    while(queue.length > 0){
        const current = queue.shift();
        if(current.val === target) return true;
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }

    return false;
};

const breadthFirstMinimun = (root) =>{
    if(root === null) return [];

    const queue = [root];
    let smallest = Infinity;
    
    while(queue.length > 0){
        const current = queue.shift();
        
        if(current.val < smallest) smallest = current.val;

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }

    return smallest;
};


// console.log(depthFirstValuesIterative(a));

// console.log(depthFirstValuesRecursive(a));

// console.log(breadthFirstValue(a));

// console.log(depthFirstSearchRecursive(a,'e'));
// console.log(breadthFirstSearch(a,'l'));

// console.log(depthFirstAddition(a));
// console.log(breadthFirstMinimun(a));
console.log(depthMaxRouteAddition(a));
console.log(height(a));