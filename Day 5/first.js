/* Write a program which does the following things:
1. Takes a positive number from the user.
2. Makes an array of numbers till the number given by user.
3. Use higher order function to filter the odd numbers.
4. Generate and array of the cubes of the filtered numbers. */

let pnum=[];
let n;
let len = Number(prompt("Number of elements in the array")); // array length 
while(len != 0) {
    n = Number(prompt("Enter a positive number")); // only positive numbers
    if(n >= 0) {
        pnum.push(n); // if number is positive, it is pushed in the array
    } else {
        continue; // else continue
    }
    len--;
}

// Makes an array of positive numbers.
console.log(`The positive numbers array from the user : ${pnum}`);

// To filter odd numbers.
let odd = pnum.filter(ele=>ele%2!==0); // usinf filter function
console.log(`Odd Numbers : ${odd}`);

// Array of the cubes of the filtered numbers.
let oddCubes = pnum.filter(ele=>ele%2!==0).map(ele=>ele**3); // using filter and map function
console.log(`Array of cubes : ${oddCubes}`);