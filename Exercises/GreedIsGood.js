const dices = [1, 5, 1, 2, 2];

function score(dices) {
    const points = new Map();
    points.set(1000, [1,3]);
    points.set(600, [6,3]);
    points.set(500, [5,3]);
    points.set(400, [4,3]);
    points.set(300, [3,3]);
    points.set(200, [2,3]);
    points.set(100, [1,1]);
    points.set(50, [5,1]);
    
    let score = 0;
    points.forEach((value, key) => {
        const count = dices.filter((dice) => dice === value[0]).length;
        if (count >= value[1]) {
            let difference = count - value[1];
            score += key;       
            while (difference-- > 0){
                if (value[0] === 1) score += 100;
                if (value[0] === 5) score += 50;
            }
            dices = dices.filter((dice) => dice !== value[0])
        }
    });
    return score;
}

function scoreV2( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
        console.log(`s -> ${s} | x -> ${x} | i -> ${i}`);
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
  }

console.log(scoreV2(dices));