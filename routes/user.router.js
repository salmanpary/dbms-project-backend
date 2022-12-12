const router = require("express").Router();
const { Login,Signup,Order,Paymentstat,DisplayMenu } = require("../controller/user.controller");
const { route } = require("./admin.router");
router.post("/signup",Signup);
router.post("/login", Login);
router.post("/order",Order);
router.put("/paymentstat",Paymentstat)
router.get("/menu",DisplayMenu)
module.exports = router;
