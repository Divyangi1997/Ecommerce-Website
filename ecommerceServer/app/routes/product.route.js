const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/product', paginatedData(Product), async(req,res) => {
    try{
        const products = await Product.find()
        res.json(res.paginatedResult)
        res.json(products);   
    }catch(err) {
        res.send('Error ' + err)
    }

    //res.json(res.paginatedResult)
})

router.get('/product/:id', async(req,res) => {
    try{
        const products = await Product.findById(req.params.id)
        res.json(products)
    }catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/product', async(req,res) => {
    const product = new Product({
        productId:req.body.productId,
        productName:req.body.productName,
        categoryId:req.body.categoryId
    })

    try{
        const products = product.save()
        res.json(products)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/product/:id', async(req,res) => {
    try{
        const products = await Product.findById(req.params.id)
        products.productId = req.body.productId 
        products.productName = req.body.productName
        products.categoryId = req.body.categoryId
        const productUpdate = await products.save()
        res.json(productUpdate)
    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/product/:id', async(req,res) => {
    try{
        const products = await Product.findById(req.params.id) 
        const productDelete = await products.remove()
        res.json(productDelete)
    }catch(err){
        res.send('Error' + err)
    }
})

function paginatedData(model){
    return async(req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}
        if(startIndex > 0){
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }
        if(endIndex < await model.countDocuments().exec()){
            results.next = {
                page: page + 1,
                limit: limit
            };    
        }
        try{
            results.result = await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedResult = results
            //res.json(results);
            next();
        } catch(e) {
            res.status(500).json({message:e.message})
        }        
    }
}

module.exports = router
