const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 4000


app.use('/api/userinformations' , require('./routes/informationRoutes'))

app.listen(PORT , () => {
    console.log(`PORT : ${PORT} has started`)
})