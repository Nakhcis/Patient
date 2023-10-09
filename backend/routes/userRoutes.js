const express= require('express')
const router = express.Router()
const {registerUser,loginUser, deleteUser, updateUser}= require('../controllers/userControllers')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router