var UserModel = require("../model/Users");

exports.addUser = async function (req, res) {
  console.log(req.body);
  var user = req.body;
  var UserModelObject = UserModel(user);
  var response = await UserModelObject.save();
  console.log(response);
  res.send(response);
};

exports.login = async function(req, res){
  console.log(req.body);
  var emailId = req.body.emailId;
  var userPassword = req.body.password;
  var user = await UserModel.find({"emailId": emailId});
  //console.log("user", user);
  if (user.length !=0){
    var password = user[0].password;
    if(userPassword == password){
      res.send({
        message: "Login Success", StatusCode: 200
      })
    }
    else{
      res.send({
        message: "Login Failure", StatusCode: 400
      })
    }
  }
};

exports.getAllUsers = async function (req, res) {
  var response = await UserModel.find();
  console.log(response);
  res.send(response);
};

exports.updateUser = async function (req, res) {
  var _id = req.params.id;
  var body = req.body;
  var response = await UserModel.findOneAndUpdate({ _id: _id }, body);
  console.log(response);
  res.send(response);
};

exports.deleteUser = async function (req, res) {
  var _id = req.params.id;
  var response = await UserModel.findOneAndDelete({ _id: _id });
  console.log(response);
  res.send(response);
};
