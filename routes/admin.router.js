const router=require('express').Router();
const {AddProduct, DisplayOrder,PaymentNotdone,PaymentDone}=require('../controller/admin.controller');
router.post("/addproducts",AddProduct)
router.get("/displayorder",DisplayOrder)
router.get("/nopayment",PaymentNotdone)
router.get("/paymentdone",PaymentDone)
module.exports=router;