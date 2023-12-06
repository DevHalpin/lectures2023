// const interval = setInterval(() => {
//   console.log("Hello")
// }, 2000)

// console.log(interval)

// setTimeout(() => {
//   clearInterval(interval)
// }, 10000)

let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log('hello there!');

  if (iterations === 10) {
    clearInterval(interval);
  }
}, 1000);