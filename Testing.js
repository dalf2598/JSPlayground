const adjacents = new Map();
adjacents.set('1000', [1,3]);
adjacents.set('600', [6,3]);
adjacents.set('500', [5,3]);
adjacents.set('400', [4,3]);
adjacents.set('300', [3,3]);
adjacents.set('200', [2,3]);
adjacents.set('100', [1,1]);
adjacents.set('50', [1,5]);

adjacents.forEach((value, key) => {
    console.log(value + ' ' + key);
});