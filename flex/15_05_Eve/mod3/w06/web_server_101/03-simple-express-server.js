const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('This is a GET request to "/"');
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