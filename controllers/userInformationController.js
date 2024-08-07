const asyncHandler = require('express-async-handler')

const getInformations = asyncHandler( async (req , res) => {
    res.status(200).json({message : 'Get User Informations'})
})

const createInformation = asyncHandler (async (req , res) => {
    console.log(req.body)

    //validating information
    const {name , email , password} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error('All the fields are necessary !')
    }

    res.status(201).json({message : 'Get User Informations'})
})

const getInformation =  asyncHandler(async (req , res) => {
    const id = req.params
    res.status(200).json({message : `Get Information about User Id : ${id}`})
})

const updateInformation = asyncHandler(async (req , res) => {
    const id = req.params
    res.status(200).json({message : `Update Information about User Id : ${id}`})
})

const deleteInformation =  asyncHandler(async (req , res) => {
    const id = req.params
    res.status(200).json({message : `Delete Information about User Id : ${id}`})
})

module.exports = {getInformations , createInformation , getInformation , updateInformation , deleteInformation}
