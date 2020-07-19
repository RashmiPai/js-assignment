/* Replace Function Expressions with arrow functions in the code below: */

let ask = () => {
    let a = confirm("Do you agree?");
    a? alert("You agreed.") : alert("You canceled the execution.");
}
ask();