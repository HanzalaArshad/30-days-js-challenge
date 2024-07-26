// Import everything from user.js
// Correct way to require a local module
const modulee = require('./user.js');

// Use the addTwo function from the imported module
console.log(modulee.addTwo(1, 2)); // Outputs: 3

// Use the user1 object and its method
modulee.user1.hello(); // Outputs: Hi Hanzala, wish you to become 21

// Use the product function from the imported module
console.log(modulee.product(2, 3)); // Outputs: 6
