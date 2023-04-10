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

// UPDATE a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params
  
    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No recipe found.'})
    }
    // Get recipe by id and update
    const recipe = await Recipe.findOneAndUpdate({_id: id}, {
      ...req.body
    })
    if (!recipe) {
      return res.status(400).json({error: 'No recipe found.'})
    }
    res.status(200).json(recipe)
  }
  
// DELETE a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params
  
    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No recipe found.'})
    }
    // Get recipe by id and delete
    const recipe = await Recipe.findOneAndDelete({_id: id})
    if(!recipe) {
      return res.status(400).json({error: 'No recipe found.'})
    }
    res.status(200).json(recipe)
  }

module.exports = {
    createRecipe, 
    getAllRecipes, 
    getRecipeById,
    updateRecipe, 
    deleteRecipe
}