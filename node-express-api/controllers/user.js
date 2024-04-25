const crypto = require('crypto-js')
const dotenv = require('dotenv')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncWrapper = require('../middleware/async')

dotenv.config()


const getAllUsers = asyncWrapper(async (req, res)=>{
    const query = req.query.new;
    const users = query ? await User.find().sort({_id: -1}).limit(4) : await User.find();
    const usersSorted = users.map((user)=>({
        id: user._id,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        isAdmin: user.isAdmin }))
    res.status(200).json({...usersSorted})
})

const userStats = asyncWrapper(async (req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()- 1));
        const stats = await User.aggregate([
            {
                $match: { createdAt: { $gte: lastYear } }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            }
        ]);
    res.send(stats)
})

const createUser = asyncWrapper( async (req, res)=>{
    const {username, email} = req.body;
    const password = crypto.AES.encrypt(req.body.password, process.env.PASS_ENC).toString();
    const newUser = User({username, password, email});
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
})

const login = asyncWrapper(async (req, res)=>{
        const {username} = req.body
        const gotUser = await User.findOne({username})
        if(!gotUser){
            return res.status(404).json({msg: "wrong username"})
        } 
        const hashedPass = crypto.AES.decrypt(gotUser.password, process.env.PASS_ENC)
        const decryptedPassword = hashedPass.toString(crypto.enc.Utf8);
        if(decryptedPassword !== req.body.password){
            return res.status(400).json({msg: "wrong password"})
        }
        const accessToken = jwt.sign({id: gotUser._id, isAdmin: gotUser.isAdmin}, process.env.JWT_KEY, {expiresIn: '3d'})
        if(!accessToken){
            return res.send('no token')
        }
        const {password, ...others} = gotUser._doc
        res.json({...others, accessToken})
})

const updatingUser = asyncWrapper( async (req, res)=>{
    if(req.body.password){
        req.body.password = crypto.AES.encrypt(req.body.password, process.env.PASS_ENC).toString();
    }
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            $set:req.body
        }, {new:true})
        res.status(200).json({updatedUser})
})

const deleting = asyncWrapper(async (req,res)=>{
        await User.findByIdAndDelete(req.params.id)
        res.send('user deleted succesfully')
})

const getSingleUser = asyncWrapper(async (req, res) =>{
    const singleUser = await User.findById(req.params.id)
    if(!singleUser){
       return res.status(404).json(`no user with id: ${req.params.id}`)
    }
    const {password, ...others} = singleUser._doc
    res.status(200).json({...others})
})

module.exports = { getAllUsers, createUser, login, updatingUser, deleting, getSingleUser, userStats}