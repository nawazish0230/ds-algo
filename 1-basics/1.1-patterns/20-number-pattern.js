/*

Input : N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

*/

// 1. REVISIT: didn't understood anything
// 2. REVISIT: approach understood but code did't understood fully
const printPattern = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i,
        left = j,
        right = 2 * n - 2 - j,
        down = 2 * n - 2 - i;

      const val = n - Math.min(Math.min(top, down), Math.min(left, right));
      row += val + " ";
    }
    console.log(row);
  }
};

printPattern(3);
