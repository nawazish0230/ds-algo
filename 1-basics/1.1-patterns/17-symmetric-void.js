/*

******
**  **
*    *
*    *
**  **
******

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // left-top star
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    // top (*2) space
    for (let j = 0; j < i * 2; j++) {
      row += " ";
    }
    // right-top star
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    // left-bottom star
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    // bottom (*2) space
    for (let j = 0; j <= n - (i * 2); j++) {
      row += " ";
    }
    // right-bottom star
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printPattern(3);
