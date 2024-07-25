// Activity 1
// task 1
//  function error(){
//   throw new Error("i am a error ")
//   try {
//     throwError();
//   } catch (error) {
//      console.log(error);
//   }
//  }

//  error();

//  function dividenum(n1,n2){


//   try {
//     if(n2 === 0 ){
//       throw new Error("you cannot divide")
//     }
    
//     let num=n1/n2;
//     console.log(`result is ${num}`);
//   } catch (error) {
//     console.log(error);
//   }
//  }



//  dividenum(3,0);



// Activity 2
// Task 3


// let n=2;
// try {
// if(n ===2){
//   throw new error("error");
// }

  
// } catch (error) {
//   console.log(error);
// }
// finally{
//   console.log("resolve");
// }

// Activity 3
// Task 4

// Define a custom error class
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name; // Set the error name to the class name
//   }
// }

// Function that throws the custom error
// function riskyOperation() {
//   throw new CustomError("Something went wrong in riskyOperation.");
// }

// try {
//   riskyOperation();
// } catch (error) {
//   if (error instanceof CustomError) {
//     console.error("CustomError caught:", error.message);
//   } else {
//     console.error("An unexpected error occurred:", error.message);
//   }
// }

// TASK 4

// class CustomError extends Error{
//   constructor(message){
//     super(message);
//     this.name=this.Constructor.name;
//   };
// };

// function Valid(input){
//   if(typeof input!== 'string' || input.trim()=== '') {
//     throw new Error("input cannot be empty");
//   };
//   console.log("valid input ",input);
// }

// try {
//   Valid('');
//   Valid("valid input");
  
// } catch (error) {
//   if( error instanceof CustomError){
//     console.log("validation error caught",error.message);
//   }else{
//     console.log("error is done",error.message);
//   }
// }


// task 6

// const promiseone= new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error = false;
    
//       if(!error){
//         resolve("problem solved");
//       } else{
//         reject("error");
//       }


    
//   },2000);
// })

// promiseone.then((res)=>{
//   console.log(res);
// })
// .catch((error)=> console.log(error))


// Task 7

// function errorres(){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       const error= Math.random()>0.5;
//       if(error){
//         reject("random error generate");
//       } else{
//         resolve("promise resolve successfully")
//       }
//     },2000)
//   });


// }

// async function handleerror(){
//   try{
//     const result= await errorres();
//     console.log(result);

//   } catch(error){
//     console.log(error)
//   };
// }

// handleerror();

// ACtivity 5
// TAsk 8

// fetch('https:/') // Invalid URL
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("wrong api"); // Handle HTTP errors
//     }
//     return response.json(); // Parse JSON if response is OK
//   })
//   .then((data) => {
//     console.log(data); // Log the data if fetch was successful
//   })
//   .catch((err) => {
//     console.log(err); // Handle and log any errors
//   });

// task 9

async function fetchdata(){
  try{
  const response= await fetch("https://api.github.com/users/hanzalaarshad");
  if(!response.ok){
    throw new Error("error ")
  }

  const data= await response.json();
  console.log(data);

} catch(err){
  console.log(err);
}
}

fetchdata();