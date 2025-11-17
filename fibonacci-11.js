// Better approach is to use memorization or a bottom up dp

// Approach with memorization o(n)
var fib = function(n) {
    const memo = {};

    const helper = (n) => {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = helper(n - 1) + helper(n - 2);
        return memo[n];
    }

    return helper(n);
};


/** Bottom up DP o(1)
 * 
 * var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

 */

// My Solution o(2^n)


/************ 

const n = 2
let ans = [];

const fibo = (n) => {
  if (n <= 2) {
    return n;
  } else {
    let n1 = fibo(n - 1);
    let n2 = fibo(n - 2);

    ans.push(n1)
    return n1 + n2;
  }
};

console.log(fibo(n));
console.log(ans);

*/