const removeDuplicate = (arr) => {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  console.log(i + 1, arr);
};

removeDuplicate([1, 2, 2, 2, 3, 3]);
 