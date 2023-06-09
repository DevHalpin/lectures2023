const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req,res) => {
  res.sendFile(`${__dirname}/index.html`);
  // res.send(`${__dirname}`);
  // res.send('This is a GET request to "/"');
});

app.get('/users', (req,res) => {
  res.send('This is a GET request to "/users"');
});

app.post('/users', (req,res) => {
  res.send('This is a POST request to "/users"');
});

// app.post('/users/delete' (req,res) => {
//   // delete req.user
// })

app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`);
});