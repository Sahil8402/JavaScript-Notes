//modern Javascript
//Features of ECMAScript 2015 also known as ES6.

//*****************(1)👈 LET VS CONST VS VAR......................

//In var if we assign another value to same name it will run..
// var myName = "Sahil Sakkshi";
// console.log(myName);

// myName = "Sak Sah";
// console.log(myName);

//In let if we assign another value to same name it will run..
// let myName = "Sahil Sakkshi";
// console.log(myName);

// myName = "Sak Sah";
// console.log(myName);

//In CONST it will not run for same variable name because Const means constant value..
// const myName = "Sahil Sakkshi";
// console.log(myName);
// myName = "Sak Sah";                   //Error
// console.log(myName);

//var --> Function Scope
//let and const --> Block scope

// function bio() {
//     var myFirstname = "Sahil";
//     console.log(myFirstname);

//     if (true) {
//         var myLastname = "Gandhi";                                   //for var it can be access from anywhere i.e. in block scope as well as outside block scope
//         console.log(myLastname);
//         console.log(myFirstname);
//     }
//     console.log(myFirstname + myLastname);
// }
// bio();


// function bio() {
//     let myFirstname = "Sahil";
//     console.log(myFirstname);

//     if (true) {
//         let myLastname = "Gandhi"; //for let and const it cannot be access from anywhere i.e. in block scope as well as outside block scope
//         console.log(myLastname);
//         console.log(myFirstname);
//     }
//     console.log(myFirstname + myLastname);
// }
// bio();


//*****************(2)👈 Template literals(Template strings)......................

//for concatinate Strings here we use ${}....

// for (let num = 1; num <= 10; num++) {
//     let tb = 19;
//     console.log(`${tb}x${num}=${tb*num}`);
// }


//*****************(3)👈 Defaults Parameters......................
//Default function parameters allow named parameters to be
//initialized with default values if no value or undefined is passed.
// function mult(a, b = 5) {
//     return a * b;
// }
// console.log(mult(3));

//*****************(4)👈 Fat Arror Function......................
//👻Normal way of writing Function
// console.log(sum());

// function sum() {
//     let a = 5,
//         b = 6;
//     let sum = a + b;
//     return `the sum of the two number is ${sum}`;
// }

//👻How to convert in into fat arrow function...
// const sum = () => {
//     let a = 5;
//     b = 6;
//     return `The sum of the two number is ${a + b}`;
// }
// console.log(sum());

// In this arrow fat function we can't call function before initialization
//in this if we don't write return keyword and remove{} brackets then also it will run...

// const sum = () => `The sum of the two number is ${(a=5)+(b=6)}`;
// console.log(sum());

//******Array in javascript..........\
//In javascript, We have an Array calass ,and
//arrays are the prototype of this class.
// we use multiple datatype in single array,this fitures only provided in javascript...

//ex...
//var myfrd = ['Ram', 22, 'Jay', 67, male, 'Vasu', 89, true]

//........(1)Traversal in Array...\
//if we want to get the single data at a time and also
//if we want to change the data
// var myfrd = ['Ram', 'Jay', 'Vasu', 'Priti', 'Reem']
// console.log(myfrd[3]);
// console.log(myfrd.length);
// console.log(myfrd[myfrd.length - 1]);

//After ES6 we have for..in andfor..of loop too

// var myfrd = ['Ram', 'Jay', 'Vasu', 'Priti', 'Reem']
// for (let elements in myfrd) { //it show index no.
//     console.log(elements);
// }

// for (let elements of myfrd) { //it show index element.
//     console.log(elements);
// }

//Array.prototype.forEack()...............🙋‍♂️🙋‍♂️
//calls a function for each element in the array..
//combination of for in and for of..

//normal function..
// var myfrd = ['Ram', 'Jay', 'Vasu', 'Priti', 'Reem'];
// myfrd.forEach(function(element, index, array) {
//     console.log(element + " index:" + index + " " + array);
// });

//fat  arrow function....
// var myfrd = ['Ram', 'Jay', 'Vasu', 'Priti', 'Reem'];
// myfrd.forEach((element, index, array) => {
//     console.log(element + " index:" + index + " " + array);
// });

//(2)Array subsection 2-> Searching and filtering in an array..
//Array.prototype.indexOf()...............🙋‍♂️🙋‍♂️

