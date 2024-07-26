// Define the addTwo function
function addTwo(n1, n2) {
  return n1 + n2;
}

// Define the user1 object
const user1 = {
  name1: "Hanzala",
  age: 21,
  hello() {
      console.log(`Hi ${this.name1}, wish you to become ${this.age}`);
  }
};

// Define the product function
function product(n, m) {
  return n * m;
}

// Export the functions and objects
module.exports = {
  addTwo,
  user1,
  product
};
