const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productId:{
        type:Number,
        required:'Product Id can\'t be empty',
        unique:true
    },
    productName: {
        type: String,
        required:'Product Name can\'t be empty'
    },
    categoryId:{
        type:Number,
        required:'Category Id can\'t be empty'
    }

})

module.exports = mongoose.model('Product', productSchema)