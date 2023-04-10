const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

// GET all recipes (sorted by newest one at top)
const getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({createdAt: -1})
    res.status(200).json(recipes)
}

// GET a single recipe
const getRecipeById = async (req, res) => {
    const { id } = req.params
    // Check if id is valid for mongodb
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No recipe found.'})
    }
    // Get recipe by valid id
    const recipe = await Recipe.findById(id)
    if (!recipe) {
        return res.status(404).json({error: 'No recipe found.'})
    }
    res.status(200).json(recipe)
}
 
// POST a new recipe
const createRecipe = async (req, res) => {
    const {title, url} = req.body
  
    try {
        const recipe = await Recipe.create({title, url})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
  
// DELETE a recipe
// const deleteRecipe =


// UPDATE a recipe
// const updateRecipe =
  

module.exports = {
    createRecipe, 
    getAllRecipes, 
    getRecipeById
}