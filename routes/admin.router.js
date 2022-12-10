const router=require('express').Router();
const {AddProduct}=require('../controller/admin.controller');
router.post("/addproducts",AddProduct)
module.exports=router;