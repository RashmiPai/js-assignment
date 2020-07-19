/* Destructuring the given object */

// The given object,
const student = {
    name : "Helinski",
    age : 24,
    projects : {
        diceGame : "Two player dice game using Javascript"
    }
};

console.log("Name of the student : "+student.name); // destructuring the 'name' property of 'student'
console.log("Age of the student : "+student.age); // destructuring the 'age' property of 'student'
console.log("Projects : diceGame : "+student.projects.diceGame); // destructuring the 'diceGame' of 'projects' property of 'student'