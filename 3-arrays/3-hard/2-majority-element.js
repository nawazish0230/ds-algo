/*
Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times 
in the array. If no such element exists, return an empty vector.

Pre-requisite: Majority Element(>N/2 times)

Example 1:
Input Format : N = 5, array[] = {1,2,2,3,2}
Result : 2
Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, 
the count of 2 is greater than N/3 times. Hence, 2 is the answer.

Example 2:
Input Format: N = 6, array[] = {11,33,33,11,33,11}
Result: 11 33
Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, 
the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

*/

// 1. Bruteforce | Using nested loop | done half by self
const majorityElement1 = (arr) => {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    // selected element is arr[i], checking if arr[i] is not already a part of the answer
    // REVISIT: need to understand it clearly for list[0]
    if (list.length === 0 || list[0] !== arr[i]) {
      let count = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > Math.floor(arr.length / 3)) {
        list.push(arr[i]);
      }
      if (list.length == Math.floor(arr.length / 3)) break;
    }
  }
  console.log(list);
};
// majorityElement1([1, 2, 2, 3, 2]);
// majorityElement1([1, 1, 1, 3, 3, 2, 2, 2]);
// T.C -> O(N^2)

// 2.1 Better | Using object/hasmap | done by self | using two loops
const majorityElement2 = (arr) => {
  const map = new Map();
  let list = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  for (const [ele, value] of map) {
    if (value > Math.floor(arr.length / 3)) {
      list.push(ele);
    }
  }
  console.log(list);
};
// T.C -> O(2N)
// majorityElement2([1, 4, 4, 3, 4]);
// majorityElement2([1, 1, 1, 3, 3, 2, 2, 2]);

// 2.2 Better | Using object/hasmap | using single loops
const majorityElement3 = (arr) => {
  const map = new Map();
  let list = [];

  const mini = Math.floor(arr.length / 3);

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }

    /*
    // checking if arr[i] is the majority element and hasn't been added to the list yet
    if (map.get(arr[i]) === mini + 1) {
      list.push(arr[i]);
    }

    // Early exit: Stop once we've found enough majority elements
    if (list.length == Math.floor(arr.length / 3)) break;
    */

    // above two block is not working for some case [3, 2, 2, 2, 3], so using below solution
    if (map.get(nums[i]) === mini + 1 && !list.includes(nums[i])) {
      list.push(nums[i]);
    }
  }

  console.log(list);
};
// T.C -> O(N) + nlogN (for map)
// S.C -> O(N)
// majorityElement3([1, 4, 4, 3, 4]);
// majorityElement3([1, 1, 1, 3, 3, 2, 2, 2]);

// 3. Optimal | using mooore algorithm | refer majority element by N/2
const majorityElement4 = (arr) => {
  if (arr.length === 1) return arr;

  let ele1 = arr[0],
    ele2 = arr[0];
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count1 === 0 && arr[i] !== ele2) {
      count1 = 1;
      ele1 = arr[i];
    } else if (count2 === 0 && arr[i] !== ele1) {
      count2 = 1;
      ele2 = arr[i];
    } else if (ele1 === arr[i]) count1++;
    else if (ele2 === arr[i]) count2++;
    else {
      count1--, count2--;
    }
  }
  let result = [];
  (count1 = 0), (count2 = 0); //resetting count to 0
  for (let i = 0; i < arr.length; i++) {
    if (ele1 === arr[i]) count1++;
    if (ele2 === arr[i]) count2++;
  }

  let mini = Math.floor(arr.length / 3) + 1;
  if (count1 >= mini) result.push(ele1);
  if (count2 >= mini && ele2 !== ele1) result.push(ele2);

  console.log(result);
};
// T.C -> O(N) + O(N)
// majorityElement4([1, 2, 2, 3, 2]);
// majorityElement4([1, 1, 1, 3, 3, 2, 2, 2]);
// majorityElement4([2, 1, 1, 3, 1, 4, 5, 6]);
