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