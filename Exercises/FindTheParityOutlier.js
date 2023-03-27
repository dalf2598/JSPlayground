const a = [2, 4, 0, 100, 4, 11, 2602, 36];
const b = [0,1,2];

function findOutlier(integers){
    let even = 0, odd = 0;
    for (const integer of integers) {
        (integer % 2 == 0) ? even++ : odd++;
        if(even > 1 || odd > 1) break;
    }
    for (const integer of integers) {
        if(integer % 2 == 0 && odd > 1 || integer % 2 != 0 && even > 1) return integer;
    }
}

function findOutlierV2(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

console.log(findOutlierV2(a));
