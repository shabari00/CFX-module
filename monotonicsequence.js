/*
Monotonic Sequence
Given a sequence of integers, check if it is monotonic or not. A sequence is called monotonic 
if it is either non-increasing or non-decreasing.

Input
First line contains an integer n, denoting the number of elements in the sequence.

Next n lines contain one integer each..

Output
1 if the given sequence is monotonic.

0 if the given sequence is not monotonic.

Example
Input:

5
3
12
34
34
56
Output:

1
*/
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine());
}
let flag = 1;
if (arr[0] <= arr[1]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
} else {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      continue;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag == 0) {
    console.log(0);
  } else {
    console.log(1);
  }
}