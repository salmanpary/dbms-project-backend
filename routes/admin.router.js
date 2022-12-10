const router=require('express').Router();
const {AddProduct}=require('../controller/admin.controller');
router.get("/addproducts",AddProduct)
module.exports=router;