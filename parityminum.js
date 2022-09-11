/*
Parity Minimum
Description
Given a sequence of positive integers, let S be the sum of the digits of the minimum element in the sequence.
If S is odd, the parity is 0, otherwise parity is 1.

Input
First line contains a positive integer n, denoting the number of elements in the sequence.
Next n lines contain one integer each, denoting the sequence.
Output
Either 0 or 1

Sample input
4
34
23
12
24
Sample output
0
Explanation
First line is 4, i.e. 4 elements in the array.
Minimum element of the array is 12. Sum of digits of 12 is 3. As it is odd, the parity is 0.
Sample input
2
33
44
Sample output
1
Explanation
First line is 2, i.e. 2 elements in the array.
Minimum element of the array is 33. Sum of digits of 33 is 6 . As it is even, the parity is 1.
*/
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine()); //34 23 12 24
}
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
let sum = 0;
while (min != 0) {
  let rem = min % 10;
  sum = sum + rem;
  min = parseInt(min / 10);
}
if (sum % 2 == 0) {
  console.log(1);
} else console.log(0);