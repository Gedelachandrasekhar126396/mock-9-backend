const express= require('express');

const products = express.Router();

const {productModel} = require("../modal/product.modal")

products.get("/",async(req,res)=>{

    try{
        let base = await productModel.find()
        res.status(200).send({"products":base})
    } catch(err){
        res.status(400).send(err.message)
    }
})

products.post("/",async(req,res)=>{
    let body = req.body;
    try{
        let newProduct =  new productModel(body);
        await newProduct.save();
        res.status(200).send({"msg":"product added successfully"})
    }catch(err){
      res.status(400).send({"msg":err.message})
    }
})

products.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{
       await productModel.findByIdAndDelete({_id:id})
        
        res.status(200).send({"msg":"product deleted successfully"})
    }catch(err){
      res.status(400).send({"msg":err.message})
    }
})

products.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    let body = req.body
    try{
       await productModel.findByIdAndUpdate({_id:id},body)
        
        res.status(200).send({"msg":"product updated successfully"})
    }catch(err){
      res.status(400).send({"msg":err.message})
    }
})






module.exports = {products}