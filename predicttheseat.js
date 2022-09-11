/*
Predict the seat
A typical sleeper coach in Indian Railways contains 72 berths. 
The coach is divided into different blocks. Each block has the following pattern of berths: Lower - 
Middle - Upper - Lower - Middle - Upper - Side Lower - Side Upper. Berth number 1 is Lower, berth number 2 is Middle and so on. Write a program that predicts the berth type from the berth number.

Input
First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. 
Each of the n lines contains two space separated positive integers c and b. c is the total number of 
berths in a coach and b is a berth number.

Output
n lines containing the type of berth of the corresponding test case. Berth type is defined as follows.

L for Lower
M for Middle
U for Upper
SL for Side Lower
SU for Side Upper
Invalid for invalid berth number
Example
Input:

3
72 8
72 42
56 28
Output:

SU
M
L
First line is 3, i.e. 3 test case.

First test case is 72 8. There are 72 berths and we are querying for berth number 8, 
which is a Side Upper. So we should print SU.

Second test case is 72 42. There are 72 berths and we are querying for berth number 42, 
which is a Middle. So we should print M.

Third test case is 56 28. There are 56 berths and we are querying for berth number 28, 
which is a Lower. So we should print L.
*/
let n = parseInt(readLine());
for(let i=0;i<n;i++){
    let x = readLine().split(" ");
    let c = parseInt(x[0]);
    let b = parseInt(x[1]);
    if (b>c){
        console.log("Invalid");
    }
    else{
     let z = b%8;
        if(z==1 || z==4) console.log("L");
        else if (z==2 || z==5) console.log("M");
        else if (z==3 || z==6) console.log("U");
        else if (z==7) console.log("SL");
        else if (z==0) console.log("SU");
    }
}