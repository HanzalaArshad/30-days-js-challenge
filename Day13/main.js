// Import Lodash
const _ = require('lodash');

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a predicate function to filter numbers greater than 5
const predicate = (num) => num > 5;

// Use the filter function to get numbers greater than 5
const filteredNumbers = _.filter(numbers, predicate);

// Print the result
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
// Import Axios
const axios = require('axios');

// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Making a GET request using Axios
axios.get(url)
    .then(response => {
        // Handle success
        console.log('Data:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
