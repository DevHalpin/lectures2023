let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log("Hello there General Kenobi");

  if (iterations > 10) {
    clearInterval(interval);
  }
}, 1000);

// setTimeout(() => {
//   for (let i = 0; i < 1000000000; i++) {
//     console.log(i);
//   }
// }, 1000);