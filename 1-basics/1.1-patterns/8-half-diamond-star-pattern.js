/*

  *  
  **
  ***  
  **
  *

*/

const printPattern = (n) => {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
};

// another approach
const printPattern1 = (n) => {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";
    let stars = i
    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printPattern1(3);