//Returns the first (least) index of an element within the array equal
//to an element,or -1 none is found. It search the element from the
//0th index mumber..
//it will find from left to right i.e. from 0 to length-1.
// var myfrd = ['Ram', 'jay', 'Vasu', 'Priti', 'jay'];
// console.log(myfrd.indexOf("jay"));
// console.log(myfrd.indexOf("jay", 3));
// console.log(myfrd.indexOf("Jay"));

//Returns the first (greatest) index of an element within the array equal
//to an element,or -1 none is found. It search from last to first..

// var myfrd = ['Ram', 'jay', 'Vasu', 'Priti', 'jay'];
// console.log(myfrd.lastIndexOf("jay"));
// console.log(myfrd.lastIndexOf("jay", 3));
// console.log(myfrd.lastIndexOf("Jay"));

//Array.prototype.includes()...............🙋‍♂️🙋‍♂️
//determines wether the array contains a value ,
//returning true or false as appropriate.

// var myfrd = ['Ram', 'jay', 'Vasu', 'Priti', 'jay'];
// console.log(myfrd.includes("jay"));
// console.log(myfrd.includes("jay", 3));
// console.log(myfrd.includes("Jay"));

// var myfrd = ['Ram', 'jay', 'Vasu', 'Priti'];
// console.log(myfrd.includes("jay", 3));

// Filltering.......

//Array.prototype.find()...............🙋‍♂️🙋‍♂️

//arr.find(callback(elements[,index[,array]])[,thisArg])
//Returns the found element in the array,if someelement in the
//array satisfies the testing function,or undifined if not found.
//Only problem is that it return only one element.
// const prices = [200, 300, 500, 400, 660];
// console.log(prices.find((element) => element < 400));
// console.log(prices.find((element) => element < 200));

//Array.prototype.findIndex()...............🙋‍♂️🙋‍♂️
//Returns the found index in the array, if an element in the
//array satisfies the testing function ,or -1 if not found.

// const prices = [200, 300, 500, 400, 660];
// console.log(prices.findIndex((element) => element < 400));
// console.log(prices.findIndex((element) => element < 200));

//Array.prototype.filter()...............🙋‍♂️🙋‍♂️
//Returns a new array containing all elements of the calling
//array for which the provided filtering function returns true.

// const prices = [200, 300, 500, 400, 660];
// console.log(prices.filter((element) => element < 400));
// console.log(prices.filter((element, index) => element < 200));

//(3)Array subsection 3->How to sort an Array

//Array.prototype.sort()...............🙋‍♂️🙋‍♂️

//The sort() method sorts the element of an array in place and returns the sorted array. The default sort
//order is asceding, built upon converting the elements into strings,
//then comparing their sequence of UTF-16code units values.

// const months = ['march', 'april', 'may', 'jan', 'nov', 'aug'];
// console.log(months.sort());

// const array = [1, 3, 100, 21, 33];
// console.log(array.sort());

//(4)Array subsection 4->perform CURD(creating,updating,reading,deleting)

//Array.prototype.push().........🙋‍♂️🙋‍♂️
//The push() method adds one or more elements to the
//end of an array and 😀returns the new length of the array😀.

// const animals = ['pigs', 'dogs', 'cats'];
// const count = animals.push('Horse', 'cows', 'monkey');
// console.log(animals);
// console.log(count);

//Array.prototype.unsift().........🙋‍♂️🙋‍♂️
//The unsift() method adds one or more elements to the
//begening of an array and 😀returns the new length of the array😀.
// const animals = ['pigs', 'dogs', 'cats'];
// const count = animals.unshift('Horse', 'cows', 'monkey');
// console.log(animals);
// console.log(count);

// const number = [1, 2, 5];
// const count = number.unshift(3, 4);
// console.log(number);
// console.log(count);

//Array.prototype.pop().........🙋‍♂️🙋‍♂️
//The pop() method remove last elements from the
//an array and 😀returns the new length of the array😀.
// const plants = ['Apple', 'orange', 'banana', 'grapes', 'chikoo'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

//Array.prototype.shift().........🙋‍♂️🙋‍♂️
//The shift() method remove first elements from the
//an array and 😀returns the new length of the array😀.
// const plants = ['Apple', 'orange', 'banana', 'grapes', 'chikoo'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

//.......😎Chalange Time...😎....
//const months =['Jan','May','April','June','July'];
//(1)..Add Dec at the end of an array?
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// console.log(months.push('Dec'));
// console.log(months);

