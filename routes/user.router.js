const router = require("express").Router();
const { Login,Signup,Order,Paymentstat } = require("../controller/user.controller");
router.post("/signup",Signup);
router.post("/login", Login);
router.post("/order",Order);
router.put("/paymentstat",Paymentstat)
module.exports = router;
