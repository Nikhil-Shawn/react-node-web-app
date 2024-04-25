const asyncWrapper = require('../middleware/async');
const Product = require('../models/Product')
const dotenv = require('dotenv')

/*@Nikhil-Shawn
asyyncWrapper for try catch has been implemented in middleware,
redirect controller to route for handling request 
and add middleware for verification before the controller in routes */

dotenv.config();


// Create product in DB (Functionality only)

const createProduct = async (req, res)=>{
    try {
    const newPrduct = Product(req.body)
    const saveProduct = await newPrduct.save()
    res.status(200).json(saveProduct)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

// Update product in DB (Functionality only)

const updateSingleProduct = async (req,res)=>{
    try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {
        new: true,
        runValidators: true
    })
    if(!updateProduct){
        return res.status(404).json(`no product found`)
    }
    res.status(200).json(updateProduct)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

const deleteProduct = async(req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted successfully')
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSingleProduct = asyncWrapper(async (req, res)=>{
        const single = await Product.findById(req.params.id)
        if(!single){
            return res.send('wrong id')
        }
        res.status(200).json(single)
})

const getAllProduct = asyncWrapper( async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.categories;
    if(qNew){
         all = await Product.find().sort({createdAt: -1}).limit(3)
    }else if(qCategory){
         all = await Product.find({categories: qCategory})
         if(all.length === 0){
            return res.status(404).json(`no product with ${qCategory} category`)
         }
    }else 
     all = await Product.find()
    res.status(200).json(all)
})

module.exports = {createProduct, updateSingleProduct, deleteProduct, getSingleProduct, getAllProduct}