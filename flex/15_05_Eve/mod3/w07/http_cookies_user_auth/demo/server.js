const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const languages = require("./languages");
const { getUserByEmail } = require("./helper");
const { v4: uuid } = require("uuid");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const users = {
  hfgas: {
    id: 'hfgas',
    email: "a@a.com",
    password: '1234'
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// const userRoutes = require('./routes/users');

// http://localhost:8080/users/1

// app.use('/users', userRoutes);

// app.get("/home/user/:id", (req, res) => {
// });

// app.get("/home/:id", (req, res) => {
//   //code goes here
// });


app.get("/home", (req, res) => {
  const userLanguage = req.cookies["language"] || 'fr';
  const templateVars = {
    heading: languages.homeHeadings[userLanguage],
    body: languages.homeBodies[userLanguage],
  };
  res.render("home", templateVars);
});


app.get("/about", (req, res) => {
  const userLanguage = req.cookies["language"] || 'fr';
  const templateVars = {
    heading: languages.aboutHeadings[userLanguage],
    body: languages.aboutBodies[userLanguage],
  };
  res.render("about", templateVars);
});

app.get("/languages/:userLanguage", (req, res) => {
  res.cookie("language", req.params.userLanguage);
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  // console.log(email);
  // console.log(password);

  const foundUser = getUserByEmail(email, users);

  if (!foundUser) {
    return res.status(400).send("Invalid credentials");
  }

  if (foundUser.password !== password) {
    return res.status(400).send("Invalid credentials");
  }

  res.cookie('user_id', foundUser.id);
  res.redirect('/home');
  
});

app.post('/register', (req,res) => {
  const {email, password} = req.body;

  const foundUser = getUserByEmail(email, users);
  if (foundUser) {
    return res.status(400).send(`User with email ${email} already exists`);
  }

  const userId = uuid().split('-')[0];
  users[userId] = {
    id: userId,
    email,
    password
  };

  res.cookie('user_id', userId);
  res.redirect('/home');
});

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/login');
});

app.get('/protected', (req, res) => {
  if (req.cookies['user_id']) {
    const user = users[req.cookies['user_id']];
    // const templateVars = {user}
    return res.render('protected', {user});
  }
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
