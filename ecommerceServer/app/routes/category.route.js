const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/category', async(req,res) => {
    try{
        const categorys = await Category.find()
        res.json(categorys)
    }catch(err) {
        res.send('Error ' + err)
    }
})

router.get('/category/:id', async(req,res) => {
    try{
        const categorys = await Category.findById(req.params.id)
        res.json(categorys)
    }catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/category', async(req,res) => {
    const category = new Category({
        categoryId:req.body.categoryId,
        categoryName:req.body.categoryName
    })

    try{
        const categorys = category.save()
        res.json(categorys)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/category/:id', async(req,res) => {
    try{
        const categorys = await Category.findById(req.params.id)
        categorys.categoryId = req.body.categoryId 
        categorys.categoryName = req.body.categoryName
        const categoryUpdate = await categorys.save()
        res.json(categoryUpdate)
    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/category/:id', async(req,res) => {
    try{
        const categorys = await Category.findById(req.params.id) 
        const categoryDelete = await categorys.remove()
        res.json(categoryDelete)
    }catch(err){
        res.send('Error' + err)
    }
})


module.exports = router