/*

Check if the given String is Palindrome or not

Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome 
if the reverse of the string is the same as the string.

Examples:

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.

*/

// 1. using parametrized way | functional recursive function
// In this approach we are comparing 1st index with last index and 1st is increasing and last is decreasing
const checkPalindrome = (str, i) => {
  const n = str.length;
  if (i > str.length / 2) {
    console.log(true);
    return;
  }
  if (str[i] !== str[n - 1 - i]) {
    console.log(false);
    return false;
  }
  checkPalindrome(str, i + 1);
};
// T.C -> O(N) { Precisely, O(N/2) as we compare the elements N/2 times and swap them}.
// S.C -> O(1)
checkPalindrome("madams", 0);

// 2. without parametrized way
let i = 0;
const checkPalindrome2 = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const sLength = s.length;
  if (i > s.length / 2) {
    return true;
  }
  if (s[i] !== s[sLength - 1 - i]) {
    return false;
  }
  i++;
  return checkPalindrome2(s);
};

// console.log(checkPalindrome2("madam"));
// console.log(checkPalindrome2("A man, a plan, a canal: Panama"));
// console.log(checkPalindrome2("race a car"));
// console.log(checkPalindrome2("ab"));

// using two pointer done by self
const checkPalindrome3 = (strArray, l, r) => {
  if (l >= r) return;
  [strArray[l], strArray[r]] = [strArray[r], strArray[l]];
  checkPalindrome3(strArray, l + 1, r - 1);
};

const val = "ABCDCBA";
const strArray = Array.from(val);
checkPalindrome3(strArray, 0, strArray.length - 1);
const reversedStr = strArray.join("");
console.log(reversedStr === val, strArray, reversedStr);
