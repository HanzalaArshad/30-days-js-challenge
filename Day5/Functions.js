// Activity 1
// Task 1

function EvenOdd(n){
 
  if(n%2==0){
    console.log(` ${n} is a even number`);
  } else{
    console.log(` ${n} is a odd number`);
  }
}

EvenOdd(6);

// Task 2

function Square(n1){

  let Square=n1*n1;
  console.log(`square of the ${n1} is ${Square}`);
}

Square(5);


// Activity 2

// Task 3

const MaxMin=function (n2,n3){
  if(n2>n3){
    console.log(`${n2} is greater than ${n3}`);
  } else{
    console.log(`${n3} is greater than ${n2}`);

  }
}

MaxMin(3,4)


// Task 4

const StringConcate= function  (str1,str2){

  let concate = str1+str2;
  console.log(concate);
}


StringConcate("Hanzala","Arshad");

// Actrivity 3

// Task 5

const TwoNumSum=(n5,n6)=>{

  let res= n5+n6;
  return  console.log(`the sum of ${n5} and ${n6} is ${res}`);
}

TwoNumSum(4,5);

// task 6
const strAval = (str, char) => {
  return str.includes(char);
};

console.log(strAval("hello", "h")); // true

// task 7

const Product =(n9,n10=6)=>{
   return n9*n10;
}

console.log(Product(7));


// task 8

const Greetings=(name,age)=>{

return console.log(`${name} welcome to your ${age} we wish you a happy birthday`);
}

Greetings("hanzala",18);



// Activity 5

const HighOrderFunction=(time,func)=>{
  for(let i=1;i<=time;i++){
    func()
  }
}

const SayHello=()=>{
  console.log("ASSALAM ALIKUM");
}

HighOrderFunction(5,SayHello);

// Task 10 

const HighOrderFunction2=(func1,func2,value)=>{

  const result1=func1(value);
  const result2=func2(result1)
  return result2
}

const mul=(num)=>{
  return num*3
};

const add=(num)=>{
  return num+2
}

let value=  HighOrderFunction2(mul,add,5);
console.log(value);

