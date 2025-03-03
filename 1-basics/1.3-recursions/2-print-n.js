// Q.1: Print 1 to N using Recursion

const printN = (i, n) => {
  if (i > n) return;
  console.log(i);
  printN(i + 1, n);
};
// T.C -> O(n)
// printN(1, 5);

/* Q.2: Print 1 to N  */

const print1ToN = (i, n) => {
  if (i > n) return;
  console.log(i);
  print1ToN(i + 1, n);
};

// printNTo1(1, 5);

// Q.3 print N to 1
// const printNTo1 = (i, n) => {
//   if (i > n) return;
//   console.log(n - i + 1);
//   printNTo1(i + 1, n);
// };
// printNTo1(1, 5);

// Q.3 print N to 1
const printNTo1 = (i, n) => {
  if (i < 1) return;
  console.log(i);
  printNTo1(i - 1, n);
};
// printNTo1(5, 5);

/* Q.4: Print 1 to N by using backtracking (not allowed to used +1)

Things to keep in mind
- we can't use printN(i + 1, n); +1
- need need to add console after func. call

*/

const printBackTrack1ToN = (i, n) => {
  if (i < 1) return;
  printBackTrack1ToN(i - 1, n);
  console.log(i);
};

printBackTrack1ToN(5, 5);
