const array = [5, 8, 6, 3, 4];

function sortArray(array) {
    let j = 0;
    const even = array.filter(i => i % 2 !==0).sort((a,b) => a - b);
    return array.map( i => i = (i % 2 !==0) ? even[j++] : i );
}

function sortArrayV2(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

console.log(sortArrayV2(array));