const input = 'apples, pears # and bananas\ngrapes\nbananas !apples';
const markers = ["#", "!"];

function solution(input, markers) {
    for(let marker of markers){
        let temp = '';
        if(input.indexOf(marker) !== -1){
            let i = input.indexOf(marker);
            temp = (input[i - 1] === ' ') ? ` ${input[i]}` :input[i];
            while(input[++i] === ' '|| /[a-zA-Z]/.test(input[i])){
                temp += input[i];
                if(i === input.length - 1) break;
            }
        }
        console.log(temp);
        input = input.replace(temp, '');    
    }
    return (input[input.length - 1] === ' ') ? input.substring(0, input.length - 1): input;
}

function solutionV2(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }

console.log(solution(input, markers));
