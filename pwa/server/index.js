const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors') 
const port = 3000
const morgan = require('morgan')
const webPush = require('web-push')

app.use(morgan('short'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

//API: Push notifications

app.listen(port,()=>{
    console.log(`App is being listened at http://localhost:${port}/`)
})