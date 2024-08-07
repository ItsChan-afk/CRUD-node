const getInformations = (req , res) => {
    res.status(200).json({message : 'Get User Informations'})
}

const createInformation = (req , res) => {
    res.status(201).json({message : 'Get User Informations'})
}

const getInformation = (req , res) => {
    const id = req.params
    res.status(200).json({message : `Get Information about User Id : ${id}`})
}

const updateInformation = (req , res) => {
    const id = req.params
    res.status(200).json({message : `Update Information about User Id : ${id}`})
}

const deleteInformation =  (req , res) => {
    const id = req.params
    res.status(200).json({message : `Delete Information about User Id : ${id}`})
}

module.exports = {getInformations , createInformation , getInformation , updateInformation , deleteInformation}
