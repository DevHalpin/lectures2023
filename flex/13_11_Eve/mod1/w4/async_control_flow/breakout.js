// will we see "woop woop" before or after "Hey from andre"?

// const woop = () => {
//   console.log('Woop woop!');
// };

// const andre = () => {
//   console.log('Hey from andre');
// };

// setTimeout(andre, 3000);
// setTimeout(woop, 2000);

// // in what order will the console.log's fire?

// console.log('before the setTimeout');

// const delay = 1000;

// setTimeout(() => {
//   console.log('inside the setTimeout');
// }, delay);

// console.log('after the setTimeout');

// // in the code below, will x update?
// // what will each output show?

// let x = 1;
// console.log(`x is ${x}`);

// setTimeout(() => {
//   x++;
//   console.log(`inside the call x is ${x}`);
// }, 2000);

// console.log(`after call x is ${x}`);

// // in what order will the console.log's fire?

// console.log('before the setTimeout');

// const delay = 0;

// setTimeout(() => {
//   console.log('inside the setTimeout');
// }, delay);

// console.log('after the setTimeout');

// // what will the code output?

let i;

for (i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}