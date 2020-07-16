// The different methods of strings.
let text = "The quick brown fox jumps over the wall"; //variable 'text' is assigned to a string
console.log(text);
// Considering this string to show different methods of string.
console.log(text.length); // Length of the string can be determined using this.
// To change the case of the text,
console.log(text.toLowerCase()); // the whole text is converted to lower case
console.log(text.toUpperCase()); // the whole text is converted to upper case
// Bold and Italics , returns html element
console.log(text.bold()); // the whole text is converted to bold
console.log(text.italics()); // the whole text is converted to italics
// To remove all the spaces in between the words,
console.log(text.replace(/ /g, "")); // white spaces are removed
// Index methods in strings.
console.log(text[5]); // the value at index 5 is displayed
console.log(text.indexOf('o')); // displays the index where 'o' appears for the first time
console.log(text.lastIndexOf('o')); // displays the index where 'o' appears for the last time
// To find the character at the specific index mentioned,
console.log(text.charAt('12')); // returns the character
// To check if the first word and last word of the string matches with a word,
console.log(text.startsWith("fox")); // checks the first word of the string and rteurns true if it matches , else returns false
console.log(text.endsWith("wall")); // checks the last word of the string and returns true if it matches , else returns false
// To split the string,
console.log(text.split(" ")); // splits the string at spaces
console.log(text.split("e")); // splits the string at e's
// To display a portion of the text.
console.log(text.slice(4,15)); // only a part of the string is displayed
console.log(text.blink()); // for blinking text , returns html element
// Concatenating two strings.
let text2 = " text to be conactenated";
console.log(text.concat(text2)); // text2 is concatenated with text
console.log(text.includes("fox")); // checks if "fox" is included in the text, if yes returns true , else returns false


// The different methods of array.
let arr = ["h","e","l","l","o"]; 
console.log(arr);
// Considering this string to show different methods of arrays.
console.log(arr.length); //Length of the array can be determined using this.
// To add or remove elements from the array.
console.log(arr.push("!")); // An element can be added to the end of the array using 'push' method.
console.log(arr);
console.log(arr.pop()); // The last element of the array is removed using 'pop' method and returns the element that is popped.
console.log(arr);
console.log(arr.splice(1,0,"hey")); // After the index 1 i.e "e" , "hey" is added
console.log(arr);
console.log(arr.splice(1,1,"E")); //At index 1, "hey" is removed and replaced with "E".
console.log(arr);
// To reverse the array,
console.log(arr.reverse()); // the array is displayed in reverse order.
// Consider the following array of numbers.
let arr2 = [3,5,7,4,8,1]; 
console.log(arr2);
// To arrange the elements of 'arr2' in ascending order,
console.log(arr2.sort());
// The string represetation of the array,
console.log(arr2.toString()); 