const romanNumbers = new Map();
romanNumbers.set(1,'I');romanNumbers.set(2,'II');romanNumbers.set(3,'III');romanNumbers.set(4,'IV');
romanNumbers.set(5,'V');romanNumbers.set(6,'VI');romanNumbers.set(7,'VII');romanNumbers.set(8,'VIII');romanNumbers.set(9,'IX')
romanNumbers.set(10,'X');romanNumbers.set(20,'XX');romanNumbers.set(30,'XXX');romanNumbers.set(40,'XL');
romanNumbers.set(50,'L');romanNumbers.set(60,'LX');romanNumbers.set(70,'LXX');romanNumbers.set(80,'LXXX');romanNumbers.set(90,'XC');
romanNumbers.set(100,'C');romanNumbers.set(200,'CC');romanNumbers.set(300,'CCC');romanNumbers.set(400,'CD');
romanNumbers.set(500,'D');romanNumbers.set(600,'DC');romanNumbers.set(700,'DCC');romanNumbers.set(800,'DCCC');romanNumbers.set(900,'CM');
romanNumbers.set(1000,'M');romanNumbers.set(2000,'MM');romanNumbers.set(3000,'MMM');

function solution(number){
    if(number < 1 || number > 3999) return 0;
    const length = String(number).length - 1;
    return String(number).split('').map((i,j) => { 
        while(j++ < length) i = i + '0';
        return romanNumbers.get(Number(i));
    }).join('');
}

function solutionV2(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = "";

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
}

console.log(solutionV2(1));