const nums = [2500,5000, 500, 768, 817];

const myFn = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(`I waited ${delay} milliseconds`);
    }, delay);
  }
};

myFn(nums);