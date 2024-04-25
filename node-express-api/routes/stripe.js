const router = require('express').Router();

router.post((req,res)=>{
    Stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "EUR"
    },(stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(500).json(stripeRes)
        }
    })
})


module.exports= router;