/*
Multiple
You are given a positive integer N. Find the minimum positive integer divisible by both 2 and N.

Constraints
1 <= N <= 109
Input
One Integer, denoting N.

Output
One Integer, denoting the minimum positive integer divisible by both 2 and N.

Example
Input1:

3
Output1:

6
Explanation1:

6 is divisible by both 2 and 3. Also, there is no positive integer less than 6 that is divisible
 by both 2 and 3. Thus, the answer is 6.
Input2:

999999999
Output2:

1999999998
*/
let n = parseInt(readLine());
for (let i = n ; ; i++) {
  if (n == 0) {
    console.log(2);
    break
  } else if (i % n === 0 && i % 2 === 0) {
    console.log(i);
    break;
  }
}