/*

* * * *
* * *
* *
*

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j > i; j--) { // let j = 0; j < n - i; j++
      row += `* `;
    }
    console.log(row);
  }
};

printPattern(5);
