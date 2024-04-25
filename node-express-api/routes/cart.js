const express = require('express')
const router = express.Router()
const {getAllCart, getSingleCart, updateCart, deleteCart, newCartCreation}= require('../controllers/cart')
const {verifyAuth, verifyAuthAdmin} = require('../middleware/verify')

router.post('/', newCartCreation)
router.get('/', verifyAuthAdmin, getAllCart)
router.get('/:userId', verifyAuth, getSingleCart)
router.route('/:id').patch(verifyAuth, updateCart).delete(verifyAuth, deleteCart)

module.exports = router