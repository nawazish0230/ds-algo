/*

C
B C
A B C


*/

// REVISIT: understand it
const printPattern = (n) => {
  for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (let j = i; j < n; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row.trim());
  }
};

printPattern(5);
