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

// UPDATE a recipe
router.patch('/:id', updateRecipe)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

module.exports = router