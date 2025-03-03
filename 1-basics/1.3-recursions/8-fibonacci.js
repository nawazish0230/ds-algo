/*
Q: Print Fibonacci Series up to Nth term

Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples:

Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6

Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)

*/

// 1. Using Multiple recusrion calls
const findFibonacci = (n) => {
  if (n <= 1) return n;
  const last = findFibonacci(n - 1);
  const sLast = findFibonacci(n - 2);
  // console.log(last + sLast);
  return last + sLast;
};

/*
                  fn(4)
            fn(3)           fn(2)
      fn(2)     fn(1)    fn(1)  fn(0)
    fn(1) fn(0)
*/

// T.C -> 2^n (as for every one we are calling 2 function)
// as it not exactly 2^n but its exponential in nature as 9 times it call actually but by formala it is 16 times

// console.log(findFibonacci(4));


// 2. using normal function (naive approach)
const findFibonacci2 = (n) => {
  if (n === 0) {
    console.log(0);
  } else if (n === 1) {
    console.log(0, 1);
  } else {
    let a = 0,
      b = 1;
    let result = `${a} ${b}`;

    for (let i = 2; i <= n; i++) {
      const c = a + b;
      result += ` ${c}`;
      a = b;
      b = c;
    }

    console.log(`The Fibonacci Series up to ${n}th term:`);
    console.log(result);
  }
};
// findFibonacci2(4)

// 3. Space optimized approach
const fibonacciSeries3 = (n) => {
  if (n === 0) {
    console.log(`The Fibonacci Series up to ${n}th term:`);
    console.log(0);
  } else {
    let secondLast = 0; // (i-2)th term
    let last = 1; // (i-1)th term
    console.log(`The Fibonacci Series up to ${n}th term:`);
    let series = [secondLast, last];

    for (let i = 2; i <= n; i++) {
      let cur = last + secondLast;
      secondLast = last;
      last = cur;
      series.push(cur);
    }
    console.log(series.join(" "));
  }
};

fibonacciSeries3(5);

