const asyncHandler = require('express-async-handler');
const Users = require('../models/UserModel');
const bcrypt = require('bcrypt')

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

    //crypting the password
    const hashPassword = await bcrypt.hash(password ,10)
    console.log("Password is " , hashPassword)

    const user = await Users.create({
        username,
        email,
        hashPassword
    });

    console.log('User Created')

    //to show back the data to the user
    if(user){
        res.status(201).json({_id: user.id , email : user.email})
    }
    else{
        res.status(400);
        throw new Error("User Data is not valid")
    }
    res.status(201).json(user)
})

const currentUser = asyncHandler(async (req , res) => {
    res.status(200).json({message : `Current User Information `})
}) 

module.exports =  {loginUser , currentUser , registerUser}