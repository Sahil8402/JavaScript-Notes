//Advanced Javascript section

//1)*️⃣:Event Propogation(Event Bubbling and Event Capurting)
//Check EventPropogation.html1️
//Interview question:-
//(i)What is event prapogation?
//The complete way of deciding when and where the event will be executed is called event propogation.
//(ii)What is event bubbling?
//In this event will be executed from inner to outer means from bottom to up and it is by default.
//The event which does not bubble are focus ,blur,etc.
//(iii)What is event.target Vs this.target Vs event.currentTarget
//In event.currentTarget the event will be called from button to div .
//In this.Target the event refered to function so it called same as event.currentTarget and in event.target it will
//target to origin where event bubbling is starting.
//(iv)what is event Capturing/Trickling?
//In this event will be executed from outer to inner means from top to bottom
//and here after function creation we will pass capture=True in curly braces.
//(v)How to stop bubbling and capturing?
//by taking function stopPropogation() where we want to stop it we have to write.
//(vi)imp:- What is event deligation?


// Interview Que: Diff between Higher Order Function and Callback Function...
//2)*️⃣: Higher Order Function
//function which takes another function as an arguments is called HOF

//3)*️⃣: callback Function
//function which get passed as an argument to another function is called CBF
//A callback function that is passed as an argument to another function, to be "called back" at a later time.

// We need to create a calculator
//In this ex. calc is HOF & add,subs,mult is callback Function
// const add = (a, b) => {
//     return a + b;
// }

// const subs = (a, b) => {
//     return Math.abs(a - b);
// }

// const mult = (a, b) => {
//     return a * b;
// }

// const calc = (n1, n2, operator) => {
//     return operator(n1, n2);
// }
// console.log(calc(5, 2, add));

//*****************💡💡Ansynchronous JavaScript 💡💡......................

//************️⃣*️⃣Hosting in JS*️⃣*️⃣***********

//We have a creation phase and execution phase.

//Hosting in JS is a mechanism where variables and functions
//declarations are moved to the top of their scope before the code execute.

//For Example:-----
// console.log(myName);
// var myName;
// myName = "Sakshi"

//How it will be in output during creation phase

// 1: var myName = undifined;
// 2: console.log(myName);
// 3: myName = "Sakshi";

// //💡in ES2015, hosting is avoided by using the let keyword insted of var.
// //(The other diff. is that variables declared with let are local to the surrounding block, not the entore function.)

//************️⃣*️⃣What is Scope chain and lexical Scoping in JS ?*️⃣*️⃣***********
//The scope chain is used to resolve the value of variable names in JS.

// //scope chain in JS is lexically defined , which means that we can see what the scope chain will be by looking at the code.

// //At the top, we have the global scope ,which is the window object in the browser.

// // Lexical Scoping means Now, the inner function can get access to
// // their parent functions variables but the vice-versa is not true.

// // For Example:-----
// let a = "Hello Guys,"; //global scope
// const one = () => {
//     let b = "How r u ?"

//     const two = () => {
//         let c = " Hii, I am fine.";
//         console.log(a + b + c);
//     }
//     two();
//     //console.log(a + b + c);  //I can't use c..
// }
// one();

//************️⃣*️⃣what is Closures in JS*️⃣*️⃣***********

//A closure is the combination of a function bundled together (enclosed) with references
//to its surrounding state (the lexical environment).

// In other words, a closure gives you
//access to an outer function's scope from an inner function.

//In JS, closures are created every time a function is created, at function creation time.

//For Example:----

// const oFun = (a) => {
//     let b = 10;
//     const iFun = () => {
//         let sum = a + b;
//         console.log(sum);
//     }
//     return iFun();
// }
// let checkClousure = oFun(5);
// console.dir(checkClousure);


// //💡Interview Type Que..: Diff. between Synchronous and Asynchronous JS💡
//************️⃣*️⃣Synchronous JS Prog*️⃣*️⃣***********

// 1st work = 10 min
//2nd work = 5s   =====>in it they execute one by one..in order
// const f2 = () => {
//     console.log("fun. 2 is called");
// }
// const f1 = () => {
//     console.log("fun. 1 is called");
//     f2();
//     console.log("fun. 1 is called again");
// }
// f1();

//************️⃣*️⃣Asynchronous JS Prog*️⃣*️⃣***********
//1st work = 10 min
//2nd work = 5s      =====> here, all programe execute same time ,no metter order...
// const f2 = () => {
//     setTimeout(() => {
//         console.log("fun. 2 is called");
//     }, 2000);
// }
// const f1 = () => {
//     console.log("fun. 1 is called");
//     f2();
//     console.log("fun. 1 is called again");
// }
// f1();

//************️⃣*️⃣JavaScript the event loop*️⃣*️⃣***********
// in above ex. in function f2 given timestemp for such second, on that sec. the coresponding function hold their execution
//and store in "WEB APIS".After such time it store in "Message Queue"...after complition given timestamp it execute program.


//..........................................🎐🎐 Back to Advance JS...🎐🎐............................................

//************️⃣*️⃣Curring*️⃣*️⃣***********
// //💡Interview Type Que..: Output of sum(5)(3)(8)?💡............

// function sum(n1) {
//     return function(n2) {
//         return function(n3) {
//             console.log(n1, n2, n3);
//             console.log(n1 + n2 + n3);
//         }
//     }
// }
// sum(5)(3)(8);
//.....................OR..........(in one line)
// const sum = (n1) => (n2) => (n3) => console.log(n1 + n2 + n3);
// sum(5)(3)(8);

//************️⃣*️⃣CallBack Hell*️⃣*️⃣***********

// setTimeout(() => {
//     console.log("No.1 work");
//     setTimeout(() => {
//         console.log("No.2 work");
//         setTimeout(() => {
//             console.log("No.3 work");
//             setTimeout(() => {
//                 console.log("No.4 work");
//                 setTimeout(() => {
//                     console.log("No.5 work");
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//************️⃣*️⃣Bonus JSON*️⃣*️⃣***********
//👉JSON , stringify turns a Javascript object into JSON text and
//stores that JSON text in a string eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };
// var object_as_string = JSON.stringify(my_object);
// //"{"key_1":"some","key_2":"true","key_3":5}"
// console.log(object_as_string);

//typeof(object_as_string);
//"string"

//👉JSON.parse turns a string of JSON text into a Javascript object,eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
//{key_1:"some text",key_2:true,key_3:5}

//typeof(object_as_string_as_object)
//'object'
