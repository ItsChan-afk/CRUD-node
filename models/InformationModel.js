const mongoose = require('mongoose')


const InformationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number is necessary"]
    }
},
    {
    timeStamps : true,
    }
)


const Information = mongoose.model('Information', InformationSchema);

module.exports = Information;