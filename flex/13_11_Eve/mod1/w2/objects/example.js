// const myString = 'hello world';
// const secondString = myString.replace('hello', 'goodbye'); // doesn't change myString
// console.log(myString); // 'hello world'
// console.log(secondString); // 'goodbye world'

// let number = 5

// for (let i = 0; i < 10; i++) {
//   number += i
//   console.log(number)
// }

// console.log(number)

// let key = "first"

// const object = {
//   name: {
//     first: "Mike",
//     last: "Smith",
//   },
//   age: 42,
//   isHuman: true,
//   "David": "hello",
// };

// console.log(object.name[key])

// const array = [1, 2, 3, 4, 5];

// console.log(array[0])
// console.log(object['age'])

// const arrayObject = {
//   "0": 1,
//   "1": 2,
//   "2": 3,
//   "3": 4,
//   "4": 5,
// }

// const name = 'Murray';
// const changeName = function (nameParameter) {
//   nameParameter = 'Jane';
//   console.log(nameParameter); // Jane
// };

// console.log(nameParameter)
// changeName(name);
// console.log(name); // Murray

// let myObj = {
//   firstName: 'Lorem',
//   lastName: 'Ipsum'
// };

// myObj = {};

// // const changeKey = function (obj) {
// //   obj.firstName = 'Jane'; // this does change the value of the firstName key
// // }
// // console.log(myObj.firstName); // Lorem
// // changeKey(myObj);
// // console.log(myObj.firstName); // Jane

// const replaceObj = function (myObj) {
//   myObj = {age: 42}; // this won't work
// }

// replaceObj(myObj);
// console.log(myObj); // { firstName: 'Jane', lastName: 'Ipsum' }

// const myFunction = 'sayHello'

// const myObj = {
//   firstName: 'Lorem',
//   sayHello: function () {
//     console.log('hello');
//   }
// };


// const helloWorld = function (number) {
//   console.log('The number is ' + number);
// }

// const myFunction = (callback, number) => {
//   console.log("Inside function")
//   callback(number)
// }

// myFunction(helloWorld, 3)

// myObj[myFunction]()
// myObj.sayHello(); // hello
// console.log(myObj['firstName']); // { firstName: 'Lorem', sayHello: [Function: sayHello] }

// const myObj = {
//   firstName: 'David',
//   lastName: 'Halpin',
//   age: 37,
//   sayFullName: function () {
//     // console.log(`My full name is ${this.firstName} ${this.lastName}.  I am ${this.age} years old.`);
//     return `My full name is ${this.firstName} ${this.lastName}.  I am ${this.age} years old.`;
//   }
// };

// const fullName = myObj.sayFullName(); // My full name is Lorem Ipsum
// console.log(fullName.charAt(0)); // My full name is Lorem Ipsum

// const array = [1, 2, 3, 4, 5];

// for (const value of array) {
//   console.log( value)
// }

const obj = { a: 1, b: 2, c: 3 };

const string = 'hello world'.split('');

console.log(string[0])

const filteredString = string.filter((character) => {
  return character === 'h';
})

console.log("Filtered string", filteredString)
const valueArray = Object.entries(obj)

console.log(valueArray)

for (const key of valueArray) {
  // we can use the key to access the value
  const value = obj[key];
  console.log(key)
  // console.log(value)
}