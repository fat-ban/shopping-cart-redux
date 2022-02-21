const express =require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require('shortid');


const app= express();

app.use(express.json())
app.use(bodyParser.json())

//connection to db
mongoose.connect("mongodb://localhost/react-shopping-cart-db",{
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true,
    
})
//create model product
const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id:{type: String, default: shortid.generate},
         title:String,
         description:String,
         image:String,
         price:Number,
         availableSizes:[String],
    })
)


//routes
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        console.log(error.message)
        
    }
    
  });
  
  app.post("/api/products", async (req, res) => {
      try{
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
      } catch(error){
       console.log(error.message)
      }
    
  });
  
  app.delete("/api/products/:id", async (req, res) => {
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct);
    } catch(err){
     console.log(err)
    }
    
  });

//create server localhost
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server at http://localhost:${port}`))