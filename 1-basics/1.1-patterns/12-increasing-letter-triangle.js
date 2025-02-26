/*

A
A B
A B C
A B C D
A B C D E
A B C D E F

*/

// const letters = ["A", "B", "C", "D", "E", "F", "G"];

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      // row += letters[j - 1];
      row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row);
  }
};

const printPattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    let code = 64;
    for (let j = 0; j <= i; j++) {
      code++;
      row += String.fromCharCode(code);
    }
    console.log(row);
  }
};

printPattern1(6);
