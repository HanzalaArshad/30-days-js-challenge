// Activity 1
// Task 1 and 2

let arr1=[1,2,3,4,5];
for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
  console.log(arr1[0]);
  console.log(arr1[arr1.length-1]);
}


// Activity 2

arr1.push(7);

for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}

arr1.pop(7);
for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}

arr1.shift();
for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}

arr1.unshift(12);
for(let i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}
//  Activity 3


let doublearr=arr1.map((num)=> num*2
);

for(let i=0; i<arr1.length;i++){
  console.log(doublearr[i]);
}

let arr2=[24,26,30]

let evennum= arr2.filter((num)=> num%2===0);
console.log(evennum)


let arr3=[1,2,4,5,6];
let sum =arr3.reduce((acc,curr)=> acc+curr,0);
console.log(sum);


// Activity 4
let arr4=[23,24,25,26];
for(let i=0;i<arr4.length;i++){
  console.log(arr4[i]);
}

let arr5=[56,58,59,40];
arr5.forEach((num)=>{
  console.log(num);
})

let twoDArray = [[1, 2, 3, 4], [5, 6, 7, 8]];
for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {
    console.log(twoDArray[i][j]);
  }
}

let two2DArray = [[1, 2, 3, 4], [5, 6, 7, 8]];

// Accessing a specific element
let specificElement = two2DArray[0][1];
console.log(specificElement);  // Output: 2
