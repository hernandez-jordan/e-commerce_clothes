const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { 
    type: Number, 
    required: true, 
    trim: true, 
  },
  sku: { 
    type: Number, 
    required: true, 
    trim: true, 
  },
  title: { 
    type: String, 
    required: true, 
    trim: true,  
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  availableSizes: { 
    type: Array, 
    required: true, 
    trim: true },
  price: { 
    type: Number, 
    required: true },
  isFreeShipping: { 
    type: Boolean, 
    required: true }
},{
  versionKey: false // You should be aware of the outcome after set to false
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
