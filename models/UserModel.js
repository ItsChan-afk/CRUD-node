const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , "Name is necessary"]
    },
    email : {
        type : String,
        required : [true , "Email is necessary"],
        unique : [true , "Email has already been taken"]
    },
    password : {
        type : String,
        required : [true , "Password is necessary"]
    }
},
    {
        timeStamps : true
    }
)

module.exports = mongoose.model('User' , UserSchema)