const myArr: (number| string)[] = [];
const myStringArr: Array<string | number> = [];
const myUndefinedArr = [undefined, undefined, undefined];


const useStateReturn: [any, Function] = [1, () => {}];

myArr.push(1);
myStringArr.push("string", 1)

interface Value {
  name: string;
}

interface MyType {
  [name: string]: Value;
}

const myObject: MyType = {
  "David": {name: "David"},
  "Jake": {name: "Jake"}
};

const myObjectArr: Record<string, any>[] = [{name: "David", age: "25", email: 12}];

myObjectArr.push({name: "David"});

myObjectArr.push({name: "Jake", age: "35"});

// function identity<T>(arg: T): T {
//   return arg;
// }

// let result = identity<string>("Hello, TypeScript!");
// console.log(result); // Output: Hello, TypeScript!

// let result2 = identity<number>(123);
// console.log(result2); // Output: 123