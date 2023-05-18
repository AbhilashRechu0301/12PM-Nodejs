var CategoryModel = require('../model/categories');

exports.addCategory = async function (req, res) {
    console.log(req.body);
     var Category = req.body;
    var CategoryModelObject = CategoryModel(Category);
    var response = await CategoryModelObject.save();
    console.log(response);
    res.send(response);
}

exports.getAllCategories = async function (req, res) {
    var response = await CategoryModel.find();
    res.send(response);
}
exports.updateCategory = async function (req, res) {
    var _id = req.params.id;
    var body = req.body;
    var response = await CategoryModel.findOneAndUpdate({ _id: _id }, body);
    res.send(response);
}

exports.deleteCategory = async function (req, res) {
    var _id = req.params.id;
    var response = await CategoryModel.findOneAndDelete({ _id: _id });
    res.send(response);
}