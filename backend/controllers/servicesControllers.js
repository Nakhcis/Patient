const getServices = (req,res)=> {
    res.status(200).json({message: 'Get services'})
}

const setServices = (req,res)=> {
    res.status(200).json({message: 'Set services'})
}

const updateServices = (req,res)=> {
    res.status(200).json({message: 'Update services'})
}

const deleteServices =  (req,res)=> {
    res.status(200).json({message: 'delete services'})
}

module.exports= {
    getServices, setServices, updateServices, deleteServices
}