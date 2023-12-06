const higherOrderFn = (cb) => {
  const data = {
    username: 'bob'
  };

  setTimeout(() => {
    data.username = 'Eva';
    cb(data);
  }, 1000)

  console.log("Outside CB: ",data)
}

const callback = (data) => {
  console.log("Inside CB: ", data)
}

higherOrderFn((data) => callback(data))



// const asyncFn = () => {
//   const data = {
//     username: 'bob'
//   };

//   setTimeout(() => {
//     data.username = 'Eva';

//   }, 1000)

//   console.log(data)
// }

// asyncFn()