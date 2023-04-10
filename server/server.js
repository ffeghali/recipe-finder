require('dotenv').config()

const express = require('express')
const recipeRoutes = require('./routes/recipeRoutes')

// Express app
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes - (reacts to requests)
app.use('/api/recipes', recipeRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})