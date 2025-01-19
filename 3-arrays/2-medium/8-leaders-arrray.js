/*
Leaders in an Array

Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all
of the elements on its right side in the array.

Example 1:
Input:
arr = [4, 7, 1, 0]
Output : 7 1 0
Explanation: Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

Example 2:
Input: arr = [10, 22, 12, 3, 0, 6]
Output: 22 12 6
Explanation: 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), 
also 22 is greater than 12, 3, 0, 6.

*/

/*
1. Bruteforce | done by self | not working initially all usecase
-  similar to optimal one but missed minor things refer below
- missed = condition 
const leadersArr = (arr) => {
  const last = arr.length - 1;
  const leader = arr[last];
  let max = 0;
  const finalArr = [];

  for (let i = last; i > 0; i--) { (missed =)
    if (arr[i] > leader && (arr[i] >= max || max === 0)) { (missed =)
      finalArr.push(arr[i]);
      max = arr[i];
    }
  }
  console.log(arr.reverse());
};

leadersArr([16, 17, 4, 3, 5, 2]);
*/

/*
2. Bruteforce
- run two nested loop
- inner loop wala value me yani j me agr koi bda nikl gya to to i wala leader ne hoga
- leader hone ke lie hmesha right wala(inner value) value small hona chahiye
- yhan hmne reverse check kia hai agr right wala(inner) bda hai mtlb wo leader ne hoskta hai
*/

const leadersArr1 = (arr) => {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
};
// T.C -> O(N^2)
// S.C -> O(N)
// leadersArr1([16, 17, 4, 3, 5, 2]);

/*
2. Optimal solution
*/

const leadersArr2 = (arr) => {
  let max = 0;
  const finalArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      finalArr.push(arr[i]);
      max = arr[i];
    }
  }

  console.log(finalArr.reverse());
};

leadersArr2([10, 22, 12, 3, 0, 6]);
