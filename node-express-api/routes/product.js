const {createProduct, updateSingleProduct, getAllProduct, deleteProduct, getSingleProduct} = require('../controllers/product')
const {verifyAuthAdmin} = require('../middleware/verify')
const express = require('express')
const router = express.Router()


router.route('/:id' ).get(getSingleProduct).patch(verifyAuthAdmin, updateSingleProduct).delete(verifyAuthAdmin, deleteProduct)
router.route('/' ).post(verifyAuthAdmin, createProduct).get(getAllProduct)

module.exports = router