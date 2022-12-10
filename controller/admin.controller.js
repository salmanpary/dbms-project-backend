const connection=require('../db/connection');
const AddProduct = async (req, res) => {
    const {itemname,price,description,image}=req.body
    await connection.query("INSERT INTO  `menu` (itemname,price,description,image) VALUES(?,?,?,?)",
        [itemname,price,description,image],
        function (err, result) {
          if (err) {
            res.json({error:err});
            throw err;
          }
          console.log(result);
          res.status(200).json({
            itemname: itemname,
            price: price,
            description: description,
            image: image
          });
        })
  };
  module.exports = {
    AddProduct
  };