//.......😎Chalange Time...😎....*Splice Method*
//(1)..Add Dec at the forth and end of an array using splice?
//const months = ['Jan', 'April', 'May', 'June', 'July'];
//const newMonth = months.splice(4, 0, "Dec");
//console.log(months);
// const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);
// console.log(months.length);

//(2)..What is the return value of the splice method...
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// const newMonth = months.splice(4, 0, "Dec");
//console.log(newMonth);    //those element we should deleted from this Array,it show it ....,here it show []...

//(3)..update July to Aug(update)?
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// const newMonth = months.splice(4, 1, "Aug");
// console.log(months);
// or//
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// const indexOfMonth = months.indexOf('July');
// if (indexOfMonth != -1) {
//     const newMonth = months.splice(indexOfMonth, 1, "Aug");
//     console.log(months);
// } else {
//     console.log('NO data found');
// }

//(4)..Delete June from an array?
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// const newMonth = months.splice(3, 1);
// console.log(months);
// console.log(newMonth);

//If we to delete all elements of array after value which is pointed..
// const months = ['Jan', 'April', 'May', 'June', 'July'];
// const newMonth = months.splice(2, Infinity);
// console.log(months);
// console.log(newMonth);

//Array.prototype.map().........🙋‍♂️🙋‍♂️

//let newArray = arr.map(callback(currentValue[,index [, array]])){
//     return element for newArray , after executing something
//}[,thisarg]);

//Returns a new array containing the results of calling a
//function on every in this array.

//const array1 = [1, 4, 9, 16, 25];
//num>9

// let newArr = array1.map((curEle, index, arr) => {
//     return curEle > 9;
// })
// console.log(array1);
// console.log(newArr);

//map mwthod vs. forEach method....
// let newArr = array1.map((curEle, index, arr) => {
//     return `Index no = ${index} and the value is ${curEle} belong to ${arr}`
// })
// console.log(newArr);

// let newArr1 = array1.forEach((curEle, index, arr) => {
//     return `Index no = ${index} and the value is ${curEle} belong to ${arr}`
// })
// console.log(newArr1);

//.......😎Chalange Time...😎....
//1. Find the square root of each element in an array?

//sol:
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((curElem) => Math.sqrt(curElem))
// console.log(arrSqr);

//2. Multiply each eleent by 2 and return only those elements which are greater than 10?

//sol:
// let arr = [2, 3, 4, 6, 8];
// let array1 = arr.map((curElem) => {
//     return curElem * 2;
//we can use chaining here...
// }).filter((curElem) => {
//     return curElem > 10;
// })
// console.log(array1);


//Array.prototype.reduce().........🙋‍♂️🙋‍♂️     ---------------------->imp
//flatten an array means to convert the 3d pr 2d array into a
//single dimensional array

//The reduce() method executes a reducer function (that you provide)
//on each element of the Array. resultung in singlr output value.

//The reducer function takes four arguments:

//Accumulator
//current value
//current index
//source Array

//ex1
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     return accumulator += curElem;
// })
// console.log(sum);

//ex2
// let arr1 = [5, 6, 2];
// let sum1 = arr1.reduce((accumulator, curElem, index, arr) => {
//     return accumulator *= curElem;
// })
// console.log(sum1);

//ex3
// let arr3 = [2, 3, 4, 6, 8];
// let array1 = arr3.map((curElem) => {
//     return curElem * 2;
//     //we can use chaining here...
// }).filter((curElem) => {
//     return curElem > 10;
// }).reduce((accumulator, curElem) => {
//     return accumulator += curElem;
// })
// console.log(array1);

//ex4
// let arr4 = [5, 6, 2];

// let sum4 = arr4.reduce((accumulator, curElem, index, arr) => {
//     debugger;
//     return accumulator += curElem;
// }, 7)
// console.log(sum4);

//How to flatten an array..
//converting 2d and 3d array into one dimension array...

// eg: 1)
// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8]
// ];

// let flatArr = arr.reduce((accum, current) => {
//     return accum.concat(current);
// })
// console.log(flatArr);

// Eg: 2) here in nested array it will not concat so to solve this ecma script 2020 refer.
// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8, [4, 5]]
// ];

// let flatArr = arr.reduce((accum, current) => {
//     return accum.concat(current);
// })
// console.log(flatArr);

//******Strings in JavaScript ********************/

//A js string is zero or more characters written inside quotes.

//js strings are used for storing and manipulating text.
//You can use single or double quotes

//Strings can be created as primitives,
//from string literals, or as objects, using the String() constructor

