/*

C
B C
A B C


*/

// REVISIT: not able to print proper pattern
const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + n - j - 1) + "";
    }
    console.log(row);
  }
};

printPattern(3);
