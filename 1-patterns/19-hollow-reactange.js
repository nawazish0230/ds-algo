/*

Input N = 6
Result:   
******
*    *
*    *
*    *
*    *
******

*/

const printPattern = (n) => {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    // for (let j = 0; j < n; j++) {
    //   j === 0 || j === n - 1 ? (row += "*") : (row += "a");
    // }
    console.log(row);
  }
};

printPattern(6);
