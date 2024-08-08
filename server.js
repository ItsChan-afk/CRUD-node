const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const dbConnect = require('./dbConnection/dbConnection')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 4000

app.use(express.json())

//database connetion
dbConnect()

app.use('/api/userinformations' , require('./routes/informationRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT , () => {
    console.log(`PORT : ${PORT} has started`)
})