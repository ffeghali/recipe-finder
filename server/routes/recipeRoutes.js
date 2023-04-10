const express = require('express')
const { 
  createRecipe, 
  getAllRecipes, 
  getRecipeById, 
  updateRecipe,
  deleteRecipe 
} = require('../controllers/recipeController')

const router = express.Router()

// GET all recipes
router.get('/', getAllRecipes)

// GET a single recipe
router.get('/:id', getRecipeById)

// POST a new recipe
router.post('/', createRecipe)

// DELETE a recipe
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a recipe'})
})

// UPDATE a recipe
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a recipe'})
})

module.exports = router