const asyncWrapper = require('../middleware/async')
const Order = require('../models/Order')

const getSingleOrder = asyncWrapper(async(req, res)=>{
    const singleOrder = await Order.find({userId: req.params.userId})
    res.status(200).json(singleOrder)
})

const updateOrder = asyncWrapper(async(req, res)=>{
    const updateSingleOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true, runValidators: true})
    if(!updateSingleOrder){
        res.status(404).json(`can't find order with id ${req.params.id}`)
    }
    res.status(200).json(updateSingleOrder)
})

const getAllOrders = asyncWrapper(async(req,res)=>{
    const qNew = req.query.new
    let allOrders;
    if(qNew){
        allOrders = await Order.find().sort({createdAt: -1}).limit(5)
    }
    allOrders = await Order.find()
    res.status(200).json(allOrders)
})

const createOrder = asyncWrapper(async(req,res)=>{
    const newOrder = Order(req.body)
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
})

// Get monthly income

const orderStats = asyncWrapper(async(req,res)=>{
    const newDate = new Date()
    const lastYear = new Date(newDate.setFullYear(newDate.getFullYear() - 1))
    const orderStat = await Order.aggregate([
        {
            $match: { createdAt: {$gte: lastYear}  }
        },
        {
            $project:{
                month: {$month: "$createdAt"},
                amount: "$amount"
            }
        },
        {
            $group:{
                _id: "$month",
                amountsum: {$sum: "$amount"},
                count: {$sum: 1}
            }
        }
    ])
    res.status(200).json(orderStat)
})

const deleteOrder = asyncWrapper(async(req, res)=>{
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json(`order has been deleted sucessfully`)
})


module.exports = {orderStats, getAllOrders, getSingleOrder, updateOrder, createOrder, deleteOrder}