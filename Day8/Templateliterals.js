// Activity 1
// Task 1
let name= "hanzala arshad";
let age=21;

console.log(`my name is ${name} and my age is ${age} and i am a web develeoper`);

// Task 2


let comment= `
gen ai is changing the world after
the advancemnet of Ai and Ml world 
is going towards new path`

console.log(comment);

// Activity 2

// Task 3

let arr=["03201023528",21,"0051896"];

let[mobnum,age1,regnum]=arr;

console.log(mobnum);

let book={
  title:"1984",
  author:"george orvile"
}

let {title:t,author:a}=book;

console.log(a);
console.log(t);

// Activity 3
// Task 5

let arr1=[45,56,65,43];
let arr2=[40,...arr1];
console.log(arr2);

// Task 6

function sum(name,...args){

  let sum=0;
  for(i in args){
    sum+=args[i]


  }

  console.log(`${name} : ${sum}`);
}

sum("hanzla",30,303,30)
// Activity 4

// Task 7

function product(n1,n2=1){
 return n1*n2;
}

console.log(product(3,4));

//Activity 5
// Task 8

let n= "name";
let course="course";

let obj2={
  ["student"+ n]:"hanzala",
  [course+ "name"]:"bscs",

  'show detail' (){
    return `${this.studentname} is a student of ${this.coursename} `;
  }
}

console.log(obj2['show detail']());

// Task 9

let name2="hanzala ";
let age3=21;

let obj3={
  name,
  age3
}

console.log(obj3);