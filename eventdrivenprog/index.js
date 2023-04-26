var events = require('events');


var eventEmitter = new events.EventEmitter();

eventEmitter.on("connect", function(name){
    console.log(name + "  connected");
})

eventEmitter.on("message", function(message){
    console.log(message.name +" : "+  message.msg);
})

eventEmitter.on("disconnect", function(name){
    console.log(name +"  disconnected");
})

eventEmitter.emit("connect", "Abhi");
eventEmitter.emit("message", {name: "Abhi", msg: "how are you?"});
eventEmitter.emit("connect", "uday");
eventEmitter.emit("message", {name: "uday", msg: "I am good"});
eventEmitter.emit("message", {name: "uday", msg: "what about you??"});
eventEmitter.emit("disconnect", "Abhi");
eventEmitter.emit("disconnect", "krish");

console.log("-------------------------------------------------------");

eventEmitter.on("order_placed", function(details){
    console.log(details.name, details.price,  details.quantity, details.restaurant);
    console.log("-------------------------------------------------------");
})

eventEmitter.on("order_confirmed", function(){
    console.log("order received by Restaurant");
    console.log("-------------------------------------------------------");
})
eventEmitter.on("Delivery_assigned", function(Delivery_partner){
    console.log(Delivery_partner.name +" is assigned as a delivery partner");
    console.log("-------------------------------------------------------");
})

eventEmitter.on("order_delivered", function(Customer_Feedback){
    console.log(Customer_Feedback);
    console.log("-------------------------------------------------------");
})
//eventEmitter.on("disconnect", function(name){
   // console.log(name +"  disconnected");
//})
eventEmitter.emit("order_placed", {name: "Mutton Biryani", price: "400 per biryani" , quantity: 3, restaurant: "Mehfil"});
eventEmitter.emit("order_confirmed");
eventEmitter.emit("Delivery_assigned", {name: "Anji"});
eventEmitter.emit("order_delivered",  "Food was amazing and I am satisfied and giving him 5***** rating" );