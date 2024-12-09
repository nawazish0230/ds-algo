/*
    i denotes rows
    j denotes column
    

    columns ----->
    r  * * * * 
    o  * * * * 
    w  * * * * 
    s  * * * * 
    |  * * * * 
    v  * * * * 
*/

const createPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

createPattern(4);
