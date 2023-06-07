const higherOrderFn = (callback) => {

  const data = {
    initials: 'DH'
  };

  console.log('before timeout call');

  setTimeout(() => {
    data.initials = 'DHH';
    callback(data);
  }, 1000);

  return data;
};


console.log('before the function call');

const result = higherOrderFn((data) => {
  console.log('inside the callback function');
  console.log("Late data", data);
});

console.log("Early data", result);


console.log('after the function call');