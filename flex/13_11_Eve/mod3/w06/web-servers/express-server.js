const express = require('express');
const app = express()
const PORT = 3000;

const morgan = require('morgan');

app.use((req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  
  next();
})
app.use(morgan('dev'))

app.set('view engine', 'ejs');

const userObj = {
  "abc":{
    name: "David Halpin",
    age: 37,
    profession: "Developer"
  },
  "def": {
    name: "Jake Robins",
    age: 37,
    profession: "Freelancer"
  }
}

app.get("/", (req,res) => {
  res.send("Thanks for visiting '/'")
})

app.get('/profile', (req, res) => {
  const templateVars = {
    message: "Hello world",
    username: "David Halpin",
    age: 37
  }
  res.render('profile', templateVars)
})

app.get("/home", (req,res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.get("/users", (req,res) => {
  res.send("This for visiting '/users'")
})

app.get("/users/:userId", (req, res) => {
  const id = req.params.userId
  const templateVars = {
    user: userObj[id]
  }
  res.render('userProfile', templateVars)
})

app.get("*", (req,res) => {
  res.status(404).send("Route does not exist")
})

app.listen(PORT, ()=> {
  console.log(`App is running on port ${PORT}`)
})