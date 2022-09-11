/*
Maximum Product
You are given a sequence of integers. Find the maximum product that can be obtained from 
multiplying adjacent integers in the sequence.

Input
First line contains n, indicating the number of elements in the sequence.

This is followed by n lines each containing an integer.

Output
One integer indicating the maximum product achievable from adjacent elements of the sequence.

Example
Input:

4

1

3

4

10

Output:

40

Explination:

First line of input contains 4 indicating there are 4 elements in the sequence

The next four lines contain the elements of the sequence: 1, 3, 4, 10

The possible products we can obtains are as follows

1x3 = 3
3x4 = 12
4x10 = 40
where 40 is the maximum
*/
let n = parseInt(readLine());
let arr = [];
for(let i=0 ; i<n ; i++){
    arr[i] = parseInt(readLine());
}
for(let i=0 ; i<arr.length-1 ; i++){
    arr[i] = arr[i]*arr[i+1];
}
let max = arr[0];
for(let i=0 ; i<n-1 ; i++){
    if(arr[i]>max)
        max = arr[i];
}
console.log(max);