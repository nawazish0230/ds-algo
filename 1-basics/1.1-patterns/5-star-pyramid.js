/*

  *
 ***
*****

*/

/*
For eg: In the first row (i=0) there are 4 spaces, 1 star, then again 4 spaces. In the second row (i=1) there are 3 spaces, 
3 stars, then again 3 spaces so we can say that there are N-i-1 spaces, 2*i+1 stars, and then again N-i-1 spaces 
for each row where i is the row index. We thus simply run 3 inner loops first for printing the spaces, then the stars, 
and then the spaces again.
*/
const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    // space
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    // star
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    // space
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
};

printPattern(3);
