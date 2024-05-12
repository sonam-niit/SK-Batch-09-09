const express= require('express');
const { userProfile,getAllUsers,deleteUserById,getUserById} = require('../controllers/user.controller');
const authenticate = require('../middlewares/authenticate');

const router= express.Router();

router.get('/profile',authenticate,userProfile);
router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.delete('/:id',deleteUserById);


module.exports=router;