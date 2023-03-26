const arry = [8, 2, 1, 6, 2, 3, 5];

const toFindDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index); 
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);


