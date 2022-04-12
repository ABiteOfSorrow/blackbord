const mongoose = require('mongoose');

var articlesSchema = mongoose.Schema({
        title : String,
        description: String,
        price : Number,
        stock : Number,
        weight : Number,
        img: String
    })


    const articleModel = mongoose.model('articles', articlesSchema);


    module.exports = articleModel;