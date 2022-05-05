const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    pname:{type:String,require:true},
    price:{type:Number,require:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})
const ProductModel = mongoose.model('Product',ProductSchema)
module.exports = ProductModel