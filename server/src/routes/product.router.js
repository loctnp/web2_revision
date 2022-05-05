const express = require('express')
const router = express.Router()
const controller = require('../controllers/product.controller')

router.get('/',(req,res)=>{
    res.send('Hello World')
})
router.get('/products',controller.getProducts)
router.get('/products/:id',controller.getProduct)
router.post('/add-product',controller.add)
router.delete('/delete/:id',controller.delete)
router.patch('/update/:id',controller.update)

module.exports = router