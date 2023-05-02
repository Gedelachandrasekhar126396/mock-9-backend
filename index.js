const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
require('dotenv').config()

const {connection} = require("./db");
const {products} = require("./routes/product.route")

app.get("/",(req,res)=>{
    res.status(200).send('Home Page.')
})

app.use("/products",products)

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected to MongoDb")
    } catch(err){
        console.log("Error While Connection")
    }
    console.log(`App is running at ${process.env.port} port`)
})