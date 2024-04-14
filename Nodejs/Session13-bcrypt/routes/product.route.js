const express= require('express');
const authenticate = require('../middlewares/authenticate');
const { addProduct } = require('../controllers/product.controller');

const router= express.Router();

router.post('/',authenticate,addProduct);


module.exports=router;