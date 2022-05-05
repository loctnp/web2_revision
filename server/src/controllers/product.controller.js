const pModel = require('../models/product.model')

class ProductController{
    getProducts(req,res,next){
        pModel.find({})
            .then(data => res.status(200).send(data))
            .catch(next)
    }
    getProduct(req,res,next){
        pModel.findById(req.params.id)
            .then(data=>res.status(200).send(data))
            .catch(next)
    }
    add(req,res,next){
        // var newProduct = new pModel(req.body)
        // newProduct.save()
        (new pModel(req.body)).save()
            .then(data=>res.status(200).json({message:'Item added'}))
            .catch(next)
    }
    delete(req,res,next){
        pModel.findByIdAndDelete(req.params.id)
            .then(data=>res.status(200).json({message:'Item deleted'}))
            .catch(next)
    }
    update(req,res,next){
        var product = req.body

        pModel.findByIdAndUpdate(req.params.id, product, (err, data)=>{
            if (err) return next(err)
            res.json({message:"Update successfully"})
        })
    }
}
module.exports = new ProductController()