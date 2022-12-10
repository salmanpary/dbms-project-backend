const router = require("express").Router();
const { Login } = require("../controller/user.controller");
router.get("/login", Login);
module.exports = router;
