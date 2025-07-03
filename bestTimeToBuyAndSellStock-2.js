// My Mistake: My code was correct but it took 0(n^2) which led to a Time Limit Exceded Error. For which I didn't think hard enough for a constant time solution.


// Accepted Solution (AI)

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // update the minimum buying price
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice); // update the max profit
        }
    }

    return maxProfit;
};

// My solution in order of n^2

/*

const prices = [7,6,4,3,1]
let profit = 0

for(let i =0; i < prices.length; i++){

    for(let j = i + 1; j < prices.length; j++){
        if (prices[i] < prices[j] && prices[j] - prices[i] > profit) {
            profit = prices[j] - prices[i]
        }
    }
}


console.log(profit);

*/