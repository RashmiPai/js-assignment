/* Take a number from the user and write a function to checks whether the number is even or odd. Assign the result to variable and
log that variable in the console */
let n = Number(prompt("Enter a number")); 
// A variable 'n' is assigned with the value entered by the user , using propmt modal box in js.
console.log("The enetered number is: "+n);
if (n%2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}