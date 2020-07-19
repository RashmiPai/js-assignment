/* Make a calculator in javascript which can do operations such as Addition , Subtraction , Multiplication , Division , Square root 
, Percentage. */

console.log("JS CALCULATOR");
// Calculator operations menu.
console.log("Operation you want to perform : \n 1:Addition \n 2:Subtraction \n 3:Multiplication \n 4:Division \n 5:Square root \n 6:Percentage");
let ch = Number(prompt("Enter your choice: "));
let result;
// Two numbers.
let n1 = Number(prompt("Enter the first number : ",0));
console.log(n1);
let n2 = Number(prompt("Enter the second number : ",0));
switch (ch) {
    case 1:
        console.log("+");
        result = n1 + n2; // for addition
        break;
    case 2:
        console.log("-");
        result = n1 - n2; // for subtraction
        break;
    case 3:
        console.log("*");
        result = n1 * n2; // for multiplication
        break;
    case 4:
        console.log("/");
        result = n1 / n2; // for division
        break;
    case 5:
        let num = Number(prompt("Do you want square root of first or second number? 1 or 2")); // for square root
        if(num==1) {
            result = Math.sqrt(n1);
        } else {
            result = Math.sqrt(n2);
        }
        break;
    case 6:
        console.log("%")
        result = n1 % n2; // for modulus/percentage
        break;
    default:
        console.log("Wrong Choice");
        break;
}
console.log(n2);
console.log(result); // Displaying the final result.