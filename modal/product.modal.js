const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : String,
    description : String,
    gender: String,
   category : String,
   price :Number,
   image : String

},{
    versionKey:false
})

const productModel = mongoose.model("product",productSchema);

module.exports={productModel}