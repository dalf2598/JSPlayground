const points = new Map();
points.set('1000', [1,3]);
points.set('600', [6,3]);
points.set('500', [5,3]);
points.set('400', [4,3]);
points.set('300', [3,3]);
points.set('200', [2,3]);
points.set('100', [1,1]);
points.set('50', [1,5]);

points.forEach((value, key) => {
    console.log(value + ' ' + key);
});