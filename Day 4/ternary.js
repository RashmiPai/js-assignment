/* Rewrite the function using '?' or '||'.
Write a loop which prompts for a number greater than 100. If the visitor enters another number - ask them to input again.
The loop must ask for a number until either the vistor enters a number greater than 100 or cancels the input/enters the empty line.
Here we can assume the visitor only inputs number. There is no need to implement a special handling for for a numeric input in this task. */

isGreater = true; 
while(isGreater === true) {
    let num;
    num = prompt("Enter a number greater than 100 :",0);
    if(num >= 100) {
        // if number is greater than 100 then it displays the number and breaks out of the while loop.
        console.log(`NUMBER GREATER THAN 100 : ${num}`);
        isGreater = false;
    }
}