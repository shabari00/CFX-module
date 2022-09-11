/*
Clock
Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

Input
Two space seperated values denoting num1, num2 respectively.

Output
One integer, denoting the required result.

Example
Input1:

5 7
Output1:

12
Input2:

5 10
Output2:
3
*/
let n = readLine().split(" ");
let sum = 0;
for(let i=0; i<n.length; i++)
{
    let a = parseInt(n[i]);
	sum = sum + a;
}
while(sum>12)
{
	sum = sum-12;
}
console.log(sum);