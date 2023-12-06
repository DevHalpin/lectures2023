const fs = require('fs');

fs.readFile('./sample.html', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log("Async:" ,data);
  fs.writeFile("./copy.html", data,{encoding: 'utf8'}, (err) => {
    console.log(err)
  })
});
