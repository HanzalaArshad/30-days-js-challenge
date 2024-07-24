// Activity   1
// Task 1

const promise1=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("your work is done successfully");
    resolve();
  },2000)
})

promise1.then((resolve)=>{
  console.log(resolve);
});

// Task 2
const promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(new Error("An error occurred"));
  }, 2000);
});

promise2
  .then((result) => {
    console.log(result); // This won't run since the promise rejects
  })
  .catch((error) => {
    console.error(error.message); // This will print "An error occurred"
  });

// Activity 3
  // Task 3
  // function DataServer(url,delay){
   
  //   return new Promise(function(resolve,reject){
  //     setTimeout(function(){

  //       console.log(` data server ${url} `);
  //       resolve("successful")
  //     })
  //   },delay)
  // }

    
  // DataServer('server1',1000)
  // .then((data1)=>{
  //    console.log(data1);
  //    return DataServer('server2',2000)
  // })
  // .then((data2)=>{
  //   console.log(data2);
  //   return DataServer('server3',15000)
  // })
  // .then((data3)=>{
  //   console.log(data3)
  //    console.log("all data recieved");
  // })
  // .catch((error)=>{
  //   console.log("error",error);
  // });

  // Activity 3

  // Task 4

  async function data5(){
     
    const promiseone=  await new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("resolving the issue ");
        return resolve()
      },2000)
    })
  }

  data5()
  .then((resolve)=>{
    console.log(resolve);
    console.log("done");
  });

  // task 5

  async function isFollowed(bool){

    try {
      const promiseTwo= await new Promise(function(resolve,reject){

        setTimeout(function(){
          if(bool){
            resolve("you followed ");
          } else{
            reject("you donot followed")
          }
        },2000);
      });
      return promiseTwo;

      
    } catch (error) {
         throw error;
    }
  }

  isFollowed(true)
  .then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })


  // Activity 4

  // Task 6

  fetch("https://api.github.com/users/hanzalaarshad")
  .then(response=>{
      return response.json();

  })
  .then(data=>{
    return {login:data.login, follower:data.followers};

  })
  .then(({login,follower})=>{
    console.log(login);
    console.log(follower);
  })
  .catch(error=> console.log(error));

  // Task 6

  async function sync(){
    const promiseThree= await new Promise(function(resolve,reject){
      setTimeout(function(){
        reject("An error occurred");
      },2000);
    })
  }

  sync()
  .then(response=>{
    
  })
  .catch((error)=>{
    console.log(error);
  })

  // ACtivity 5

  // Task 8

  function Fetchuser(){
    return fetch('https://api.github.com/users/hanzalaarshad')
    .then(response=>response.json())
    .then(data =>(
      {
        login: data.login,
        followers: data.followers,
      }));
  };


  function FetchRepo(){
    return fetch('https://api.github.com/users/hanzalaarshad/repos')
    .then(response=> response.json())
     .then(data => data.length)
  };
 
  Promise.all([Fetchuser(), FetchRepo()])

  .then(([userData,repoCount])=>{
    console.log("user data :" , userData);
    console.log("repo :" , repoCount);

  })
  .catch((err)=>{
    console.log(err);
  })

  // task 9 
  function delay(ms,message){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(message)
      },ms)
    });
  }

  const promise7 = delay(3000, 'Promise 1 resolved after 3 seconds');
const promise8 = delay(1000, 'Promise 2 resolved after 1 second');
const promise9 = delay(2000, 'Promise 3 resolved after 2 seconds');

Promise.race([promise7, promise8, promise9])
  .then((result) => {
    console.log('First resolved:', result); // Logs the result of the first promise to resolve
  })
  .catch((error) => {
    console.log('Error:', error); // Logs if any promise rejects
  });