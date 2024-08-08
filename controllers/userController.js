const asyncHandler = require('express-async-handler');
const Users = require('../models/UserModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginUser = asyncHandler(async (req, res) => {

    // validating if email and password are empty
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    //check if email exists
    const user = await Users.findOne({ email })
    //comparing if password mashed with the hashpassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        )
        res.status(200).json({ accessToken })
    }
    else {
        res.status(401)
        throw new Error("email or password is not valid")
    }
})

const registerUser = asyncHandler(async (req, res) => {

    //checking empty fields
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields are necessary")
    }

    //checking if email is already taken
    const userAvailable = await Users.findOne({
        email
    })
    if (userAvailable) {
        res.status(400)
        throw new Error("User already registered")
    }

    //crypting the password
    const hashPassword = await bcrypt.hash(password, 10)
    console.log("Password is ", hashPassword)

    const user = await Users.create({
        username,
        email,
        password : hashPassword
    });

    console.log('User Created')

    //to show back the data to the user
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    }
    else {
        res.status(400);
        throw new Error("User Data is not valid")
    }
    res.status(201).json(user)
})

const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Current User Information ` })
})

module.exports = { loginUser, currentUser, registerUser }