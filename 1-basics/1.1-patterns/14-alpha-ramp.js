/*

A
B B
C C C

*/

const printPattern = (n) => {
  for (let i = 0; i < n + 1; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) { // j <= i
      row += String.fromCharCode(65 + i) + " ";
    }
    console.log(row);
  }
};

printPattern(5);
