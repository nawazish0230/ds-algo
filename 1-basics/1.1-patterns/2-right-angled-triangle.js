/*

* 
* * 
* * *
* * * *
* * * * *
* * * * * *

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) { // j <= i
      row += "* ";
    }
    console.log(row);
  }
};

printPattern(3);
