/*

Stock Buy And Sell

Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to 
sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation:
Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.

Note: That buying on day 2 and selling on day 1  is not allowed because you must buy before  you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are  done and the max profit = 0.

*/

/*
1. Bruteforce Approach | using nestedloop
- take i and run j upto last and if there is someone greater than 7 (i.e 1st index) then store the value
- arr[i] - arr[j] whoever is max is the value
*/

const stockBuySell1 = (arr) => {
  // this solution didn't worked for some usecase
  // let buy = Infinity,
  //   buyIndex = -1;
  // let sell = -Infinity;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < buy) {
  //     buy = arr[i];
  //     buyIndex = i;
  //   }
  // }

  // for (let i = buyIndex; i < arr.length; i++) {
  //   if (arr[i] > sell) {
  //     sell = arr[i];
  //   }
  // }

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const val = arr[j] - arr[i];
      max = Math.max(max, val);
    }
  }
  console.log(max);

  // console.log(sell - buy, buy, buyIndex, sell);
};

// stockBuySell1([7, 1, 5, 3, 6, 4]);
// stockBuySell1([2, 4, 1]);

const stockBuySell2 = (arr) => {
  let min = Infinity,
    profit = 0;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    const cost = arr[i] - min;
    if (cost > profit) {
      profit = cost;
    }
    // profit = Math.max(profit, arr[i] - min);
  }
  console.log(min, profit);
};
stockBuySell2([7, 1, 5, 3, 6, 4]);
