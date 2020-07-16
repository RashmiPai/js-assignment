/* Write a program to take marks as input from the user grade him accordingly. Use conditional statements. Also the same code using
 switch or ternary. */

 
 let marks = Number(prompt("Enter the marks")); 
//  The variable 'marks' is assigned the value entered by the user.
console.log(`Marks : ${marks}`); // Displays marks.


// Using conditional statement if elseif else
let grade = ""; 
// if(marks<0 || marks>100){
//     console.log("Wrong entry");   
// } else if(marks<50) {
//     grade = "E";
// } else if(marks>=50 && marks<60) {
//     grade = "D";
// } else if(marks>=60 && marks<70) {
//     grade = "C";
// } else if(marks>=70 && marks<80) {
//     grade = "B";
// } else if(marks>=80 && marks<90) {
//     grade = "A";
// } else {
//     grade = "A+";
// }



// Using Switch statement
let c = parseInt(marks/10);
switch (c) {
    case 10:
    case 9:
        grade = "A+";
        break;
    case 8:
        grade = "A";
        break;
    case 7:
        grade = "B";
        break;
    case 6:
        grade = "C";
        break;
    case 5:
        grade = "D";
        break;
    default:
        grade = "E";
}

console.log(`Grade : ${grade}`); // Displays the grade.