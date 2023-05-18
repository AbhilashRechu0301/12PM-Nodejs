var UserModel = require('../model/Users');

exports.addUser = async function(req, res){
    console.log(req.body);
    var user = req.body;
    var UserModelObject = UserModel(user);
    var response = await UserModelObject.save();
    console.log(response);
    res.send(response);
    }

exports.getAllUsers = async function (req, res){
   
    var response = await UserModel.find();
    console.log(response);
    res.send(response);
}

exports.updateUser = async function(req, res){
    var _id = req.params.id;
    var body = req.body;
    var response = await UserModel.findOneAndUpdate({_id: _id}, body);
    console.log(response);
    res.send(response);
}
 
exports.deleteUser = async function(req, res){
    var _id = req.params.id;
    
    var response = await UserModel.findOneAndDelete({_id: _id});
    console.log(response);
    res.send(response);
}