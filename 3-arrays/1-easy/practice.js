const leftRotate = (arr) => {
  let ans = []
  for (let i = 1; i < arr.length; i++) {
    ans[i - 1] = arr[i];
  }
  ans.push(arr[0]);
  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }
  console.log(arr);
};

leftRotate([1, 2, 3, 4, 5]);
