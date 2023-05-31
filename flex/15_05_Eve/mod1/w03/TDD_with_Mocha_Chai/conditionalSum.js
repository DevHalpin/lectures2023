const conditionalSum = (values, condition) => {
  let sum = 0;
  if (!Array.isArray(values)) {
    throw new Error('Values must be an array of numbers');
  }
  for (const num of values) {
    if (typeof num !== 'number') {
      throw new Error('Value in a array must be number');
    }
    const modulus = num % 2;

    if (modulus !== 0 && condition === "odd") {
      sum += num;
    }

    if (modulus === 0 && condition === "even") {
      sum += num;
    }
  }
  return sum;

};

module.exports = {conditionalSum};