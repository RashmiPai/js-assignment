/* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3 , "buzz" at multiples of 5 and "fizzbuzz" at 
multiples of 3 and 5. */

// Loop iterating upto 100.
for(let i=1; i<=100; i++) {
    if(i%3==0 && i%5==0) {
        console.log("FizzBuzz"); // Numbers is divisible by both 3 and 5. 
    } else if(i%3==0) {
        console.log("Fizz"); // Numbers is divisible by only 3.
    } else if(i%5==0) {
        console.log("Buzz"); // Numbers is divisible by only 5.
    } else {
        console.log(i); // Numbers that are not divisible nethier by 3 nor by 5.
    }
}