// let myName = "Sahil Gandhi";
// let mName = 'Chintubhai';

// let name2 = new String("Gandhi Sahil"); //****line: 440

// console.log(myName);
// console.log(name2);
// console.log(mName);

//How to find length of a string
//String.prototype.length🙋‍♂️🙋‍♂️
//reflects the length of the string.

// let myName = "sahil gandhi";
// console.log(myName.length);

///Escape Character means if we want to add something in single '' or double "" in string msg.
// 1) Using / (backslash)..
// let anySentence = "Me and My sister is \" Msterclass\" in javascript.";
// console.log(anySentence);
//2) Using '' single qutes if "" doble is outside and vise a versa.
// let anySentence = "Me and My sister is ' Msterclass' in javascript.";
// console.log(anySentence);

//Finding a String in a string

//String.prototype.indexOf(searchValue [, fromIndex])🙋‍♂️🙋‍♂️
//the indexOf() method returns the index of ( the position of) the first
// occurrence of a specified text in a string
//count from starting..

// const myBioData = 'I am the Thapa Technical';
// console.log(myBioData.indexOf("thapa"));
// console.log(myBioData.indexOf("Thapa"));
// console.log(myBioData.indexOf("T", 10));

/**JAvascript counts positions from zero. */
// 0 is the first position in a string,1 is the second ,2 is the third.

//String.prototype.lastIndexOf(searchValue [, fromIndex])🙋‍♂️🙋‍♂️
//Returns the index within the calling String object of the
//last occurrenceof searchValue,or -1 not found.

// const myBioData = 'I am the Thapa Technical';
// console.log(myBioData.lastIndexOf("thapa"));
// console.log(myBioData.lastIndexOf("Thapa"));
// console.log(myBioData.lastIndexOf("T", 10));

//searching for a String in a String

//String.prototype.search(regexp)🙋‍♂️🙋‍♂️
//The serach() method searches a string for a specified
//value and returns the position of the match

// const myBioData = 'I am the Thapa Technical';
// console.log(myBioData.search("thapa"));
// console.log(myBioData.search("Thapa"));

//The search() method cannot take a second start position argument.


//***********Extracting String Parts********

//There are 3 methods for extracting a part of a string:

// (i)slice(start, end)
// (ii)substring(start, end)
// (iii)substr(start, length)


//(i)The slice() Method🙋‍♂️🙋‍♂️
//slice() extracts a part of a string and returns the extracted part
//in a new string.

//The method takes 2 parameters: the start position,
//and the end position (end not included).

//Note:The original array will not be changed..

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(0, 4);
// let res1 = str.slice(7);
// let res2 = str.slice(7, -2);

// console.log(res);
// console.log(res1);
// console.log(res2);

// .......😎Chalange Time...😎....
//Que:  Display only 280 characters of a string like the one used in Twitter?
// let myTweets = "The sort() method sorts the element of an array in place and returns the sorted array. The default sort order is asceding, built upon converting the elements into strings,then comparing their sequence of UTF-16code units values.The sort() method sorts the element of an array in place and returns the sorted array. The default sort order is asceding, built upon converting the elements into strings,then comparing their sequence of UTF-16code units values."
// console.log(myTweets.length);
// let myActualTweets = myTweets.slice(0, 280);
// console.log(myActualTweets);
// console.log(myActualTweets.length);


//(ii)The substring() Method🙋‍♂️🙋‍♂️
//substring() is similer to slice().

//If we give negative value then the characters are
//counted from the 0th pos.
// var str = "Apple, Banana, Kiwi";
// let res = str.substring(0, 4);
// console.log(res);

//The difference is that substring() cannot accept
//negative indexes.
// let res1 = str.substring(8, -2);
// console.log(res1);


//(iii)The substr() Method🙋‍♂️🙋‍♂️
//substring() is similer to slice().

//The diffrence is that the second parameter specifies the
//length of extracted part.
// var str = "Apple, Banana, Kiwi";
// let res = str.substr(0, 4);
// console.log(res);
// let res1 = str.substr(-2);
// console.log(res1);

//Replacing String Content()

// String.prototype.replace(searchFor, replaceWith)🙋‍♂️🙋‍♂️

//The replace() method replaces a specified value
//with another value in a string.

// let myBioData = 'I am sahil gandhi sahil';
// let replaceData = myBioData.replace('sahil', 'Sahil');
// console.log(replaceData);
// console.log(myBioData);

