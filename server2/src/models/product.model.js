const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    pname:String,
    price:Number
})
const ProductModel = mongoose.model('Product',ProductSchema)
module.exports = ProductModel