let a = -1;
let b = 2;

function getSum(a,b) {
    let sum = 0;
    if (a != b) {
        if (a > b) {
            while (b <= a) {
                sum += b;
                b++;
            }
        }
        else {
            while (a <= b) {
                sum += a;
                a++;
            }
        }
    }
    else {
        sum = a;
    }

    return sum;
}

console.log(getSum(a,b));