/*
reverse integer
Given an integer, reverse digits of an integer

Input
1 line containing the integer to reverse

Output
1 line containing the reversed integer

Example
Input: 123

Output: 321

Input: 120

Output: 21 because starting 0 can be removed

Input: -123

Output: -321
*/
let n = parseInt(readLine());
let revnum = 0;
while(n)
{
	revnum = revnum*10 + n%10;
	n = parseInt(n/10);
}
console.log(revnum);