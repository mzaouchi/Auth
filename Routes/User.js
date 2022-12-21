const express = require('express')

const { SignUp, SignIn } = require('../Controllers/User');
const isAuth = require('../Middlewares/isAuth');
const { validationSignUp, Validation, validationSignIn } = require('../Middlewares/Validator');
const userRouter = express.Router()

userRouter.post('/SignUp',validationSignUp,Validation,SignUp)

userRouter.post('/SignIn',validationSignIn,Validation,SignIn)

userRouter.get('/currentUser',isAuth,(req,res)=>{ res.send(req.user)})




module.exports = userRouter