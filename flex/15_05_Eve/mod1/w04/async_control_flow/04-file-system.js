const fs = require('fs');

// const data = fs.readFileSync('./sample.html', {encoding: 'utf8'});

// console.log(data);

const cb = (a, b) => {
  if (a) {
    console.log(a);
  } else {
    console.log(b);
    fs.writeFile('./copy.html', b, {encoding: 'utf8'}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File copied");
      }
    });
  }
};

fs.readFile('./sample.html', cb);

console.log("I am here");