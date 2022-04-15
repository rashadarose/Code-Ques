function miniMaxSum(arr) {
arr = arr.sort(function(a, b){return a-b})    
const reducer = (accumulator, curr) => accumulator + curr;
   
let max = arr.slice(1,5).reduce(reducer);
let min = arr.slice(0,4).reduce(reducer);  
console.log(min, max);
}


/*

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to 10^(-4) are acceptable.

Example
arr= [1,1,0, -1,-1];

There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000,1/5 = 0.200000 and . 
Results are printed as: 
0.400000 
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe arr[n].

Constraints

Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667*/


/*the function*/
function plusMinus(arr) {
    let resultPos = arr.filter(checkPos);
    let resultNeg = arr.filter(checkNeg);
   let cnt = 0;
    function checkPos(num) {
     return num >= 1;
    }
     function checkNeg(num) {
     return num <= -1;
    }
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === 0){
        cnt++;
       }
       
    }
   const resultZero = new Array(cnt).fill(0);
     
console.log((resultPos.length/arr.length).toFixed(6));
console.log((resultNeg.length/arr.length).toFixed(6));
console.log((resultZero.length/arr.length).toFixed(6));
//console.log(resultZero);
}

//Solved Code
/*
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 *//*

function plusMinus(arr) {
    let resultPos = arr.filter(checkPos);
    let resultNeg = arr.filter(checkNeg);
    let cnt = 0;
    function checkPos(num) {
     return num >= 1;
    }
     function checkNeg(num) {
     return num <= -1;
    }
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === 0){
        cnt++;
       }
       
    }
   const resultZero = new Array(cnt).fill(0);
     
console.log((resultPos.length/arr.length).toFixed(6));
console.log((resultNeg.length/arr.length).toFixed(6));
console.log((resultZero.length/arr.length).toFixed(6));
//console.log(resultZero);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}*/
