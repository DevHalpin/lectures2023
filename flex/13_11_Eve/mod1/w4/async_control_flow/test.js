const higherOrderFunc = function (callback) {
  const data = { initials: "YV" };

  console.log("BEFORE TIMEOUT CALL");

  setTimeout(() => {
    data.initials = "YAV";
    console.log(data);
    callback(data);
  }, 1000);

  console.log("AFTER TIMEOUT CALL");

  return data;
};

console.log("BEFORE MAIN CALL");

const result = higherOrderFunc((data) => {
  console.log("INSIDE CALLBACK");
  console.log(data);
});

console.log("result", result);

// BEFORE MAIN CALL
// result Inside Callback YV
// before timeout call
// yav
// after timeout call

// 17
// 4
// 8  initials: "YV"
// 20
// 21 initials: "YV"
// 24 