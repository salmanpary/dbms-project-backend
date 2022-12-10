const connection=require('../db/connection');
const Login= async (req, res) => {
    res.json({
        login: "testing"
    })
}
module.exports = {Login}