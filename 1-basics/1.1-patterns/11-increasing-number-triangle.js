/*

1
2 3
4 5 6

*/

const printPattern = (n) => {
  let num = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += `  ${num} `;
      num++;
    }
    console.log(row);
  }
};

printPattern(3);
