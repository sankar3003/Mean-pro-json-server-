const { any } = require('bluebird');
const { Number } = require('core-js');
var mongoose= require('mongoose');

const schema= mongoose.Schema;

let User = new schema({
    name:{
        type:String
    },
    password:{
        type:String
    },
    confirmPassword:{
    type:String   
    },
    email:{
        type:String
    }
});
module.exports= mongoose.model("User", User) 