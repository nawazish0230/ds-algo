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

const printPattern1 = (n) => {
  // first part is same as above
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    for (let j = 0; j < (n - i - 1) * 2; j++) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  // this is different appraoch than above
  for (let i = 0; i < n - 1; i++) {
    let row = "";
    for (let j = 1; j < n - i; j++) {
      row += "*";
    }
    for (let j = 0; j < 2 * (i + 1); j++) {
      row += " ";
    }
    for (let j = 1; j < n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

const printPattern2 = (n) => {
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    let row = "";
    if (i > n) stars = 2 * n - i;

    for (let j = 1; j <= stars; j++) {
      row += "*";
    }

    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    for (let j = 1; j <= stars; j++) {
      row += "*";
    }

    if (i < n) spaces -= 2;
    else spaces += 2;
    console.log(row);
  }
};

printPattern2(3);
