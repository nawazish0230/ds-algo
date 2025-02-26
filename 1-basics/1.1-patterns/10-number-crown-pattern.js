/*

1    1
12  21
123321

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // numbers
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }
    // space
    for (let j = n; j >= 2 * i; j--) {
      row += " ";
    }
    // numbers
    for (let j = i + 1; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
};

const printPattern1 = (n) => {
  let space = 2 * (n - 1);

  for (let i = 0; i < n; i++) {
    let row = "";

    // number
    for (let j = 0; j <= i; j++) {
      row += j + 1;
    }

    // space
    for (let j = 0; j <= space; j++) {
      row += " ";
    }

    // number
    for (let j = i + 1; j >= 1; j--) {
      row += j;
    }

    space -= 2;
    console.log(row);
  }
};

printPattern1(3);
