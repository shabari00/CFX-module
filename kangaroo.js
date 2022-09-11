/*
Kangaroo
You have two kangaroos. They are standing on a number line, at maybe different positions. You want to take a snapshot such that both the kangaroo should be in the snap. (Assume this is possible only if both the kangaroos are at same x-coordinates at a particular time.)

The first kangaroo starts from location x1 and moves at the rate of v1 meters per jump.
The second kangaroo starts from location x2 and moves at the rate of v2 meters per jump.
One jump takes 1 second for both of them.
Both of them start at same time.
If it is possible to take such snapshot, print YES otherwise print NO.

For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so our answer is YES.

Input Format
First line denotes the number of testcases. For each testcase:

A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.
Constraints:
0 ≤ x1 < x2 ≤ 10000
1 ≤ v1 ≤ 10000
1 ≤ v2 ≤ 10000
Output Format
Print YES if they can land on the same location at the same time; otherwise, print NO.

Sample Input
2
0 3 4 2
0 2 5 3
Sample Output
YES
NO
Explanation

For the first testcase, both of them meet at x = 12, after 4 steps each.
For the second testcase, they can't be at same location after any number of  steps.
*/
let n= parseInt(readLine())
for(let i=0;i<n;i++)
{
    let arr=readLine().split(' ').map(Number)
    let x1=arr[0],v1=arr[1],x2=arr[2],v2=arr[3]
    if (v2 > v1 && x2 > x1) {
    console.log("NO");
  } else if((x2-x1)%(v1-v2)===0){
    console.log("YES");
  }
  else{
    console.log('NO')
  }
}