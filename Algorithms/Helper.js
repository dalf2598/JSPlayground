export const rawList = [56, 92, 13, 30, 77, 85, -42, 6, 71, -9, 25, 63, -48, 80, 33, 17, 96, -50, 2, 88];

export function isSorted(list){
    for(let j = 0; j < list.length; j++){
        if(list[j] > list[j+1]){
            return false;
        }
    }
    return true;
}

function isSortedRecursive(list){
    if( list.length <= 1 ){
        return true;
    }

    if(list[0] < list[1] && isSortedRecursive(list.slice(1, list.length))){
        return true;
    }

    return false;
}