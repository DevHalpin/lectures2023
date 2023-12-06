const nums = [2500, 5000, 500, 768, 817, 2345, 612, 499, 1];

const sortFunction = (delays, cb, isAsc = true) => {
  const sorted = [];
  const maxDelay = Math.max(...delays);

  for (const delay of delays) {
    setTimeout(() => {
      console.log("Currently pushing value: ", delay)
      sorted.push(delay);
    }, isAsc ? delay: maxDelay - delay)
  }

  setTimeout(() => cb(sorted), maxDelay + 1)
}

sortFunction(nums, (sorted) => console.log(sorted))
sortFunction(nums, (sorted) => console.log(sorted), false)