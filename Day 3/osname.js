/* Write a program which will take OS name and version from the user separated by a space. Then log the OS name and version on 
the console. */
let os = prompt("Enter the Operating System");
// The variable 'os' is assigned to the os name the user enters.
let os_name = os.split(" ")[0]; // stores the name of the os
let os_version = os.split(" ")[1]; // stores the os version
console.log(`The OS name is ${os_name} and the version is ${os_version}`); 