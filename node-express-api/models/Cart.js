const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, unique: true},
        product: [
            {
                productId: {
                    type: String,
                    unique: true,
                    required: true
                }
            }
        ],
    },
    {timestamps: true}
)

module.exports = mongoose.model("Cart", CartSchema)