//Points to remember
//1: The replace() method does not change the string
//it is called on. It returns a new string.
//2: By default, the replace() method replaces only
//the first match
//3:By default , the replace() method is case sensitive.
//Writting SAHIL (with upper-case) will not work;

//Extracting String Charcters

//There are 3 methods for extracting string charcters:

//1)charAt(position)
//2)charCodeAt(position)
//3)Property access [ ]

//The charAt() method🙋‍♂️🙋‍♂️
//The charAt()method returns the charcter at a
//specified index (position) in a string.

// let str = "HELLO WORLD";
// console.log(str.charAt(9));

//The charCodeAt() Method🙋‍♂️🙋‍♂️
//It returns the unicode of the charcter at aspecified index in a string:
//The method returns a UTF-16 code.
//(an integer between 0 and 655355).

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

//The Unicode Standard provides a unique number  for every character
//,no matter the platform, device, application ,or language .UTF-18 is a
//popular Unicode encoding which has 88-bit code units.


// .......😎Chalange Time...😎....
//Return the Unicode of the last character in a string
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(str.length - 1));

//Property Access
//ECMAScript 5 (2009) allows property access [ ] on strings.

// var str = "HELLO WORLD";
// console.log(str[3]);

//Other useful methods🙋‍♂️🙋‍♂️

// let myName = "Sahil Gandhi";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

//The concat() Methods🙋‍♂️🙋‍♂️
//concat() joins two or more strings

// let fName = "Sahil";
// let lName = "Gandhi";

// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

//String.trim()🙋‍♂️🙋‍♂️
//The trim() method removes whitespace from both sides
//of a string

// var str = "                Hello World!            ";
// console.log(str.trim());

//****Converting a String to an Array */
//A string can be converted to an array with the
//split() method

// var txt = "a,b,c,d,e,f"; //string
// var txt1 = "a ,b,c,d, e,f";
// var txt2 = "g,h|,i";
// console.log(txt.split(",")); //split by commas
// console.log(txt1.split(" ")); // split by spaces
// console.log(txt2.split("|")); //spit by pipe

//***********Date and Time in JavaScript********

//JavaScript Date objects represent a single moment in time in a
//platform-independent format.Date objects contain a number
// that represents milliseconds since 1 January 1970 UTC.

//Creating Date Objects
// There are 4 ways to Create a new data object:

// 1) new Date()
// 2) new Date(year, month, day, hours, minutes, seconds, milliseonds);
// //it takes 7 arguments
// 3) new Date(milliseconds)
//     //we cannot avoid month section
// 4) new Date(date string)

//1)new Date()🙋‍♂️🙋‍♂️
//Date objects are created with the new Date() constructor.

// let currDate = new Date();
// // console.log(currDate);

// console.log(new Date()); //it shows time and date i.e. store in server.
// console.log(new Date().toLocaleString()); // It shows only actual time and date which we belong to.
// console.log(new Date().toString()); // It show whole information of date and time and zone.

//Date.now()🙋‍♂️🙋‍♂️
//Returns the numeric value corresponding to the current time-the number
//of milliseconds elapsed since January 1,1970 00:00:00 UTC.

// console.log(Date.now());

//2)new Date(year,month,...)🙋‍♂️🙋‍♂️
//7 numbers specify year,month,day,hour,min.,sec.,milisec.(in that order)
//Note: JS counts months from 0 to 11.
//Jan. = 0, Dec.=11...

// var d = new Date(2022, 4, 20, 12, 28, 50, 0);
// var d1 = new Date(2022, 4, 20); // it gives random time..
// var d2 = new Date(2022, 4); // it is complesary to pass year,month...
// console.log(d.toLocaleString());
// console.log(d1.toLocaleString());
// console.log(d2.toLocaleString());

//3) new Date(dateString)🙋‍♂️🙋‍♂️
//new Date(dataString) creates a new date object from a date string

// var d = new Date('january 13, 2022 11:13:00');
// console.log(d);
// console.log(d.toLocaleString());

//4)new Date(milliseconds)🙋‍♂️🙋‍♂️
//new Date(milliseconds) creates a new date object as zero time plus milliseconds.

// var d = new Date(0);
// var d1 = new Date(1000000000000) //It adds milliseconds
// var d2 = new Date(8640000 * 2);
// console.log(d.toLocaleString());
// console.log(d1.toLocaleString());
// console.log(d2.toLocaleString());

//***********Dates Method*********//

// const curDate = new Date();
// //how to get the individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); //0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

