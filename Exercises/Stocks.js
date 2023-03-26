const stocks = ['AMZN', 'CACC', 'EQIX','GOOG','ORLY','ULTA'];
const prices = [[12.81, 11.09, 12.11, 10.93, 9.83, 8.14],[10.34, 10.56, 10.14, 12.17, 13.1, 11.22],[11.53, 10.67, 10.42, 11.88, 11.77, 10.21]];

function getTopStocks(stocks, prices) {

    const list = new Map();
    let averages = [];

    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < prices[i].length; j++) {
            if(averages[j] == null){
                averages.push(prices[i][j])   
            }else{
                averages[j] += prices[i][j];
            }  
        }
    }

    for (let i = 0; i < averages.length; i++) {
        averages[i] = (averages[i]/averages.length).toFixed(6);  
    }

    for (let i = 0; i < stocks.length; i++) {
        list.set(averages[i], stocks[i]);
    }

    
    let swap = true;
    while(swap) {
        swap = false;
        for (let i = 0; i < averages.length; i++) {
            if (Number(averages[i]) > Number(averages[i + 1])) {
                [averages[i], averages[i + 1]] = [averages[i + 1], averages[i]]
                swap = true;
            }
        }
    }

    return [list.get(averages[averages.length-1]),list.get(averages[averages.length-2]),list.get(averages[averages.length-3])];
}

console.log(getTopStocks(stocks, prices));