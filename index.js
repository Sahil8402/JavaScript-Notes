// *******Print statement in js...
// console.log('Hellow world');


//*******values and variables...
// var myName = 'Sakshi-Sahil';
// console.log(myName);
// var myAge = 20;
// console.log(myAge);
// var iAmS = true;
// console.log(iAmS);

//******Datatypes in js....

//*****Typeof to show datatype...
// console.log(typeof(myName));
// console.log(typeof(myAge));
// console.log(typeof (iAmS));

//****Activities....
// console.log(10 + "20"); //..... //1
//console.log(9 - "5"); .....//2 //1st bug
//console.log("java" + "script");..... //3
//console.log(" " + " "); .....//4
//console.log(" " + 0); .....//5
//console.log("sahil" - "sakshi");..... //6 //NaN-not a number
//console.log(true + true); ....//7
//console.log(true + false); .....//8
//console.log(false + true); ....//9
//console.log(false - true); ....//10

//******Interview type Question.....
//*****diff bet. null vs. undefined
// var iAmHere = null;
// console.log(iAmHere);
// console.log(typeof(iAmHere));......//2nd bug

//var iAmThere; //datatype
// console.log(iAmThere);
// console.log(typeof(iAmThere));


//******Interview type Question.....
// what is NaN ?
// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The intial value of NaN is(Not a Number).

//*******Example of NaN.....
// var myPhoneNo = 5595348894;
// var myName = "Sakshi-Sahil"

// console.log(isNaN(myPhoneNo));
// console.log(isNaN(myName));

// if (isNaN(myName)) {
//     console.log("plz enter valid phone No.");
// }


//*******Activities....
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));


//******Operators........
// console.log(20 + 5);

//***(1)Assignment Operators...
// var x = 5;
// var y = 5;
// console.log("is both x and y are equal or not" + x == y);
// console.log(x == y);
// console.log(`is both x and y are equal or not : ${x == y}`); //aa pachi sikhvadse...


//***(2)Arithmetic Operators...
//An arithmetic operator takes numerical values
//(either literals or variables) as their operands and
//returns a single numerical value.
// console.log(3 + 7);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log("Remainder Operator :" + 81 % 8);

//******(2.1)Increment and Decrement operator....
//Operator: x++ or ++x or x-- or --x
//ex-1..
//var num = 15;
//var newNum = num++;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);

//Postfix increment operator means the expression is evaluated
//first using the original value of the variable and then the variable is
//incremented...

//ex-2..
//var num = 15;
//var newNum = ++num;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

//prefix increment operator means the variable is increasimented first and then
//the expression is evaluated using the new value of the variable.

//******(3)Comparision Operator...
// var a = 10;
// var b = 30;
//*Equle(==)
//console.log(a == b);
//*Not Equle(!=)
//console.log(a != b);
//*Greater Then(>)
//console.log(a > b);
//*Greater Then or equal to(>=)
//console.log(a >= b);
//*Less Then(<)
//console.log(a < b);
//*Less Then or equal to(<=)
//console.log(a <= b);


//*****(4)Logical Operator..
// var a = 30;
// var b = -20;
//*And(&&)
//console.log(a < b && b > -50 && b < 0);

//*or(||)
//console.log((a > b) || (b > -50) || (b < 0));

//*Not(!)
//console.log(!((a > b) || (b > -50) || (b < 0)));
//console.log(!false);

//*****(5)String concatenation
// console.log("hello " + "world"); 10

//****Activites....
//output of 3**4 = ?
// console.log(3 ** 4);
// console.log(10 ** -1);

//what will be the output ,when we add a number and a string?
// console.log(1 + 'sahil');

//write a program to swap two  numbers?
// var temp;
// var a = 10;
// var b = 20;
// console.log('a=' + a);
// console.log('b=' + b);
// temp = a;
// a = b;
// b = temp;
// console.log("After Swapping");
// console.log('a=' + a);
// console.log('b=' + b);

// write a program to swap two numbers without using third variable...
// var a = 10;
// var b = 20;
// console.log('a=' + a);
// console.log('b=' + b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("After Swapping");
// console.log('a=' + a);
// console.log('b=' + b);

//  interview Question...
//== vs === ?
// var n1 = 5;
// var n2 = '5';
// console.log(typeof(n1));
// console.log(typeof(n2));
// console.log(n1 == n2);//it determine only value..
// console.log(n1 === n2);//it determine value as wellas datatype..


//*******Control Statement & Loops..
//(A)If_else..
//The if statement executes if a specified condition is truthy.
//If the condition is falsy, another statement can be executed.
// var tomr = 'sunny';
// if (tomr == 'rain') {
//     console.log('Take a Raincoat');
// } else {
//     console.log('No need to take a Raincoat');
// }

//****Challenge....
//Find a Leap year..
// var y = 2020;
// debugger;
// if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
//     console.log("leap year");
// } else {
//     console.log("Nonleap year");
// }


//what is truthy and falsy values in javascript?
//we have total 5 falsy values in javascript
//0,"",undifined,null,NaN,false** is falsy anyway --------------------------------------->important

