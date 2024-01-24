const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const catData = require('./public/cats.json')

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000)
}

app.get('/cat-items', (req,res) => {
  res.status(200).json(catData)
})

app.post('/cat-items', (req,res) => {
  const id = generateRandomId()
  console.log(req.body)
  const {name, age, gender, color, breed} = req.body
  catData.push({
    id, name, breed, gender, age, color
  })
  res.status(200).json(catData)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

