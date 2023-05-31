var ProductModel = require("../model/Products");

//--------------Adding a user--------------------
exports.addProduct = async function (req, res) {
  console.log(req.body);
  var Product = req.body;
  var ProductModelObject = ProductModel(Product);
  var response = await ProductModelObject.save();
  console.log(response);
  res.send(response);
};
//--------------getting all users--------------------
exports.getAllProducts = async function (req, res) {
  var response = await ProductModel.find();
  console.log(response);
  res.send(response);
};
//--------------update a user--------------------
exports.updateProduct = async function (req, res) {
  var _id = req.params.id;
  var body = req.body;
  var response = await ProductModel.findOneAndUpdate({ _id: _id }, body);
  console.log(response);
  res.send(response);
};

//--------------deleting user--------------------
exports.deleteProduct = async function (req, res) {
  var _id = req.params.id;

  var response = await ProductModel.findOneAndDelete({ _id: _id });
  console.log(response);
  res.send(response);
};
