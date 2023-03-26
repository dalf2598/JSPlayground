import {rawList, isSorted} from './Helper.js';

function mergeSortIterative(list){
    let newList = [list];

    while (newList.length !== list.length) {
        const head = newList.shift();
        const midpoint = Math.floor(head.length / 2);

        const left = head.slice(0, midpoint);
        if (left.length > 0) newList.push(left);

        const right = head.slice(midpoint);
        if (right.length > 0) newList.push(right);
    }

    while(newList.length !== 1){
        const left = newList.shift();
        const right = newList.shift();
        newList.push(merge(left, right));
    }

    return newList[0];
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

const sortedList = mergeSortIterative(rawList);
console.log(`Merge Sort Iterative`);
console.log(sortedList);
console.log(`Sorted -> ${isSorted(sortedList)}`);