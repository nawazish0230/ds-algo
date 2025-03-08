1. Selection Sort
- we select minimum and swap it with particular index
- run two nested for loop and swap the value
- outer - i = 0 -> i < n - 2 | inner j = i -> j < n - 1
- check with arr[j] < arr[min]

2. Bubble Sort
- push the max to the last by adjacent swaps
- run two nested for loop and swap the value
- outer - i = n - 1 -> i >= 1 | inner j = 0 -> j <= i - 1
- check with arr[j] > arr[j + 1]

3. Insertion Sort
- Takes an element and place it in correct order
- run two nested for loop and and inner while loop swap the value
- if its not sorted then swap value from right to left until it is possible
- outer loop - i = 0 -> i <= n - 1 | inner while loop - j > 0 && arr[j - 1] > arr[j]

4. Merge Sort
- 