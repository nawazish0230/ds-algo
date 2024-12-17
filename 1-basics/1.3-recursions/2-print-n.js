// Q.1: Print 1 to N using Recursion

const printN = (i, n) => {
  if (i > n) return;
  console.log(i);
  printN(i + 1, n);
};

// printN(1, 5);


/* Q.2: Print 1 to N by using backtracking

Things to keep in mind
- we can't use printN(i + 1, n); +1
- need need to add console after func. call

*/


const printBackTrackN = (i, n) => {
  if (i < 1) return;
  printBackTrackN(i - 1, n);
  console.log(i);
};

printBackTrackN(5, 5);