//how to set the individual date
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.setFullYear(2022, 10, 5));
// console.log(curDate.setMonth(3)); //0-11 jan to dec
// console.log(curDate.setDate(8));
//Here in this it is showing in millisecond but in browser it will show proper .

//******Time Methods************//

// const curTime = new Date();
// // how to get the individual Time

// console.log(curTime.getTime());
// //The getTime() method returns the number of milliseconds since
// //January 1,1970
// console.log(curTime.getHours());
// // The getHours() method returns the hours of a date as a
// //number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

//how to set the individual Time

//let curTime = new Date();
// console.log(curTime.setTime());
//console.log(curTime.setHours(5));
//console.log(curTime.setMinutes(5));
//console.log(curTime.setSeconds(5));
//console.log(curTime.setMilliseconds(5));

//This time will be in millisecond but in browsers it will show proper time.


//Practice Time
//new Date().toLocaleTimeString();
//---
//new Date().toLocaleDateString();
//---
//new Date().toLocaleString();
//---

//Challenge Time Not yet decided
// (function() {
//     setInterval(() => {
//         console.log(new Date().toLocaleTimeString());
//     }, 1000)
// })();

/******Math Object in JavaScript *****************/

//The JS Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);🙋‍♂️🙋‍♂️

//Math.round()🙋‍♂️🙋‍♂️
//returns the value pof x rounded to its nearest integer.

// let num = 10.2565;
// let num1 = 10.562;
// console.log(Math.round(num));
// console.log(Math.round(num1));

//Math.pow()🙋‍♂️🙋‍♂️
//Math.pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(2, 4));
// console.log(2 ** 4);

//Math.sqrt()🙋‍♂️🙋‍♂️
//MAth.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(34));

//Math.abs()🙋‍♂️🙋‍♂️
//Math.abs(x) returns the absolute (positive) value of x.

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.99));
// console.log(Math.abs(4 - 6));

//Math.ceil()🙋‍♂️🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer.
//it always round of to greater value.

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

//Math.floor()/Math.ceil()🙋‍♂️🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer.
//it always round of to greater value.

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));
// Math.floor(x) returns the value of x rounded down to its nearest integer.
//it always round of to that value.

// console.log(Math.floor(4.51));
// console.log(Math.round(4.51));
// console.log(Math.floor(99.1));
// console.log(Math.round(99.1));

//Math.min()🙋‍♂️🙋‍♂️
//Math.min() can be used to find the lowest value in listr of argument.
// console.log((Math.min(0, 150, 30, 20, -8, -900)));

// Math.max()🙋‍♂️🙋‍♂️
// Math.max() can be used to find the greatest value in listr of argument.
// console.log((Math.max(0, 150, 30, 20, -8, -900)));

//Math.random()🙋‍♂️🙋‍♂️
//Math.random() returns a random number between 0 (inclusive) , and 1(exclusive).
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10)); //0 to 9

//Math.trunc() 🙋‍♂️🙋‍♂️
//The trunc() methods returns the integer part of a number

// console.log(Math.trunc(-4.6));
// console.log(Math.trunc(99.1));

//Remember............
//if the argument is apositive number , Math.trunc() is equivalent to
//Math.floor()
//Othervise Math.trunc() is equivalent to Math.ciel().


//**************************Document Object model in javaScript ************/  Refer index2.html😁😁

//1) Windows is the main container or we can say the
//global object and any operations related to entire
//browser window can be a part of window object.

//For ex the history or to find the url etc.

//1)whereas the DOM is the child of window Object

//2)All the members like objects ,methods or properties.
//If they are the part of window object then we do not refer
//the window object.Since window is the global object
//so you do not have to write down window.

// *************************DOM Vs BOM**********************//

//The DOM is the Document Object Model,which deals with the document,
//the HTML elements themselves e.g. document and all traversal you
//would do in it,events,etc.

//For Ex:
//change the background color to red
//document.body.style.background ="red";

//The BOM is the Browser Object Model,which deals with browser components
//aside from the document,like history,location,navigator and screen
//(as well as some others that vary by browser) ,OR
//In simple meaning all the window operators which comes under BOM are performed
//Using BOM

//let's set more practical on History object

//Functions alert/confirm/prompt ae also a part of BOM:
//they are directtly not related to the document.
//but represents pure browser methods of communicating with the user.

//eg:1)This is to go back to that page which is last in history.
// function goBack() {
//     window.history.back();
// }

