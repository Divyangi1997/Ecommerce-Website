const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

    categoryId:{
        type:Number,
        required:true,
        unique:true
    },
    categoryName: {
        type: String,
        required:true
    }

})

module.exports = mongoose.model('Category', categorySchema)