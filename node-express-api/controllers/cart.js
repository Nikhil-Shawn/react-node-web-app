const asyncWrapper = require('../middleware/async')
const Cart = require('../models/Cart')

/*@Nikhil-Shawn
asyyncWrapper for try catch has been implemented in middleware,
redirect controller to route for handling request 
and add middleware for verification before the controller in routes */

// New cart creation
const newCartCreation = asyncWrapper(async (req, res)=>{
        const newCart = Cart(req.body)
        const saveCart = await newCart.save()
        res.status(200).json(`cart created ${saveCart}`)
})

//Updating cart

const updateCart = asyncWrapper(async (req, res)=>{
        const updateCartItem = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true, runValidators: true})  
        res.status(200).json(updateCartItem)
})

//User gets their own cart

const getSingleCart = asyncWrapper(async(req, res)=>{
    const singleCart = await Cart.findOne({userId: req.params.userId})
    if(!singleCart){
        return res.status(404).json('no products in cart')
    }
    res.status(200).json(singleCart)
})

//Get All Cart admin 

const getAllCart = asyncWrapper(async(req,res)=>{
    const qNew = req.query.new
    const allCart = await Cart.find()
    if(qNew){
        all = await find().sort({createdAt: -1}).limit(5)
    }
    res.status(200).json(allCart)
})

//Delete cart

const deleteCart = asyncWrapper(async(req, res)=>{
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json(`item removed sucessfully`)
})

module.exports = {newCartCreation, updateCart, getAllCart, getSingleCart, deleteCart}