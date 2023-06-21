const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use((req,res,next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req,res) => {
  const templateVars = {
    message: "Hello there",
    username: "Bob",
    age: 42,
    error: null
  };

  res.render('index', templateVars);
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