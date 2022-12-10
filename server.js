const express = require("express");
const cors=require('cors');
const mysql = require("mysql");
const app = express();
const AdminRouter=require('./routes/admin.router');
const UserRouter=require('./routes/user.router');
const port = 5000;
app.use(express.json());
app.use(cors());
app.use('/admin',AdminRouter);
app.use('/user',UserRouter);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/liststudents", (req, res) => {
//   res.json({
//     name: "salman",
//     age: 20,
//   });
// });
// app.post("/data", function (req, res) {
//   console.log(req.body);
//   var itemname = req.body.itemname;
//   connection.query(
//     "INSERT INTO `order` (itemname) VALUES (?)",
//     itemname.toString(),
//     function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//       console.log(result);
//     }
//   );
//   res.send(itemname);
// });
// app.post("/signup", (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;
//   var mobilenumber = req.body.mobilenumber;
//   connection.query(
//     "INSERT INTO `users` (username,mobilenumber,password) VALUES (?,?,?)",
//     [username, mobilenumber, password],
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       res.status(200).json({
//         username: username,
//         mobilenumber: mobilenumber,
//         password: password,
//       });
//     }
//   );
// });
// app.get("/menu", (req, res) => {
//   connection.query("SELECT * FROM `menu`", function (err, result) {
//     if (err) throw err;
//     // console.log(result)
//     res.json(result);
//   });
// });
// app.post("/addmenu", (req, res) => {
//   var itemname = req.body.itemname;
//   var price = req.body.price;
//   var imageurl = req.body.imageurl;
//   connection.query(
//     "INSERT INTO `menu` (productname,price,imageurl) VALUES (?,?,?)",
//     [itemname, price, imageurl],
//     function (err, result) {
//       if (err) throw err;
//       res.json({
//         itemname: itemname,
//         price: price,
//         imageurl: imageurl,
//       });
//     }
//   );
// });
// app.post("/athuljospeh1",(req,res)=>{
//   var itemname = req.body.itemname;
//   var price = req.body.price;
//   var imageurl = req.body.imageurl;
//   connection.query(
//     "UPDATE `menu` SET price = ?, imageurl = ? WHERE productname = ?",
//     [price, imageurl, itemname],
//     function (err, result) {
//       if (err) throw err;
//       res.json({
//         itemname: itemname,
//         price: price,
//         imageurl: imageurl,
//       });
//     }
//   );
// })
// app.delete("/athuljoseph", (req, res) => {
//   var itemname = req.body.itemname;
//   connection.query(
//     "DELETE FROM `menu` WHERE productname = ?",
//     itemname.toString(),
//     function (err, result) {
//       if (err) throw err;
//       res.json({
//         itemname: itemname, 
//       });
//     }
//   );
// })
// app.get("/prices", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
