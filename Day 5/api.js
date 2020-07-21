/* Using promises/async await/fetch get the random todos from the json placeholder api. And log all the completed todos to the console.
API Endpoint : https://jsonplaceholder.typicode.com/todos */

// async-await is used because the function waits until the data is fetched from the given api endpoint then proceeds with execution
async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // making a request
    const data = await response.json(); // all the values are fetched
    // Displaying only the completed todos i.e only if completed=true
    data.forEach(ele=>{
        if(ele.completed == true) {
            console.log(ele); // only completed todos are fetched and logged to console
        }
    })
}

// function call
fetchTodos();