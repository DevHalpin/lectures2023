/*
Write a program that takes in an unlimited number of command line arguments 
and prints out the sum of them. If any argument is not a whole number, skip it. 
Do not support negative numbers.
*/

const commandLineArgs = process.argv;

const copyOfCommandLineArgs = process.argv.slice(2);

let total = 0;

for (const element of copyOfCommandLineArgs) {
  const converted = Number(element);
  if (converted > 0 && Number.isInteger(converted)) {
    total += converted;
  }
}

console.log(total);

// node command-line.js 5 10 15 # total: 30
// node command-line.js 4.5 2.5 19 # total: 19
// node command-line.js -5 5 10 # total: 15

// console.log("Original ", commandLineArgs)

// console.log("Copy ",copyOfCommandLineArgs)

// const sampleArray = ['10', '1', '4'];

// for (let i = 0; i < sampleArray.length; i++) {
//   console.log('current element: ', sampleArray[i]);
// }

// console.log()

// for (const element of sampleArray) {
//   console.log('current element: ', element);
// }

// console.log()

// for (const key in sampleArray) {
//   console.log('current element: ', sampleArray[key]);
// }
// let total = 0;

// for (const element of sampleArray) {
//   total += Number(element);
// }

// console.log('total: ', total);
