const express = require('express');
const { registerUser, loginUser, getAllUsers, getUserByID, updateUserByID } = 
require('../controllers/user.controller');
const router = express.Router();

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/', getAllUsers)
router.get('/:id', getUserByID)
router.put('/:id',updateUserByID)

module.exports = router;