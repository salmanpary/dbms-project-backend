const connection = require("../db/connection");
const AddProduct = async (req, res) => {
  const { itemname, price, description, image } = req.body;
  await connection.query(
    "INSERT INTO  `menu` (itemname,price,description,image) VALUES(?,?,?,?)",
    [itemname, price, description, image],
    function (err, result) {
      if (err) {
        res.json({ error: err });
        throw err;
      }
      console.log(result);
      res.status(200).json({
        itemname: itemname,
        price: price,
        description: description,
        image: image,
      });
    }
  );
};

const DisplayOrder = async (req, res) => {
  await connection.query("SELECT * FROM `order` ", function (err, result) {
    if (err) {
      res.json(err);
      throw err;
    }
    res.json(result);
  });
};
const PaymentNotdone = async (req, res) => {
  await connection.query(
    "select * from `order` where paymentstatus=0 ",
    function (err, result) {
      if (err) {
        res.json(err);
        throw err;
      }
      res.json(result);
    }
  );
};
const PaymentDone = async (req, res) => {
  await connection.query(
    "select * from `order` where paymentstatus=1",
    function (err, result) {
      if (err) {
        res.json(err);
        throw err;
      }
      res.json(result);
    }
  );
};
module.exports = {
  AddProduct,
  DisplayOrder,
  PaymentNotdone,
  PaymentDone
};
