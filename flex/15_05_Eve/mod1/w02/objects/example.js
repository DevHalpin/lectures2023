// let myString = "hello world";
// const secondString = myString.replace("hello", "goodbye"); // doesn't change myString
// myString = "goodbye";
// // console.log(myString); // 'hello world'
// // console.log(secondString);

let myName = "David";
// ["David"] = myName

// myName = "Joe";
// ["David"], ["Joe"] = myName
// console.log(myName);
// // const MyAge = 37;
// // const isInstructor = true;

// [obj1] = myObj
// obj1.newKey = 0
// [obj1 {newKey: 0}] = myObj
// console.log(myObj)
// let person1 = {
//   name: { firstName: "David", lastName: "Halpin" },
//   age: 37,
//   isInstructor: true,
// };

// // person1 = [];

// // person1.age = 18;

// console.log(person1["name"]["firstName"]);

// for (const key in person1.name) {
//   console.log(person1.name[key]);
// }

// let name1 = 'Murray';
// const changeName = function (name1) {
//   name1 = 'Jane';
//   console.log(name1); // Jane
// };

// changeName(name1);
// console.log(name1); // Murray

// let myObj = {
//   firstName: 'Lorem',
//   lastName: 'Ipsum'
// };

// const changeKey = function (obj) {
//   obj.firstName = 'Jane'; // this does change the value of the firstName key
// };

// changeKey(myObj);
// console.log(myObj.firstName); // Jane

// // myObj = null;

// const replaceObj = function (myObj) {
//   myObj = {}; // this won't work
//   console.log(myObj);
// };

// replaceObj(myObj);
// console.log(myObj); // { firstName: 'Jane', lastName: 'Ipsum' }

// const myObj = {
//   firstName: 'Lorem',
//   lastName: "Ipsum",
//   sayHello: function () {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//   }
// };

// myObj2.sayHello();
// myObj2.myObj.sayHello();

// console.log(myObj2);

const string = "Hello world";

// for (const value in myObj2) {
//   console.log(myObj2.value);
// }
const myObj2 = {
  firstName: "Bob",
  lastName: "Bob",
  array: ["a", "b", "c", "d", "e", "f"],
  myObj: {
    firstName: "Lorem",
    lastName: "Ipsum",
    sayHello: function () {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
  },
  sayHello: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

for (const key in myObj2) {
  if (Array.isArray(myObj2[key])) {
    for (const element of myObj2[key]) {
      console.log(element);
    }
  } else {
    console.log(key);
    console.log(myObj2[key]);
  }
}

for (const element of myObj2.array) {
  // console.log(element);
}

for (const key in myObj2.myObj) {
  // console.log(key);
  // console.log(myObj2.myObj[key]);
}
