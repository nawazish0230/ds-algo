## Approach of problem solving

1. nested for loop using iteration
- if sum of sub array -> use three nested loop, last one to calculate it

2. using hashing/object
- if there is count and neeed to track
- store the occurence of value
- store in object and try to find what we want, it would always O(1)

3. using two pointer approach
- remove duplicate from sorted array

## List of Algorithm

1. Kadane's algorithm
- Maximum Subarray Sum in an Array

2. dutch flag algorithm
- Sort an array of 0s, 1s and 2s

3. Moore's voting algorithm
- Find the Majority Element that occurs more than N/2 times
- Find the Majority Element that occurs more than N/3 times


Note:- 
- Two pointer and binary search only applies on sorted or array we can sort
- We can't use above those where we need to maintain the order like subarray and subsequences as we can't them, it will distort the order

leetcode rank - 2,972,719 -> 2,773,591(23) -> 2,715,667(26)
