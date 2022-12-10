const connection=require('../db/connection');
const Signup=async (req,res) => {
    const {username,password,phonenumber}=req.body
    await connection.query("INSERT INTO `users` (username,phonenumber,password) VALUES (?,?,?)",
        [username, phonenumber, password],
        function (err, result) {
          if (err) {
            res.json({error:err});
            throw err;
          }
          console.log(result);
          res.status(200).json({
            username: username,
            phonenumber: phonenumber,
            password: password,
          });
        }
      );
    }

const Login= async (req, res) => {
    res.json({
        login: "testing"
    })
}
module.exports = {Login,Signup}
