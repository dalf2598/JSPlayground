const expression = '123?45+?=123?45';

function solveExpression(expression){
    const validNumbers = [0,1,2,3,4,5,6,7,8,9];
    const expressionNumbers = expression.match(/\d+/g);
    let singleNumbers = [];
    let usableNumbers = validNumbers;
    if(expressionNumbers !== null){
        expressionNumbers.forEach((number) => singleNumbers.push(...number.split('')));
        usableNumbers = validNumbers.filter((value) => singleNumbers.indexOf(value.toString()) === -1);
    }

    let results = [];
    for (let i = 0; i < usableNumbers.length; i++) {    
        if(validate(expression.replace(/\?/g, usableNumbers[i]))) results.push(usableNumbers[i]);
    }
    
    return (results.length > 0) ? results.sort()[0] : -1;
}

function validate(expression){

    const values = expression.split(/[+\-*=/]/).filter(value => value !== '');
    
    for (let i = 0; i < values.length; i++) {
        if(values[i] === '00') return false;
        if(values[i].length > 1 && values[i][0] == '0') return false;
    }
    
    let operator = ''; 
    let num2Sign, resultSign, obtainedResult = 0;
    
    for (let i = 0; i < expression.length; i++) {
        if(Number.isInteger(parseInt(expression[i]))){
            if(expression[i + 1] === '+' || expression[i + 1] === '-' || expression[i + 1] === '*'){
                operator = expression[i + 1]; num2Sign = i + 2;
            }
        }
        if(expression[i] === '=') resultSign = i + 1;
    }

    const num1 = (expression[0] === '-') ?  - parseInt(values[0]) : parseInt(values[0]);
    const num2 = (expression[num2Sign] === '-') ? - parseInt(values[1]) : parseInt(values[1]);
    const expectedResult = (expression[resultSign] === '-') ? - parseInt(values[2]) : parseInt(values[2]);

    switch (operator) {
        case '+':
            obtainedResult = num1 + num2;
            break;
        case '-':
            obtainedResult = num1 - num2;
            break;
        case '*':
            obtainedResult = num1 * num2;
            break;
        default:
            return false;
      }

    return (expectedResult === obtainedResult);
}

console.log(solveExpression(expression));