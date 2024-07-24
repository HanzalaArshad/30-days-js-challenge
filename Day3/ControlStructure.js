// Activity 1 

// Task 1

let n = -1;

if (n > 0) {
  console.log(`${n}: is a positive number`);
} else if (n === 0) {
  console.log(`${n}: number is zero`);
} else {
  console.log(`${n}: number is negative`);
}

// Task 2
let age = 17;
if (age >= 18) {
  console.log(`Your age is ${age}, you are eligible to vote.`);
} else {
  console.log(`Your age is ${age}, you are not eligible to vote.`);
}

// Activity 2

// Task 3

let a = 4;
let b = 9;
let c = 10;

if (a > b) {
  if (a > c) {
    console.log("a is the largest");
  } else {
    console.log("c is the largest");
  }
} else {
  if (b > c) {
    console.log("b is the largest");
  } else {
    console.log("c is the largest");
  }
}

// Activity 3 

// Task 4
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// First task: Get the day of the week
rl.question('Enter the week day (1-7): ', (answer) => {
  let day = parseInt(answer);

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid choice");
      break;
  }

  // Task 5: Get the grade based on percentage
  rl.question('Enter your percentage (1-100): ', (percentageAnswer) => {
    let marks = parseInt(percentageAnswer);

    switch (true) {
      case (marks >= 90):
        console.log("Grade is A");
        break;
      case (marks >= 80):
        console.log("Grade is B");
        break;
      case (marks >= 70):
        console.log("Grade is C");
        break;
      case (marks >= 60):
        console.log("Grade is D");
        break;
      case (marks >= 50):
        console.log("Grade is E");
        break;
      case (marks >= 40):
        console.log("Grade is F");
        break;
      default:
        console.log("Invalid grade");
    }

    // rl.close(); // Close the readline interface after the second question is answered
  });
});

// Activity 4

// Task 6

let n2=3;
let res= n2%2===0? "Number is even":"Number is odd";
console.log(res);

//  Task 7

rl.question("enter the year ",(leapyear)=>{

  let year=parseInt(leapyear);

  if((year%4 === 0 && year%100 !=0) || (year%400===0)){
    console.log("Leap year");
  }
  else{
    console.log("Not a leap Year");
  }

  rl.close()

})