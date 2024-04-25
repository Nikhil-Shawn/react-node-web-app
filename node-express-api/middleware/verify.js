const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.JWT_KEY, (err, result)=>{
            if(err){
                return res.status(404).json({error: 'token is invalid'})
            }
            req.user = result
            next();
        })
    }else{
        return res.status(404).json({error: 'token is not present'})
    }
}

const verifyAuth = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            return next();
        }
        res.send('invalid id')
    })
}

const verifyAuthAdmin = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            return next();
        }
        res.send('Your not admin')
    })
}




module.exports = {verifyToken, verifyAuth, verifyAuthAdmin}