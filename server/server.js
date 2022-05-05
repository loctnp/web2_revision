const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const db = require('./src/config/database.config')
const router = require('./src/routes/product.router')
const cors = require('cors')
const bodyParser = require('body-parser')

db.connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser)
app.use(cors({credentials:true,origin:true}))
app.use(morgan('tiny'))

app.use("/",router)


app.listen(port,()=>console.log(`App is being listened at http://localhost:${port}/`))
module.exports = app