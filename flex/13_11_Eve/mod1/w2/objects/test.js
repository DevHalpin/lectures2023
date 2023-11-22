const myObj2 = {
  firstName: "Bobby",
  lastName: "Bob",
  array: ["a", "b", "c", "d", "e", "f"],
  myObj: {
    firstName: "Lorem",
    lastName: "Ipsum",
    sayHello() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
  },
  sayHello: function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};



// const valueArray = Object.values(myObj2, myObj2.myObj)

// console.log(valueArray)

for (const key in myObj2) {
  if (typeof myObj2[key] === "object" && !Array.isArray(myObj2[key])) {
    for (const nestedKey in myObj2[key]) {
      console.log(myObj2[key][nestedKey]);
    }
  } else {
    console.log(myObj2[key]);
  }
}

// for (let i = 0; i < myObj2.array.length; i++) {
//   console.log(myObj2.array[i]);
// }

// const letterCount = {}

// for (let value of myObj2.firstName) {
//   if (letterCount[value]) {
//     console.log("Before", value, letterCount[value])
//     letterCount[value] += 1;
//     console.log("After", value, letterCount[value])
//   } else {
//     console.log("Before else", value, letterCount[value])
//     letterCount[value] = 1;
//     console.log("After else", value, letterCount[value])
//   }
// }

// console.log(letterCount);

// myObj2.sayHello();

// myObj2.myObj.sayHello();

// for (let key in myObj2) {
//   console.log(myObj2[key]);
// }

// for (let key in myObj2.myObj) {
//   console.log(myObj2.myObj[key]);
// }
