import {rawList, isSorted} from './Helper.js';
/* 
    Divide: Find the midpoint of the list and divide into sublist
    Conquer: Recursively sort the subslist created in previous step
    Combine: Merge the sorted sublist created in previous step
*/
function mergeSortRecursive(list){
    
    if(list.length <= 1){
        return list;
    }
    
    let temp = split(list);

    let left = mergeSortRecursive(temp.left);
    let right = mergeSortRecursive(temp.right);

    return merge(left, right);
}

function split(list){
    const midpoint = Math.floor(list.length/2);
    const left = list.slice(0, midpoint);
    const right = list.slice(midpoint);
    return {left, right};
}

function merge(left, right){
    let sorted = [];
    let i = 0; //for left
    let j = 0; //for right

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            sorted.push(left[i++]);
        }else{
            sorted.push(right[j++]);
        }
    }

    while(i < left.length){
        sorted.push(left[i++]);
    }

    while(j < right.length){
        sorted.push(right[j++]);
    }
    return sorted;
}

const sortedList = mergeSortRecursive(rawList);
console.log(`Merge Sort Recursive`);
console.log(sortedList);
console.log(`Sorted -> ${isSorted(sortedList)}`);



