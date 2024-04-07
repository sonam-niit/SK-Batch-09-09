const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/product.controller');
const upload = require('../middlewares/fileupload');
const router = express.Router();

router.post('/',upload.single('image'),addProduct)
router.get('/',getAllProducts)

module.exports = router;