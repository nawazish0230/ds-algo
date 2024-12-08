/*

  A  
 ABA 
ABCBA

*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // spaces
    for (let j = i + 1; j < n; j++) {
      row += " ";
    }

    /*
    In this 
    first loop ->   
      A  
     AB
    ABC

    second loop ->   
      A  
     BA
    */

    // letter
    for (let j = 0; j < i + 1; j++) {
      row += String.fromCharCode(65 + j) + "";
    }
    // letter
    for (let j = 1; j < i + 1; j++) {
      row += String.fromCharCode(65 + i - j) + "";
    }

    console.log(row);
  }
};

printPattern(3);
