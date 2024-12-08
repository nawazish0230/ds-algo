/*

  *  
 ***
***** 
*****  
 ***
  *   

*/

// note  -> main we need to check logic in mid done (j < n - i - 1) & (j < 2 * i + 1)

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      row += "*";
    }
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    console.log(row);
  }
};
printPattern(3);
