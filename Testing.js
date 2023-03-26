const list = [56, 92, 44, 30, -3, 85, 42, 6, 71, 9, 25, 63, 48, 80, 33, 17, 96, 50, -2, 88, -1];

const list2 = [8,4,5,6];

// function bubbleSort(list) {

//     let swap = true;
    
//     while(swap) {
//         swap = false;
//         for (let i = 0; i < list.length; i++) {
//             if (list[i] > list[i + 1]) {
//                 [list[i], list[i + 1]] = [list[i + 1], list[i]]
//                 swap = true;
//             }
//         }
//     } 

//     console.log(list);
// }

// bubbleSort(list);

const petNames = new Map();

petNames.set('dog', ['Capo','Vecino']);
petNames.set('cat', ['Cornelia', 'Mortadela']);

//console.log(petNames.get('dog'));

const closestToZero = (list) => {

    if(list.length === 0) return 0;

    let pivot = list[0];

    for (let i = 1; i < list.length; i++) {
        if(pivot < 0 && list[i] < 0 && Math.abs(pivot) > Math.abs(list[i])){
            pivot = list[i];
            continue;
        }
        
        if(pivot < 0 && list[i] > 0 && Math.abs(pivot) === list[i]){
            pivot = list[i];
            continue;
        }
        
        if(pivot > 0 && list[i] < 0 && pivot > Math.abs(list[i])){
            pivot = list[i];
            continue;
        }
        
        if(pivot > 0 && list[i] > 0 && pivot > list[i]){
            pivot = list[i];
            continue;
        }
    }

    return pivot;
}

console.log(closestToZero(list));