/*

A B C
A B
A

*/

const letters = ["A", "B", "C", "D", "E", "F", "G"];

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= n - i; j++) {
      row += String.fromCharCode(65 + j) + " ";;
    }
    console.log(row);
  }
};

printPattern(3);
