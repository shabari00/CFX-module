/*
Find if given number is prime
Find if the given integer is prime number.

Input
FirstLine contains an interger specifying no. of test cases. Each line contains 
integers specifying value of number in each test case.

Output
Yes if number is prime. No is not for each testcase.

Example
Input: 3

2

4

5

Output: Yes

No

Yes
*/
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let num = parseInt(readLine());
  let mark = 0;
  for (let j = 2; j < num; j++) {
    if (num % 2 === 0) {
      mark = 1;
      break;
    }
  }
  if (mark == 1) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}