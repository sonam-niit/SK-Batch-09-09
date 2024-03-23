const express= require('express');

const router= express.Router(); //Created Router Object

router.get('/',(req,res)=>{
    res.send("All Products")
})
router.post('/',(req,res)=>{
    res.send("Create New Product")
})
router.get('/:id',(req,res)=>{
    res.send("Get Product By Id")
})

module.exports=router;