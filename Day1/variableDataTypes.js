
//  Activity 1 variable declaration

var age = 20;
let name="Hanzala";

console.log(age );
console.log(name);

// Activity 2 constant decalaration

const boolval ="true";
console.log(boolval)

//  Activity 3 Data Types 

// let int = 34;
// let float =34.4;
// let bool =false;
// let string= "name"
// let obj={
//   name:"hanzala ",
//   age:"20",

// }

// let un = null;
// let und=undefined;
// console.log(typeof int )    ;
// console.log(typeof float );
// console.log(typeof bool );
// console.log(typeof string);
// console.log(typeof obj);
// console.log(typeof un);
// console.log(typeof und);


// activity 4 Reassigning;

let myvar= "initial";
console.log("Initial:" +myvar)

// Activity 5

// Declare a variable using const and assign an initial value
// const myConstant = 10;

// Log the initial value to the console
// console.log("Initial value:", myConstant);

// Attempt to reassign a new value to the constant
// try {
//   myConstant = 20;
// } catch (error) {
//   console.error("Error when trying to reassign:", error.message);
// }

// Feature request 1 


let int = 34;
let float =34.4;
let bool =false;
let string= "name"
let obj={
  name:"hanzala ",
  age:"20",

}

let un = null;
let und=undefined;
console.log(int,typeof int )    ;
console.log(float,typeof float );
console.log(bool,typeof bool );
console.log(string,typeof string);
console.log(obj.name,typeof obj);
console.log(un,typeof un);
console.log(und,typeof und);

// Activity 
// Using let for reassignment
let variableLet = 'initial value';
console.log("Initial value (let):", variableLet);

variableLet = 'new value';
console.log("New value (let):", variableLet);

// Using const for reassignment (which will cause an error)
const variableConst = 'initial value';
console.log("Initial value (const):", variableConst);

try {
  variableConst = 'new value'; // Trying to reassign const will throw an error
} catch (error) {
  console.error("Error when trying to reassign const:", error.message);
}
