//  Activity 1
//  Task 1

const { log } = require("console");


for(let n=1; n<=10;n++){
  console.log(n);
}

// Task 2

let table=5;
for(let i=1; i<=10;i++){
  console.log(`${table} x ${i} =` +table*i);
}

// Activity 2

// Task 3

let number =1;
let sum=0;

while(number <=10){

   sum+=number;
  
  number++;

  console.log(sum);


  

}

// task  4

let n1=10;

while(n1>=1){

  console.log(n1);
  n1--;
}

// task 5


let n3=1;


do{
  console.log(n3);
  n3++
}while(n3 <= 5);

// task 6
let n4 = 5;
let fact = 1;
let i = 1;

do {
  fact *= i;
  i++;
  console.log(fact);
} while (i <= n4);

// Task 7

for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 1; j <= i; j++) {
    line += '*';
  }
  console.log(line);
}

// task 8

for(let i=1;i<=10;i++){
  if(i==5){
    continue ;
  }
  console.log(i);
}

// Task 9


for(let i=1;i<=10;i++){
  if(i>7){
    break ;
  }
  console.log(i);
}