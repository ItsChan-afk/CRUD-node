const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 4000

app.use(express.json())

app.use('/api/userinformations' , require('./routes/informationRoutes'))

app.use((req , res , next) => {
    res.status(404)
    throw new Error('Not Found');
})

app.use(errorHandler)

app.listen(PORT , () => {
    console.log(`PORT : ${PORT} has started`)
})