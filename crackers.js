/*Crackers
Kumar has decided to distribute N Crackers to K users of as evenly as possible. 
When all the crackers are distributed, find the minimum possible (absolute) difference between the 
largest number of crackers received by a user and the smallest number received by a user.

Input
Two space seperated Integers, denoting N, K respectively.

Output
One integer, denoting result.

Example
Input1:

7 3
Output1:

1
Explanation1:

When the users receive two, two and three crackers, respectively, the (absolute) difference 
between the largest number of crackers received by a user and the smallest number received by a user, 
is 1.
*/
let arr = readLine().split(" ");
let N = parseInt(arr[0]);
let K = parseInt(arr[1]);
if(N%K===0)
{
	console.log(0);
}
else{
	console.log(1);
}