const express = require('express')
const router = express.Router()
const {getServices, setServices, updateServices, deleteServices} = require('../controllers/servicesControllers')

router.get('/', getServices)
router.post('/', setServices)
router.put('/', updateServices)
router.delete('/', deleteServices)

module.exports = router