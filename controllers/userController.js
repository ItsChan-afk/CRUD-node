const asyncHandler = require('express-async-handler');
const Users = require('../models/UserModel');

const loginUser = asyncHandler( async (req , res) => {
    res.status(201).json({message : `Login User Successfully`})
})

const registerUser = asyncHandler(async (req , res) => {
    //checking empty fields
    const {username , email , password } = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are necessary")
    }

    //checking if email is already taken
    const userAvailable = await Users.findOne({
        email
    })

    if(userAvailable){
        res.status(400)
        throw new Error("User already registered")
    }

    const register = await Users.create({
        username,
        email,
        password
    })


    res.status(201).json(register)
})

const currentUser = asyncHandler(async (req , res) => {
    res.status(200).json({message : `Current User Information `})
}) 

module.exports =  {loginUser , currentUser , registerUser}