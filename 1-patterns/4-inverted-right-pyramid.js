/*

* * * *
* * *
* *
*

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j > i; j--) {
      row += `* `;
    }
    console.log(row);
  }
};

printPattern(5);
2, 105;