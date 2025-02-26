1. Right angle triangle - inner loop (j <= i)

```
 for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
 }
```

```
*
* *
* * *
* * * *
```

2. Inverted right angle triangle

```
* * * *
* * *
* *
*
```

```
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n; j > i; j--) {  // let j = 0; j < n - i; j++
      row += `* `;
    }
  }
```

3. Star pyramid

```
  *
 ***
*****
```

```
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
```

4. for middle space - inner loop (j <= 2 \* (n - i - 1))

```
*    *
**  **
******
```
