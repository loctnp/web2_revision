const express = require('express')
const app = express()
const port = 3001
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const pModel = require('./src/models/product.model')

app.use(morgan('common'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/example_db')
    .then(console.log('Connected to database'))
    .catch(err => console.log('Connect to database failed'))

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/products',(req,res,next)=>{
    pModel.find({})
        .then(data=>res.status(200).json(data))
        .catch(next)
})
app.listen(port, ()=>{
    console.log(`App is being listened at https://localhost:${port}/`)
})