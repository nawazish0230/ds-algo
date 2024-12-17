# Recursion - Understand Recursion by printing something N times [link](https://takeuforward.org/recursion/introduction-to-recursion-understand-recursion-by-printing-something-n-times/)

## 1. What is Recursion?

- It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled.
- Let’s understand recursion with the help of an illustration :

```
fn(){
  fn(){
    fn(){
      ....
    }
  }
}
```

- As we can see in the above image, a function is calling the same function inside its body. Since there is no condition to stop the recursive calls, the calls will run indefinitely until the stack runs out of memory ( stack overflow ).

## 2. What is Stack Overflow in Recursion?

- Whenever recursion calls are executed, they’re simultaneously stored in a **recursion stack** where they wait for the completion of the recursive function. A recursive function can only be completed if a base condition is fulfilled and the control returns to the parent function.
- But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error.
- But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error.

```
   f() x
 | f() |
 | f() |
 | f() |
 |_____|
```

## 3. Base Condition

- It is the condition that is written in a recursive function in order for it to get completed and not to run infinitely. After encountering the base condition, the function terminates and returns back to its parent function simultaneously.
- To get a better understanding of how the base condition is an integral part of recursive functions, let us see an example below
- Let’s say we have to print integers starting from 0 till 2 only, this will be how the pseudocode for it will look like

```
int count = 0;
void func(){

   if(count == 3 ) return;
   print(count);
   count++;
   func();

}

main()
{

  print();

}
```
- According to this pseudocode, the function will increment and print the value of count and then return when the base condition becomes true i.e, it will only print 0,1,2 and 3 and then execution gets completed.

## 4. Recursive Tree

- A recursive tree is basically a representative form of recursion which depicts how functions are called and returned as a series of events happening consecutively. It is a pictorial description of the process of recursion as illustrated below : 

```

f()
↓⭡
f()
↓⭡
f()
↓⭡

```
- When a recursive call gets completed, the control returns back to its parent function which is then further executed until the last function waiting in the recursive stack returns.