require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes - react to requests
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)
})