const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dragonData = require("./data/data.json");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/dragonData", (req,res) => {
  res.json(dragonData);
});

app.post("/dragonData", (req,res) => {
  console.log(req.body);
  const {name, age, kind, breath, favouriteFood, wingSpan} = req.body;

  const dragon = {
    name, age, kind, breath, favouriteFood, wingSpan
  };

  dragonData.push(dragon);
  res.status(200).send(dragon);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

