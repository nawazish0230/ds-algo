/*

*    *
**  **
******
**  **
*    *

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // top-left stars
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    // top spaces
    for (let j = 0; j < (n - i - 1) * 2; j++) {
      row += " ";
    }
    // top-right stars
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = 0; i < n - 1; i++) {
    let row = "";
    // bottom-left stars
    // for (let j = 0; j < n / 2 - i - 1; j++) {
    for (let j = n - 2; j >= i; j--) {
      row += "*";
    }
    // top spaces
    for (let j = 0; j < 2 * (i + 1); j++) {
      row += " ";
    }
    // top-right stars
    for (let j = n - 2; j >= i; j--) {
      row += "*";
    }
    console.log(row);
  }
};

printPattern(6);