// if (score = 0) {
//     console.log('Yah ,we won');
// } else {
//     console.log("Oh, we Lost");
// }
// Means if any of 5 falsy will come it will run else part..


//(B)Conditional (ternary) operator

//The conditional (ternary) operator is the only javascript operator
//that takes three operands(shortcut for if else)

// var age = 12;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

//(C)Switch Statment
//Evaluates an expression , matching the expression's value to a
//case clause and executes statments associated with that case.

//😊break
// It teminates the current loop,switch or label statement and transfers
//program control to the statment following the terminated statment.

// var area = 'rectangle';
// var PI = 3.14,
//     l = 5,
//     b = 6,
//     r = 3;

// switch (area) {
//     case 'circle':
//         console.log('The area of circle is:' + PI * r ** 2);
//         break;
//     case 'triangle':
//         console.log('The area of Triangle is:' + (l * b) / 2);
//         break;
//     case 'rectangle':
//         console.log('The area of rectangle is:' + l * b);
//         break;

//     default:
//         console.log('invalid data');
// }

//(D)While Loop
//The while statement creates a loop that executes a specified statment
//As long as the tst condition evaluates to true.
//var num = 0;
//block scope
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

//(E)Do-while loop
// var num = 20;
// debugger;
// do {
//     console.log(num);
//     num++;
// } while (num <= 10);

//for(intializer;condition;iteration)
//{
//code to be executed
//}

//(F)For Loop
// for (var num = 0; num <= 10; num++) {
//     console.log(num);
// }

//😎Challenge Time.....Print tables.....😎
// var table = 12;
// switch (table) {
//     case 8:
//         console.log('Table of 8.....');
//         for (var i = 1; i <= 10; i++) {
//             console.log(table + "x" + i + "=" + table * i);
//         }
//         break;
//     case 9:
//         console.log('Table of 9.....');
//         for (var i = 1; i <= 10; i++) {
//             console.log(table + "x" + i + "=" + table * i);
//         }
//         break;
//     case 12:
//         console.log('Table of 12.....');
//         for (var i = 1; i <= 10; i++) {
//             console.log(table + "x" + i + "=" + table * i);
//         }
//         break;
//     case 15:
//         console.log('Table of 15.....');
//         for (var i = 1; i <= 10; i++) {
//             console.log(table + "x" + i + "=" + table * i);
//         }
//         break;
//     default:
//         console.log('invalid data');
// }


//*******Function Definition*//
//A function defition (also called a function declaration,or function statement )
//consists of the function keyword, followed by:

// The name of the function.
//A list of parameters to the fuction, enclosed in parantheses and seprated by commas.
//The javascript statements that define the function , enclosed in curly brackets,{ ... }.
//syntex
// function name(params) {
//     //statement
// }

//*****fuction calling//
//defining a function does not executes it.
// A javascript function is executed when "something " invokes it(calls it).

// function sum() {
//     var a = 10,
//         b = 40;            //function definition
//     var total = a + b;
//     console.log(total);
// }
// sum();                      //function calling


//******  challenge  time....
// Diff btw Function parameter vs Function Arguments?
//Function parameters are the names listed in the function's definition.
//Function arguments are the real values passed to the function.


// function sum(a, b) {       //a,b are function parameters.
//     var total = a + b;
//     console.log(total);
// }

// sum();
// sum(20, 30);           //20,30,60,40 are function arguments
// sum(60, 40);

/******Interview Question */
//Why Function?

//You can reuse code:Define the code once ,and use it many times.
//You can use same code many times with different arguments,
//to produce different results.

//OR

//A function is a group of reusable code which cann be called anywhere in program.
//this eliminates the need of writting code agian again.



//********Function Expression................
//"Function expression simply means
//create a function and put it into the variable."

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// var funexp = sum(50, 60); //Function Expression
// funexp;



//*****Return keyword............
//when javascript reaches a return statment ,
//the function will stop executing.
//function often compute a return value.
//The return value is "Return" back to the "caller".
// debugger;

// function sum(a, b) {
//     return total = a + b;
// }
// var funexp = sum(50, 60); //Function Expression
// console.log("The addition is " + funexp);

//************* Anonymous Function

//A Function expression is similar to and has the same syntax
// as a function declaration one can define "named"
//function expression (where the name of the expression might be used in the call stack for example)
//or"anonymous" function expressions.
// it means function running without name.

// var funExp = function(a, b) {
//     return total = a + b;
// }
// var sum = funExp(15, 16);
// var sum1 = funExp(15, 10);

// console.log(sum > sum1);
//Normal Function:-
//1)A simple function (also called a method) is responsible for carrying out certain operations or tasks.
// When the function is called, it executes that particular task for which the function has called.
//2)We can access this function directly by calling the function.
//3)This function is useful for all scenarios.
//4)Normal functions are hoisted which means we can declare the function after it has been used in javascript.

//Anonymous function:-
//1)An anonymous function is a function that does not have any name associated with it ie.
//this was created without any identifier or name that refer to it.
//2)An anonymous function is not accessible after its initial creation, it can only
//be accessed by a variable it is stored in as a function as a value.
//3)An anonymous function can be useful for creating IIFE(Immediately Invoked Function Expression).
//4)An anonymous function can not be hoisted.