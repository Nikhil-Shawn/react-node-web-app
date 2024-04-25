const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./routes/user')
const product = require('./routes/product')
const notFound = require('./middleware/not-found')
const cart = require('./routes/cart')
const order = require('./routes/order')

dotenv.config();

app.use(express.json())
app.use('/api/v1/', user)
app.use('/api/v1/product', product)
app.use('/api/v1/cart', cart)
app.use('/api/v1/order', order)
app.use(notFound)


// const currentDate = new Date()
// const daysTillCurrentDate = []
// for(const oldDate = new Date(2024, 2, 1); oldDate <= currentDate; oldDate.setDate(oldDate.getDate() + 1)){
//     daysTillCurrentDate.push(new Date(oldDate))
// }
// console.log(daysTillCurrentDate)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('we in the db');
})
.catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is listening");
})