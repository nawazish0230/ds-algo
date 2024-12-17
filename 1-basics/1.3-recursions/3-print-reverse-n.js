// Q.1: Print N to 1 using Recursion

const printReverseN = (i, n) => {
  if (i < 1) return;
  console.log(i);
  printReverseN(i - 1, n);
};

// printReverseN(5, 5);

/* Q.2: Print N to 1 by using backtracking

Things to keep in mind
- we can't use fn(i - 1, n); -1
- need need to add console after func. call

*/

const reverseNBacktracking = (i, n) => {
  if (i > n) return;
  reverseNBacktracking(i + 1, n);
  console.log(i);
};

reverseNBacktracking(1, 5);
