// Hard level - Promise 
// assignment 1 

function wait(second){
    let timer= new Promise(function (resolve){
        setTimeout(()=>{
            resolve(`${second} seconds is completed`)
        }, second*1000)
    })
    return timer
}

const time = 25
wait(time).then(result => {
    // console.log(result);
})

// *****Assignment 2 sleep-completely.js

function sleep(seconds) {
    const delay = new Promise(function fewMile(resolve){
        setTimeout(resolve, seconds*1000)
    })
    return delay
}
async function statment(){
    console.log(`Please Wait!!!` );
    await sleep(5)
    console.log(`waiting period is over`)
}
// statment()

// ****Assignemnt 3  Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.

function promiseKaBaap(seconds){
    const prom = new Promise((resolve)=>{
        setTimeout(resolve,seconds*1000)
    })
    return prom
}

function waitOneSecond() {
    promiseKaBaap(1)
}
function waitTwoSecond() {
    promiseKaBaap(2)
}
function waitThreeSecond() {
    promiseKaBaap(3)
}
function calculateTime() {
// sorry i am unable to find Print how long it took for all 3 promises to resolve. 
}
Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
.then(()=>{
    // console.log('Hey I am all Three');
})




// ****** Assignment 4 ******* [it is not working why?]

function oneinall(seconds){
    return new Promise((resolve)=>{
        setTimeout(resolve, seconds*1000)
    })
}

function waitOneSecond() {
    oneinall(1)
    console.log('1 seconds Happend');
}

function waitTwoSecond() {
    oneinall(2)
    console.log('2 seconds Happend');
}

function waitThreeSecond() {
    oneinall(3)
    console.log('3 seconds Happend');
}

function calculateTime() {
// sorry again i dont get it how to do 
}

function sequentialExecution() {
    console.log("Start sequential execution");
  
    waitOneSecond()
      .then(() => waitTwoSecond())
      .then(() => waitThreeSecond())
      .then(() => {
        console.log("Sequential execution complete");
      })
    sequentialExecution();

    }