// eg: 2)alert message to redirect to the link.
// alert(location.href); //show current URL
// if (confirm("Want to Visit youtube ?")) {
//     location.href = "https://www.youtube.com/";
// }

//*********************Navigate through the DOM **************/    chileNodes👶

//1: document.documentElement
//returns the Element that is the root element of the document.
//2:document.head
//3:document.body
//document.body.childNodes(include tab,enter and whiteSpace)
//list of direct children only
//5:document.children(without text nodes,only regular Elements)
//6:document.childNodes.length

//Practice time
//how to check wether an element has child nodes or not?
//we will use hasChildNodes()


//Practice Time
//How to dind the child in DOM tree
//========> FIRST METHOD TO CHAGE FONT COLOR <========
//1)document.body.firstChild
//==> output:-text
//2)document.body.firstElementChild
//==> output:-redirect to main div
//3)document.body.firstElementChild.firstElementChild
//==> output:-redirect to childOne
//const fChild=document.body.firstElementChild.firstElementChild
//==>undifined
//fChild
//==>output:-redirect to childOne
//fChild.style.color="orange"
//==>color changed to orange...

//========> SECOND METHOD TO CHAGE FONT COLOR <========
//1)const cThree=document.querySelector('.child-three');
//==>undifined
//cThree
//==>output:-redirect to childThree
//cThree.style.color="green"
//==>color changed to green...

//********************************************************************** parentNods👨‍👩‍👧‍👦
//1)document.body.parentNode/parentElement    OR   document.head.parentElement
//==>whole Html(Html is parent of body)

//********************************************************************** siblingNods👫
//1)document.body.nextSibling
//==>null
//2)document.body.previousSibling
//==>#text
//3)document.body.previousElementSibling
//==>go to head   (body is yunger brother of head)
//4)document.head.nextElementSibling
//==>go to body   (head is older brother of body)

// How to search the elements the and the references
//we will see in index3.html

//*****************👈Events in JavaScript ......................

//HTML events are "things" that happen to HTML elements.
//When JavaScript is used in HTML pages,JavaScript can "react" on these events.

//HTML Events
//An HTML event can be something the browser does, or something a user does.

//Here are some examples of HTML events:

//An HTML web page has finished loading
//An HTML inputfield was changed
//AN HTML button was clicked
//OFTen,when events happen,you may want to do something.

//JavaScript lets you execute code when events are detected.

//HTML aloows event handler attributes, with Javascript code,
//to be added to HTML Elements.

//Section 1:- 4 ways of writing Events in Javascript
//1:using alert();
//2:By Calling a function (we already seen and most common way of writing)
//3:using inline events(HTML onclick="" property and element.onclick)
//4:using Event Listeners(addEventListener and IE's attachment)

//Check the events.html files.

//section 2:-What is Event Object?
//Event object is the parent object of the event object.
//for Example
//MouseEvent,focusEvent,KeyboardEvent etc.

//section 3:-MouseEvent in JavaScript
//The MouseEvent Object
//Events that occur when the mouse interacts with the HTML
//document belongs to the MouseEvent Object.

//section 4:-KeyboardEvent in JavaScript
//Events that occur when user presses a key on the keyboard,
//belongs to the keyboardEvent object.
//for mor visit w3school..

//section 5:- InputEvents in JavaScript
//The onchange event occurs when the value of an element has been changed.

//For radio buttons and checkboxes, the onchange event occurs when the
//checked state has been changed.

//*****************👈Timing Events in JavaScript ......................

//The window object allows execution of code at specified time intervals.
//These time intervals are called timing events.
//The two key methods to use with JS are:-

//setTimeout(function, milliseconds)
//Events a function , after waiting a specified number of milliseconds.

//setInterval(function,milliseconds)
//Same as setTimeout(),but repeats the execution of the function continuously.

//1) setTimeout()
//2)clearTimeout()
//3)setInterval()
//4) clearInterval()

//*****************👈OPPS in JavaScript ......................

//1️⃣ What is Object Literal?
//Object literal is simply a key:value pair data structure.

//Storing variables and function together in one container.
//we can refer this as an Objects.

//object = school bag

//How to create an Object?

//1st Way
// let bioData = {
//     myNames: "Sahil Gandhi",
//     myAge: 20,
//     getData: function() {
//         console.log(`My name is ${bioData.myNames} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();

