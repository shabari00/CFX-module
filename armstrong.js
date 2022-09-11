/*
Mean
Given the marks of n students, calculate the mean.

Note: If the result is a decimal Value, print it's floor value.

Input
First line contains an integer, denoting n.

Second line contains n space seperated integers, denoting the marks.

Output
One Integer, denoting the mean of the marks.

Example
Input:

4
56 67 30 82
Output:

58
Explanation:

56+67+30+82 = 235
Mean = 235/4 = 58.75
floor(58.75) is 58
So, the Output is 58.
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let armstrong_num = readLine()
let split_num = armstrong_num.split("");
let sum_of_cubes = 0;
for(i=0; i<split_num.length; i++)
{
    let x = parseInt(split_num[i]);
    sum_of_cubes = x*x*x + sum_of_cubes;
}
if(parseInt(armstrong_num) === sum_of_cubes)
    console.log("Yes");
else
    console.log("No");