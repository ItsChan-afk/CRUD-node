const asyncHandler = require('express-async-handler');
const Information = require('../models/InformationModel')

const getInformations = asyncHandler(async (req, res) => {
    const information = await Information.find();
    res.status(200).json(information)
})

const createInformation = asyncHandler(async (req, res) => {
    console.log(req.body)

    //validating information
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All the fields are necessary !')
    }

    //adding req.body into the database
    const information = await Information.create({
        name,
        email,
        phone
    })
    res.status(201).json(information)
})

const getInformation = asyncHandler(async (req, res) => {

    console.log(req.params.id);

    //find id through the request
    const getInfo = await Information.findById(req.params.id);

    if (!getInfo) {
        res.status(404);
        throw new Error("Not Found");
    }

    res.status(200).json(getInfo);
})

const updateInformation = asyncHandler(async (req, res) => {
    const { id } = req.params
    const findId = await Information.findByIdAndUpdate(id)

    //find id in database 
    if (!findId) {
        res.status(404)
        throw new Error('No id matches')
    }

    const updateInfo = await Information.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );


    res.status(200).json({ message: `Update Information about User Id : ${id}` })
})

const deleteInformation = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const findId = await Information.findById(id)
    if (!findId) {
        res.status(404)
        throw new Error("Not Found")
    }
    await Information.findByIdAndDelete(id)
    res.status(200).json(findId)
})

module.exports = { getInformations, createInformation, getInformation, updateInformation, deleteInformation }
