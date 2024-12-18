/*

Input:
abcdabehf
5
a
g
h
b
c

Output: 
2
0
1
2
1

*/

const findOccurence = (char, keys) => {
  const obj = new Map();
  for (let i = 0; i < char.length; i++) {
    if (!obj.has(char[i])) {
      obj.set(char[i], 1);
    } else {
      obj.set(char[i], obj.get(char[i]) + 1);
    }
  }

  const keysObj = new Map();
  for (let j = 0; j < keys.length; j++) {
    if (obj.get(keys[j])) {
      keysObj.set(keys[j], obj.get(keys[j]));
    } else {
      keysObj.set(keys[j], 0);
    }
  }
  console.log(keysObj);
};

findOccurence("abcdabehf", "aghbc");