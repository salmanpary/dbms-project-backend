const connection = require("../db/connection");
const Signup = async (req, res) => {
  const { username, password, phonenumber } = req.body;
  await connection.query(
    "INSERT INTO `users` (username,phonenumber,password) VALUES (?,?,?)",
    [username, phonenumber, password],
    function (err, result) {
      if (err) {
        res.json({ error: err });
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
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  await connection.query(
    "SELECT * FROM `users` WHERE username=? AND password=? LIMIT 1",
    [username, password],
    function (err, result) {
      if (err || !result) {
        res.json({ login: false });
        throw err;
      } else {
        res.json(result[0]);
      }
      console.log(result);
    }
  );
};

const Order = async (req, res) => {
  const {
    phonenumber,
    productname1,
    quantity1,
    price1,
    productname2,
    quantity2,
    price2,
    productname3,
    quantity3,
    price3,
  } = req.body;

  let total = 0;
  console.log(price2);
  if (!price2 && !quantity2 && !price3 && !quantity3) {
    total = price1 * quantity1.toFixed(2);
  } else if (
    price1 &&
    quantity1 &&
    price2 &&
    quantity2 &&
    !price3 &&
    !quantity3
  ) {
    total = (price1 * quantity1 + price2 * quantity2).toFixed(2);
  } else {
    total = (
      price1 * quantity1 +
      price2 * quantity2 +
      price3 * quantity3
    ).toFixed(2);
  }

  await connection.query(
    "INSERT INTO `order` (phonenumber,productname1,quantity1,price1,productname2,quantity2,price2,productname3,quantity3,price3,total,paymentstatus) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      phonenumber,
      productname1,
      quantity1,
      price1,
      productname2,
      quantity2,
      price2,
      productname3,
      quantity3,
      price3,
      total,
      0,
    ],
    async function (err, result) {
      if (err) {
        throw err;
      } else {
        var id;
        await connection.query(
          "SELECT id FROM `order` WHERE phonenumber=? AND productname1=? AND quantity1=? AND price1=? AND productname2=? AND quantity2=? AND price2=? AND productname3=? AND quantity3=? AND price3=?",
          [
            phonenumber,
            productname1,
            quantity1,
            price1,
            productname2,
            quantity2,
            price2,
            productname3,
            quantity3,
            price3,
          ],
          function(err,result){
            if(err){
                throw err;
            }
            console.log(result);
            id=result[0].id
          }
        );
        res.status(200).json({
          id:id,  
          phonenumber: phonenumber,
          productname1: productname1,
          quantity1: quantity1,
          price1: price1,
          productname2: productname2,
          quantity2: quantity2,
          price2: price2,
          productname3: productname3,
          quantity3: quantity3,
          price3: price3,
          total: total,
          paymentstatus: 0,
        });
      }
    }
  );
};

const Paymentstat = async (req, res) => {
  const { id } = req.body;
  await connection.query(
    "UPDATE `order` SET paymentstatus=1 WHERE id =?",
    [id],
    function (err, result) {
      if (err) {
        throw err;
      } else {
        res.json({
          payment: "success",
        });
      }
    }
  );
};
module.exports = { Login, Signup, Order, Paymentstat };
