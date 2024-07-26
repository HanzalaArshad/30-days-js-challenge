// Task 1
class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  greeting() {
    console.log("Hello, my name is", this.username);
  }

  UpdateUser(username, age) {
    this.username = username;
    this.age = age;
    console.log(`Name updated to: ${this.username} and age updated to: ${this.age}`);
  }

  static Greeting(username) {
    console.log(`Your are watchinng  ${username} season 4`);
  }
}

const person1 = new Person("Hanzalaaa", 22);
person1.greeting(); // Outputs: Hello, my name is Hanzalaaa

// Task 2 - Added a method to change the name and age
person1.UpdateUser("Hanzala Arshad", 20); // Outputs: Name updated to: Hanzala Arshad and age updated to: 20

// Task 3
class Student extends Person {

  static numStudents = 0;

  constructor(username, age, studentId) {
    super(username, age); // Call the parent class constructor
    this.studentId = studentId;

    // Increment the static property each time a new Student is created
    Student.numStudents++;
    console.log(`total student ${Student.numStudents}`);
  }

  // Method to get the student ID
  Id() {
    return this.studentId;

  }

  // Overriding the greeting method
  greeting() {
    console.log(`Welcome ${this.username}, your student ID is ${this.studentId}.`);
  }

 
}

const Hanzala = new Student("Hanzala", 20, 12);
console.log(Hanzala.Id()); // Outputs: 12

// Task 4 - Overridden greeting method includes student ID
Hanzala.greeting(); // Outputs: Welcome Hanzala, your student ID is 12

// Aci

// Task 5 - Using the static method without an instance

Person.Greeting("payithat Abdul hamid ");

// Task 6 to add static prop in student to count student created
const student1 = new Student("Hanzala", 20, 12); // Outputs: Total number of students: 1
const student2 = new Student("Tehsin Pasha", 22, 13); // Outputs: Total number of students: 2
const student3 = new Student("Ahmed", 19, 14); // Outputs: Total number of students: 3

console.log(student3.Id());


// Activity 4 
// Task 7

class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullname) {
    const [firstName, lastName] = fullname.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  logDetails() {
    console.log(`your full name is ${this.fullName} and age: ${this.age}`);
  }
}

const person3 = new Person2("John", "Doe", 30);

// Log initial details
person3.logDetails();
console.log(person3.fullName);

// Task 8 using ste function to update the uername 

person3.fullName = "han zala"; // Correct usage of the setter
console.log(person3.fullName);
person3.logDetails();

// Activity 5

// Task 9 
class Account {
  #balance = 0; // Private field for balance

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else if (amount <= 0) {
      console.log("Invalid withdrawal amount.");
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}


// task 10

// Creating an instance of the Account class
const myAccount = new Account(1000); // Initial balance of 1000

myAccount.deposit(500);
console.log("Balance after deposit:", myAccount.getBalance()); // Output: Balance after deposit: 1500

myAccount.withdraw(200);
console.log("Balance after withdrawal:", myAccount.getBalance()); // Output: Balance after withdrawal: 1300

myAccount.deposit(-100); // Output: Invalid deposit amount.


myAccount.withdraw(1500); // Output: Insufficient funds.

