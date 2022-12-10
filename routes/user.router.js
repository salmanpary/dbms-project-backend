const router = require("express").Router();
const { Login,Signup } = require("../controller/user.controller");
router.post("/signup",Signup);
router.get("/login", Login);
module.exports = router;
