/*
Palindrome Number
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward

Input
1 containing integer

Output
1 line containing either "True" or "False"

Example
Input: 121

Output: True

Input: 10

Output: False
*/
let num=parseInt(readLine())
let temp=num
let rev=0
while(num!=0)
{
    let rem=num%10
    rev=rev*10+rem
    num=parseInt(num/10)
}
if(temp==rev)
{
    console.log('True')
}
else console.log('False')