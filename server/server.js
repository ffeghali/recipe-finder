require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
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

// Connect to db
PORT = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests after connect to db
        app.listen(PORT, () => {
            console.log("connected to db and listening")
        })
    })
    .catch((error) => {
        console.log(error)
    })