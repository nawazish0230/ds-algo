/*

1
01
101
0101
10101
010101

*/

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let start = i % 2 === 0 ? 1 : 0;
    for (let j = 1; j <= i; j++) {
      start = 1 - start;
      row += start;
    }
    console.log(row);
  }
};

printPattern(5);
