const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exerciseRoute = require('./routes/exercise')
require('dotenv/config')

mongoose.connect(process.env.MONGODB_CONNECT_STRING)
    .then(()=>console.log("Connected Successfully"))
    .catch(()=>console.log("Error"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

app.use('/exercises',exerciseRoute)

// Error Handling
app.use((req,res)=>res.status(404).json({msg:'Invalid Request'}))

module.exports = app