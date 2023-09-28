const express = require("express");
const morgan = require("morgan")
const app = express()
const port = 8080;//3000, 8000

//DATABASE
const db = require("./data/pokemon.json")

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

//View engine
app.set('view engine', 'ejs')

// User able to fetch all pokemon data - GET - BROWSE - /pokemon
// User able to fetch a specific pokemon's data - GET - READ - /pokemon/:id 
// User is able to edit a specific pokemon's data - POST - EDIT - /pokemon/:id
// User is able to add a specific pokemon - POST - ADD - /pokemon 
// USer is able to delete a specific pokemon - POST - DELETE - /pokemon/:id/delete

app.get("/", (req, res) => {
  const templateVars = {pokemonDb: db}
  res.render('index', templateVars)
})

app.get("/pokemon/:id", (req, res) => {
  const selectedPokemon = db.find((pokemon) => pokemon.id === Number(req.params.id))
  const templateVars = {pokemon: selectedPokemon}
  res.render('read', templateVars)
})

app.put("/pokemon/new", (req, res) => {
  const selectedPokemon = db.find((pokemon) => pokemon.id === Number(req.params.id))
  const templateVars = {pokemon: selectedPokemon}
  res.render('read', templateVars)
})

app.get("/add", (req,res) => {
  res.render('add')
})

app.get("/edit/:id", (req,res) => {
  const selectedPokemon = db.find((pokemon) => pokemon.id === Number(req.params.id))
  const templateVars = {pokemon: selectedPokemon}
  res.render('edit', templateVars)
})

app.get("/delete/:id", (req,res) => {
  const selectedPokemon = db.find((pokemon) => pokemon.id === Number(req.params.id))
  const templateVars = {pokemon: selectedPokemon}
  res.render('delete', templateVars)
})

app.post("/pokemon", (req, res) => {
  const {pokemonName, pokemonLevel, pokemonType} = req.body
  const newPokemonObject = {
    id: db.length,
    pokemonName: pokemonName,
    level: pokemonLevel,
    type: pokemonType
  }

  db.push(newPokemonObject)
  res.redirect("/")
})
app.post("/pokemon/:id/delete", (req, res) => {
  const index = db.findIndex((pokemon) => pokemon.id === Number(req.params.id))
  console.log(index)
  db.splice(req.params.id - 1, 1)
  res.redirect("/")
})

app.post("/pokemon/:id", (req, res) => {
  console.log(req.body)
  const {pokemonName, pokemonLevel, pokemonType} = req.body
  const existingPokemonObject = {
    id: req.params.id,
    pokemonName: pokemonName,
    level: pokemonLevel,
    type: pokemonType
  }

  db[req.params.id] = existingPokemonObject
  res.redirect("/")
})


app.listen(port, () => console.log(`Server is running on port ${port}!`))