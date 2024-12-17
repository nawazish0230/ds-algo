// Print Name N times

// 1. With variable
let count = 1;
const printName1 = (n) => {
  if (n < count) {
    return;
  }
  console.log("Nawazish");
  count++;
  printName1(n);
};

// 1. Without variable
const printName2 = (i, n) => {
  if (i > n) {
    return;
  }
  console.log("Nawazish");
  printName2(i + 1, n);
};

printName1(5);

printName2(1, 5);
