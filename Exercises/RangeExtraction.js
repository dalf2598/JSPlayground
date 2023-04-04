const numbers = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];

function solution(numbers){
    let i = 0, list= '';
    while(i < numbers.length){
        let number = numbers[i];
        if(numbers.indexOf(number + 1) == -1 || numbers.indexOf(number + 2) == -1){
            list += `${String(number)},`;
            i++;
        }else{
            list += `${String(number)}-`;
            while(numbers.indexOf(number++) != -1) i++;
            list += `${String(numbers[i - 1])},`
        }
    }
    return list.substring(0, list.length - 1);
}

console.log(solution(numbers));