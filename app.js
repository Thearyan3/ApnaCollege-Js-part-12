// Async functions - async & await 
// 1. async keyword = It creates an async function which each and every time returns a promise whether we write a return promise statement or not. And then whatever is returned from a promise statement, we can apply methods to that output like then() and catch() methods. 

// async function greet() {
//     // throw "404 page not found!";
//     return "hello";
// }

// greet()
// .then((result) => {
// console.log("Promise was resolved");
// console.log("result was:", result)
// })
// .catch((err) => {
//     console.log("Promise was rejected with:", err);
// });

// let demo = async () => {
//     return 5;
// }

// 2. Await keyword = It pauses the execution of its surrounding async function until the promise is settled (Resolved or Rejected).

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let Num = Math.floor(Math.random() * 5) + 1;
//             if (Num > 3) {
//                 reject("Promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("Color changed");
//         }, delay);
//     });
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("green", 1000);
//         await changeColor("yellow", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//     }catch(err){
//         console.log("error caught", err);
//     }

//     let a = 5;
//     console.log("a = ", a + 3);
// }