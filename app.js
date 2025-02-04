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

// API - An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third-party software or hardware.

// In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, other software/hardware on the user's computer, or third-party websites and services.

// JSON - JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

//JSON (Accessing data from JSON) - Whenever we send a request to an API then that API send a response and provide the JSON data in the form of a string. But We can't simply access the data from json because we first have to convert the JSON data into the JS Objects and then access it. 

// let jsonRes = '{"fact":"A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.","length":88}';
// // JSON.parse(data) method to parse/convert a string data into a Js object.
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

//AJAX (Asynchronous JavaScript and XML) - Ajax is basically a process in which we call a request to API and then we get some data in response from API and all this is done asynchronously. These calls are called Ajax calls. 
 

//HTTPS VERBS :
//Examples - 
//GET - It is a request in which we get some data or information on calling an API. 
//POST - It is a request in which we want to send some information with the API call. 


//STATUS CODES :
//EXAMPLES - 
// 1) 200 :- OK 
// 1) 400 :- BAD REQUEST
// 1) 404 :- PAGE NOT FOUND (means that the called API does not exist and it even sends the response and tells more about the error.)
// 1) 500 :- INTERNAL SERVER ERROR 


//Our first API Request (using fetch)
let url = "https://catfact.ninja/fact";

fetch(url)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})