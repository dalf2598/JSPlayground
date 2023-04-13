//const paragraph = " //wont won't won't ";
//const paragraph = " ' ";
const paragraph = `In a village of La Mancha, the name of which I have no desire to call to 
mind, there lived not long since one of those gentlemen that keep a lance 
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`

function topThreeWords(paragraph){
    const words = paragraph
    .toLowerCase().split(/[\s,.:;!@#$%^&*()\/\\|]+/).filter(i => i !== '' && i !== "'");
  
    let register = new Map();

    for (let i = 0; i < words.length; i++) {
        if(register.has(words[i])) continue;
        let counter = 0;
        let j = i + 1;
        for ( j ; j < words.length; j++) {
            if(words[i] === words[j]) counter++         
        }
        register.set(words[i], counter);
    }

    const sorted = Array.from(register).sort((a, b) => b[1] - a[1]);
    
    let result = [];
    for (let i = 0; i < 3; i++) {
        if(sorted[i] === undefined) break;
        result.push(sorted[i][0]);
    }

    return result;
}

console.log(topThreeWords(paragraph));
