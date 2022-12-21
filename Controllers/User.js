const User = require("../Models/User")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.SignUp=async(req,res)=>{
    try {
        const {name,email,password} = req.body

        const found = await User.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{Msg : 'Email already exists'}]})
        }

        const newUser = new User(req.body)

        const salt = 10
        const hashedPassword = bcrypt.hashSync(password,salt );
        newUser.password = hashedPassword

        await newUser.save()

        const payload = { id: newUser._id }
        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({Msg : 'User Registred',newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{Msg : 'Could not register'}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if (!found) {
            return res.status(400).send({errors : [{Msg : 'Email not exists'}]})
        }

        const decoded =bcrypt.compareSync(password, found.password)

        if (!decoded) {
            return res.status(400).send({errors : [{Msg : 'Password Invalid'}]})
        }

        const payload = { id: found._id }
        var token = jwt.sign(payload, process.env.privateKey)

        res.status(200).send({Msg : "Logged In",found,token})

    } catch (error) {
        res.status(500).send({errors : [{Msg : 'Could not connect'}]})
    }
}