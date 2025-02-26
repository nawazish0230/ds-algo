/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) { // j <= i
      row += `${j + 1} `;
    }
    console.log(row);
  }
};

printPattern(5);
