const express = require('express')
const router = express.Router()
const {getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder, orderStats} = require('../controllers/order')
const {verifyAuth, verifyAuthAdmin} = require('../middleware/verify')

router.get('/stats', verifyAuthAdmin, orderStats)
router.route('/').get(verifyAuthAdmin, getAllOrders).post( verifyAuth, createOrder)
router.route('/:id').patch(verifyAuthAdmin, updateOrder).delete(verifyAuthAdmin, deleteOrder).get(verifyAuth, getSingleOrder)

module.exports = router