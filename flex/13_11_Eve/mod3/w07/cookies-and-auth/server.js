const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { generateRandomString, findUserByUsername } = require("./helper");

const app = express();
const port = 8765;

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const users = {
  abc: {
    id: "abc",
    username: "alice",
    password: "123",
  },
  def: {
    id: "def",
    username: "bob",
    password: "456",
  },
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).send("Please provide an username and a password");
  }

  let foundUser = findUserByUsername(username, users);
  

  if (!foundUser) {
    res.status(401).send("Invalid username/password");
  }

  if (foundUser.password !== password) {
    return res.status(401).send("Invalid username/password");
  }

  res.cookie("userId", foundUser.id);

  res.redirect("/protected");
});

app.get("/protected", (req, res) => {
  const userId = req.cookies.userId;
  console.log(req.cookies);

  if (!userId) {
    return res.status(401).send("You must be logged in to see this page.");
  }

  const user = users[userId];

  const templateVars = {
    user,
  };

  res.render("protected", templateVars);
});

app.post("/logout", (req, res) => {
  res.clearCookie("userId");

  res.redirect("/login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).send("Please provide a username and a password.");
  }

  let foundUser = findUserByUsername(username, users);
  

  if (foundUser) {
    return res.status(400).send("A User with that username already exists.");
  }

  const id = generateRandomString();

  const newUser = {
    id,
    username,
    password,
  };

  users[id] = newUser;

  res.redirect("/login");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