//2nd way no need to write functions as well after es6.
// let bioData = {
//     myNames: "Sahil Gandhi",
//     myAge: 20,
//     getData() {
//         console.log(`My name is ${bioData.myNames} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();

//👈What if we want object as a value inside an Object
// let bioData = {
//     myNames: {
//         realName: "Sahil Gandhi",
//         nikName: "Sayu",
//     },
//     myAge: 20,
//     getData() {
//         console.log(`My name is ${bioData.myNames} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myNames.nikName);

//2️⃣ What is this Object?
//The defination of 'this' object is that it contain the current context.
//the this object can have diff. values depending on where it is placed.

//For Example 1
//console.log(this);
//console.log(this.alert('Awesome'));
//it refers to the current context and that is window global object.

//***ex 2
// function myName() {
//     console.log(this);
// }
// myName();

//***ex 3
// let myName = 'Sahil';

// function myName() {
//     console.log(this.myName);
// }
// myName();

//***ex 4
// const obj = {
//     myAge: 26,
//     myName() {
//         console.log(this.myAge);
//     }
// }
// obj.myName();

//***ex 5
// this object will not work with arrow function bcz arrow function introduce in ec6,and it works with windows
//so this is disadvantage of fat arrow functiom..

// const obj = {
//     myAge: 26,
//     myName: () => {
//         console.log(this);
//     }
// }
// obj.myName();

//***ex 5
// let bioData = {
//     myNames: {
//         realName: "Sahil Gandhi",
//         nikName: "Sayu",
//     },
//     //things to remember is that the myName is the key and the object is act like a value
//     myAge: 20,
//     getData() {
//         console.log(`My name is ${this.myNames.nikName} and my age is ${this.myAge}`);
//     }
// }
// bioData.getData();


//*****************👈Distructuring  in ES6 ......................
//The destruction assignment syntex is a javaScript expression
//that makes it possible to unpack values from arrays,
//or properties from objects, into distruct variables.

//=> Array Destructuring
//By sadi Method..
// const myBioData = ['Sahil', 'Gandhi', 20];
// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
// console.log(myAge);

//By Distructuring ES6..
// const myBioData = ['Sahil', 'Gandhi', 20];
// // let [myFName, myLName, myAge] = myBioData;
// // console.log(myLName);

// //we can add values too
// let [myFName, myLName, myAge, myDegree = 'IT'] = myBioData;
// console.log(myDegree);

//=>Object Destructuring
// /By sadi method..
// const myBioData = {
//         myFname: 'Sahil',
//         mySname: 'Sakshi',
//         myAge: 20
//     }
// let myAge = myBioData.myAge;
// let myFname = myBioData.myFname;
// console.log(myAge);

//By Distructuring ES6..
// let { myFname, mySname, myAge, myDegree = 'IT' } = myBioData;
// console.log(mySname);

//*****************👈Object Properties ......................
//⏩We can now use Dynamic Properties

// let myName = "Sakshi"
// const myBio = {
//     [myName]: "Hello, how are you?",
//     //22: "is my age"
//     [20 + 2]: "is my age"
// }
// console.log(myBio);

//⏩ no need to write key and values, if both are same:
// let myName1 = "Sakshi Gandhi";
// let myAge1 = 22

// const myBio = {
//     myName: myName1,        //if key and value name Different...
//     myAge: myAge1
// }
//...............OR.........
// const myBio = { myName1, myAge1 }      //if  key and value name same...
// console.log(myBio);

//*****************👈Spread Operator ......................

// const colors = ['blue', 'white', 'black', 'yellow', 'green'];
// const mycolors = ['blue', 'white', 'black', 'yellow', 'red', 'orange'];
// //2nd time and one more color on top and tell we need to write it again
// //on myColor array too
// const myFavColors = [...colors, 'red', 'orange']
// console.log(myFavColors);

//************************************ECMAScript 2016 /ES7************//
//1) Array.prototype.includes

// const colors = ['red', 'green', 'orange', 'blue', 'White'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

//2) Exponentiation Operator

// console.log(2 ** 3); //2^3
// console.log(2 ** 5); //2^5

//************************************ECMAScript 2017 /ES8************//

//Sting padding
//Object.values()
//Object.entries()

//⏩Sting padding
// let myName = "sahil".padStart(7);
// console.log(myName);

// let myAge = "20".padEnd(10);
// console.log(myAge);

//⏩Object.values() & Object.entries()

// const person = { name: 'Sakshi', age: '22' };

// console.log(Object.values(person));
// console.log(Object.entries(person));