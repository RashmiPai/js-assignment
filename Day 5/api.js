/* Using promises/async await/fetch get the random todos from the json placeholder api. And log all the completed todos to the console.
API Endpoint : https://jsonplaceholder.typicode.com/todos */

// Making request without using async-await.
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(data=>console.log(data));

// async-await is used so that the function waits until the data is fetched from the given api endpoint.
async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // making a request
    const data = await response.json(); // log the values
    console.log(data);
}

// function call
fetchTodos();