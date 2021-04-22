// asynchronous code why?
// to avoid blocking
// because JS i single threaded

// when to use async
// REQUESTS - 
// Database - 
// user input
// FIles


// new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//         resolve("im happy");
//     }, 4000);
// }).then(message => {
//     console.log(message);
// });


function myPromise(){
   return new Promise((resolve, reject)=>{
        try{
            setTimeout(()=>{
                resolve("Success");
            }, 4000);
        }
        catch{
            reject("EVery promise work out this way");
        }
    });
}


// myPromise()
// .then(message =>{ console.log(message)})
// .catch(errorMessage => console.log(errorMessage));

async function myAsync(){
    try{
        const message = await myPromise();
        //wait does: wait for line 41 to be done and then run line 42.
        console.log(message);
    }catch(errorMessage){
        console.log(errorMessage);
    }
    
}


myAsync();
